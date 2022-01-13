import type { KeyLike } from '../src/keys';
import { createAuthJWT, verifyAuthJWT } from '../src/tokens';
import {
  KeyTypes,
  generateKeyPair,
  importKeyPrivatePem,
  importKeyPublicPem,
  createJWK
} from '../src/keys';
import {
  privatePem,
  publicPem
} from './mocks/pemKeys';
import { isNodeJs } from './helpers/utils';
import chai, { expect } from 'chai';
import chp from 'chai-as-promised';
chai.use(chp);

describe('Tokens', () => {

  describe('JWT tokens creation', () => {
    const issuer = 'did:orgid:4:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
    const audience = 'did:orgid:4:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
    const scope = '';
    let privateKey: KeyLike;
    let publicKey: KeyLike;
    let keyPairs: { privateKey: KeyLike, publicKey: KeyLike }[];

    before(async () => {
      keyPairs = await Promise.all(
        KeyTypes
          .filter(t => !(!isNodeJs() && t === 'EcdsaSecp256k1VerificationKey2019'))
          .map(type => generateKeyPair(type))
      );
      privateKey = !isNodeJs()
        ? keyPairs[0].privateKey
        : await importKeyPrivatePem(privatePem);
      publicKey = !isNodeJs()
        ? keyPairs[0].publicKey
        : await importKeyPublicPem(publicPem);
    });

    describe('#createAuthJWT', () => {

      it('should throw if invalid issuer provided', async () => {
        const issuer = 'InvalidDID';
        await expect(
          createAuthJWT(
            privateKey,
            issuer,
            audience,
            scope
          )
        ).to.rejectedWith(`Invalid Issuer DID format: ${issuer}`);
      });

      it('should throw if partially invalid issuer provided', async () => {
        const issuer = 'did:orgid:4:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d';
        await expect(
          createAuthJWT(
            privateKey,
            issuer,
            audience,
            scope
          )
        ).to.rejectedWith(
          `The key identifier must be provided as a fragment in the DID: ${issuer}`
        );
      });

      it('should throw if invalid audience provided', async () => {
        const audience = 'InvalidDID';
        await expect(
          createAuthJWT(
            privateKey,
            issuer,
            audience,
            scope
          )
        ).to.rejectedWith(`Invalid Audience DID format: ${audience}`);
      });

      it('should throw if invalid scope provided', async () => {
        await expect(
          createAuthJWT(
            privateKey,
            issuer,
            audience,
            {} as never
          )
        ).to.rejectedWith('Invalid scope value');
        await expect(
          createAuthJWT(
            privateKey,
            issuer,
            audience,
            [
              {}
            ] as never
          )
        ).to.rejectedWith('Invalid scope value');
      });

      it('should throw is public key has been provided for signing instead of private', async () => {
        await expect(
          createAuthJWT(
            publicKey,
            issuer,
            audience
          )
        ).to.rejectedWith('Only private keys are accepted for signing of tokens');
      });

      it('should throw if invalid expiration has been provided', async () => {
        await expect(
          createAuthJWT(
            privateKey,
            issuer,
            audience,
            '',
            'invalid expiration'
          )
        ).to.rejectedWith('Invalid time period format');
      });

      it('should create JWT using JWK', async () => {
        const keyPair = await generateKeyPair(
          isNodeJs()
            ? 'EcdsaSecp256k1VerificationKey2019'
            : 'JsonWebKey2020'
        );
        const pubJwk = await createJWK(keyPair.publicKey);
        const privJwk = await createJWK(keyPair.privateKey);
        const jwt = await createAuthJWT(
          privJwk,
          issuer,
          audience,
          scope
        );
        await verifyAuthJWT(
          jwt,
          pubJwk,
          issuer,
          audience,
          scope
        );
      });

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

      it('should create JWT token from generated keys without scope', async () => {
        const jwtsNoSope = await Promise.all(
          keyPairs.map(
            k => createAuthJWT(
              k.privateKey,
              issuer,
              audience
            )
          )
        );
        await Promise.all(
          jwtsNoSope.map(
            (t, i) => verifyAuthJWT(
              t,
              keyPairs[i].publicKey,
              issuer,
              audience
            )
          )
        );
      });

      it('should create JWT token from generated keys with scope', async () => {
        const arrayScope = ['AAA'];
        const jwtsWithSope = await Promise.all(
          keyPairs.map(
            k => createAuthJWT(
              k.privateKey,
              issuer,
              audience,
              scope
            )
          )
        );
        const jwtsWithArraySope = await Promise.all(
          keyPairs.map(
            k => createAuthJWT(
              k.privateKey,
              issuer,
              audience,
              arrayScope
            )
          )
        );
        await Promise.all(
          jwtsWithSope.map(
            (t, i) => verifyAuthJWT(
              t,
              keyPairs[i].publicKey,
              issuer,
              audience,
              scope
            )
          )
        );
        await Promise.all(
          jwtsWithArraySope.map(
            (t, i) => verifyAuthJWT(
              t,
              keyPairs[i].publicKey,
              issuer,
              audience,
              arrayScope
            )
          )
        );
      });

      it('should create JWT token from generated keys with expiration', async () => {
        const expiration = '2d';
        const jwtsWithExp = await Promise.all(
          keyPairs.map(
            k => createAuthJWT(
              k.privateKey,
              issuer,
              audience,
              '',
              expiration
            )
          )
        );
        await Promise.all(
          jwtsWithExp.map(
            (t, i) => verifyAuthJWT(
              t,
              keyPairs[i].publicKey,
              issuer,
              audience,
              ''
            )
          )
        );
      });
    });

    describe('#verifyAuthJWT', () => {
      let pub: KeyLike;
      let priv: KeyLike;
      let jwt: string;
      let jwtWithoutScope: string;
      const scope = '["scope1","scope2"]';

      before(async () => {
        const keyPair = await generateKeyPair(
          isNodeJs()
            ? 'EcdsaSecp256k1VerificationKey2019'
            : 'JsonWebKey2020'
        );
        pub = keyPair.publicKey;
        priv = keyPair.privateKey;
        jwt = await createAuthJWT(
          priv,
          issuer,
          audience,
          scope
        );
        jwtWithoutScope = await createAuthJWT(
          priv,
          issuer,
          audience
        );
      });

      it('should throw if invalid issuer did provided', async () => {
        const invalidIssuer = 'InvalidDID';
        await expect(
          verifyAuthJWT(
            jwt,
            pub,
            invalidIssuer,
            audience
          )
        ).to.rejectedWith(`Invalid Issuer DID format: ${invalidIssuer}`);
      });

      it('should throw if invalid audience did provided', async () => {
        const invalidAudience = 'InvalidDID';
        await expect(
          verifyAuthJWT(
            jwt,
            pub,
            issuer,
            invalidAudience
          )
        ).to.rejectedWith(`Invalid Audience DID format: ${invalidAudience}`);
      });

      it('should throw if private key provided for verification', async () => {
        await expect(
          verifyAuthJWT(
            jwt,
            priv,
            issuer,
            audience
          )
        ).to.rejectedWith('Only public keys are accepted for verifying of tokens');
      });

      it('should throw if invalid array scope', async () => {
        const invalidScope = 'Invalid scope';
        await expect(
          verifyAuthJWT(
            jwt,
            pub,
            issuer,
            audience,
            invalidScope
          )
        ).to.rejectedWith(`Unable to parse stringified scope: ${invalidScope}`);
      });

      it('should throw if scope not found in the payload', async () => {
        await expect(
          verifyAuthJWT(
            jwtWithoutScope,
            pub,
            issuer,
            audience,
            scope
          )
        ).to.rejectedWith('Scope not found in the payload');
      });

      it('should throw if jwt has broken scope', async () => {
        const brokenScope = '["scope1","';
        const validScope = '["scope1"]';
        jwt = await createAuthJWT(
          priv,
          issuer,
          audience,
          brokenScope
        );
        await expect(
          verifyAuthJWT(
            jwt,
            pub,
            issuer,
            audience,
            validScope
          )
        ).to.rejectedWith(`Unable to parse scope in the payload: ${brokenScope}`);
      });

      it('should throw if jwt scope not matches the scope provided for verification', async () => {
        const origScope = '["scope1"]';
        const verificationScope = '["scope2"]';
        jwt = await createAuthJWT(
          priv,
          issuer,
          audience,
          origScope
        );
        await expect(
          verifyAuthJWT(
            jwt,
            pub,
            issuer,
            audience,
            verificationScope
          )
        ).to.rejectedWith(
          `The scope provided by the JWT ${origScope} not fully matches with verification scope: ${verificationScope}`
        );
      });
    });
  });
});
