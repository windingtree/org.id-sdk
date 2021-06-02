import type {
  KeyLike,
  KeyObject,
  JWK,
  VerificationMethodType
} from './keys';
import {
  getAlgFromJWK,
  keyTypeFromJWK,
  createJWK
} from './keys';
import type {
  VCTypedHolderReference,
  CredentialReference,
  VCProofReference
} from '@windingtree/org.json-schema';
import {
  regexp,
  uid,
  object
} from '@windingtree/org.id-utils';
import { DateTime } from  'luxon';
import { parseJwk } from 'jose/jwk/parse';
import { CompactSign } from 'jose/jws/compact/sign';
import { compactVerify } from 'jose/jws/compact/verify';

export type {
  VCTypedHolderReference,
  CredentialReference,
  VCProofReference
}

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
}

export interface DidGroupedCheckResult {
  did?: string;
  fragment?: string;
}

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
  type: VerificationMethodType,
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
      `Key identifier must be provided as fragment in the DID: ${issuer} #??????`
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

  let vcHolder: string | VCTypedHolderReference | undefined;
  const vcIssuanceDate = DateTime.now();
  let vcExpirationDate: DateTime | undefined;
  let vcValidFrom: DateTime | undefined;
  let vcValidUntil: DateTime | undefined;
  let vcSubject: CredentialSubject;

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

      vcSubject = subject;
      return chain;
    },

    // Sign VC with private token
    sign: async privateKey => {

      // Creation of unsigned VC object
      const unsignedVS: CredentialReference = {
        '@context': [
          'https://www.w3.org/2018/credentials/v1'
        ],
        id: uid.uuid4(),
        type: vcType,
        issuer: did,
        ...(
          vcHolder
            ? {
              holder: vcHolder
            }
            : {}
        ),
        issuanceDate: vcIssuanceDate.toISO(),
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

      let alg: string;
      let keySuiteType: VerificationMethodType;

      if ((privateKey as JWK).kty) {
        // Use raw JWK
        alg = getAlgFromJWK(privateKey as JWK);
        keySuiteType = keyTypeFromJWK(privateKey as JWK);
        privateKey = await parseJwk(privateKey as JWK);
      } else {
        // Try to use key in KeyLike format

        if ((privateKey as KeyObject).type !== 'private') {
          throw new Error(
            'Only private keys are accepted for sining of VCs\''
          );
        }

        const privateKeyJWK: JWK = await createJWK(privateKey as KeyObject);
        keySuiteType = keyTypeFromJWK(privateKeyJWK);
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

      const vcProof = buildProofUtil(jws, keySuiteType, issuer);

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
  publicKey: KeyLike | JWK
): Promise<CredentialReference> => {
  const jws = object.getDeepValue(vc, 'proof.jws');

  if (typeof jws !== 'string') {
    throw new Error('Unable to find VC signature');
  }

  if ((publicKey as JWK).kty) {
    // JWK provided so converting key to KeyLike format
    publicKey = await parseJwk(publicKey as JWK);
  }

  if ((publicKey as KeyObject).type !== 'public') {
    throw new Error(
      'Only public keys are accepted for verifying of VCs\''
    );
  }

  const decoder = new TextDecoder();
  const { payload } = await compactVerify(jws, publicKey as KeyObject);

  let decodedPayload: CredentialReference;

  try {
    decodedPayload = JSON.parse(
      decoder.decode(payload)
    );
  } catch (error) {
    throw new Error('Unable to parse VC payload');
  }

  // @todo Add validation of the payload against the VC schema

  return decodedPayload;
};

// Check if VC expired
export const isExpired = (vc: CredentialReference): boolean => {
  const currentDate = DateTime.now();
  return typeof vc.expirationDate === 'undefined' ||
    currentDate > DateTime.fromISO(vc.expirationDate);
};

// Check if VC fullfil from-until range
export const isValidFromUntil = (vc: CredentialReference): boolean => {
  const currentDate = DateTime.now();

  if (typeof vc.validFrom !== 'undefined' && typeof vc.validUntil !== 'undefined') {
    return currentDate >= DateTime.fromISO(vc.validFrom) &&
      currentDate <= DateTime.fromISO(vc.validUntil);
  }

  if (typeof vc.validFrom !== 'undefined' && typeof vc.validUntil === 'undefined') {
    return currentDate >= DateTime.fromISO(vc.validFrom);
  }

  if (typeof vc.validFrom === 'undefined' && typeof vc.validUntil !== 'undefined') {
    return currentDate <= DateTime.fromISO(vc.validUntil);
  }

  return true;
};
