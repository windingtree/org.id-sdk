import type { KeyLike, JWK } from '@windingtree/org.id-auth/dist/keys';
import type { DidVerificationMethod } from '../src/verificationMethod';
import {
  KeyTypes,
  generateKeyPair,
  createJWK
} from '@windingtree/org.id-auth/dist/keys';
import {
  createVerificationMethodWithKey
} from '../src/verificationMethod';
import { expect } from 'chai';

describe('DID utilities', () => {
  const id = 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
  const controller = 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d';

  describe('#createVerificationMethod', () => {
    let keyPairs: { privateKey: KeyLike; publicKey: KeyLike; }[];
    let keyJWK: { privateKey: JWK; publicKey: JWK; }[];

    before(async () => {
      keyPairs = await Promise.all(
        KeyTypes
          .filter(t => t !== 'EcdsaSecp256k1RecoveryMethod2020')
          .map(t => generateKeyPair(t))
      );
      keyJWK = await Promise.all(
        keyPairs.map(async t => {
          const privateKey = await createJWK(t.privateKey);
          const publicKey = await createJWK(t.publicKey);
          return {
            privateKey,
            publicKey
          }
        })
      );
    });

    it('should create verification method from KeyLike', async () => {
      const methods: DidVerificationMethod[] = await Promise.all(
        keyPairs.map(
          k => createVerificationMethodWithKey(
            id,
            controller,
            k.publicKey
          )
        )
      );
      methods.forEach(m => {
        expect(typeof m.id).to.equal('string');
        expect(typeof m.controller).to.equal('string');
        expect(typeof m.type).to.equal('string');
        expect(typeof m.publicKeyJwk).to.equal('object');
      });
    });

    it('should create verification method from JWK', async () => {
      const methods: DidVerificationMethod[] = await Promise.all(
        keyJWK.map(
          k => createVerificationMethodWithKey(
            id,
            controller,
            k.publicKey
          )
        )
      );
      methods.forEach(m => {
        expect(typeof m.id).to.equal('string');
        expect(typeof m.controller).to.equal('string');
        expect(typeof m.type).to.equal('string');
        expect(typeof m.publicKeyJwk).to.equal('object');
      });
    });
  })
});
