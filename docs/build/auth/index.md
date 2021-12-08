# ORGiD authentication library

## Setup

```bash
yarn add @windingtree/org.id-auth
```

## Cryptographic keys

## Keys module

```typescript
import {
  generateKeyPair,
  createJWK,
  importKeyPrivatePem,
  importKeyPublicPem
} from '@windingtree/org.id-auth';
```

### Ethereum keys

This package does not provide a generation method for Ethereum compatible keys that are represented by `EcdsaSecp256k1RecoveryMethod2020` suite. But this kind of key can be used for verification of signatures made according to `EcdsaSecp256k1RecoverySignature2020` suite.

### Keys generation

Under the hood, the ORGiD SDK uses a powerful cryptographic library [jose](https://github.com/panva/jose) that provides the generation of various types of keys. For purposes of signing tokens and verifiable credentials, the ORGiD SDK supports the keys that conform to the following cryptographic suites:

- `EcdsaSecp256k1VerificationKey2019`: secp256k1 curve. Keys can be generated in node.js using `generateKeyPair`. Keys can be used for signature of tokens and VC's in node.js environment only. Using this type of key can be generated the `EcdsaSecp256k1Signature2019` signature type
- `JsonWebKey2020` P-256 curve (alg: ES256). Keys can be generated in node.js & browser using `generateKeyPair`. Using this type of key can be generated the `JsonWebSignature2020` signature type

In most ORGiD use cases usage of the `EcdsaSecp256k1VerificationKey2019` keys is enough and recommended. The generation can be done with the function `generateKeyPair` as follows:

```typescript
const { privateKey, publicKey } = await generateKeyPair(
  'EcdsaSecp256k1VerificationKey2019',
  keyOptions // optional. See more information here: https://github.com/panva/jose/blob/main/docs/interfaces/key_generate_key_pair.GenerateKeyPairOptions.md
);
```

Keys are generated in `KeyLike` binary format. To convert them into the JWK format that can be used in DID document definition you can use `createJWK` function:

```typescript
const jwkPubKey = await createJWK(publicKey);
console.log(jwkPubKey);
// {
//   "crv": "secp256k1",
//   "x": "NtngWpJUr-rlNNbs0u-Aa8e16OwSJu6UiFf0Rdo1oJ4",
//   "y": "qN1jKupJlFsPFc1UkWinqljv4YE0mq_Ickwnjgasvmo",
//   "kty": "EC",
//   "kid": "WjKgJV7VRw3hmgU6--4v15c0Aewbcvat1BsRFTIqa5Q"
// }
```

### Importing of ECPrivateKey keys

> Importing of ECPrivateKey is available in node.js environment only

```typescript
const privatePem =
`-----BEGIN PRIVATE KEY-----
MIGEAgEAMBAGByqGSM49AgEGBSuBBAAKBG0wawIBAQQgV6PloCFsJsoZmZ5K3Uj2
6YQwAwOQuyHrFne/p8mXheWhRANCAARtXfQSK+p6pJzFNAVL2lDbdLBjYKHAnkVh
iI05R8Idksukb/eOuZQc2QhdDtilJlhid8qzHetlkkmycRJv1Ygc
-----END PRIVATE KEY-----`;

const privateKey = await importKeyPrivatePem(privatePem);
```

### Importing PKCS#8 formatted keys

> Importing of PKCS#8 is available in node.js environment only

```typescript
export const publicPem =
`-----BEGIN PUBLIC KEY-----
MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEbV30EivqeqScxTQFS9pQ23SwY2ChwJ5F
YYiNOUfCHZLLpG/3jrmUHNkIXQ7YpSZYYnfKsx3rZZJJsnESb9WIHA==
-----END PUBLIC KEY-----`;

const publicKey = await importKeyPublicPem(publicPem);
```

### Manual keys generation

In some cases, you may want to generate keys manually using `openssl` utility as is shown in the following snippets:

#### secp256k1 ECPrivateKey format

```bash
openssl ecparam -name secp256k1 -genkey -out ./key.pem
openssl ec -in ./key.pem -pubout > ./key.pub
```

#### secp256k1 PKCS#8 format (unencrypted)

```bash
openssl ecparam -name secp256k1 -genkey -out ./key.pem
openssl pkcs8 -in ./key.pem -topk8 -nocrypt -out ./pkcs8.pem
openssl ec -in ./pkcs8.pem -pubout > ./key.pub
```

## Authentication tokens

### Tokens module

```typescript
import {
  createAuthJWT,
  verifyAuthJWT
} from '@windingtree/org.id-auth';
```

### Creation of a JWT token

> For signing of authentication tokens can be used keys that compatible with `EcdsaSecp256k1VerificationKey2019` (node.js) and `JsonWebKey2020` (node.js & browser) suites

```typescript
const privateKey = '<PRIVATE_KEY_KEYLIKE_OR_JWK>';
const issuer = 'did:orgid:4:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
const audience = 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
const scope = 'members'; // can be string or array of strings
const expiration = '1 day';

const jwt = await createAuthJWT(
  privateKey,
  issuer, // <-- who is issued
  audience, // <-- for whom is issued (who should accept it)
  scope,
  expiration // optional. If not provided the JWT will never expire
);
```

### Verification of JWT token

```typescript
const jwt = 'eyJhbGciOiJFUzI1NiJ9.eyJ1cm46ZXhhbXBsZTpjbGFpbSI6dHJ1ZSwiaWF0IjoxNjA0MzE1MDc0LCJpc3MiOiJ1cm46ZXhhbXBsZTppc3N1ZXIiLCJhdWQiOiJ1cm46ZXhhbXBsZTphdWRpZW5jZSJ9.hx1nOfAT5LlXuzu8O-bhjXBGpklWDt2EsHw7-MDn49NrnwvVsstNhEnkW2ddauB7eSikFtUNeumLpFI9CWDBsg';
const publicKey = '<PUBLIC_KEY_KEYLIKE_OR_JWK>';
const issuer = 'did:orgid:4:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
const audience = 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
const scope = 'members';

const { payload } = await verifyAuthJWT(
  jwt,
  publicKey,
  issuer,
  audience,
  scope
);

// payload.iss - should be equal to issuer
// payload.aud - should be equal to audience
// more information about the payload properites see here: https://github.com/panva/jose/blob/main/docs/interfaces/types.JWTPayload.md
```

A verification should to fail in case of:

- `jwt` is malformed
- `jwt` is signed with different key
- `scope` not intersect with the required value. For example, the token is created for `members` scope, but `audience` can authorize tokens with `vip` scope.
- `issuer` or `audience` of JWT are not equal to requested values

> In real-life cases `issuer` and `audience` ORGiDs should be resolved to be sure that the given `JWT` is actual. ORGiD resolution can be done with `@windingtree/org.id-resolver` package.

## Verifiable credentials

### VC signed with private key

> With `sign` method can be used keys that compatible with `EcdsaSecp256k1VerificationKey2019` (node.js) and `JsonWebKey2020` (node.js & browser) suites

```javascript
const privateKey = '<PRIVATE_KEY_KEYLIKE_OR_JWK>';
const issuer = 'did:orgid:4:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
const holder = 'did:orgid:4:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
const subject = {
  test: '123'
};

const vc = await createVC(
  issuer,
  'VerifiableCredential'
)
  .setHolder(holder)
  .setExpirationDate(new Date('2031-06-29').toISOString())
  .setValidFrom(new Date('2031-05-30').toISOString())
  .setValidUntil(new Date('2031-06-28').toISOString())
  .setCredentialSubject(subject)
  .sign(privateKey);

/*
{
  '@context': [ 'https://www.w3.org/2018/credentials/v1' ],
  id: '7169c453-7422-4f87-9198-6b94cc8c3d40',
  type: [ 'VerifiableCredential' ],
  issuer: 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
  issuanceDate: '2021-06-16T22:10:43.281+03:00',
  holder: 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206',
  validFrom: '2031-05-30T03:00:00.000+03:00',
  validUntil: '2031-06-28T03:00:00.000+03:00',
  expirationDate: '2031-06-29T03:00:00.000+03:00',
  credentialSubject: { test: '123' },
  proof: {
    type: 'EcdsaSecp256k1Signature2019',
    created: '2021-06-16T22:10:43.289+03:00',
    proofPurpose: 'assertionMethod',
    verificationMethod: 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1',
    jws: 'eyJhbGciOiJFUzI1NksifQ.eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJpZCI6IjcxNjljNDUzLTc0MjItNGY4Ny05MTk4LTZiOTRjYzhjM2Q0MCIsInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJUZXN0Q3JlZGVudGlhbCJdLCJpc3N1ZXIiOiJkaWQ6b3JnaWQ6cm9wc3RlbjoweDdiMTUxOTdkZTYyYjBiYzczZGE5MDhiMjE1NjY2YzQ4ZTFlNDllZDM4ZTQ0ODZmNWY2ZjA5NDQ1ODc4NjQxMmQiLCJpc3N1YW5jZURhdGUiOiIyMDIxLTA2LTE2VDIyOjEwOjQzLjI4MSswMzowMCIsImhvbGRlciI6ImRpZDpvcmdpZDoweGNmZGI3NjllYWZhZTI1OWU1ODAyOGJhMjVhYjcwY2U1Mzk3MzFiNTkzYzA4Yjc4MGU1Mjc1YzcyMzEzMmQyMDYiLCJ2YWxpZEZyb20iOiIyMDMxLTA1LTMwVDAzOjAwOjAwLjAwMCswMzowMCIsInZhbGlkVW50aWwiOiIyMDMxLTA2LTI4VDAzOjAwOjAwLjAwMCswMzowMCIsImV4cGlyYXRpb25EYXRlIjoiMjAzMS0wNi0yOVQwMzowMDowMC4wMDArMDM6MDAiLCJjcmVkZW50aWFsU3ViamVjdCI6eyJ0ZXN0IjoiMTIzIn19.6c6a6pSFm_pbzZ-xAWL1X53X6bBqhG3q6O45usrYXMsPh4GJg2yYcT1Kdo7AldkGeb-i23um8jfgw1ec9Koomg'
  }
}
*/

const payload = await verifyVC(vc, publicKey);

/*
{
  '@context': [ 'https://www.w3.org/2018/credentials/v1' ],
  id: '7169c453-7422-4f87-9198-6b94cc8c3d40',
  type: [ 'VerifiableCredential' ],
  issuer: 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
  issuanceDate: '2021-06-16T22:10:43.281+03:00',
  holder: 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206',
  validFrom: '2031-05-30T03:00:00.000+03:00',
  validUntil: '2031-06-28T03:00:00.000+03:00',
  expirationDate: '2031-06-29T03:00:00.000+03:00',
  credentialSubject: { test: '123' }
}
*/
```

## VC signed with blockchain account

Currently, supported Ethereum account type (eip155) only.

> `signWithBlockchainAccount` method requires a signature with a wallet signer (node.js or in the browser). The node.js server environment can be used HDnode signers of `ethers.js` library. In the browser, signatures can be applied using wallets like Metamask or WalletConnect service.

```javascript
const web3Provider = '<WEB3_PROVIDER>'; // ethers.js provider
const account = '<ETH_ACCOUNT>';
const issuerBlockchainAccountId = `${account}@eip155:1`;
const vc = await createVC(
  issuer
)
  .setHolder(holder)
  .setExpirationDate(new Date('2031-06-29').toISOString())
  .setValidFrom(new Date('2031-05-30').toISOString())
  .setValidUntil(new Date('2031-06-28').toISOString())
  .setCredentialSubject(subject)
  .signWithBlockchainAccount(
    issuerBlockchainAccountId,
    {
      web3Provider
    }
  );

/*
{
  '@context': [ 'https://www.w3.org/2018/credentials/v1' ],
  id: '80f56f71-298f-4eba-9813-31893f379beb',
  type: [ 'VerifiableCredential', 'TestCredential' ],
  issuer: 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
  issuanceDate: '2021-06-16T22:20:02.362+03:00',
  holder: 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206',
  validFrom: '2031-05-30T03:00:00.000+03:00',
  validUntil: '2031-06-28T03:00:00.000+03:00',
  expirationDate: '2031-06-29T03:00:00.000+03:00',
  credentialSubject: { test: '123' },
  proof: {
    type: 'EcdsaSecp256k1RecoverySignature2020',
    created: '2021-06-16T22:20:02.374+03:00',
    proofPurpose: 'assertionMethod',
    verificationMethod: 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1',
    jws: 'eyJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6b3JnaWQ6cm9wc3RlbjoweDdiMTUxOTdkZTYyYjBiYzczZGE5MDhiMjE1NjY2YzQ4ZTFlNDllZDM4ZTQ0ODZmNWY2ZjA5NDQ1ODc4NjQxMmQja2V5LTEiLCJ0eXAiOiJKV1MifQ.eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJpZCI6IjgwZjU2ZjcxLTI5OGYtNGViYS05ODEzLTMxODkzZjM3OWJlYiIsInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJUZXN0Q3JlZGVudGlhbCJdLCJpc3N1ZXIiOiJkaWQ6b3JnaWQ6cm9wc3RlbjoweDdiMTUxOTdkZTYyYjBiYzczZGE5MDhiMjE1NjY2YzQ4ZTFlNDllZDM4ZTQ0ODZmNWY2ZjA5NDQ1ODc4NjQxMmQiLCJpc3N1YW5jZURhdGUiOiIyMDIxLTA2LTE2VDIyOjIwOjAyLjM2MiswMzowMCIsImhvbGRlciI6ImRpZDpvcmdpZDoweGNmZGI3NjllYWZhZTI1OWU1ODAyOGJhMjVhYjcwY2U1Mzk3MzFiNTkzYzA4Yjc4MGU1Mjc1YzcyMzEzMmQyMDYiLCJ2YWxpZEZyb20iOiIyMDMxLTA1LTMwVDAzOjAwOjAwLjAwMCswMzowMCIsInZhbGlkVW50aWwiOiIyMDMxLTA2LTI4VDAzOjAwOjAwLjAwMCswMzowMCIsImV4cGlyYXRpb25EYXRlIjoiMjAzMS0wNi0yOVQwMzowMDowMC4wMDArMDM6MDAiLCJjcmVkZW50aWFsU3ViamVjdCI6eyJ0ZXN0IjoiMTIzIn19.MHgwMWEwMjVkZWVlOGEwOTJiZDAyNjVhY2YyODdkZDAyMGZjZjkyY2JlMjQxZjcwYmFmNzE2NmM2YTdmOTU3MGI5NDNhNGNhYzQyOWJlODJmZmM0MTI2Y2M1ZTg1OTVmMDAzZDJjNjdlNzRiZjE1NGRlMjY0ZjliMWY5MGE0YzQ0NzAx'
  }
}
*/

const payload = await verifyVC(vc, issuerBlockchainAccountId);

/*
{
  '@context': [ 'https://www.w3.org/2018/credentials/v1' ],
  id: '80f56f71-298f-4eba-9813-31893f379beb',
  type: [ 'VerifiableCredential', 'TestCredential' ],
  issuer: 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d',
  issuanceDate: '2021-06-16T22:20:02.362+03:00',
  holder: 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206',
  validFrom: '2031-05-30T03:00:00.000+03:00',
  validUntil: '2031-06-28T03:00:00.000+03:00',
  expirationDate: '2031-06-29T03:00:00.000+03:00',
  credentialSubject: { test: '123' }
}
*/
```

### VC creation with custom type

If you want to handle custom verifiable credential types you should provide a configuration of this type using the options.

```typescript
import type { SubjectTypeConfig } from '@windingtree/org.id-auth/dist/vc';

// Schema in JSON-schema format
const customTypeValidationSchema = {
  title: 'My Custom Json Schema',
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    membershipStatus: {
      type: 'boolean'
    }
  },
  required: [
    'name',
    'membershipStatus'
  ]
};

const credentialOptions: SubjectTypeConfig = {
  'MyCustomVcType': {
    schema: customTypeValidationSchema,
    path: '' // should be filled if you want to verify data against the specific definition that is a part of the complex schema
  }
};

const credentialSubject: any = {
  name: 'King Dude',
  membershipStatus: true
};

const vc = await createVC(
  issuer,
  'MyCustomVcType',
  credentialOptions
)
  .setCredentialSubject(credentialSubject)
...
```

The `customTypeValidationSchema` that has been provided with options will be used for `credentialSubject` verification during the issuing of the VC.

## Autogenerated documentation

[@windingtree/org.id-auth docs](generated/README.md)
