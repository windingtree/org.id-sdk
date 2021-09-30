import type { Signer } from 'ethers';
import type { KeyLike, KeyObject, JWK } from './keys';
import type {
  VCTypedHolderReference,
  CredentialReference,
  VCProofReference,
  CryptographicSignatureSuiteReference
} from '@windingtree/org.json-schema/types/org';
import {
  getAlgFromJWK,
  signatureTypeFromJWK,
  createJWK
} from './keys';
import { regexp, uid, object } from '@windingtree/org.id-utils';
import { org as orgJsonSchema } from '@windingtree/org.json-schema';
import { DateTime } from  'luxon';
import { parseJwk } from 'jose/jwk/parse';
import { CompactSign } from 'jose/jws/compact/sign';
import { compactVerify } from 'jose/jws/compact/verify';
import base64url from 'base64url';
import { utils as ethersUtils } from 'ethers';

export type {
  VCTypedHolderReference,
  CredentialReference,
  VCProofReference
}

export type GenericObject = { [k: string]: unknown };

export interface SignedVC extends CredentialReference {
  proof: VCProofReference
}

export interface CredentialSubject {
  [k: string]: unknown;
}

export interface VCBuilderChain {
  setHolder(
    holder: string,
    type?: string
  ): VCBuilderChain;
  setValidFrom(
    date: string
  ): VCBuilderChain;
  setValidUntil(
    date: string
  ): VCBuilderChain;
  setExpirationDate(
    expire: string
  ): VCBuilderChain;
  setCredentialSubject(
    subject: CredentialSubject
  ): VCBuilderChain;
  sign(
    privateKey: KeyLike | JWK
  ): Promise<SignedVC>;
  signWithBlockchainAccount(
    blockchainAccountId: string,
    signer: Signer
  ): Promise<SignedVC>;
}

export interface DidGroupedCheckResult {
  did?: string;
  fragment?: string;
}

export interface BlockchainAccountIdGroupedResult {
  accountId?: string;
  blockchainType?: string;
  blockchainId?: string;
}

export interface BlockchainAccountIdParsed {
  accountId: string;
  blockchainType: string;
  blockchainId: string;
}

export interface DecodedJws {
  protectedHeader: GenericObject;
  payload: CredentialReference;
  signature: string;
  message: string;
}

// Prepare an unsigned data for signing
export const buildUnsignedDataForSignature = (
  verificationMethod: string,
  payload: string | CredentialReference | GenericObject
): string => `${
  base64url
    .encode(
      JSON.stringify(
        {
          alg: 'ES256K',
          kid: verificationMethod,
          typ: 'JWT'
        }
      )
    )
}.${
  base64url
    .encode(
      typeof payload === 'object'
        ? JSON.stringify(payload)
        : payload
    )
}`;

// Sign payload using Ethereum account
export const signWithSigner = async (
  signer: Signer,
  verificationMethod: string,
  payload: string | GenericObject
): Promise<string> => {
  const unsignedData = buildUnsignedDataForSignature(
    verificationMethod,
    payload
  );

  const signature: string = await signer.signMessage(unsignedData);

  return `${unsignedData}.${base64url.encode(signature as string)}`;
}

// Parse string formatted as blockchain account Id
export const parseBlockchainAccountId = (blockchainAccountId: string): BlockchainAccountIdParsed => {
  const blockchainAccountIdResult = regexp.blockchainAccountIdGrouped.exec(blockchainAccountId);

  if (!blockchainAccountIdResult) {
    throw new Error('Unable to parse blockchain account Id');
  }

  const {
    accountId,
    blockchainType,
    blockchainId
  } = blockchainAccountIdResult.groups as BlockchainAccountIdGroupedResult;

  if (!accountId || accountId === '') {
    throw new Error('Invalid blockchain account Id');
  }

  if (!blockchainType || blockchainType === '') {
    throw new Error('Invalid blockchain type');
  }

  if (!blockchainId || blockchainId === '') {
    throw new Error('Invalid blockchain Id');
  }

  return {
    accountId,
    blockchainType,
    blockchainId
  };
};

