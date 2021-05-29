import type {
  KeyLike,
  JWK
} from './keys';
import { CredentialReference } from '@windingtree/org.json-schema';

export const createVC = async (
  privateKey: KeyLike | JWK,
  issuer: string,
): Promise<CredentialReference> => {

};
