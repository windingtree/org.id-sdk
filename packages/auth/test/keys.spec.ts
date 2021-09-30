import type { KeyLike, KeyObject, JWK } from '../src/keys';
import {
  KeyTypes,
  keyTypeConfig,
  generateKeyPair,
  createJWK,
  keyTypeFromJWK,
  importKeyPrivatePem,
  importKeyPublicPem
} from '../src/keys';
import { privatePem, publicPem } from './mocks/pemKeys';
import { expect } from 'chai';

describe('Keys utilities', () => {
  let keys: { privateKey: KeyLike, publicKey: KeyLike }[];

  before(async () => {
    keys = await Promise.all(
      KeyTypes
        .filter(t => t !== 'EcdsaSecp256k1RecoveryMethod2020')
        .map(async type => generateKeyPair(type))
    );
  });

  describe('KeyLike keys', () => {

    describe('#generateKeyPair', () => {

      it('should generate key pairs', async () => {
        keys.forEach((k, i) => {
          for (const key of [k.privateKey, k.publicKey]) {
            expect((key as KeyObject).asymmetricKeyType).to.equal(
              keyTypeConfig[KeyTypes[i]].type
            );
          }
        });
      });
    });
  });

  describe('JWK keys', () => {
    let keysJwk: { privateKey: JWK, publicKey: JWK }[];

    before(async () => {
      keysJwk = await Promise.all(
        keys.map(async key => ({
          privateKey: await createJWK(key.privateKey),
          publicKey: await createJWK(key.publicKey)
        }))
      );
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

    describe('#keyTypeFromJWK', () => {

      it('should return standard key type by JWK', async () => {
        keysJwk.forEach(async (k, i) => {
          for (const key of [k.privateKey, k.publicKey]) {
            expect(keyTypeFromJWK(key)).to.equal(KeyTypes[i]);
          }
        });
      });
    });
  });

  describe('#importKeyPrivatePem', () => {

    it('should import private key without passphrase', async () => {
      const privateKey = importKeyPrivatePem(privatePem);
      expect(privateKey.type).to.equal('private');
    });
  });

  describe('#importKeyPublicPem', () => {

    it('should import public key', async () => {
      const publicKey = importKeyPublicPem(publicPem);
      expect(publicKey.type).to.equal('public');
    });
  });
});
