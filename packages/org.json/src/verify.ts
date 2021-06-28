import type {
  CredentialReference
} from '@windingtree/org.json-schema';
import type {
  SignedVC
} from '@windingtree/org.id-auth/dist/vc';

import orgJsonSchema from '@windingtree/org.json-schema';


// Verify ORG.JSON VC format
/*
  - Validate ORG.JSON VC against the VC schema
  - Verify ORG.JSON VS type
    - must contains ORG.JSON
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
export const verifyOrgJsonVcFormat = (vc: SignedVC): void => {

};
