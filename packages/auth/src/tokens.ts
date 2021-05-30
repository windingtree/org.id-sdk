import type {
  JWTPayload,
  JWSHeaderParameters
} from 'jose/jwt/sign';
import type {
  KeyLike,
  KeyObject,
  JWK
} from './keys';
import { regexp } from '@windingtree/org.id-utils';
import { SignJWT } from 'jose/jwt/sign';
import { parseJwk } from 'jose/jwk/parse';
import { jwtVerify } from 'jose/jwt/verify';
import {
  getAlgFromJWK,
  createJWK
} from './keys';

export interface JWTVerifyResult {
  payload: JWTPayload
  protectedHeader: JWSHeaderParameters
}

// Create an authentication JWT
export const createAuthJWT = async (
  privateKey: KeyLike | JWK,
  issuer: string,
  audience: string,
  scope?: string | string[],
  expiration?: string,
): Promise<string> => {

  if (!regexp.did.exec(issuer)) {
    throw new Error(`Wrong Issuer DID format: ${issuer}`);
  }

  const { fragment } = regexp.didGrouped.exec(issuer).groups;

  if (!fragment) {
    throw new Error(
      `Key identifier must be provided as fragment in the DID: ${issuer} #??????`
    );
  }

  if (!regexp.did.exec(audience)) {
    throw new Error(`Wrong Audience DID format: ${audience}`);
  }

  if (!scope) {
    scope = '';
  }

  if (Array.isArray(scope) || typeof scope === 'string') {
    scope = Array.isArray(scope) ? JSON.stringify(scope) : scope
  } else {
    throw new Error('Scope value must be a string ot array of strings');
  }

  const payload: JWTPayload = {
    scope: Array.isArray(scope) ? JSON.stringify(scope) : scope
  };

  let alg: string;

  if ((privateKey as JWK).kty) {
    // Use raw JWK
    alg = getAlgFromJWK(privateKey as JWK);
    privateKey = await parseJwk(privateKey as JWK);
  } else {
    // Try to use key in KeyLike format

    if ((privateKey as KeyObject).type !== 'private') {
      throw new Error('Only private keys are accepted for sining of tokens');
    }

    const privateKeyJWK: JWK = await createJWK(privateKey as KeyObject);
    alg = getAlgFromJWK(privateKeyJWK, true);
  }

  let token = new SignJWT(payload)
    .setProtectedHeader(
      {
        alg
      }
    )
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience(audience);

  if (expiration) {
    token = token.setExpirationTime(expiration);
  }

  return token.sign(privateKey as KeyObject);
};

// Verify authentication token
export const verifyAuthJWT = async (
  jwt: string,
  publicKey: KeyLike | JWK,
  issuer: string,
  audience: string,
  scope?: string | string[],
): Promise<JWTVerifyResult> => {

  if (!regexp.did.exec(issuer)) {
    throw new Error(`Wrong Issuer DID format: ${issuer}`);
  }

  if (!regexp.did.exec(audience)) {
    throw new Error(`Wrong Audience DID format: ${audience}`);
  }

  if ((publicKey as JWK).kty) {
    // JWK provided so converting key to KeyLike format
    publicKey = await parseJwk(publicKey as JWK);
  }

  if ((publicKey as KeyObject).type !== 'public') {
    throw new Error(
      'Only public keys are accepted for verifying of tokens'
    );
  }

  const { payload, protectedHeader } = await jwtVerify(
    jwt,
    publicKey as KeyObject,
    {
      issuer,
      audience
    }
  );

  if (scope && scope !== '') {

    if (!Array.isArray(scope)) {
      try {
        scope = JSON.parse(scope);
      } catch {
        throw new Error(`Unable to parse scope: ${scope}`);
      }
    }

    if (!payload.scope) {
      throw new Error('JWT scope not found in the payload');
    }

    try {
      payload.scope = JSON.parse(payload.scope as string);
    } catch {
      throw new Error(`Unable to parse scope: ${scope}`);
    }

    const scopeMatch = (payload.scope as string[])
      .filter(
        x => scope.includes(x)
      );

    if (scopeMatch.length !== scope.length) {
      throw new Error(
        `The scope provided by the JWT ${JSON.stringify(payload.scope)} not fully matches with verification scope: ${JSON.stringify(scope)}`
      );
    }
  }

  return {
    payload,
    protectedHeader
  };
};
