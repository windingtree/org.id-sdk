# @windingtree/vc
A library for creating and verifying Verifiable Credentials

## Setup

```bash
npm install @windingtree/vc
```

## VC creation and verification

```javascript
import {
  createVc,
  verifyVc
} from '@windingtree/vc';

const issuerDid = 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
const holderDid = 'did:orgid:0x15fe81a268e1ac2698c3a41399da2b92da0fe85559a9666cfb4426c6ded4f9fe';
const vcType = 'TrustAssertion';
const verificationMethod = `${issuerDid}#key2`;
const signatureType = key.alg;
const proofPurpose = 'assertionMethod';
const expirationDate = new Date(Date.now() + 60*60*24).toISOString();
const subject = {
  id: holderDid,
  data: 'TRUE'
};

const vc = createVc(
  subject,
  issuerDid,
  holderDid,
  vcType,
  verificationMethod,
  '<PRIVATE_KEY_ALG>', // e.g. ES256K
  '<PRIVATE_KEY>',
  proofPurpose,
  expirationDate
);

console.log(vc);
// {
//   '@context': [ 'https://www.w3.org/2018/credentials/v1' ],
//   id: '2sx2p73r5sp',
//   type: [ 'VerifiableCredential', 'TrustAssertion' ],
//   issuer: 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206',
//   holder: {
//     id: 'did:orgid:0x15fe81a268e1ac2698c3a41399da2b92da0fe85559a9666cfb4426c6ded4f9fe'
//   },
//   issuanceDate: '2021-04-16T15:04:21.289Z',
//   expirationDate: '2021-04-16T15:05:47.675Z',
//   credentialSubject: {
//     id: 'did:orgid:0x15fe81a268e1ac2698c3a41399da2b92da0fe85559a9666cfb4426c6ded4f9fe',
//     type: 'social',
//     claim: 'https://t.me/windingtree'
//   },
//   proof: {
//     type: 'secp256k1',
//     created: '2021-04-16T15:04:21.289Z',
//     proofPurpose: 'assertionMethod',
//     verificationMethod: 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206#key2',
//     jws: 'eyJhbGciOiJFUzI1NksifQ.eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcv...VZjg60FrbXBfE_-vZJt19iKLlYChPTWon2ADcV0w'
//   }
// }

const verificationResult = verifyVc(
  vc,
  '<PUBLIC_KEY_ALG>', // e.g. ES256K
  '<PUBLIC_KEY>'
);

console.log(verificationResult);
// {
//   '@context': [ 'https://www.w3.org/2018/credentials/v1' ],
//   id: '2sx2p73r5sp',
//   type: [ 'VerifiableCredential', 'TrustAssertion' ],
//   issuer: 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206',
//   holder: {
//     id: 'did:orgid:0x15fe81a268e1ac2698c3a41399da2b92da0fe85559a9666cfb4426c6ded4f9fe'
//   },
//   issuanceDate: '2021-04-16T15:04:21.289Z',
//   expirationDate: '2021-04-16T15:05:47.675Z',
//   credentialSubject: {
//     id: 'did:orgid:0x15fe81a268e1ac2698c3a41399da2b92da0fe85559a9666cfb4426c6ded4f9fe',
//     type: 'social',
//     claim: 'https://t.me/windingtree'
//   }
// }
```
