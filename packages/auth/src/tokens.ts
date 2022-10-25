import type { JWTPayload, JWSHeaderParameters } from 'jose';
import type { KeyLike, JWK } from './keys';
import { regexp } from '@windingtree/org.id-utils';
import { SignJWT, decodeJwt } from 'jose';
import { importJWK } from 'jose';
import { jwtVerify } from 'jose';
import { getAlgFromJWK, createJWK } from './keys';
import { base64url } from './utils';
import { buildUnsignedDataForSignature, decodeJws, parseBlockchainAccountId } from './vc';
import { utils as ethersUtils, VoidSigner, Wallet } from 'ethers';

export { JWTPayload, decodeJwt };

export interface JWTVerifyResult {
  payload: JWTPayload
  protectedHeader: JWSHeaderParameters
}

export const validateScope = (
  payload: JWTPayload,
  scope?: string | string[]
): void => {
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
};

// Create an authentication JWT
export const createAuthJWT = async (
  privateKey: KeyLike | JWK,
  issuer: string,
  audience: string,
  scope?: string | string[],
  expiration?: string | number
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

export const jwtDomain = {
  'name': 'JWT'
};

export const jwtSignatureTypes = {
  Payload: [
    {
      name: 'payload',
      type: 'string'
    }
  ]
};

// Create auth JWT with ethers signer
export const createAuthJWTWithEthers = async (
  signer: VoidSigner | Wallet,
  iss: string,
  aud: string,
  scope?: string | string[],
  exp?: string | number
): Promise<string> => {
  const unsignedData = buildUnsignedDataForSignature(
    'EcdsaSecp256k1RecoveryMethod2020',
    {
      iss,
      aud,
      scope,
      exp
    }
  );

  // @todo "_signTypedData" method should be renamed to the "signTypedData" in one of next ethers.js version
  const signature: string = await signer._signTypedData(
    jwtDomain,
    jwtSignatureTypes,
    {
      payload: unsignedData
    }
  );

  return `${unsignedData}.${base64url.encode(signature as string)}`;
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

  validateScope(payload, scope);

  return {
    payload,
    protectedHeader
  };
};

// Verify JWT signed with signer
export const verifyAuthJWTWithEthers = async (
  jwt: string,
  blockchainAccountId: string,
  issuer: string,
  audience: string,
  scope?: string | string[]
): Promise<JWTVerifyResult> => {
  const {
    accountAddress
  } = parseBlockchainAccountId(blockchainAccountId);

  const {
    protectedHeader,
    payload,
    message,
    signature
  } = decodeJws<JWTPayload>(jwt);

  // Verify signature
  const recoveredAccountId = ethersUtils.verifyTypedData(
    jwtDomain,
    jwtSignatureTypes,
    {
      payload: message
    },
    signature
  );

  if (ethersUtils.getAddress(accountAddress) !== ethersUtils.getAddress(recoveredAccountId)) {
    throw new Error(
      `JWT signed by different accountId: ${accountAddress} though expected: ${recoveredAccountId}`
    );
  }

  if (payload.exp && payload.exp < Date.now()) {
    throw new Error(`JWT expired at ${(new Date(payload.exp)).toISOString()}`);
  }

  if (payload.iss !== issuer) {
    throw new Error(`Unknown JWT issuer: ${payload.iss}`);
  }

  if (payload.aud !== audience) {
    throw new Error(`Invalid JWT audience: ${payload.iss}`);
  }

  validateScope(payload, scope);

  return {
    payload,
    protectedHeader
  };
};
