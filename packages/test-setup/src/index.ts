import type { Signer, VoidSigner, BigNumber } from 'ethers';
import type { SignedVC } from '@windingtree/org.id-auth/dist/vc';
import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { NFTMetadata } from '@windingtree/org.json-schema/types/nft';
import {
  generateSalt,
  generateOrgIdWithSigner,
  generateOrgIdWithAddress
} from '@windingtree/org.id-utils/dist/common';
import { createVC } from '@windingtree/org.id-auth/dist/vc';
import {
  createVerificationMethodWithBlockchainAccountId
} from '@windingtree/org.json-utils';
import { OrgIdContract } from '@windingtree/org.id';
import { HttpFileServer, File } from '@windingtree/org.id-test-http-server';
import '@nomiclabs/hardhat-ethers';
import { ethers } from 'hardhat';

import orgJsonTemplate from './data/legal-entity.json';

export {
  orgJsonTemplate,
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
    orgIdOwner: VoidSigner,
    overrideOptions?: TestOverrideOptions
  ): Promise<OrgIdRegistrationResult>;
  buildOrgJson(
    did: string,
    owner: VoidSigner
  ): Promise<SignedVC>;
  close: () => void;
}

export type OrgIdRegistrationResult = {
  orgIdHash: string;
  tokenId: BigNumber;
  orgJson: SignedVC;
};

export interface TestOverrideOptions {
  baseUri?: string;
  vcType?: string[];
  vcNftMetaData?: any;
  vcProofVerificationMethod?: string;
  orgJsonTemplate?: any;
  orgJson?: any;
  orgJsonBlockchainAccountId?: string;
  deactivated?: string;
  verificationMethod?: any[];
  verificationMethodRevoked?: string;
}

// Builds a signed org.json VC
export const buildOrgJson = async (
  did: string,
  owner: VoidSigner,
  overrideOptions: TestOverrideOptions = {}
): Promise<SignedVC> => {
  const orgJson = JSON.parse(JSON.stringify(
    overrideOptions.orgJsonTemplate
      ? overrideOptions.orgJsonTemplate
      : orgJsonTemplate
  ));
  const nftMetaData: NFTMetadata = {
    name: orgJson.legalEntity.legalName,
    description: `${orgJson.legalEntity.legalName} company profile`,
    image: orgJson.legalEntity.media.logo
  };
  const issuer = `${did}#key-1`;
  const ownerAddress = await owner.getAddress();
  const blockchainAccountId = `${ownerAddress}@eip155:1337`;
  orgJson.id = did;
  orgJson.created = new Date().toISOString();
  orgJson.updated = new Date().toISOString();
  const verificationMethod = await createVerificationMethodWithBlockchainAccountId(
    issuer,
    did,
    overrideOptions.orgJsonBlockchainAccountId
      ? overrideOptions.orgJsonBlockchainAccountId
      : blockchainAccountId
  );
  orgJson.verificationMethod.push(
    {
      ...verificationMethod,
      ...(
        overrideOptions.verificationMethodRevoked
          ? {
            revoked: overrideOptions.verificationMethodRevoked
          }
          : {}
      )
    }
  );

  if (overrideOptions.deactivated) {
    orgJson.deactivated = overrideOptions.deactivated;
  }

  if (overrideOptions.verificationMethod) {
    orgJson.verificationMethod = overrideOptions.verificationMethod;
  }

  const vc: SignedVC = await createVC(
    issuer,
    overrideOptions.vcType ? overrideOptions.vcType : ['OrgJson']
  )
    .setCredentialSubject(
      overrideOptions.orgJson
        ? overrideOptions.orgJson
        : orgJson
    )
    .setNftMetaData(
      overrideOptions.vcNftMetaData
        ? overrideOptions.vcNftMetaData
        : nftMetaData
    )
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
  owner: VoidSigner,
  overrideOptions: TestOverrideOptions = {}
): Promise<OrgIdRegistrationResult> => {
  const salt = generateSalt();
  const orgIdHash = await generateOrgIdWithSigner(owner, salt);
  const orgJson = await buildOrgJson(
    `did:orgid:1337:${orgIdHash}`,
    owner,
    overrideOptions
  );

  if (overrideOptions.vcProofVerificationMethod) {
    orgJson.proof.verificationMethod = overrideOptions.vcProofVerificationMethod;
  }

  const fileToAdd: File = {
    type: 'json',
    path: `${orgIdHash}.json`,
    content: JSON.stringify(orgJson)
  };
  const file = httpServer.addFile(fileToAdd);
  const tx = await contract.connect(owner).createOrgId(
    salt,
    `${
      overrideOptions.baseUri
        ? overrideOptions.baseUri
        : httpServer.baseUri
    }/${file.path}`
  );
  const receipt = await tx.wait();

  if (!receipt.events) {
    throw new Error('Unable to get events from receipt');
  }

  const event = receipt.events.filter(e => e.event === 'OrgIdCreated')[0];

  if (!event.args) {
    throw new Error('Unable to extract OrgIdCreated event data');
  }

  const tokenId = await contract.getTokenId(event.args.orgId);

  return {
    orgIdHash: event.args.orgId,
    tokenId,
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
    registerOrgId: (orgIdOwner: VoidSigner, overrideOptions: TestOverrideOptions) =>
      registerOrgId(
        orgIdContract,
        httpServer,
        orgIdOwner,
        overrideOptions
      ),
    buildOrgJson,
    close: () => httpServer.close()
  };
};
