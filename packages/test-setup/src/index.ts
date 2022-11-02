import type { Signer, VoidSigner, BigNumber } from 'ethers';
import type { SignedVC } from '@windingtree/org.id-auth/dist/vc';
import type { OrgId as OrgIdBaseContract } from '@windingtree/org.id/types';
import type { NFTMetadata } from '@windingtree/org.json-schema/types/nft';
import type { ORGJSONVCNFT, VerificationMethodReference } from '@windingtree/org.json-schema/types/orgVc';
import {
  generateSalt,
  generateOrgIdWithSigner,
  generateOrgIdWithAddress
} from '@windingtree/org.id-utils/dist/common';
import { parseBlockchainAccountId } from '@windingtree/org.id-utils/dist/parsers';
import { getDeepValue } from '@windingtree/org.id-utils/dist/object';
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
    owner: VoidSigner,
    overrideOptions?: TestOverrideOptions
  ): Promise<SignedVC>;
  close: () => void;
}

export type OrgIdRegistrationResult = {
  orgIdHash: string;
  tokenId: BigNumber;
  orgJson: SignedVC;
  delegates?: string[];
};

export interface TestOverrideOptions {
  orgIdSalt?: any;
  orgIdOwner?: any;
  orgIdHash?: any;
  baseUri?: any;
  vcType?: any[];
  vcNftMetaData?: any;
  vcProofVerificationMethod?: any;
  orgJsonTemplate?: any;
  orgJson?: any;
  orgJsonBlockchainAccountId?: any;
  orgJsonDeactivated?: any;
  orgJsonVerificationMethod?: any[];
  orgJsonVerificationMethodRevocation?: any;
  signWithDelegate?: {
    delegate: ORGJSONVCNFT;
    signer: VoidSigner;
  };
}

