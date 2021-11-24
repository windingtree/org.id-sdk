# Ease ORGiD setup for testing purposes

This is a utility for an easy setup of the ORGiD environment for testing purposes. This package uses [Hardhat](https://hardhat.org/hardhat-network/) network for the ORGiD contract setup.

## Setup

```bash
yarn add @windingtree/org.id-test-setup
```

## Module

```typescript
import {
  orgIdSetup,
  generateSalt
} from '@windingtree/org.id-test-setup';
```

## Initialization

To use this package you must install `hardhat` and `@nomiclabs/hardhat-ethers` as dependencies of your project.

```bash
yarn add hardhat @nomiclabs/hardhat-ethers
```

Also you have to add the `hardhat.config.ts` configuration file to root directory of your project with following content:

```typescript
import type { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-ethers';

// Hardhat config
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      "chainId": 1337,
      "initialBaseFeePerGas": 0
    },
  },
};

export default config;
```

Calling of the `orgIdSetup` function from the package creates for you an object with the ORGiD environment that can be used in your tests.

```typescript
import {
  orgIdSetup
} from '@windingtree/org.id-test-setup';

...
const setup = await orgIdSetup();

// The environment object properties:
// {
//   signers: Signer[]; // <-- Ethers.js signers
//   accounts: string[]; // <--  The list of accounts addresses
//   orgIdContract: OrgIdBaseContract; // <-- Deployed ORGiD smart contract
//   httpServer: HttpFileServer; // <-- Simple HTTP server for files hosting
//   registerOrgId( // <-- Helper for the registration of organizations
//     orgIdOwner: VoidSigner,
//     overrideOptions?: TestOverrideOptions
//   ): Promise<OrgIdRegistrationResult>;
//   buildOrgJson( // <-- Helper for creation of ORG.JSON files
//     did: string,
//     owner: VoidSigner,
//     overrideOptions?: TestOverrideOptions
//   ): Promise<SignedVC>;
//   close: () => void; // <-- Helper for gracefully close the servers of the ORGiD environment
// }

// Possible overrides
// {
//   baseUri?: string;
//   vcType?: string[];
//   vcNftMetaData?: any;
//   orgJson?: any;
//   orgJsonBlockchainAccountId?: string;
//   deactivated?: string;
//   verificationMethod?: any[];
// }

const owner = setup.accounts[2];
const {
  orgIdHash,
  orgJson
} = await setup.registerOrgId(owner /**, overrides **/);

console.log(orgIdHash);

/*
0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e
*/

console.log(orgJson);

/*
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "id": "0b9f1b08-a465-44d3-83de-0b9f95a0445e",
  "type": [
    "VerifiableCredential",
    "ORG.JSON"
  ],
  "issuer": "did:orgid:4:0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e",
  "issuanceDate": "2021-06-16T22:36:33.461+03:00",
  "credentialSubject": {
    "schemaVersion": "0.5.5",
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://windingtree.com/ns/orgid/v1"
    ],
    "id": "did:orgid:4:0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e",
    "created": "2021-06-16T19:36:33.460Z",
    "updated": "2021-06-16T19:36:33.460Z",
    "verificationMethod": [
      {
        "id": "did:orgid:4:0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e#key-1",
        "controller": "did:orgid:4:0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e",
        "type": "EcdsaSecp256k1RecoveryMethod2020",
        "blockchainAccountId": "0x88adee9914d928b4989C05d33165afa442C8b040@eip155:1337"
      }
    ],
    "service": [],
    "payment": [],
    "trustAssertions": [],
    "credentials": [],
    "legalEntity": {
      "legalName": "Acme, Corp.",
      "alternativeName": "Acme",
      "registryCode": "US12345567",
      "identifiers": [
        {
          "type": "IATA",
          "value": "123456"
        }
      ],
      "legalType": "GmBH",
      "registeredAddress": {
        "country": "CZ",
        "subdivision": "71",
        "locality": "Jihlava",
        "postalCode": "71354",
        "streetAddress": "3150 Main St.",
        "premise": "STE 100"
      },
      "locations": [
        {
          "name": "Main Office",
          "description": "This is our main office",
          "address": {
            "country": "CZ",
            "subdivision": "71",
            "locality": "Jihlava",
            "postalCode": "71354",
            "streetAddress": "3150 Main St.",
            "premise": "STE 100",
            "gps": "50.087070,14.417210",
            "geocodes": [
              {
                "type": "olc",
                "value": "3CQ9+F2 Prague"
              },
              {
                "type": "what3words",
                "value": "printers.torn.images"
              }
            ]
          },
          "openingHours": [
            {
              "weekDay": "mon,tue,wed",
              "hours": "9:00-18:00"
            },
            {
              "weekDay": "fri",
              "hours": "10:00-16:00"
            }
          ],
          "contacts": [
            {
              "function": "Reception",
              "name": "John Smith",
              "phone": "+1234567890",
              "email": "email@spam.com",
              "messengers": [
                {
                  "type": "whatsapp",
                  "value": "+1234567890"
                },
                {
                  "type": "telegram",
                  "value": "acme.ny.reception"
                }
              ]
            }
          ]
        }
      ],
      "contacts": [
        {
          "function": "Customer Service",
          "name": "John Smith",
          "phone": "+1234567890",
          "email": "email@spam.com"
        }
      ]
    }
  },
  "proof": {
    "type": "EcdsaSecp256k1RecoverySignature2020",
    "created": "2021-06-16T22:36:33.482+03:00",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:orgid:4:0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e#key-1",
    "jws": "eyJhbGciOiJFUzI1...jk5YjAw"
  }
}
*/

await setup.close();
```
