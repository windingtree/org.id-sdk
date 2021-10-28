import type { JWTPayload, JWSHeaderParameters } from 'jose';
import type { KeyLike, JWK } from './keys';
import { regexp } from '@windingtree/org.id-utils';
import { SignJWT } from 'jose';
import { importJWK } from 'jose';
import { jwtVerify } from 'jose';
import { getAlgFromJWK, createJWK } from './keys';

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

  const groupedCheck = regexp.didGrouped.exec(issuer);

  if (!groupedCheck || !groupedCheck.groups) {
    throw new Error(`Invalid Issuer DID format: ${issuer}`);
  }

  if (!groupedCheck.groups.fragment) {
    throw new Error(
      `The key identifier must be provided as a fragment in the DID: ${issuer}`
    );
  }

  if (!regexp.did.exec(audience)) {
    throw new Error(`Invalid Audience DID format: ${audience}`);
  }

  const scopeError = 'Invalid scope value';

  if (Array.isArray(scope)) {
    scope.forEach(s => {
      if (typeof s !== 'string') {
        throw new Error(scopeError);
      }
    });
    scope = JSON.stringify(scope);
  } else if (typeof scope === 'undefined') {
    scope = '';
  }

  if (typeof scope !== 'string') {
    throw new Error(scopeError);
  }

  const payload: JWTPayload = {
    scope: Array.isArray(scope) ? JSON.stringify(scope) : scope
  };

  let alg: string;

  if ((privateKey as JWK).kty !== undefined) {
    // Use raw JWK
    alg = getAlgFromJWK(privateKey as JWK);
    privateKey = await importJWK(privateKey as JWK, alg) as KeyLike;
  } else {
    // Try to use key in KeyLike format

    if ((privateKey as KeyLike).type !== 'private') {
      throw new Error('Only private keys are accepted for signing of tokens');
    }

    const privateKeyJWK: JWK = await createJWK(privateKey as KeyLike);
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

  return token.sign(privateKey as KeyLike);
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
    throw new Error(`Invalid Issuer DID format: ${issuer}`);
  }

  if (!regexp.did.exec(audience)) {
    throw new Error(`Invalid Audience DID format: ${audience}`);
  }

  if ((publicKey as JWK).kty) {
    // JWK provided so converting key to KeyLike format
    const alg = getAlgFromJWK(publicKey as JWK);
    publicKey = await importJWK(publicKey as JWK, alg) as KeyLike;
  }

  if ((publicKey as KeyLike).type !== 'public') {
    throw new Error(
      'Only public keys are accepted for verifying of tokens'
    );
  }

  const { payload, protectedHeader } = await jwtVerify(
    jwt,
    publicKey as KeyLike,
    {
      issuer,
      audience
    }
  );

  if (scope && scope !== '') {
    let parsedScope: string[];

    if (!Array.isArray(scope)) {
      try {
        parsedScope = JSON.parse(scope);
      } catch {
        throw new Error(`Unable to parse stringified scope: ${scope}`);
      }
    } else {
      parsedScope = scope;
    }

    if (!payload.scope || payload.scope === '') {
      throw new Error('Scope not found in the payload');
    }

    try {
      payload.scope = JSON.parse(payload.scope as string);
    } catch {
      throw new Error(`Unable to parse scope in the payload: ${payload.scope}`);
    }

    const scopeMatch = (payload.scope as string[])
      .filter(
        x => parsedScope.includes(x)
      );

    if (scopeMatch.length !== parsedScope.length) {
      throw new Error(
        `The scope provided by the JWT ${JSON.stringify(payload.scope)} not fully matches with verification scope: ${JSON.stringify(parsedScope)}`
      );
    }
  }

  return {
    payload,
    protectedHeader
  };
};
