import type { Signer, Contract } from 'ethers';
import type { Web3Provider, SignedVC } from '@windingtree/org.id-auth/dist/vc';
import {
  generateSalt,
  generateOrgIdWithSigner,
  generateOrgIdWithAddress
} from '@windingtree/org.id-utils/dist/common';
import { createVC } from '@windingtree/org.id-auth/dist/vc';
import {
  createVerificationMethodWithBlockchainAccountId
} from '@windingtree/org.json-utils/dist/verificationMethod';
import { OrgIdContract } from '@windingtree/org.id';
import { HttpFileServer, File } from '@windingtree/org.id-test-http-server';
import { ethers, upgrades } from 'hardhat';

import orgJsonTemplate from './data/legal-entity.json';

export {
  generateSalt,
  generateOrgIdWithSigner,
  generateOrgIdWithAddress
}

export interface OrgIdSetup {
  signers: Signer[];
  accounts: string[];
  orgIdContract: Contract;
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
  owner: Signer
): Promise<SignedVC> => {
  const orgJson = JSON.parse(JSON.stringify(orgJsonTemplate));
  const issuer = `${did}#key-1`;
  const blockchainAccountId = `${owner}@eip155:1337`;
  orgJson.id = did;
  orgJson.created = new Date().toISOString();
  orgJson.updated = new Date().toISOString();
  orgJson.verificationMethod.push(
    await createVerificationMethodWithBlockchainAccountId(
      issuer,
      did,
      blockchainAccountId
    )
  );
  const vc: SignedVC = await createVC(
    issuer,
    'ORG.JSON'
  )
    .setCredentialSubject(orgJson)
    .signWithBlockchainAccount(
      blockchainAccountId,
      {
        web3Provider: web3Provider as unknown as Web3Provider
      }
    );
  return vc;
};

export const registerOrgId = async (
  server: DevelopmentServer,
  contract: ContractObject,
  httpServer: HttpFileServer,
  owner: Signer
): Promise<OrgIdRegistrationResult> => {
  const salt = generateSalt();
  const orgIdHash = generateOrgIdWithSigner(owner, salt);
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
  const signers = await ethers.getSigners();
  const accounts = await Promise.all(
    signers.map((s: Signer) => s.getAddress())
  );
  const deployer = signers[0];

  // Deploy OrgId contract
  const OrgIdFactory = ethers.ContractFactory(
    OrgIdContract.abi,
    OrgIdContract.bytecode,
    deployer
  );
  const orgIdContract = await upgrades.deployProxy(OrgIdFactory);
  await orgIdContract.deployed();

  // Set up Http server
  const httpServer = new HttpFileServer();
  httpServer.start();

  return {
    signers,
    accounts,
    orgIdContract,
    httpServer,
    registerOrgId: orgIdOwner => registerOrgId(
      server,
      orgIdContract,
      httpServer,
      orgIdOwner
    ),
    buildOrgJson
  };
};
