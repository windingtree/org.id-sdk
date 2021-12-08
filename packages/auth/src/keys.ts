import type { GenerateKeyPairOptions } from 'jose';
import type { KeyLike, JWK } from 'jose';
import type {
  VerificationMethodReference,
  CryptographicSignatureSuiteReference
} from '@windingtree/org.json-schema/types/org.json';
import { generateKeyPair as generate } from 'jose';
import { exportJWK } from 'jose';
import { importSPKI, importPKCS8 } from 'jose';

export type {
  KeyLike,
  JWK
}

export type KeyLikeType = 'privateKey' | 'publicKey';

export type KeyPair = {
  [k in KeyLikeType]: KeyLike;
};

export type VerificationMethodType = VerificationMethodReference['type'];

export type KeysAlgConfig = {
    alg: string,
    type: string,
    jws: boolean,
    crv?: string,
    modulusLength?: number,
    signatureType?: CryptographicSignatureSuiteReference
};

export const KeyTypes: VerificationMethodType[] = [
  'EcdsaSecp256k1VerificationKey2019',
  'JsonWebKey2020'
];

export const keyTypeConfig: {
  [key: string]: KeysAlgConfig
}  = {
  'EcdsaSecp256k1VerificationKey2019': {
    alg: 'ES256K',
    type: 'ec',
    jws: true,
    crv: 'secp256k1',
  },
  'JsonWebKey2020': {
    alg: 'ES256',
    type: 'ec',
    jws: true,
    crv: 'P-256'
  }
};

export const keyTypeMap: {
  [key: string]: VerificationMethodType
} = {
  'secp256k1': 'EcdsaSecp256k1VerificationKey2019',
  'P-256': 'JsonWebKey2020'
};

export const signatureTypeMap: {
  [key: string]: CryptographicSignatureSuiteReference
} = {
  'secp256k1': 'EcdsaSecp256k1Signature2019',
  'P-256': 'JsonWebSignature2020'
};

// Get a key type from the JWK
export const keyTypeFromJWK = (key: JWK): VerificationMethodType => {

  if (!key.kty) {
    throw new Error('Broken JWK: key type not found');
  }

  let keyType: VerificationMethodType | undefined;

  switch (key.kty.toLocaleLowerCase()) {
    case 'ec':
      if (!key.crv) {
        throw new Error('Broken JWK: key curve type not found');
      }
      keyType = keyTypeMap[key.crv];
      break;
    default:
  }

  if (!keyType) {
    throw new Error(`Unsupported key type: ${key.kty}`);
  }

  return keyType;
};

export const signatureTypeFromJWK = (key: JWK): CryptographicSignatureSuiteReference => {

  if (!key.kty) {
    throw new Error('Broken JWK: key type not found');
  }

  let signatureType: CryptographicSignatureSuiteReference | undefined;

  switch (key.kty.toLocaleLowerCase()) {
    case 'ec':
      if (!key.crv) {
        throw new Error('Broken JWK: key curve type not found');
      }
      signatureType = signatureTypeMap[key.crv];
      break;
    default:
  }

  if (!signatureType) {
    throw new Error(`Unsupported signature type: ${key.kty}`);
  }

  return signatureType;
};

// Get key algorithm from the JWK
export const getAlgFromJWK = (
  key: JWK,
  supportJws = false
): string => {

  if (!key.kty) {
    throw new Error('Broken JWK: key type not found');
  }

  let keyConfig: KeysAlgConfig | undefined;

  switch (key.kty.toLocaleLowerCase()) {
    case 'ec':
      if (!key.crv) {
        throw new Error('Broken JWK: key curve type not found');
      }
      keyConfig = keyTypeConfig[keyTypeMap[key.crv]];
      break;
    default:
  }

  if (!keyConfig) {
    throw new Error(`Unsupported key type: ${key.kty}`);
  }

  if (supportJws && !keyConfig.jws) {
    throw new Error(`Algorithm ${keyConfig.alg} not supported by JWS`);
  }

  return keyConfig.alg;
};

// Generate a Key Pair in KeyLike format
export const generateKeyPair = (
  type: string,
  options: GenerateKeyPairOptions = {},
): Promise<KeyPair> => {
  const algConfig: KeysAlgConfig = keyTypeConfig[type];

  if (!algConfig) {
    throw new Error(`Unsupported key type: ${type}`);
  }

  return generate(
    algConfig.alg,
    {
      extractable: true,
      ...options,
      ...(
        algConfig.crv
          ? {
            crv: algConfig.crv
          }
          : {}
      ),
      ...(
        algConfig.modulusLength
          ? {
            modulusLength: algConfig.modulusLength
          }
          : {}
      )
    }
  );
};

// Create JWK from a key
export const createJWK = (key: KeyLike): Promise<JWK> => exportJWK(key)

// Import a private key
export const importKeyPrivatePem = (
  key: string,
  alg = 'ES256K'
): Promise<KeyLike> => importPKCS8(key, alg);

// Import a public key
export const importKeyPublicPem = (
  key: string,
  alg = 'ES256K'
): Promise<KeyLike> => importSPKI(key, alg);