// Decode raw JWS
export const decodeJws = (jws: string): DecodedJws => {
  const {
    0: encodedProtectedHeader,
    1: encodedPayload,
    2: signature,
    length: signaturePartsLength
  } = jws.split('.');

  if (signaturePartsLength !== 3) {
    throw new Error('Invalid JWS signature');
  }

  let protectedHeader;

  try {
    protectedHeader = JSON.parse(
      base64url.decode(encodedProtectedHeader)
    );
  } catch (error) {
    throw new Error('Unable to decode JWS protected header');
  }

  let payload: CredentialReference;

  try {
    payload = JSON.parse(
      base64url.decode(encodedPayload)
    );
  } catch (error) {
    throw new Error('Unable to decode JWS payload');
  }

  return {
    protectedHeader,
    payload,
    signature: base64url.decode(signature),
    message: `${encodedProtectedHeader}.${encodedPayload}`
  };
};

// Verify JWS signed With blockchain account
export const verifyJwsSignedWithBlockchainAccount = (
  jws: string,
  accountId: string
): CredentialReference => {
  const {
    payload,
    message,
    signature
  } = decodeJws(jws);

  // Verify signature
  const recoveredAccountId = ethersUtils.verifyMessage(
    message,
    signature
  );

  if (accountId.toUpperCase() !== recoveredAccountId.toUpperCase()) {
    throw new Error(
      `VC signed by unknown accountId: ${recoveredAccountId} though expected: ${accountId}`
    );
  }

  return payload;
};

// Utility that used for creation of the holder data
export const buildHolderUtil = (
  holder: string,
  type?: string
): string | VCTypedHolderReference => {

  if (!regexp.didOnly.exec(holder)) {
    throw new Error(`Wrong Holder DID format: ${holder}`);
  }

  return type && type !== ''
    ? {
      type,
      id: holder
    }
    : holder;
};

// Utility checks date provided to ISO conformance
// and converts the date to internal DateTime format
export const checkDateUtil = (
  date: string
): DateTime => {

  if (!regexp.isoDate.exec(date)) {
    throw new Error('A valid date must be provided');
  }

  return DateTime.fromISO(date);
};

// Utility for creation of valid proof data
export const buildProofUtil = (
  jws: string,
  type: CryptographicSignatureSuiteReference,
  verificationMethod: string
): VCProofReference => {

  if (!jws || jws === '') {
    throw new Error(`JWS must be provided`);
  }

  return {
    type,
    created: DateTime.now().toISO(),
    proofPurpose: 'assertionMethod',
    verificationMethod,
    jws
  };
};

