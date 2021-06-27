[![@windingtree/org.id-utils](https://img.shields.io/npm/v/@windingtree/org.id-utils.svg)](https://www.npmjs.com/package/@windingtree/org.id-utils)
# @windingtree/org.id-utils
Shared ORGiD utilities

## Setup

```bash
npm install @windingtree/org.id-utils
```

## Usage

### simpleUid(length)

Creates a unique Id. Length is an optional parameter with a value from 5 to 11.

```javascript
import {
  uid: {
    simpleUid
  }
} from '@windingtree/org.id-utils';

const id = simpleUid(8); // => 'erdhk9if'
```

### Regular expressions

RegExp collection for some validation cases

```javascript
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
  blockchainAccountIdGrouped,
  X25519,          // <-- X25519 pub key
  secp256k1,       // <-- secp256k1 pub key
  bytes32,
  swift,
  iban,
  ipfs,
  ipfsCidV0,
  ipfsCidV1Base32,
  ipfsCidV1Base58btc
]
*/
```

### HTTP response codes

HTTP-related constants and utilities

```javascript
import {
  http: {
    HTTP_STATUS,
    HTTP_STATUS_CODES,
    HTTP_METHODS
  }
} from '@windingtree/org.id-utils';

console.log(HTTP_STATUS_CODES);
/*
{
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503
}
*/
```

## Documentation

[Generated docs](docs#readme)

## TODO

- Create types definitions for grouped regexps
