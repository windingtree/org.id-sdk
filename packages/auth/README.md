[![@windingtree/org.id-auth](https://img.shields.io/npm/v/@windingtree/org.id-auth.svg)](https://www.npmjs.com/package/@windingtree/org.id-auth)
# @windingtree/org.id-auth
ORGiD authentication library

## Setup

```bash
npm install @windingtree/org.id-auth
```

## Usage

### VC signed with private key

```javascript
const privateKey = '<PRIVATE_KEY_KEYLIKE_OR_JWK>';
const issuer = 'did:orgid:ropsten:0x7b15197de62b0bc73da908b215666c48e1e49ed38e4486f5f6f094458786412d#key-1';
const holder = 'did:orgid:0xcfdb769eafae259e58028ba25ab70ce539731b593c08b780e5275c723132d206';
const subject = {
  test: '123'
};

const vc = await createVC(
  issuer,
  'TestCredential'
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
  type: [ 'VerifiableCredential', 'TestCredential' ],
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
  type: [ 'VerifiableCredential', 'TestCredential' ],
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

```javascript
const web3Provider = '<WEB3_PROVIDER>';
const account = '<ETH_ACCOUNT>';
const issuerBlockchainAccountId = `${account}@eip155:1`;
const vc = await createVC(
  issuer,
  'TestCredential'
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

## Documentation

[Generated docs](docs#readme)