// Create a Verifiable Credential
export const createVC = (
  issuer: string,
  type: string | string[] | undefined
): VCBuilderChain => {

  if (!regexp.did.exec(issuer)) {
    throw new Error(`Wrong Issuer DID format: ${issuer}`);
  }

  const groupedCheck = regexp.didGrouped.exec(issuer);

  if (!groupedCheck || !groupedCheck.groups) {
    throw new Error(`Wrong Issuer DID format: ${issuer}`);
  }

  const {
    did,
    fragment
  } = groupedCheck.groups as DidGroupedCheckResult;

  if (!did) {
    throw new Error(
      `Unable to extract DID from the issuer Id: ${issuer}`
    );
  }

  if (!fragment) {
    throw new Error(
      `Key identifier must be provided as fragment in the DID: ${issuer} #fragment`
    );
  }

  // Init the type with default value
  let vcType: string[] = [
    'VerifiableCredential'
  ];

  if (type) {

    if (!Array.isArray(type)) {
      type = [ type ];
    }

    // Add additional values to the type
    vcType = type.reduce(
      (a, v) => {
        if (!vcType.includes(v)) {
          a.push(v);
        }
        return a;
      },
      vcType
    );
  }

  const vcIssuanceDate = DateTime.now();
  let vcHolder: string | VCTypedHolderReference | undefined;
  let vcExpirationDate: DateTime | undefined;
  let vcValidFrom: DateTime | undefined;
  let vcValidUntil: DateTime | undefined;
  let vcSubject: CredentialSubject;
  let unsignedVS: CredentialReference;

  const buildUnsignedVC = (): void => {
    // Creation of unsigned VC object
    unsignedVS = {
      '@context': [
        'https://www.w3.org/2018/credentials/v1'
      ],
      id: uid.uuid4(),
      type: vcType,
      issuer: did,
      issuanceDate: vcIssuanceDate.toISO(),
      ...(
        vcHolder
          ? {
            holder: vcHolder
          }
          : {}
      ),
      ...(
        vcValidFrom
          ? {
            validFrom: vcValidFrom.toISO()
          }
          : {}
      ),
      ...(
        vcValidUntil
          ? {
            validUntil: vcValidUntil.toISO()
          }
          : {}
      ),
      ...(
        vcExpirationDate
          ? {
            expirationDate: vcExpirationDate.toISO()
          }
          : {}
      ),
      credentialSubject: vcSubject
    };

    // @todo Add validation of the VC object with existed JSON schema
  };

  // Chained methods that implements VC creation
  const chain: VCBuilderChain = {

    // Adds a `holder` data to VC (`holder` is optional property)
    setHolder: (holder, type) => {
      vcHolder = buildHolderUtil(holder, type);
      return chain;
    },

    // Adds to VC a validity start date (`validFrom` is optional property)
    setValidFrom: date => {
      const checkedDate = checkDateUtil(date);

      if (vcExpirationDate && checkedDate > vcExpirationDate) {
        throw new Error('validFrom must be less than expirationDate');
      }

      if (vcValidUntil && checkedDate > vcValidUntil) {
        throw new Error('validFrom must be less than validUntil');
      }

      if (checkedDate < vcIssuanceDate) {
        throw new Error('validFrom must be greater than issuanceDate');
      }

      vcValidFrom = checkedDate;
      return chain;
    },

    // Adds to VC a validity stop date (`validUntil` is optional property)
    setValidUntil: date => {
      const checkedDate = checkDateUtil(date);

      if (vcExpirationDate && checkedDate > vcExpirationDate) {
        throw new Error('validUntil must be less than expirationDate');
      }

      if (vcValidFrom && checkedDate < vcValidFrom) {
        throw new Error('validUntil must be greater than validFrom');
      }

      if (checkedDate < vcIssuanceDate) {
        throw new Error('validUntil must be greater than issuanceDate');
      }

      vcValidUntil = checkedDate;
      return chain;
    },

    // Adds to VC an expiration date (`expirationDate` is optional property)
    setExpirationDate: date => {
      const checkedDate = checkDateUtil(date);

      if (vcValidUntil && checkedDate < vcValidUntil) {
        throw new Error('expirationDate must be greater than validUntil');
      }

      if (vcValidFrom && checkedDate < vcValidFrom) {
        throw new Error('expirationDate must be greater than validFrom');
      }

      if (checkedDate < vcIssuanceDate) {
        throw new Error('expirationDate must be greater than issuanceDate');
      }

      vcExpirationDate = checkedDate;
      return chain;
    },

    // Adds subject data to VC (`credentialSubject` is mandatory property)
    setCredentialSubject: subject => {

      if (vcSubject) {
        throw new Error('Credential subject can be set only once');
      }

      if (typeof subject !== 'object' || Object.keys(subject).length === 0) {
        throw new Error(
          `Credential subject must be a valid object and cannot be empty`
        );
      }

      vcSubject = subject;
      return chain;
    },

    // Sign VC with private token
    sign: async privateKey => {
      buildUnsignedVC();

      let alg: string;
      let signatureType: CryptographicSignatureSuiteReference;

      if ((privateKey as JWK).kty) {
        // Use raw JWK
        alg = getAlgFromJWK(privateKey as JWK);
        signatureType = signatureTypeFromJWK(privateKey as JWK);
        privateKey = await parseJwk(privateKey as JWK);
      } else {
        // Try to use key in KeyLike format

        if ((privateKey as KeyObject).type !== 'private') {
          throw new Error(
            'Only private keys are accepted for sining of VCs\''
          );
        }

        const privateKeyJWK: JWK = await createJWK(privateKey as KeyObject);
        signatureType = signatureTypeFromJWK(privateKeyJWK);
        alg = getAlgFromJWK(privateKeyJWK, true);
      }

      const encoder = new TextEncoder();
      const jws: string = await new CompactSign(encoder.encode(
        JSON.stringify(unsignedVS)
      ))
        .setProtectedHeader(
          {
            alg
          }
        )
        .sign(privateKey as KeyObject);

      const vcProof = buildProofUtil(jws, signatureType, issuer);

      return {
        ...unsignedVS,
        proof: vcProof
      };
    },

    // Sign VC with Web3 provider
    signWithBlockchainAccount: async (
      blockchainAccountId,
      signer: Signer
    ) => {
      buildUnsignedVC();

      let jws: string | undefined;
      let vcProof: VCProofReference | undefined;

      const {
        accountId,
        blockchainType
      } = parseBlockchainAccountId(blockchainAccountId);
      const signerAddress = await signer.getAddress();

      if (signerAddress !== accountId) {
        throw new Error(
          `The signer address must be equal to accountId: ${accountId}`
        );
      }

      switch (blockchainType) {
        case 'eip155':

          jws = await signWithSigner(
            signer,
            issuer,
            unsignedVS
          );

          vcProof = buildProofUtil(
            jws,
            'EcdsaSecp256k1RecoverySignature2020',
            issuer
          );

          break;
        default:
          throw new Error(`Unsupported blockchain type: ${blockchainType}`);
      }

      if (!vcProof) {
        throw new Error('Unable to build VC proof');
      }

      return {
        ...unsignedVS,
        proof: vcProof
      };
    }
  };

  return chain;
};

