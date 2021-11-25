import type { ORGJSON, VerificationMethodReference } from '@windingtree/org.json-schema/types/org.json';
import type { ORGJSONVCNFT } from '@windingtree/org.json-schema/types/orgVc';
import type { Wallet } from 'ethers';
import type { ParsedArgv } from '../utils/env';
import { vc } from '@windingtree/org.id-auth';
import { ethers } from 'ethers';
import { object as objectUtil } from '@windingtree/org.id-utils';
import { DateTime } from  'luxon';
import { read, write } from './fs';
import { printInfo } from '../utils/console';

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

// Sign orgJson using defined verification method
export const signOrgJson = async (
  signer: Wallet,
  verificationMethodId: string | undefined,
  orgJson: ORGJSON,
  args: ParsedArgv
): Promise<ORGJSONVCNFT> => {

  if (!verificationMethodId) {
    throw new Error(
      'Verification method Id must be provided using "--method" option'
    );
  }

  const verificationMethod = fetchVerificationMethod(
    orgJson,
    verificationMethodId
  );

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

  const signerAddress = await signer.getAddress();

  if (ethers.utils.getAddress(accountId) !== signerAddress) {
    throw new Error(
      `Verification method account Id is different from the signer address: ${signerAddress}`
    );
  }

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

  const nftMetadata = {
    name: nftAlterName || nftName,
    description: nftName,
    image: nftImage
  };

  orgJson.updated = DateTime.now().toISO();

  const unsignedOrgJsonNft = vc.createVC(
    verificationMethodId,
    [ 'OrgJson' ]
  )
    .setCredentialSubject(orgJson)
    .setNftMetaData(nftMetadata);

  switch (verificationMethod.type) {
    case 'EcdsaSecp256k1RecoveryMethod2020':
      return unsignedOrgJsonNft
        .signWithBlockchainAccount(
          issuerBlockchainAccountId,
          signer
        ) as Promise<ORGJSONVCNFT>;
    default:
      throw new Error(
        `Verification type "${verificationMethod.type}" is not supported`
      );
  }
};

export const createSignedOrgJson = async (
  basePath: string,
  args: ParsedArgv
): Promise<void> => {

  if (!args['--payload']) {
    throw new Error(
      `Path to the payload file must be provided using "${args['--payload']}" option`
    );
  }

  // Read the payload by path
  const subject = await read(
    basePath,
    args['--payload'],
    true
  ) as ORGJSON;

  const privateKey = process.env.ACCOUNT_KEY as string;

  if (!privateKey) {
    throw new Error(
      'Verifiable credential signer private key must be provided using "ACCOUNT_KEY" environment variable'
    );
  }

  const signer = new ethers.Wallet(privateKey);

  const orgJsonVc = await signOrgJson(
    signer,
    args['--method'],
    subject,
    args
  );

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

  printInfo(`ORG.JSON VC successfully saved on path ${outputFile}`);
};
