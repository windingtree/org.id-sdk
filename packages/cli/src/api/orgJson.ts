import type { ORGJSON, VerificationMethodReference } from '@windingtree/org.json-schema/types/org.json';
import type { NFTMetadata } from '@windingtree/org.json-schema/types/nft';
import type { ORGJSONVCNFT } from '@windingtree/org.json-schema/types/orgVc';
import type { ParsedArgv } from '../utils/env';
import type { DeploymentReference, VcReference } from '../schema/project/types';
import { vc, keys } from '@windingtree/org.id-auth';
import { ethers } from 'ethers';
import { object as objectUtil } from '@windingtree/org.id-utils';
import { DateTime } from  'luxon';
import { read, write } from './fs';
import { deployFileIpfs } from './deployment';
import { addVcToProject } from './project';
import { printInfo, printMessage } from '../utils/console';

// Extract verification method from the orgJson
export const fetchVerificationMethod = (
  orgJson: ORGJSON,
  verificationMethodId: string | undefined
): VerificationMethodReference => {

  if (!verificationMethodId) {
    throw new Error(
      'Verification method Id must be provided using "--method" option'
    );
  }

  const orgJsonVerificationMethods = objectUtil.getDeepValue(
    orgJson,
    'verificationMethod'
  ) as VerificationMethodReference[];

  if (!orgJsonVerificationMethods) {
    throw new Error('verificationMethod not defined in the payload');
  }

  const orgJsonVerificationMethod = orgJsonVerificationMethods.filter(
    m => m.id === verificationMethodId
  )[0];

  if (!orgJsonVerificationMethod) {
    throw new Error(`Verification method "${verificationMethodId}" not found`);
  }

  return orgJsonVerificationMethod;
};

// Build NFT metadata that will be merged with a VC
export const buildNftMetadata = (
  orgJson: ORGJSON,
  args: ParsedArgv
): NFTMetadata => {
  const isLegalEntity = !!orgJson.legalEntity;
  const isPerson = !!orgJson.person;
  let nftNamePath: string;
  let nftAlterNamePath: string;
  let nftImagePath: string;

  if (isLegalEntity) {
    nftNamePath = 'legalEntity.legalName';
    nftAlterNamePath = 'legalEntity.alternativeName';
    nftImagePath = 'legalEntity.media.logo';
  } else if (!isPerson) {
    nftNamePath = 'organizationalUnit.name';
    nftAlterNamePath = 'organizationalUnit.description';
    nftImagePath = 'organizationalUnit.media.logo';
  } else {
    nftNamePath = 'legalEntity.legalName';
    nftAlterNamePath = 'legalEntity.alternativeName';
    nftImagePath = '';
  }

  let nftName: string;
  let nftAlterName: string;
  let nftImage: string;

  if (!isPerson) {
    nftName = objectUtil.getDeepValue(
      orgJson,
      nftNamePath
    ) as string;

    if (!nftName) {
      throw new Error(`"${nftNamePath}" must be defined`);
    }

    nftAlterName = objectUtil.getDeepValue(
      orgJson,
      nftAlterNamePath
    ) as string;

    nftImage = objectUtil.getDeepValue(
      orgJson,
      nftImagePath
    ) as string;

    if (!nftImage) {
      throw new Error(`"${nftImagePath}" must be defined`);
    }
  } else {

    if (!args['--nftName']) {
      throw new Error(
        'In case of "person" profile NFT name must be provided using "--nftName" option'
      );
    }

    nftAlterName = args['--nftName'];

    if (!args['--nftDescription']) {
      throw new Error(
        'In case of "person" profile NFT description must be provided using "--nftDescription" option'
      );
    }

    nftName = args['--nftDescription'];

    if (!args['--nftImage']) {
      throw new Error(
        'In case of "person" profile NFT image must be provided using "--nftImage" option'
      );
    }

    nftImage = args['--nftImage'];
  }

  return {
    name: nftAlterName || nftName,
    description: nftName,
    image: nftImage
  };
};

