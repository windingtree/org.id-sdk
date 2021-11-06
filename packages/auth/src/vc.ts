import type { VoidSigner } from 'ethers';
import type { KeyLike, JWK } from './keys';
import type {
  VCTypedHolderReference,
  CredentialReference,
  VCProofReference,
  CryptographicSignatureSuiteReference
} from '@windingtree/org.json-schema/types/vc';
import type { NFTMetadata } from '@windingtree/org.json-schema/types/nft';
import {
  getAlgFromJWK,
  signatureTypeFromJWK,
  createJWK
} from './keys';
import { regexp, uid, object } from '@windingtree/org.id-utils';
import {
  vc as credentialSchema,
  org as orgJsonSchema,
  trustAssertion as trustAssertionSchema,
  nft as NftMetaDataSchema
} from '@windingtree/org.json-schema';
import { DateTime } from  'luxon';
import { importJWK } from 'jose';
import { CompactSign } from 'jose';
import { compactVerify } from 'jose';
import { decodeProtectedHeader } from 'jose';
import { base64url } from 'jose';
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
  setNftMetaData(
    metaData: NFTMetadata
  ): VCBuilderChain;
  sign(
    privateKey: KeyLike | Uint8Array | JWK
  ): Promise<SignedVC>;
  signWithBlockchainAccount(
    blockchainAccountId: string,
    signer: VoidSigner
  ): Promise<SignedVC>;
}

export interface DidGroupedCheckResult extends RegExpExecArray {
  groups: {
    did: string;
    fragment?: string;
  }
}

export interface BlockchainAccountIdGroupedResult extends RegExpExecArray {
  groups: {
    accountId: string;
    blockchainType: string;
    blockchainId: string;
    [key: string]: string;
  }
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

export interface CredentialSubjectValidatorConfig {
  schema: object.AnySchema;
  path: string;
}

export type SubjectTypeConfig = {
  [key: string]: CredentialSubjectValidatorConfig;
};

export interface CreateVcOptions {
  types?: SubjectTypeConfig;
}

export const CredentialSubjectTypesMap: SubjectTypeConfig = {
  'VerifiableCredential': {
    schema: credentialSchema,
    path: '#/definitions/CredentialReference'
  },
  'OrgJson': {
    schema: orgJsonSchema,
    path: ''
  },
  'TrustAssertion': {
    schema: trustAssertionSchema,
    path: ''
  },
};

// Prepare an unsigned data for signing
export const buildUnsignedDataForSignature = (
  verificationMethod: string,
  payload: string | CredentialReference | GenericObject
): string => `${
  base64url.encode(
      JSON.stringify(
        {
          alg: 'ES256K',
          kid: verificationMethod,
          typ: 'JWT'
        }
      )
    )
}.${
  base64url.encode(
      typeof payload === 'object'
        ? JSON.stringify(payload)
        : payload
    )
}`;

// Typed data domain for VC
export const verifiableCredentialDomain = {
  'name': 'Verifiable Credential'
};

// Typed data types for VC
export const verifiableCredentialSignatureTypes = {
  Payload: [
    {
      name: 'payload',
      type: 'string'
    }
  ]
};

// Sign payload using Ethereum account
export const signWithSigner = async (
  signer: VoidSigner,
  verificationMethod: string,
  payload: string | GenericObject
): Promise<string> => {
  const unsignedData = buildUnsignedDataForSignature(
    verificationMethod,
    payload
  );

  // @todo "_signTypedData" method should be renamed to the "signTypedData" in one of next ethers.js version
  const signature: string = await signer._signTypedData(
    verifiableCredentialDomain,
    verifiableCredentialSignatureTypes,
    {
      payload: unsignedData
    }
  );

  return `${unsignedData}.${base64url.encode(signature as string)}`;
}

// Parse string formatted as blockchain account Id
export const parseBlockchainAccountId = (blockchainAccountId: string): BlockchainAccountIdParsed => {
  const blockchainAccountIdResult  = regexp.blockchainAccountIdGrouped
    .exec(blockchainAccountId) as BlockchainAccountIdGroupedResult;

  if (!blockchainAccountIdResult) {
    throw new Error('Invalid blockchain account Id format');
  }

  const {
    accountId,
    blockchainType,
    blockchainId
  } = blockchainAccountIdResult.groups;

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
    protectedHeader = decodeProtectedHeader(jws);
  } catch (error) {
    throw new Error('Unable to decode JWS protected header');
  }