// VC verification
export const verifyVC = async (
  vc: SignedVC,
  publicKey: KeyLike | JWK | string
): Promise<CredentialReference> => {
  // Validate ORG.JSON VC against the VC schema
  const vcSchemaValid = object.validateWithSchemaOrRef(
    orgJsonSchema,
    '#/definitions/CredentialReference',
    vc
  );

  if (vcSchemaValid !== null) {
    throw new Error(`VC schema validation: ${vcSchemaValid}`);
  }

  const jws = object.getDeepValue(vc, 'proof.jws');

  if (typeof jws !== 'string') {
    throw new Error('Unable to find VC signature');
  }

  const decoder = new TextDecoder();
  let payload: string | CredentialReference | undefined;

  if (typeof publicKey === 'object') {
    // Trying to use a public key for the VC verification

    if ((publicKey as JWK).kty) {
      // JWK provided so converting key to KeyLike format
      publicKey = await parseJwk(publicKey as JWK);
    }

    if ((publicKey as KeyObject).type !== 'public') {
      throw new Error(
        'Only public keys are accepted for verifying of VCs\''
      );
    }

    const verificationResult = await compactVerify(jws, publicKey as KeyObject);
    payload = decoder.decode(verificationResult.payload);

  } else if (regexp.blockchainAccountId.exec(publicKey)) {
    // Trying to parse a blockchain account Id
    const {
      accountId,
      blockchainType
    } = parseBlockchainAccountId(publicKey);

    switch (blockchainType) {
      case 'eip155':
        payload = verifyJwsSignedWithBlockchainAccount(jws, accountId);
        break;
      default:
        throw new Error(`Unsupported blockchain type: ${blockchainType}`);
    }
  } else {
    throw new Error('Unsupported type of public key');
  }

  if (!payload || payload === '') {
    throw new Error('Unable to decode a VC signature');
  }

  let decodedPayload: CredentialReference;

  if (typeof payload !== 'object') {
    try {
      decodedPayload = JSON.parse(payload as string);
    } catch (error) {
      throw new Error('Unable to parse VC payload');
    }
  } else {
    decodedPayload = payload;
  }

  const unsignedPayload = JSON.parse(JSON.stringify(vc));
  delete unsignedPayload.proof;

  // Compare unsigned and signed payloads
  if (JSON.stringify(unsignedPayload) !== JSON.stringify(decodedPayload)) {
    throw new Error('Unsigned and signed payloads are not equal');
  }

  const currentDate = DateTime.now();

  // Check if VC expired
  if (
    !(
      typeof decodedPayload.expirationDate === 'undefined' ||
      currentDate <= DateTime.fromISO(decodedPayload.expirationDate)
    )
  ) {
    throw new Error(`VC expired at: ${decodedPayload.expirationDate}`);
  }

  // Check if VC active by both dates
  if (
    typeof decodedPayload.validFrom !== 'undefined' &&
    typeof decodedPayload.validUntil !== 'undefined' &&
    !(
      currentDate >= DateTime.fromISO(decodedPayload.validFrom) &&
      currentDate <= DateTime.fromISO(decodedPayload.validUntil)
    )
  ) {
    throw new Error(
      `VC inactive. Valid from date: ${decodedPayload.validFrom}. Valid until date: ${decodedPayload.validUntil}`
    );
  }

  // Check if VC active by `from` date only
  if (
    typeof vc.validFrom !== 'undefined' &&
    typeof vc.validUntil === 'undefined' &&
    currentDate < DateTime.fromISO(vc.validFrom)
  ) {
    throw new Error(
      `VC inactive. Valid from date: ${decodedPayload.validFrom}`
    );
  }

  // Check if VC active by `until` date only
  if (
    typeof vc.validFrom === 'undefined' &&
    typeof vc.validUntil !== 'undefined' &&
    currentDate > DateTime.fromISO(vc.validUntil)
  ) {
    throw new Error(
      `VC inactive. Valid until date: ${decodedPayload.validUntil}`
    );
  }

  return decodedPayload;
};