// Builds a signed org.json VC
export const buildOrgJson = async (
  did: string,
  owner: VoidSigner,
  overrideOptions: TestOverrideOptions = {}
): Promise<SignedVC> => {
  const orgJson = JSON.parse(JSON.stringify(
    overrideOptions.orgJsonTemplate !== undefined
      ? overrideOptions.orgJsonTemplate
      : orgJsonTemplate
  ));
  const nftMetaData: NFTMetadata = {
    name: orgJson.legalEntity.legalName,
    description: `${orgJson.legalEntity.legalName} company profile`,
    image: orgJson.legalEntity.media.logo
  };

  orgJson.id = did;
  orgJson.created = new Date().toISOString();
  orgJson.updated = new Date().toISOString();

  const ownerIssuer = `${did}#key-1`;
  const ownerAddress = await owner.getAddress();
  const blockchainType = 'eip155';
  const chainId = 1337;
  const ownerBlockchainAccountId = `${blockchainType}:${chainId}:${ownerAddress}`;
  let parsedAccountId;

  if (overrideOptions.orgJsonBlockchainAccountId !== undefined) {
    parsedAccountId = parseBlockchainAccountId(overrideOptions.orgJsonBlockchainAccountId);
  }

  const ownerVerificationMethod = createVerificationMethodWithBlockchainAccountId(
    ownerIssuer,
    did,
    parsedAccountId && parsedAccountId.blockchainType ? parsedAccountId.blockchainType : blockchainType,
    parsedAccountId && parsedAccountId.chainId ? parsedAccountId.chainId : chainId,
    parsedAccountId && parsedAccountId.accountAddress ? parsedAccountId.accountAddress : ownerAddress
  );

  orgJson.verificationMethod.push(
    {
      ...ownerVerificationMethod,
      ...(
        overrideOptions.orgJsonVerificationMethodRevocation !== undefined
          ? {
            verificationMethodRevocation: overrideOptions.orgJsonVerificationMethodRevocation
          }
          : {}
      )
    }
  );

  if (overrideOptions.orgJsonDeactivated !== undefined) {
    orgJson.deactivated = overrideOptions.orgJsonDeactivated;
  }

  if (overrideOptions.orgJsonVerificationMethod !== undefined) {
    orgJson.verificationMethod = overrideOptions.orgJsonVerificationMethod;
  }

  let issuer: string | undefined;
  let blockchainAccountId: string | undefined;

  if (overrideOptions.signWithDelegate !== undefined) {
    const delegateVerificationMethod = getDeepValue(
      overrideOptions.signWithDelegate.delegate,
      'credentialSubject.verificationMethod[0]'
    ) as VerificationMethodReference;

    if (!delegateVerificationMethod) {
      throw new Error('Invalid verificationMethod definition of delegate');
    }

    issuer = delegateVerificationMethod.id;
    blockchainAccountId = delegateVerificationMethod.blockchainAccountId as string;
    orgJson.capabilityDelegation = [ delegateVerificationMethod.id ];
  }

  const vc: SignedVC = await createVC(
    issuer || ownerIssuer,
    overrideOptions.vcType !== undefined ? overrideOptions.vcType : ['OrgJson']
  )
    .setCredentialSubject(
      overrideOptions.orgJson !== undefined
        ? overrideOptions.orgJson
        : orgJson
    )
    .setNftMetaData(
      overrideOptions.vcNftMetaData !== undefined
        ? overrideOptions.vcNftMetaData
        : nftMetaData
    )
    .signWithBlockchainAccount(
      blockchainAccountId || ownerBlockchainAccountId,
      overrideOptions.signWithDelegate !== undefined
        ? overrideOptions.signWithDelegate.signer
        : owner
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
  const salt = overrideOptions.orgIdSalt !== undefined
    ? overrideOptions.orgIdSalt
    : generateSalt();
  const orgIdOwner = overrideOptions.orgIdOwner !== undefined
    ? overrideOptions.orgIdOwner
    : owner;
  let orgIdHash = await generateOrgIdWithSigner(
    orgIdOwner,
    salt
  );
  let delegates: string[] | undefined;

  if (overrideOptions.orgIdHash !== undefined) {
    orgIdHash = overrideOptions.orgIdHash;
  }

  let tx = await contract.connect(orgIdOwner)['createOrgId(bytes32,string)'](
    salt,
    'temp'
  );
  const receipt = await tx.wait();

  if (!receipt.events) {
    throw new Error('Unable to get events from receipt');
  }

  const event = receipt.events.filter(e => e.event === 'OrgIdCreated')[0];

  if (!event.args) {
    throw new Error('Unable to extract OrgIdCreated event data');
  }

  if (overrideOptions.signWithDelegate !== undefined) {
    const verificationMethod = getDeepValue(
      overrideOptions.signWithDelegate.delegate,
      'credentialSubject.verificationMethod[0]'
    ) as VerificationMethodReference;

    if (!verificationMethod) {
      throw new Error('Invalid verificationMethod definition of delegate');
    }
    delegates = [
      verificationMethod.id
    ];
    await contract.connect(orgIdOwner).addDelegates(orgIdHash, delegates);
  }

  const tokenId = await contract.getTokenId(event.args.orgId);
  const orgJson = await buildOrgJson(
    `did:orgid:1337:${orgIdHash}`,
    orgIdOwner,
    overrideOptions
  );

  if (overrideOptions.vcProofVerificationMethod !== undefined) {
    orgJson.proof.verificationMethod = overrideOptions.vcProofVerificationMethod;
  }

  const fileToAdd: File = {
    type: 'json',
    path: `${orgIdHash}.json`,
    content: JSON.stringify(orgJson)
  };
  const file = httpServer.addFile(fileToAdd);

  tx = await contract.connect(orgIdOwner)['setOrgJson(bytes32,string)'](
    orgIdHash,
    `${
      overrideOptions.baseUri !== undefined
        ? overrideOptions.baseUri
        : httpServer.baseUri
    }/${file.path}`
  );
  await tx.wait();

  return {
    orgIdHash,
    tokenId,
    orgJson,
    delegates
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
