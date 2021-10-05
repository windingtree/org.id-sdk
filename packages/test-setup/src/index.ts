import type { Signer } from 'ethers';
import type { SignedVC } from '@windingtree/org.id-auth/dist/vc';
import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
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
import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';

import orgJsonTemplate from './data/legal-entity.json';

export {
  generateSalt,
  generateOrgIdWithSigner,
  generateOrgIdWithAddress
}

export interface OrgIdSetup {
  signers: Signer[];
  accounts: string[];
  orgIdContract: OrgIdBaseContract;
  httpServer: HttpFileServer;
  registerOrgId(
    orgIdOwner: Signer
  ): Promise<OrgIdRegistrationResult>;
  buildOrgJson(
    did: string,
    owner: Signer
  ): Promise<SignedVC>;
  close: () => void;
}

export type OrgIdRegistrationResult = {
  orgIdHash: string;
  orgJson: SignedVC;
};

// Builds a signed org.json VC
export const buildOrgJson = async (
  did: string,
  owner: Signer
): Promise<SignedVC> => {
  const orgJson = JSON.parse(JSON.stringify(orgJsonTemplate));
  const issuer = `${did}#key-1`;
  const ownerAddress = await owner.getAddress();
  const blockchainAccountId = `${ownerAddress}@eip155:1337`;
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
      owner
    );
  return vc;
};

// Registers an ORGiD
export const registerOrgId = async (
  contract: OrgIdBaseContract,
  httpServer: HttpFileServer,
  owner: Signer
): Promise<OrgIdRegistrationResult> => {
  const salt = generateSalt();
  const orgIdHash = await generateOrgIdWithSigner(owner, salt);
  const orgJson = await buildOrgJson(
    `did:orgid:test:${orgIdHash}`,
    owner
  );
  const fileToAdd: File = {
    type: 'json',
    path: `${orgIdHash}.json`,
    content: JSON.stringify(orgJson)
  };
  const file = httpServer.addFile(fileToAdd);
  const tx = await contract.connect(owner).createOrgId(
    salt,
    `${httpServer.baseUri}/${file.path}`
  );
  const receipt = await tx.wait();

  if (!receipt.events) {
    throw new Error('Unable to get events from receipt');
  }

  const event = receipt.events.filter(e => e.event === 'OrgIdCreated')[0];

  if (!event.args) {
    throw new Error('Unable to extract OrgIdCreated event data');
  }

  return {
    orgIdHash: event.args.orgId,
    orgJson
  };
}

// Setup an ORGiD environment
export const orgIdSetup = async (): Promise<OrgIdSetup> => {
  const signers = await ethers.getSigners();
  const accounts: string[] = await Promise.all(
    signers.map((s: Signer): Promise<string> => s.getAddress())
  );
  const deployer = signers[0];

  // Deploy OrgId contract
  const OrgIdFactory = new ethers.ContractFactory(
    OrgIdContract.abi,
    OrgIdContract.bytecode,
    deployer
  );
  const orgIdContract = await OrgIdFactory.deploy() as OrgIdBaseContract;
  await orgIdContract.deployTransaction.wait();
  await orgIdContract.initialize();

  // Set up Http server
  const httpServer = new HttpFileServer();
  await httpServer.start();

  return {
    signers,
    accounts,
    orgIdContract,
    httpServer,
    registerOrgId: (orgIdOwner: Signer) =>
      registerOrgId(
        orgIdContract,
        httpServer,
        orgIdOwner
      ),
    buildOrgJson,
    close: () => httpServer.close()
  };
};
