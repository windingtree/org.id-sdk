import type { KeyLike, JWK } from '@windingtree/org.id-auth/dist/keys';
import type { DidVerificationMethod } from '../src';
import {
  KeyTypes,
  generateKeyPair,
  createJWK
} from '@windingtree/org.id-auth/dist/keys';
import {
  createVerificationMethodWithKey,
  createVerificationMethodWithBlockchainAccountId
} from '../src';
import chai, { expect } from 'chai';
import chp from 'chai-as-promised';
chai.use(chp);

describe('DID utilities', () => {
  const id = 'did:orgid:4:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
  const controller = 'did:orgid:4:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d';

  describe('#createVerificationMethodWithKey', () => {
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
  });

  describe('#createVerificationMethodWithBlockchainAccountId', () => {
    const validIds = [
      'eip155:1:0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb',
      '0xab16a96d359ec26a11e2c2b3d8f8b8942d5bfcdb@eip155:1'
    ];

    it('should throw if invalid blockchain account Id provided', async () => {
      await expect(
        createVerificationMethodWithBlockchainAccountId(
          id,
          controller,
          'invalidId'
        )
      ).to.rejectedWith('Invalid blockchain account Id format');
    });

    it('should create verification method with blockchain account id', async () => {
      validIds.forEach(async accountId => {
        const method = await createVerificationMethodWithBlockchainAccountId(
          id,
          controller,
          accountId
        );
        expect(method).to.haveOwnProperty('id').to.equal(id);
        expect(method).to.haveOwnProperty('controller').to.equal(controller);
        expect(method).to.haveOwnProperty('type').to.equal('EcdsaSecp256k1RecoveryMethod2020');
        expect(method).to.haveOwnProperty('blockchainAccountId').to.equal(accountId);
      });
    });
  });
});
