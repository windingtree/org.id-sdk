[![@windingtree/org.id-test-setup](https://img.shields.io/npm/v/@windingtree/org.id-test-setup.svg)](https://www.npmjs.com/package/@windingtree/org.id-test-setup)
# @windingtree/org.id-test-setup
Ease ORGiD setup for testing purposes

## Setup

```bash
npm install @windingtree/org.id-test-setup
```

## Usage

```javascript
import {
  orgIdSetup,
  generateSalt
} from '@windingtree/org.id-test-setup';

const setup = await orgIdSetup();

const owner = setup.accounts[2];
const {
  orgIdHash,
  orgJson
} = await setup.registerOrgId(owner);

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
  "issuer": "did:orgid:test:0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e",
  "issuanceDate": "2021-06-16T22:36:33.461+03:00",
  "credentialSubject": {
    "schemaVersion": "0.5.5",
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://windingtree.com/ns/orgid/v1"
    ],
    "id": "did:orgid:test:0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e",
    "created": "2021-06-16T19:36:33.460Z",
    "updated": "2021-06-16T19:36:33.460Z",
    "verificationMethod": [
      {
        "id": "did:orgid:test:0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e#key-1",
        "controller": "did:orgid:test:0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e",
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
    "verificationMethod": "did:orgid:test:0xd567297242e7948c0a670ee4f9154e2fddf3b7184b7bef02e49abd174823ab4e#key-1",
    "jws": "eyJhbGciOiJFUzI1NksiLCJraWQiOiJkaWQ6b3JnaWQ6dGVzdDoweGQ1NjcyOTcyNDJlNzk0OGMwYTY3MGVlNGY5MTU0ZTJmZGRmM2I3MTg0YjdiZWYwMmU0OWFiZDE3NDgyM2FiNGUja2V5LTEiLCJ0eXAiOiJKV1MifQ.eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJpZCI6IjBiOWYxYjA4LWE0NjUtNDRkMy04M2RlLTBiOWY5NWEwNDQ1ZSIsInR5cGUiOlsiVmVyaWZpYWJsZUNyZWRlbnRpYWwiLCJPUkcuSlNPTiJdLCJpc3N1ZXIiOiJkaWQ6b3JnaWQ6dGVzdDoweGQ1NjcyOTcyNDJlNzk0OGMwYTY3MGVlNGY5MTU0ZTJmZGRmM2I3MTg0YjdiZWYwMmU0OWFiZDE3NDgyM2FiNGUiLCJpc3N1YW5jZURhdGUiOiIyMDIxLTA2LTE2VDIyOjM2OjMzLjQ2MSswMzowMCIsImNyZWRlbnRpYWxTdWJqZWN0Ijp7InNjaGVtYVZlcnNpb24iOiIwLjUuNSIsIkBjb250ZXh0IjpbImh0dHBzOi8vd3d3LnczLm9yZy9ucy9kaWQvdjEiLCJodHRwczovL3dpbmRpbmd0cmVlLmNvbS9ucy9vcmdpZC92MSJdLCJpZCI6ImRpZDpvcmdpZDp0ZXN0OjB4ZDU2NzI5NzI0MmU3OTQ4YzBhNjcwZWU0ZjkxNTRlMmZkZGYzYjcxODRiN2JlZjAyZTQ5YWJkMTc0ODIzYWI0ZSIsImNyZWF0ZWQiOiIyMDIxLTA2LTE2VDE5OjM2OjMzLjQ2MFoiLCJ1cGRhdGVkIjoiMjAyMS0wNi0xNlQxOTozNjozMy40NjBaIiwidmVyaWZpY2F0aW9uTWV0aG9kIjpbeyJpZCI6ImRpZDpvcmdpZDp0ZXN0OjB4ZDU2NzI5NzI0MmU3OTQ4YzBhNjcwZWU0ZjkxNTRlMmZkZGYzYjcxODRiN2JlZjAyZTQ5YWJkMTc0ODIzYWI0ZSNrZXktMSIsImNvbnRyb2xsZXIiOiJkaWQ6b3JnaWQ6dGVzdDoweGQ1NjcyOTcyNDJlNzk0OGMwYTY3MGVlNGY5MTU0ZTJmZGRmM2I3MTg0YjdiZWYwMmU0OWFiZDE3NDgyM2FiNGUiLCJ0eXBlIjoiRWNkc2FTZWNwMjU2azFSZWNvdmVyeU1ldGhvZDIwMjAiLCJibG9ja2NoYWluQWNjb3VudElkIjoiMHg4OGFkZWU5OTE0ZDkyOGI0OTg5QzA1ZDMzMTY1YWZhNDQyQzhiMDQwQGVpcDE1NToxMzM3In1dLCJzZXJ2aWNlIjpbXSwicGF5bWVudCI6W10sInRydXN0QXNzZXJ0aW9ucyI6W10sImNyZWRlbnRpYWxzIjpbXSwibGVnYWxFbnRpdHkiOnsibGVnYWxOYW1lIjoiQWNtZSwgQ29ycC4iLCJhbHRlcm5hdGl2ZU5hbWUiOiJBY21lIiwicmVnaXN0cnlDb2RlIjoiVVMxMjM0NTU2NyIsImlkZW50aWZpZXJzIjpbeyJ0eXBlIjoiSUFUQSIsInZhbHVlIjoiMTIzNDU2In0seyJ0eXBlIjoiVHJhZGUgTGljZW5zZSIsInZhbHVlIjoiOTg3NjU0MzEifV0sImxlZ2FsVHlwZSI6IkdtQkgiLCJyZWdpc3RlcmVkQWRkcmVzcyI6eyJjb3VudHJ5IjoiQ1oiLCJzdWJkaXZpc2lvbiI6IjcxIiwibG9jYWxpdHkiOiJKaWhsYXZhIiwicG9zdGFsQ29kZSI6IjcxMzU0Iiwic3RyZWV0QWRkcmVzcyI6IjMxNTAgTWFpbiBTdC4iLCJwcmVtaXNlIjoiU1RFIDEwMCJ9LCJsb2NhdGlvbnMiOlt7Im5hbWUiOiJNYWluIE9mZmljZSIsImRlc2NyaXB0aW9uIjoiVGhpcyBpcyBvdXIgbWFpbiBvZmZpY2UiLCJhZGRyZXNzIjp7ImNvdW50cnkiOiJDWiIsInN1YmRpdmlzaW9uIjoiNzEiLCJsb2NhbGl0eSI6IkppaGxhdmEiLCJwb3N0YWxDb2RlIjoiNzEzNTQiLCJzdHJlZXRBZGRyZXNzIjoiMzE1MCBNYWluIFN0LiIsInByZW1pc2UiOiJTVEUgMTAwIiwiZ3BzIjoiNTAuMDg3MDcwLDE0LjQxNzIxMCIsImdlb2NvZGVzIjpbeyJ0eXBlIjoib2xjIiwidmFsdWUiOiIzQ1E5K0YyIFByYWd1ZSJ9LHsidHlwZSI6IndoYXQzd29yZHMiLCJ2YWx1ZSI6InByaW50ZXJzLnRvcm4uaW1hZ2VzIn1dfSwib3BlbmluZ0hvdXJzIjpbeyJ3ZWVrRGF5IjoibW9uLHR1ZSx3ZWQiLCJob3VycyI6Ijk6MDAtMTg6MDAifSx7IndlZWtEYXkiOiJmcmkiLCJob3VycyI6IjEwOjAwLTE2OjAwIn1dLCJjb250YWN0cyI6W3siZnVuY3Rpb24iOiJSZWNlcHRpb24iLCJuYW1lIjoiSm9obiBTbWl0aCIsInBob25lIjoiKzEyMzQ1Njc4OTAiLCJlbWFpbCI6ImVtYWlsQHNwYW0uY29tIiwibWVzc2VuZ2VycyI6W3sidHlwZSI6IndoYXRzYXBwIiwidmFsdWUiOiIrMTIzNDU2Nzg5MCJ9LHsidHlwZSI6IndoYXRzYXBwIiwidmFsdWUiOiIrMTIzNDU2Nzg5MCJ9LHsidHlwZSI6InRlbGVncmFtIiwidmFsdWUiOiJhY21lLm55LnJlY2VwdGlvbiJ9LHsidHlwZSI6InZpYmVyIiwidmFsdWUiOiIrMTIzNDU2Nzg5MCJ9LHsidHlwZSI6IndlY2hhdCIsInZhbHVlIjoiYWNtZS5ueS5yZWNlcHRpb24ifSx7InR5cGUiOiJtZXNzZW5nZXIiLCJ2YWx1ZSI6ImFjbWUubnkucmVjZXB0aW9uIn0seyJ0eXBlIjoibGluZSIsInZhbHVlIjoiYWNtZS5ueS5yZWNlcHRpb24ifSx7InR5cGUiOiJraWsiLCJ2YWx1ZSI6ImFjbWUubnkucmVjZXB0aW9uIn1dfV19XSwiY29udGFjdHMiOlt7ImZ1bmN0aW9uIjoiQ3VzdG9tZXIgU2VydmljZSIsIm5hbWUiOiJKb2huIFNtaXRoIiwicGhvbmUiOiIrMTIzNDU2Nzg5MCIsImVtYWlsIjoiZW1haWxAc3BhbS5jb20ifSx7ImZ1bmN0aW9uIjoiU2FsZXMiLCJuYW1lIjoiSmVubmEgU21pdGgiLCJwaG9uZSI6IisxMjM0NTY3ODkwIiwiZW1haWwiOiJlbWFpbEBzcGFtLmNvbSJ9LHsiZnVuY3Rpb24iOiJQcmVzcyIsInBob25lIjoiKzEyMzQ1Njc4OTAiLCJlbWFpbCI6ImVtYWlsQHNwYW0uY29tIn1dLCJvcmdhbml6YXRpb25hbFVuaXRzIjpbImRpZDpvcmdpZDoweDk0YmY1YTU3Yjg1MGEzNWI0ZDFkN2I1OWY2NjNjZTNhOGE3NmZkOTkyOGVmMjA2N2NjNzcyZmM5N2ZiMGFkNzUiXX19fQ.MHgxYTNlYmM3Y2YwYWMwZjk1YWE5NGE5NTMyMjJmZTE4MmZmZTRiNmJlMDc3ZjdhNzNkNDlkNjViZmY1NWM5NzQ2MGQwNzZjN2ExZGQwYTA2OGM3NGZmYWFlNGU4NTU1YWYyN2U5ZGE0NmVmMjU2Y2QwMjU5ODA0MjNkNTczMjk5YjAw"
  }
}
*/

await setup.close();

```

## TODO

- Add support for organizational units
- Add support for personal ORGiDs

## Documentation

[Generated docs](docs#readme)