  let payload: CredentialReference;

  try {
    payload = JSON.parse(
      base64url.decode(encodedPayload).toString()
    );
  } catch (error) {
    throw new Error('Unable to decode JWS payload');
  }

  return {
    protectedHeader,
    payload,
    signature: base64url.decode(signature).toString(),
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
  const recoveredAccountId = ethersUtils.verifyTypedData(
    verifiableCredentialDomain,
    verifiableCredentialSignatureTypes,
    {
      payload: message
    },
    signature
  );

  if (accountId.toUpperCase() !== recoveredAccountId.toUpperCase()) {
    throw new Error(
      `VC signed by different accountId: ${accountId} though expected: ${recoveredAccountId}`
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
    throw new Error(`Invalid holder DID format: ${holder}`);
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
    throw new Error('Invalid date format');
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
    throw new Error('JWS must be provided');
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
  type: string | string[] | undefined,
  options?: CreateVcOptions
): VCBuilderChain => {
  let subjectTypesValidators = CredentialSubjectTypesMap;

  if (options && options.types) {
    // adds additional validators to the defaults
    subjectTypesValidators = {
      ...subjectTypesValidators,
      ...options.types
    };
  }

  const groupedCheck = regexp.didGrouped.exec(issuer) as DidGroupedCheckResult;

  if (!groupedCheck || !groupedCheck.groups) {
    throw new Error(`Invalid issuer DID format: ${issuer}`);
  }

  const {
    did,
    fragment
  } = groupedCheck.groups;

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

    // Add additional values to the vcType
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

  if (options && options.types) {
    // Add types defined in options to the vcType
    vcType = Object.keys(options.types).reduce(
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
  let nftMetaData: NFTMetadata;
  let unsignedVC: CredentialReference;

  const buildUnsignedVC = (): void => {
    // Creation of unsigned VC object
    unsignedVC = {
      '@context': [
        'https://www.w3.org/2018/credentials/v1'
      ],
      id: uid.uuid4(),
      type: vcType,
      issuer: did,
      issuanceDate: vcIssuanceDate.toISO(),
      ...(
        nftMetaData
          ? nftMetaData
          : {}
      ),
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

    // Validate VC against the schema
    const schemaConfig = subjectTypesValidators['VerifiableCredential'];

    const validationResult = object.validateWithSchemaOrRef(
      schemaConfig.schema,
      schemaConfig.path,
      unsignedVC
    );

    if (validationResult !== null) {
      throw new Error(
        `VC schema validation error: ${validationResult}`
      );
    }
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

      if (typeof subject !== 'object' || Object.keys(subject).length === 0) {
        throw new Error(
          `Credential subject must be a valid object and cannot be empty`
        );
      }

      // Validate VC subject against the schema
      vcType.forEach(
        (type: string) => {

          if (type !== 'VerifiableCredential') {

            const schemaConfig = subjectTypesValidators[type];

            if (!schemaConfig) {
              throw new Error(`Unsupported VC subject type: ${type}`);
            }

            const validationResult = object.validateWithSchemaOrRef(
              schemaConfig.schema,
              schemaConfig.path,
              subject
            );

            if (validationResult !== null) {
              throw new Error(
                `VC subject schema validation error: ${validationResult}`
              );
            }
          }
        }
      );

      vcSubject = subject;
      return chain;
    },

    setNftMetaData: metaData => {
      const validationResult = object.validateWithSchemaOrRef(
        NftMetaDataSchema,
        '',
        metaData
      );

      if (validationResult !== null) {
        throw new Error(
          `VC NFT meta-data schema validation error: ${validationResult}`
        );
      }

      nftMetaData = metaData;

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
        privateKey = await importJWK(privateKey as JWK, alg);
      } else {
        // Try to use key in KeyLike format

        if ((privateKey as KeyLike).type !== 'private') {
          throw new Error(
            'Only private keys are accepted for sining of VCs\''
          );
        }

        const privateKeyJWK: JWK = await createJWK(privateKey as KeyLike);
        signatureType = signatureTypeFromJWK(privateKeyJWK);
        alg = getAlgFromJWK(privateKeyJWK, true);
      }

      const encoder = new TextEncoder();
      const jws: string = await new CompactSign(encoder.encode(
        JSON.stringify(unsignedVC)
      ))
        .setProtectedHeader(
          {
            alg
          }
        )
        .sign(privateKey as KeyLike);

      const vcProof = buildProofUtil(jws, signatureType, issuer);

      return {
        ...unsignedVC,
        proof: vcProof
      };
    },

    // Sign VC with Web3 provider
    signWithBlockchainAccount: async (
      blockchainAccountId,
      signer: VoidSigner
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
          'The signer address is different from blockchain account'
        );
      }

      switch (blockchainType) {
        case 'eip155':

          jws = await signWithSigner(
            signer,
            issuer,
            unsignedVC
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

      return {
        ...unsignedVC,
        proof: vcProof
      };
    }
  };

  return chain;
};

// VC verification
export const verifyVC = async (
  vc: SignedVC,
  publicKey: KeyLike | Uint8Array | JWK | string
): Promise<CredentialReference> => {
  // Validate ORG.JSON VC against the VC schema
  const vcSchemaValidationResult = object.validateWithSchemaOrRef(
    credentialSchema,
    '#/definitions/CredentialReference',
    vc
  );

  if (vcSchemaValidationResult !== null) {
    throw new Error(`VC schema validation error: ${vcSchemaValidationResult}`);
  }

  const jws = object.getDeepValue(vc, 'proof.jws') as string; // type is validated by schema

  if (jws === '') {
    throw new Error('Invalid VC signature');
  }

  const decoder = new TextDecoder();
  let payload: CredentialReference;

  if (typeof publicKey === 'object') {
    // Trying to use a public key for the VC verification

    if ((publicKey as JWK).kty) {
      // JWK provided so converting key to KeyLike format
      const alg = getAlgFromJWK(publicKey as JWK);
      publicKey = await importJWK(publicKey as JWK, alg);
    }

    if ((publicKey as KeyLike).type !== 'public') {
      throw new Error(
        'Only public keys are accepted for verifying of VCs\''
      );
    }

    const verificationResult = await compactVerify(jws, publicKey as KeyLike);

    try {
      payload = JSON.parse(
        decoder.decode(verificationResult.payload)
      ) as CredentialReference;
    } catch (error) {
      throw new Error('Unable to parse VC payload');
    }
  } else if (regexp.blockchainAccountId.exec(publicKey)) {
    // Trying to parse a blockchain account Id
    const {
      accountId,
      blockchainType
    } = parseBlockchainAccountId(publicKey);

    switch (blockchainType) {
      case 'eip155':
        payload = verifyJwsSignedWithBlockchainAccount(jws, accountId) as CredentialReference;
        break;
      default:
        throw new Error(`Unsupported blockchain type: ${blockchainType}`);
    }
  } else {
    throw new Error('Unsupported type of public key');
  }

  const unsignedPayload = JSON.parse(JSON.stringify(vc));
  delete unsignedPayload.proof;

  // Compare unsigned and signed payloads
  if (JSON.stringify(unsignedPayload) !== JSON.stringify(payload)) {
    throw new Error('Invalid signed payload');
  }

  const currentDate = DateTime.now();

  // Check if VC expired
  if (
    typeof payload.expirationDate !== 'undefined' &&
    currentDate >= DateTime.fromISO(payload.expirationDate)
  ) {
    throw new Error(`VC expired at: ${payload.expirationDate}`);
  }

  // Check if VC active by from-until rules
  if (
    typeof payload.validFrom !== 'undefined' &&
    typeof payload.validUntil !== 'undefined' &&
    !(
      currentDate >= DateTime.fromISO(payload.validFrom) &&
      currentDate <= DateTime.fromISO(payload.validUntil)
    )
  ) {
    throw new Error(
      `VC inactive. Valid from date: ${payload.validFrom}. Valid until date: ${payload.validUntil}`
    );
  }

  // Check if VC active by `from` date only
  if (
    typeof vc.validFrom !== 'undefined' &&
    typeof vc.validUntil === 'undefined' &&
    currentDate < DateTime.fromISO(vc.validFrom)
  ) {
    throw new Error(
      `VC inactive. Valid from date: ${payload.validFrom}`
    );
  }

  // Check if VC active by `until` date only
  if (
    typeof vc.validFrom === 'undefined' &&
    typeof vc.validUntil !== 'undefined' &&
    currentDate > DateTime.fromISO(vc.validUntil)
  ) {
    throw new Error(
      `VC inactive. Valid until date: ${payload.validUntil}`
    );
  }

  return payload;
};
