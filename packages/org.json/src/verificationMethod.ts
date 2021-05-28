import { regexp } from '@windingtree/org.id-utils';
import {
  keyTypeFromJWK,
  createJWK
} from '@windingtree/org.id-auth/keys';
import type {
  KeyObject,
  KeyLike,
  JWK
} from '@windingtree/org.id-auth/keys';
import type {
  VerificationMethodReference
} from '@windingtree/org.json-schema';

export type DidVerificationMethodRevocation =
  VerificationMethodReference['verificationMethodRevocation'];

export interface DidVerificationMethod {
  id: string;
  type: string;
  controller: string;
  publicKeyJwk?: JWK;
  blockchainAccountId?: string;
  publicKeyPem?: string;
  publicKeyBase58?: string;
  verificationMethodRevocation?: DidVerificationMethodRevocation;
  note?: string;
}

export const createVerificationMethod = async (
  id: string,
  controller: string,
  key: KeyLike | JWK,
  note?: string
): Promise<DidVerificationMethod> => {

  if (!regexp.did.exec(id)) {
    throw new Error(`Wrong DID format: ${id}`);
  }

  const { fragment } = regexp.didGrouped.exec(id).groups;

  if (!fragment) {
    throw new Error(`Key identifier must be provided as fragment in the Id: ${id} #??????`);
  }

  if (!regexp.did.exec(controller)) {
    throw new Error(`Wrong controllers' DID format: ${controller}`);
  }

  let type: string;
  let publicKeyJwk: JWK;

  if ((key as JWK).kty) {
    // Use raw JWK
    type = keyTypeFromJWK(key as JWK);
    publicKeyJwk = (key as JWK);
  } else {
    // Try to use key in KeyLike format

    if ((key as KeyObject).type !== 'public') {
      throw new Error('Only public keys are accepted in verification methods');
    }

    // Create JWK KeyLike type of key
    publicKeyJwk = await createJWK(key as KeyLike);
    type = keyTypeFromJWK(publicKeyJwk);
  }

  return {
    id,
    controller,
    type,
    publicKeyJwk,
    ...(
      note
        ? {
          note
        }
        : {}
    )
  };
};
