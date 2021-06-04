// eslint-disable-next-line @typescript-eslint/no-var-requires
const contract = require('@truffle/contract');
import type { ORGJSON } from '@windingtree/org.json-schema';
import type { KeyPair } from '@windingtree/org.id-auth/dist/keys';
import {
  generateSalt,
  generateOrgIdHash
} from '@windingtree/org.id-utils/dist/common';
import { generateKeyPair } from '@windingtree/org.id-auth/dist/keys';
import { createVerificationMethod } from '@windingtree/org.json-utils/dist/verificationMethod';
import { OrgIdContract } from '@windingtree/org.id';
import { ganache, DevelopmentServer } from './ganache';
import { HttpFileServer, File } from './httpServer';
import orgJsonTemplate from './data/legal-entity.json';

export {
  generateSalt,
  generateOrgIdHash
}

export interface OrgIdSetup {
  accounts: string[];
  salts: string[];
  keyPairs: KeyPair[];
  owner: string;
  address: string;
  server: DevelopmentServer;
  httpServer: HttpFileServer;
  registerOrgId(orgIdOwner: string): Promise<string>;
  buildOrgJson(
    did: string,
    keyPair: KeyPair
  ): Promise<ORGJSON>;
  close(): Promise<void>;
}

export interface ContractObject {
  createOrgId(salt: string, arg1: string, arg2: { from: string; }): Promise<any>;
}

export const buildOrgJson = async (
  did: string,
  keyPair: KeyPair
): Promise<ORGJSON> => {
  const data = JSON.parse(JSON.stringify(orgJsonTemplate));
  data.verificationMethod.push(
    await createVerificationMethod(
      `${did}#key-1`,
      did,
      keyPair.publicKey
    )
  );
  return data;
};

export const registerOrgId = async (
  contract: ContractObject,
  httpServer: HttpFileServer,
  owner: string,
  orgJsonFile?: File
): Promise<string> => {
  const salt = generateSalt();
  const fileToAdd = orgJsonFile || {
    type: 'json',
    path: `${salt}.json`,
    content: '{"test":"test"}'
  }
  const file = httpServer.addFile(fileToAdd);
  const result = await contract.createOrgId(
    salt,
    `${httpServer.baseUri}/${file.path}`,
    {
      from: owner
    }
  );
  const event = result.logs.filter(e => e.event === 'OrgIdCreated')[0];
  return event.args.orgId;
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

  const salts = accounts.map(_ => generateSalt());

  const keyPairs = await Promise.all(
    accounts.map(_ => generateKeyPair(
      'EcdsaSecp256k1VerificationKey2019'
    ))
  );

  // Set up Http server
  const httpServer = new HttpFileServer();
  httpServer.start();

  return {
    accounts,
    salts,
    keyPairs,
    owner,
    address: orgIdContract.address,
    server,
    httpServer,
    registerOrgId: orgIdOwner => registerOrgId(
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
