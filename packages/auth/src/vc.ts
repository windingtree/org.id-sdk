import type {
  KeyLike,
  KeyObject,
  JWK
} from './keys';
import type {
  VCTypedHolderReference,
  CredentialReference,
  VCProofReference,
  CryptographicSignatureSuiteReference
} from '@windingtree/org.json-schema';
import type {
  HttpProvider,
  WebsocketProvider,
  IpcProvider
}  from 'web3-core';
import {
  getAlgFromJWK,
  signatureTypeFromJWK,
  createJWK
} from './keys';
import {
  regexp,
  uid,
  object
} from '@windingtree/org.id-utils';
import { DateTime } from  'luxon';
import { parseJwk } from 'jose/jwk/parse';
import { CompactSign } from 'jose/jws/compact/sign';
import { compactVerify } from 'jose/jws/compact/verify';
import base64 from 'base64-js';

export type {
  VCTypedHolderReference,
  CredentialReference,
  VCProofReference
}

export type WebProvider =
  | HttpProvider
  | WebsocketProvider
  | IpcProvider;

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
  signWithWeb3Provider(
    web3Provider: WebProvider,
    ownerAddress: string
  ): Promise<SignedVC>;
}

export interface DidGroupedCheckResult {
  did?: string;
  fragment?: string;
}

export const signWithWeb3Provider = async (
  web3Provider: WebProvider,
  from: string,
  verificationMethod: string,
  payload: string | { [k: string]: unknown }
): Promise<string> => {
  const encoder = new TextEncoder();

  const encodedHeader = encoder.encode(
    JSON.stringify({
      alg: 'ES256K',
      kid: verificationMethod,
      typ: 'JWS'
    })
  );

  const encodedPayload = encoder.encode(
    typeof payload === 'object'
      ? JSON.stringify(payload)
      : payload
  );

  const unsignedData =
    `${base64.fromByteArray(encodedHeader)}.${base64.fromByteArray(encodedPayload)}`;

  const params = [
    unsignedData,
    from
  ];

  const signature: string = await new Promise((resolve, reject) => {
    web3Provider.send(
      {
        jsonrpc: '2.0',
        method: 'personal_sign',
        params,
        id: new Date().getTime()
      },
      (error: Error | null, result) => {
        if (error) {
          return reject(error);
        }
        if (typeof result === 'undefined') {
          throw new Error('Unable to get a signature');
        }
        if (result.error) {
          throw new Error(result.error);
        }
        resolve(result.result);
      }
    );
  });

  let signatureString = '';

  for (let i = 2; i < signature.length; i += 2) {
    signatureString += String.fromCharCode(parseInt(signature.substring(i, i + 2), 16))
  }

  const encodedSignature = encoder.encode(signatureString);

  return `${unsignedData}.${base64.fromByteArray(encodedSignature)}`;
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
    signWithWeb3Provider: async (
      web3Provider,
      ownerAddress
    ) => {
      buildUnsignedVC();

      const jws = await signWithWeb3Provider(
        web3Provider,
        ownerAddress,
        issuer,
        unsignedVS
      );

      const vcProof = buildProofUtil(
        jws,
        'EcdsaSecp256k1RecoverySignature2020',
        issuer
      );

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
