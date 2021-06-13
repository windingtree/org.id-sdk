// eslint-disable-next-line @typescript-eslint/no-var-requires
const contract = require('@truffle/contract');
import type {
  WebProvider,
  SignedVC
} from '@windingtree/org.id-auth/dist/vc';
import {
  generateSalt,
  generateOrgIdHash
} from '@windingtree/org.id-utils/dist/common';
import { createVC } from '@windingtree/org.id-auth/dist/vc';
import {
  createVerificationMethodWithBlockchainAccountId
} from '@windingtree/org.json-utils/dist/verificationMethod';
import { OrgIdContract } from '@windingtree/org.id';
import { ganache, DevelopmentServer } from '@windingtree/org.id-test-ganache-server';
import { HttpFileServer, File } from '@windingtree/org.id-test-http-server';
import orgJsonTemplate from './data/legal-entity.json';
import Ganache from 'ganache-core';

export {
  generateSalt,
  generateOrgIdHash
}

export interface OrgIdSetup {
  accounts: string[];
  owner: string;
  address: string;
  server: DevelopmentServer;
  httpServer: HttpFileServer;
  registerOrgId(
    orgIdOwner: string
  ): Promise<OrgIdRegistrationResult>;
  buildOrgJson(
    did: string,
    web3Provider: Ganache.Provider,
    owner: string
  ): Promise<SignedVC>;
  close(): Promise<void>;
}

export interface ContractObject {
  createOrgId(salt: string, arg1: string, arg2: { from: string; }): Promise<any>;
}

export type OrgIdRegistrationResult = {
  orgIdHash: string;
  orgJson: SignedVC;
};

export const buildOrgJson = async (
  did: string,
  web3Provider: Ganache.Provider,
  owner: string
): Promise<SignedVC> => {
  const orgJson = JSON.parse(JSON.stringify(orgJsonTemplate));
  const issuer = `${did}#key-1`;
  orgJson.id = did;
  orgJson.created = new Date().toISOString();
  orgJson.updated = new Date().toISOString();
  orgJson.verificationMethod.push(
    await createVerificationMethodWithBlockchainAccountId(
      issuer,
      did,
      owner
    )
  );
  const vc: SignedVC = await createVC(
    issuer,
    'ORG.JSON'
  )
    .setCredentialSubject(orgJson)
    .signWithWeb3Provider(
      (web3Provider as unknown as WebProvider),
      owner
    );
  return vc;
};

export const registerOrgId = async (
  server: DevelopmentServer,
  contract: ContractObject,
  httpServer: HttpFileServer,
  owner: string
): Promise<OrgIdRegistrationResult> => {
  const salt = generateSalt();
  const orgIdHash = generateOrgIdHash(owner, salt);
  const orgJson = await buildOrgJson(
    `did:orgid:test:${orgIdHash}`,
    server.server.provider,
    owner
  );
  const fileToAdd: File = {
    type: 'json',
    path: `${orgIdHash}.json`,
    content: JSON.stringify(orgJson)
  };
  const file = httpServer.addFile(fileToAdd);
  const result = await contract.createOrgId(
    salt,
    `${httpServer.baseUri}/${file.path}`,
    {
      from: owner
    }
  );
  const event = result.logs.filter(e => e.event === 'OrgIdCreated')[0];
  return {
    orgIdHash: event.args.orgId,
    orgJson
  };
}

export const orgIdSetup = async (): Promise<OrgIdSetup> => {
  // Setup Ganache server
  const server = await ganache();
  const accounts = await server.getAccounts();
  const owner = accounts[0];

  // Deploy OrgId contract
  const OrgId = contract(OrgIdContract);
  OrgId.setProvider(server.server.provider);
  const orgIdContract = await OrgId.new({
    from: owner
  });
  await orgIdContract.initializeUpgrade_2_0_0({
    from: owner
  });

  // Set up Http server
  const httpServer = new HttpFileServer();
  httpServer.start();

  return {
    accounts,
    owner,
    address: orgIdContract.address,
    server,
    httpServer,
    registerOrgId: orgIdOwner => registerOrgId(
      server,
      orgIdContract,
      httpServer,
      orgIdOwner
    ),
    buildOrgJson,
    close: async () => {
      httpServer.close();
      await server.close();
    }
  };
};