// Signature method for `EcdsaSecp256k1RecoveryMethod2020` verification method type
export const signOrgJsonWithBlockchainAccount = async (
  verificationMethod: VerificationMethodReference,
  orgJson: ORGJSON,
  nftMetadata: NFTMetadata
): Promise<ORGJSONVCNFT> => {
  const issuerBlockchainAccountId = verificationMethod.blockchainAccountId;

  if (!issuerBlockchainAccountId) {
    throw new Error('blockchainAccountId not defined in the verificationMethod');
  }

  const {
    accountId,
    blockchainType
  } = vc.parseBlockchainAccountId(issuerBlockchainAccountId);

  if (blockchainType !== 'eip155') {
    throw new Error(
      `Verification method blockchain type "${blockchainType}" is not supported`
    );
  }

  const privateKeyRaw = process.env.ACCOUNT_KEY as string;

  if (!privateKeyRaw) {
    throw new Error(
      'Verifiable credential signer private key must be provided using "ACCOUNT_KEY" environment variable'
    );
  }

  const signer = new ethers.Wallet(privateKeyRaw);

  const signerAddress = await signer.getAddress();

  if (ethers.utils.getAddress(accountId) !== signerAddress) {
    throw new Error(
      `Verification method account Id is different from the signer address: ${signerAddress}`
    );
  }

  orgJson.updated = DateTime.now().toISO();

  return vc.createVC(
    verificationMethod.id,
    [ 'OrgJson' ]
  )
    .setCredentialSubject(orgJson)
    .setNftMetaData(nftMetadata)
    .signWithBlockchainAccount(
      issuerBlockchainAccountId,
      signer
    ) as Promise<ORGJSONVCNFT>;
};

// Signature method for `EcdsaSecp256k1VerificationKey2019` verification method type
export const signWithEcKey = async (
  verificationMethod: VerificationMethodReference,
  orgJson: ORGJSON,
  nftMetadata: NFTMetadata
): Promise<ORGJSONVCNFT> => {
  const capabilityDelegation = orgJson.capabilityDelegation;

  if (!capabilityDelegation) {
    throw new Error(
      '"capabilityDelegation" definition is required in case of using the "EcdsaSecp256k1VerificationKey2019" verification method'
    );
  }

  const isDelegate = !!capabilityDelegation.filter(
    id => id === verificationMethod.id
  )[0];

  if (!isDelegate) {
    throw new Error(
      `Verification method "${verificationMethod.id}" must be included into the "capabilityDelegation" definition`
    );
  }

  const privateKeyRaw = process.env.ACCOUNT_KEY as string;

  if (!privateKeyRaw) {
    throw new Error(
      'Verifiable credential signer private key must be provided using "ACCOUNT_KEY" environment variable'
    );
  }

  const privateKey = await keys.importKeyPrivatePem(privateKeyRaw);

  return vc.createVC(
    verificationMethod.id,
    [ 'OrgJson' ]
  )
    .setCredentialSubject(orgJson)
    .setNftMetaData(nftMetadata)
    .sign(privateKey) as Promise<ORGJSONVCNFT>;
};

// Create signed version of the ORG.JSON in the form of VC
export const createSignedOrgJson = async (
  basePath: string,
  args: ParsedArgv
): Promise<VcReference> => {

  if (!args['--payload']) {
    throw new Error(
      `Path to the payload file must be provided using "--payload" option`
    );
  }

  // Read the payload by path
  const subject = await read(
    basePath,
    args['--payload'],
    true
  ) as ORGJSON;

  if (!args['--method']) {
    throw new Error(
      'Verification method Id must be provided using "--method" option'
    );
  }

  const verificationMethod = fetchVerificationMethod(
    subject,
    args['--method']
  );

  const nftMetadata = buildNftMetadata(subject, args);

  let orgJsonVc: ORGJSONVCNFT;

  switch (verificationMethod.type) {
    case 'EcdsaSecp256k1RecoveryMethod2020':
      orgJsonVc = await signOrgJsonWithBlockchainAccount(
        verificationMethod,
        subject,
        nftMetadata
      );
      break;
    case 'EcdsaSecp256k1VerificationKey2019':
      orgJsonVc = await signWithEcKey(
        verificationMethod,
        subject,
        nftMetadata
      );
      break;
    default:
      throw new Error(
        `Verification method type "${verificationMethod.type}" is not supported`
      );
  }

  if (!args['--output']) {
    throw new Error(
      'Path to the output file must be provided using "--output" option'
    );
  }

  const outputFile = await write(
    basePath,
    args['--output'],
    JSON.stringify(orgJsonVc, null, 2)
  );

  printInfo(
    `ORG.JSON VC successfully created and saved on the path ${outputFile}`
  );

  let deploymentRecord: DeploymentReference | undefined;

  if (args['--deploy:ipfs']) {
    printMessage('\nDeploying the file to IPFS...\n');
    args['--path'] = args['--output'];
    deploymentRecord = await deployFileIpfs(
      basePath,
      args
    );
  }

  // Build a deployment record
  const vcRecord: VcReference = {
    type: 'OrgJson',
    did: objectUtil.getDeepValue(orgJsonVc, 'credentialSubject.id') as string,
    method: args['--method'],
    payload: args['--payload'],
    path: args['--output'],
    date: DateTime.now().toISO(),
    ...(
      deploymentRecord
        ? {
          uri: deploymentRecord.uri
        }
        : {}
    )
  };

  return addVcToProject(basePath, vcRecord);
};
