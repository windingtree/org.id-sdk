import type { KeyLike, JWK } from '../src/keys';
import {
  KeyTypes,
  keyTypeConfig,
  generateKeyPair,
  createJWK,
  signatureTypeMap,
  signatureTypeFromJWK,
  getAlgFromJWK,
  keyTypeFromJWK,
  importKeyPrivatePem,
  importKeyPublicPem
} from '../src/keys';
import { privatePem, publicPem } from './mocks/pemKeys';
import { clone, isNodeJs } from './helpers/utils';
import { expect } from 'chai';

type KeyLikeSet = { privateKey: KeyLike, publicKey: KeyLike }[];
type KeyJWKSet = { privateKey: JWK, publicKey: JWK }[];

describe('Keys utilities', () => {
  let keys: KeyLikeSet;

  before(async () => {
    keys = await Promise.all(
      KeyTypes
        .filter(t => !(!isNodeJs() && t === 'EcdsaSecp256k1VerificationKey2019'))
        .map(type => generateKeyPair(type))
    );
  });

  describe('KeyLike keys', () => {

    describe('#generateKeyPair', () => {

      it('should throw if unsupported key type provided', async () => {
        expect(() => generateKeyPair('Unknown'))
          .to.throw(`Unsupported key type: Unknown`);
      });

      it('should generate key pairs', async () => {
        keys.forEach((key) => {
          expect(key.publicKey.type).to.equal('public');
          expect(key.privateKey.type).to.equal('private');
        });
      });
    });
  });

  describe('JWK keys', () => {
    let keysJwk: { privateKey: JWK, publicKey: JWK }[];
    let keysWithKnownSignatures: KeyJWKSet;
    let signatureTypes: string[];
    let algTypes: string[];

    before(async () => {
      keysJwk = await Promise.all(
        keys.map(async key => ({
          privateKey: await createJWK(key.privateKey),
          publicKey: await createJWK(key.publicKey)
        }))
      );
      keysWithKnownSignatures = keysJwk.filter(
        t => t.privateKey.crv !== 'X25519'
      );
      signatureTypes = Object.values(signatureTypeMap);
      algTypes = Object.values(keyTypeConfig).map(k => k.alg);
    });

    describe('#createJWK', () => {

      it('should create JWK from key', async () => {
        keysJwk.forEach(async k => {
          for (const key of [k.privateKey, k.publicKey]) {
            expect(typeof key.kty).to.equal('string');
          }
        });
      });
    });

    describe('#signatureTypeFromJWK', () => {

      it('should throw if broken JWK key provided', async () => {
        const key = clone(keysJwk[0].privateKey);
        key.kty = undefined;
        expect(() => signatureTypeFromJWK(key))
          .to.throw('Broken JWK: key type not found');
      });

      it('should throw if key curve type not found', async () => {
        const key = clone(keysJwk[0].privateKey);
        key.crv = undefined;
        expect(() => signatureTypeFromJWK(key))
          .to.throw('Broken JWK: key curve type not found');
      });

      it('should throw if unsupported key type provided', async () => {
        const key = clone(keysJwk[0].privateKey);
        key.kty = 'Unknown';
        expect(() => signatureTypeFromJWK(key))
          .to.throw(`Unsupported signature type: ${key.kty}`);
      });

      it('should return signature type from JWK', async () => {
        keysWithKnownSignatures.forEach(async (k, i) => {
          for (const key of [k.privateKey, k.publicKey]) {
            expect(signatureTypeFromJWK(key)).to.equal(signatureTypes[i]);
          }
        });
      });
    });

    describe('#keyTypeFromJWK', () => {

      it('should throw if broken JWK key provided', async () => {
        const key = clone(keysJwk[0].privateKey);
        key.kty = undefined;
        expect(() => keyTypeFromJWK(key))
          .to.throw('Broken JWK: key type not found');
      });

      it('should throw if key curve type not found', async () => {
        const key = clone(keysJwk[0].privateKey);
        key.crv = undefined;
        expect(() => keyTypeFromJWK(key))
          .to.throw('Broken JWK: key curve type not found');
      });

      it('should throw if unsupported key type provided', async () => {
        const key = clone(keysJwk[0].privateKey);
        key.kty = 'Unknown';
        expect(() => keyTypeFromJWK(key))
          .to.throw(`Unsupported key type: ${key.kty}`);
      });

      it('should return standard key type by JWK', async () => {
        keysJwk.forEach(async (k, i) => {
          for (const key of [k.privateKey, k.publicKey]) {
            expect(keyTypeFromJWK(key)).to.equal(KeyTypes[i]);
          }
        });
      });
    });

    describe('#getAlgFromJWK', () => {

      it('should throw if broken JWK key provided', async () => {
        const key = clone(keysJwk[0].privateKey);
        key.kty = undefined;
        expect(() => getAlgFromJWK(key))
          .to.throw('Broken JWK: key type not found');
      });

      it('should throw if key curve type not found', async () => {
        const key = clone(keysJwk[0].privateKey);
        key.crv = undefined;
        expect(() => getAlgFromJWK(key))
          .to.throw('Broken JWK: key curve type not found');
      });

      it('should throw if unsupported key type provided', async () => {
        const key = clone(keysJwk[0].privateKey);
        key.kty = 'Unknown';
        expect(() => getAlgFromJWK(key))
          .to.throw(`Unsupported key type: ${key.kty}`);
      });

      it('should return algorithm type from JWK', async () => {
        keysWithKnownSignatures.forEach(async (k, i) => {
          for (const key of [k.privateKey, k.publicKey]) {
            expect(getAlgFromJWK(key)).to.equal(algTypes[i]);
          }
        });
      });
    });
  });

  if (isNodeJs()) {

    describe('#importKeyPrivatePem', () => {

      it('should import private key without passphrase', async () => {
        const privateKey = await importKeyPrivatePem(privatePem);
        expect(privateKey.type).to.equal('private');
      });
    });

    describe('#importKeyPublicPem', () => {

      it('should import public key', async () => {
        const publicKey = await importKeyPublicPem(publicPem);
        expect(publicKey.type).to.equal('public');
      });
    });
  }
});
