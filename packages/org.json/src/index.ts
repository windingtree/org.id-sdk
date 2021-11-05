import type {
  DidGroupedCheckResult
} from '@windingtree/org.id-auth/dist/vc';
import { regexp } from '@windingtree/org.id-utils';
import {
  keyTypeFromJWK,
  createJWK
} from '@windingtree/org.id-auth/dist/keys';
import type {
  KeyLike,
  JWK
} from '@windingtree/org.id-auth/dist/keys';
import type {
  VerificationMethodReference
} from '@windingtree/org.json-schema/types/org.json';

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

export const validateIdAndController = (
  id: string,
  controller: string
): void => {
  if (!regexp.did.exec(id)) {
    throw new Error(`Wrong DID format: ${id}`);
  }

  const groupedCheck = regexp.didGrouped.exec(id) as DidGroupedCheckResult;

  if (!groupedCheck || !groupedCheck.groups) {
    throw new Error(`Wrong Issuer DID format: ${id}`);
  }

  const { fragment } = groupedCheck.groups;

  if (!fragment) {
    throw new Error(`Key identifier must be provided as fragment in the Id: ${id} #??????`);
  }

  if (!regexp.did.exec(controller)) {
    throw new Error(`Wrong controllers' DID format: ${controller}`);
  }
};

export const createVerificationMethodWithBlockchainAccountId = async (
  id: string,
  controller: string,
  blockchainAccountId: string,
  note?: string
): Promise<DidVerificationMethod> => {
  validateIdAndController(id, controller);

  if (!regexp.blockchainAccountId.exec(blockchainAccountId)) {
    throw new Error(
      `Blockchain account Id has wrong format: ${blockchainAccountId}`
    );
  }

  return {
    id,
    controller,
    type: 'EcdsaSecp256k1RecoveryMethod2020',
    blockchainAccountId,
    ...(
      note
        ? {
          note
        }
        : {}
    )
  };
};

export const createVerificationMethodWithKey = async (
  id: string,
  controller: string,
  key: KeyLike | JWK,
  note?: string
): Promise<DidVerificationMethod> => {
  validateIdAndController(id, controller);

  let type: string;
  let publicKeyJwk: JWK;

  if ((key as JWK).kty) {
    // Use raw JWK
    type = keyTypeFromJWK(key as JWK);
    publicKeyJwk = (key as JWK);
  } else {
    // Try to use key in KeyLike format

    if ((key as KeyLike).type !== 'public') {
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
