# Shared ORGiD SDK utilities

This package contains a lot of useful utilities that using across the ORGiD SDK packages and projects.

## Setup

```bash
yarn add @windingtree/org.id-utils
```

## Module

```typescript
import {
  uid,
  common,
  errors,
  http,
  object,
  regexp
} from '@windingtree/org.id-utils';
```

## Typescript typings

> TBD, all structured types will be returned as types

## Unique identifiers

### simpleUid(length)

Creates a unique Id. Length is an optional parameter with a value from 5 to 11.

```typescript
import {
  uid: {
    simpleUid
  }
} from '@windingtree/org.id-utils';

// 8 - id length, minimum id length is 5
const id = simpleUid(8); // => 'erdhk9if'
```

### UUID v4 identifiers

```typescript
import {
  uid: {
    uuid4
  }
} from '@windingtree/org.id-utils';

const id = uuid4(); // => '955a781f-f427-2d8e-e895-4ab3f87026c1'
```

## Common ORGiD utilities

### Unique bytes32 salt generation

```typescript
import {
  common: {
    generateSalt
  }
} from '@windingtree/org.id-utils';

const salt = generateSalt(); // => Ox64087035cfd4f4de7dc73618bc78b568a571587a0f12391bf137a7cd21b77ad0
```

### Generation of the ORGiD hash

Using account address:

```typescript
import {
  common: {
    generateSalt,
    generateOrgIdWithAddress
  }
} from '@windingtree/org.id-utils';

const address = '0x0bb...46C8';
const salt = generateSalt();

const orgId = generateOrgIdWithAddress(
  address,
  salt
); // => Ox9ff34a5c7c32ef2fdc223b97b029fed703b54603cf4277d33f280eb57e4b2569

```

Using ethers.js signer:

```typescript
import {
  common: {
    generateSalt,
    generateOrgIdWithSigner
  }
} from '@windingtree/org.id-utils';
import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const orgId = generateOrgIdWithSigner(
  signer,
  salt
); // 0xcabcfd423e5aafa1d20cff2ae516c0dddd5c70124cd1f6d51118ee4fa9b3d1cb
```

## HTTP utilities

HTTP-related constants and utilities

### HTTP methods and response status codes

```typescript
import {
  http: {
    codes
  }
} from '@windingtree/org.id-utils';

console.log(Object.keys(HTTP_METHODS));
// [
//   'GET',
//   'get',
//   'POST',
//   'post',
//   'PUT',
//   'put',
//   'DELETE',
//   'delete',
//   'PATCH',
//   'patch',
//   'head',
//   'HEAD',
//   'options',
//   'OPTIONS',
//   'purge',
//   'PURGE',
//   'link',
//   'LINK',
//   'unlink',
//   'UNLINK'
// ]

console.log(Object.keys(codes.HTTP_STATUS));
// [
//   'OK',
//   'BAD_REQUEST',
//   'UNAUTHORIZED',
//   'FORBIDDEN',
//   'NOT_FOUND',
//   'METHOD_NOT_ALLOWED',
//   'INTERNAL_SERVER_ERROR',
//   'NOT_IMPLEMENTED',
//   'BAD_GATEWAY',
//   'SERVICE_UNAVAILABLE'
// ]

console.log(HTTP_STATUS_CODES);
// {
//   OK: 200,
//   BAD_REQUEST: 400,
//   UNAUTHORIZED: 401,
//   FORBIDDEN: 403,
//   NOT_FOUND: 404,
//   METHOD_NOT_ALLOWED: 405,
//   INTERNAL_SERVER_ERROR: 500,
//   NOT_IMPLEMENTED: 501,
//   BAD_GATEWAY: 502,
//   SERVICE_UNAVAILABLE: 503,
// }
```

## HTTP request helper

Useful for accessing APIs and fetching files via HTTP.

```typescript
import {
  http: {
    request
  }
} from '@windingtree/org.id-utils';

const data = { action: 'true' };

...
const response = await request(
  'https://example.com/path/to/api/endpoint',
  'POST',
  data, // optional body data for POST, PUT, etc requests
  extraHeaders, // optional, authentication headers, for example
  timeout, // optional,  default is 100000 (10 sec)
  transformResponse // optional transformer function
);
```

## Object utilities

### Fetching of the value from an object by path

```typescript
import {
  object: {
    getDeepValue,
    safeObjectStringify
  }
} from '@windingtree/org.id-utils';

const source = {
  some: {
    deep: {
      value: [
        'one',
        'two',
        'three'
      ]
    }
  }
};

const result = getDeepValue(source, 'some.deep.value[1]');
console.log(result); // <-- two

const obj: any = { prop: 111 };
obj.circular = obj;
const str = safeObjectStringify(obj);
// {"prop":111,"circular":"[Circular]"}
```

### Validating an object against the schema

> Under the hood this utility is uses a powerful [`ajv`](https://github.com/ajv-validator/ajv) package.

```typescript
import type { AnySchema } from '@windingtree/org.id-utils/dist/object';
import {
  object: {
    validateWithSchemaOrRef
  }
} from '@windingtree/org.id-utils';

const validationSchema: AnySchema = {
  $id: 'customSchema.json',
  title: 'My Custom Json Schema',
  allOf: [
    {
      $ref: '#/definitions/OneReference'
    }
  ],
  definitions: {
    OneReference: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        status: {
          oneOf: [
            {
              $ref: '#/definitions/TwoReference'
            },
            {
              $ref: '#/definitions/ThreeReference'
            }
          ]
        }
      },
      required: [
        'name',
        'status'
      ]
    },
    TwoReference: {
      type: 'object',
      properties: {
        member: {
          type: 'boolean'
        }
      },
      required: [
        'member'
      ]
    },
    ThreeReference: {
      type: 'object',
      properties: {
        vip: {
          type: 'boolean'
        }
      },
      required: [
        'vip'
      ]
    }
  }
};

// raw data object
const source: any = {
  name: 'King Dude',
  status: {
    vip: true
  }
};

// validating against the root definition
const validationResult1 = object.validateWithSchemaOrRef(
  validationSchema,
  '',
  orgJson as KnownTargetType
);

if (validationResult !== null) {
  throw new Error(
    `Validation error: ${validationResult}`
  );
}

// validating against the specific definition
const validationResult2 = object.validateWithSchemaOrRef(
  validationSchema,
  '#/definitions/TwoReference',
  orgJson.status
);

...
```

## Regular expressions

RegExp collection for some validation cases

```typescript
import { regexp } from '@windingtree/org.id-utils';

console.log(Object.keys(regexp));
/*
[
  phone,
  uri,
  uriHttp,
  email,
  isoDate,
  ethereumAddress,
  bitcoinAddress,
  blockchainAccountId,
  blockchainAccountIdGrouped, // <-- parses the string into parameters
  X25519,                     // <-- X25519 pub key
  secp256k1,                  // <-- secp256k1 pub key
  bytes32,
  swift,
  iban,
  did,
  didOnly,
  didGrouped,                 // <-- parses the string into parameters
  uuid4,
  ipfs,
  ipfsCidV0,
  ipfsCidV1Base32,
  ipfsCidV1Base58btc,
  ipfsUri,
  ipfsUriGrouped              // <-- parses the string into parameters
]
*/
```

### "Grouped" RegExps

### blockchainAccountIdGrouped

```text
string -> result.groups { accountId, blockchainType, blockchainId }
```

### didGrouped

```text
string -> result.groups { did, method, network, id, query, fragment }
```

### ipfsUriGrouped

```text
string -> result.groups { protocol, cid, blockchainId }
```
