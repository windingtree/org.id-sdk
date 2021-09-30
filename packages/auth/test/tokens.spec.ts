import type { KeyLike, KeyObject } from '../src/keys';
import { createAuthJWT, verifyAuthJWT } from '../src/tokens';
import {
  KeyTypes,
  keyTypeConfig,
  generateKeyPair,
  importKeyPrivatePem,
  importKeyPublicPem
} from '../src/keys';
import {
  privatePem,
  publicPem
} from './mocks/pemKeys';

describe('Tokens', () => {

  describe('JWT tokens creation', () => {
    const issuer = 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
    const audience = 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
    const scope = '';
    let privateKey: KeyObject;
    let publicKey: KeyObject;
    let keyPairs: { privateKey: KeyLike, publicKey: KeyLike }[];

    before(async () => {
      privateKey = importKeyPrivatePem(privatePem);
      publicKey = importKeyPublicPem(publicPem);
      keyPairs = await Promise.all(
        KeyTypes
          .filter(t => t !== 'EcdsaSecp256k1RecoveryMethod2020')
          .filter(type => keyTypeConfig[type].jws) // exclude key types not supported by JWS
          .map(async type => generateKeyPair(type))
      );
    });

    describe('#createAuthToken', () => {

      it('should create JWT token from imported key', async () => {
        const jwt = await createAuthJWT(
          privateKey,
          issuer,
          audience,
          scope
        );
        await verifyAuthJWT(
          jwt,
          publicKey,
          issuer,
          audience,
          scope
        );
      });

      it('should create JWT token from generated keys', async () => {
        const jwts = await Promise.all(
          keyPairs.map(
            k => createAuthJWT(
              k.privateKey,
              issuer,
              audience,
              scope
            )
          )
        );
        await Promise.all(
          jwts.map(
            (t, i) => verifyAuthJWT(
              t,
              keyPairs[i].publicKey,
              issuer,
              audience,
              scope
            )
          )
        );
      });
    });
  });
});
