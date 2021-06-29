import type {
  CredentialReference
} from '@windingtree/org.json-schema';

import orgJsonSchema from '@windingtree/org.json-schema';
import { object } from '@windingtree/org.id-utils';
import { verifyVC } from '@windingtree/org.id-auth/dist/vc';


// Verify ORG.JSON VC format
/*
  - Extract the ORG.JSON VC proof
  - Validate the proof creation date
  - Verify the verification method type
    - must be: EcdsaSecp256k1RecoveryMethod2020
  - Verify the verification method controller
    - must be the same as ORGiD
  - Extract verificationMethod from the ORG.JSON
  - Validate the verification method blockchainAccountId
    - blockchainAccount must be equal to the ORGiD owner
    - blockchainType must be supported by the resolver
    - blockchainNetworkId must be supported by the resolver
*/
export const verifyOrgJsonVc = async (vc: CredentialReference): Promise<CredentialReference> => {
  // Verify ORG.JSON VC type
  const vcTypes = object.getDeepValue(vc, 'type');

  // Must includes type ORG.JSON
  if (!Array.isArray(vcTypes) || !vcTypes.includes('ORG.JSON')) {
    throw new Error('ORG.JSON VC type must include ORG.JSON type');
  }

  // Extract unsafe ORG.JSON source
  const unsafeOrgJson = object.getDeepValue(vc, 'credentialSubject');

  if (typeof unsafeOrgJson === 'undefined') {
    throw new Error('Credential subject not defined');
  }

  // Validate ORG.JSON against the schema
  const orgJsonValidationResult = object.validateWithSchemaOrRef(
    {},
    orgJsonSchema,
    unsafeOrgJson
  );

  if (orgJsonValidationResult) {
    throw new Error(`ORG.JSON schema validation: ${orgJsonValidationResult}`);
  }


};
