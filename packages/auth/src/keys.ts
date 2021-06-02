import type {
  GenerateKeyPairOptions
} from 'jose/util/generate_key_pair';
import type {
  KeyObject
} from 'crypto';
import type {
  KeyLike,
  JWK
} from 'jose/jwk/from_key_like';
import type {
  VerificationMethodReference
} from '@windingtree/org.json-schema';
import {
  generateKeyPair as generate
} from 'jose/util/generate_key_pair';
import { fromKeyLike } from 'jose/jwk/from_key_like'
import {
  createPrivateKey,
  createPublicKey
} from 'crypto';

export type {
  KeyObject,
  KeyLike,
  JWK
}

export type VerificationMethodType = VerificationMethodReference['type'];

export type KeysAlgConfig = {
    alg: string,
    type: string,
    jws: boolean,
    crv?: string,
    modulusLength?: number
}

export const KeyTypes: VerificationMethodType[] = [
  'EcdsaSecp256k1VerificationKey2019',
  'Ed25519VerificationKey2018',
  'RsaVerificationKey2018',
  'X25519KeyAgreementKey2019',
];

export const keyTypeConfig: {
  [key: string]: KeysAlgConfig
}  = {
  'EcdsaSecp256k1VerificationKey2019': {
    alg: 'ES256K',
    type: 'ec',
    jws: true,
  },
  'Ed25519VerificationKey2018': {
    alg: 'EdDSA',
    type: 'ed25519',
    jws: true,
    crv: 'Ed25519',
  },
  'RsaVerificationKey2018': {
    alg: 'RSA-OAEP',
    type: 'rsa',
    jws: false,
    modulusLength: 2048,
  },
  'X25519KeyAgreementKey2019': {
    alg: 'ECDH-ES+A256KW',
    type: 'x25519',
    jws: false,
    crv: 'X25519',
  }
};

export const keyTypeMap: {
  [key: string]: VerificationMethodType
} = {
  'secp256k1': 'EcdsaSecp256k1VerificationKey2019',
  'Ed25519': 'Ed25519VerificationKey2018',
  'RSA': 'RsaVerificationKey2018',
  'X25519': 'X25519KeyAgreementKey2019'
};

// Get a key type from the JWK
export const keyTypeFromJWK = (key: JWK): VerificationMethodType => {

  if (!key.kty) {
    throw new Error('Broken JWK: key type not found');
  }

  let keyType: VerificationMethodType | undefined;

  switch (key.kty.toLocaleLowerCase()) {
    case 'ec':
    case 'okp':
      if (!key.crv) {
        throw new Error('Broken JWK: key curve type not found');
      }
      keyType = keyTypeMap[key.crv];
      break;
    case 'rsa':
      keyType = keyTypeMap['RSA'];
      break;
    default:
  }

  if (!keyType) {
    throw new Error(`Unsupported key type: ${key.kty}`);
  }

  return keyType;
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
    case 'okp':
      if (!key.crv) {
        throw new Error('Broken JWK: key curve type not found');
      }
      keyConfig = keyTypeConfig[keyTypeMap[key.crv]];
      break;
    case 'rsa':
      keyConfig = keyTypeConfig[keyTypeMap['RSA']];
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
): Promise<{
  privateKey: KeyLike,
  publicKey: KeyLike,
}> => {
  const algConfig: KeysAlgConfig = keyTypeConfig[type];

  if (!algConfig) {
    throw new Error(`Unsupported key type: ${type}`);
  }

  return generate(
    algConfig.alg,
    {
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
export const createJWK = (key: KeyLike): Promise<JWK> => fromKeyLike(key)

// Import a private key
export const importKeyPrivatePem = (
  key: string | Buffer,
  passphrase?: string
): KeyObject => createPrivateKey(
  {
    key,
    format: 'pem',
    ...(
      passphrase
        ? {
          passphrase
        }
        : {}
    )
  }
);

// Import a public key
export const importKeyPublicPem = (
  key: string | Buffer
): KeyObject => createPublicKey(
  {
    key,
    format: 'pem'
  }
);
