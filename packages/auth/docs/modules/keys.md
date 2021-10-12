[@windingtree/org.id-auth](../README.md) / keys

# Namespace: keys

## Table of contents

### Interfaces

- [JWK](../interfaces/keys.JWK.md)

### Type aliases

- [KeyLike](keys.md#keylike)
- [KeyLikeType](keys.md#keyliketype)
- [KeyPair](keys.md#keypair)
- [KeysAlgConfig](keys.md#keysalgconfig)
- [VerificationMethodType](keys.md#verificationmethodtype)

### Variables

- [KeyTypes](keys.md#keytypes)
- [keyTypeConfig](keys.md#keytypeconfig)
- [keyTypeMap](keys.md#keytypemap)
- [signatureTypeMap](keys.md#signaturetypemap)

### Functions

- [createJWK](keys.md#createjwk)
- [generateKeyPair](keys.md#generatekeypair)
- [getAlgFromJWK](keys.md#getalgfromjwk)
- [importKeyPrivatePem](keys.md#importkeyprivatepem)
- [importKeyPublicPem](keys.md#importkeypublicpem)
- [keyTypeFromJWK](keys.md#keytypefromjwk)
- [signatureTypeFromJWK](keys.md#signaturetypefromjwk)

## Type aliases

### KeyLike

Ƭ **KeyLike**: `Object`

KeyLike are runtime-specific classes representing asymmetric keys or symmetric secrets.
These are instances of
[CryptoKey](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey) and additionally
[KeyObject](https://nodejs.org/api/crypto.html#crypto_class_keyobject)
in Node.js runtime.
[Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)
instances are also accepted as symmetric secret representation only.

[jose/key/import](../modules/key_import.md#readme) functions can be used to import PEM,
or JWK formatted asymmetric keys and certificates to these runtime-specific representations.

In Node.js the
[Buffer](https://nodejs.org/api/buffer.html#buffer_buffer) class is a subclass of Uint8Array
and so Buffer can be provided for symmetric secrets as well.

---

[KeyObject](https://nodejs.org/api/crypto.html#crypto_class_keyobject) is a representation of a
key/secret available in the Node.js runtime.
In addition to the import functions of this library you may use the
runtime APIs
[crypto.createPublicKey](https://nodejs.org/api/crypto.html#crypto_crypto_createpublickey_key),
[crypto.createPrivateKey](https://nodejs.org/api/crypto.html#crypto_crypto_createprivatekey_key), and
[crypto.createSecretKey](https://nodejs.org/api/crypto.html#crypto_crypto_createsecretkey_key_encoding)
to obtain a KeyObject from your existing key material.

[CryptoKey](https://developer.mozilla.org/en-US/docs/Web/API/CryptoKey) is a representation of a
key/secret available in the Browser and Deno runtimes.
In addition to the import functions of this library you may use the
[SubtleCrypto.importKey](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey) API
to obtain a CryptoKey from your existing key material.

---

**`example`** Import a PEM-encoded SPKI Public Key
```js
import { importSPKI } from 'jose/key/import'

const algorithm = 'ES256'
const spki = `-----BEGIN PUBLIC KEY-----
MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEFlHHWfLk0gLBbsLTcuCrbCqoHqmM
YJepMC+Q+Dd6RBmBiA41evUsNMwLeN+PNFqib+xwi9JkJ8qhZkq8Y/IzGg==
-----END PUBLIC KEY-----`
const ecPublicKey = await importSPKI(spki, algorithm)
```

**`example`** Import a X.509 Certificate
```js
import { importX509 } from 'jose/key/import'

const algorithm = 'ES256'
const x509 = `-----BEGIN CERTIFICATE-----
MIIBXjCCAQSgAwIBAgIGAXvykuMKMAoGCCqGSM49BAMCMDYxNDAyBgNVBAMMK3Np
QXBNOXpBdk1VaXhXVWVGaGtjZXg1NjJRRzFyQUhXaV96UlFQTVpQaG8wHhcNMjEw
OTE3MDcwNTE3WhcNMjIwNzE0MDcwNTE3WjA2MTQwMgYDVQQDDCtzaUFwTTl6QXZN
VWl4V1VlRmhrY2V4NTYyUUcxckFIV2lfelJRUE1aUGhvMFkwEwYHKoZIzj0CAQYI
KoZIzj0DAQcDQgAE8PbPvCv5D5xBFHEZlBp/q5OEUymq7RIgWIi7tkl9aGSpYE35
UH+kBKDnphJO3odpPZ5gvgKs2nwRWcrDnUjYLDAKBggqhkjOPQQDAgNIADBFAiEA
1yyMTRe66MhEXID9+uVub7woMkNYd0LhSHwKSPMUUTkCIFQGsfm1ecXOpeGOufAh
v+A1QWZMuTWqYt+uh/YSRNDn
-----END CERTIFICATE-----`
const ecPublicKey = await importX509(x509, algorithm)
```

**`example`** Import a PEM-encoded PKCS8 Private Key
```js
import { importPKCS8 } from 'jose/key/import'

const algorithm = 'ES256'
const pkcs8 = `-----BEGIN PRIVATE KEY-----
MIGHAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBG0wawIBAQQgiyvo0X+VQ0yIrOaN
nlrnUclopnvuuMfoc8HHly3505OhRANCAAQWUcdZ8uTSAsFuwtNy4KtsKqgeqYxg
l6kwL5D4N3pEGYGIDjV69Sw0zAt43480WqJv7HCL0mQnyqFmSrxj8jMa
-----END PRIVATE KEY-----`
const ecPrivateKey = await importPKCS8(pkcs8, algorithm)
```

**`example`** Import a JSON Web Key (JWK)
```js
import { importJWK } from 'jose/key/import'

const ecPublicKey = await importJWK({
  crv: 'P-256',
  kty: 'EC',
  x: 'ySK38C1jBdLwDsNWKzzBHqKYEE5Cgv-qjWvorUXk9fw',
  y: '_LeQBw07cf5t57Iavn4j-BqJsAD1dpoz8gokd3sBsOo'
}, 'ES256')

const rsaPublicKey = await importJWK({
  kty: 'RSA',
  e: 'AQAB',
  n: '12oBZRhCiZFJLcPg59LkZZ9mdhSMTKAQZYq32k_ti5SBB6jerkh-WzOMAO664r_qyLkqHUSp3u5SbXtseZEpN3XPWGKSxjsy-1JyEFTdLSYe6f9gfrmxkUF_7DTpq0gn6rntP05g2-wFW50YO7mosfdslfrTJYWHFhJALabAeYirYD7-9kqq9ebfFMF4sRRELbv9oi36As6Q9B3Qb5_C1rAzqfao_PCsf9EPsTZsVVVkA5qoIAr47lo1ipfiBPxUCCNSdvkmDTYgvvRm6ZoMjFbvOtgyts55fXKdMWv7I9HMD5HwE9uW839PWA514qhbcIsXEYSFMPMV6fnlsiZvQQ'
}, 'PS256')
```

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Defined in

node_modules/jose/dist/types/types.d.ts:97

___

### KeyLikeType

Ƭ **KeyLikeType**: ``"privateKey"`` \| ``"publicKey"``

#### Defined in

[src/keys.ts:16](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L16)

___

### KeyPair

Ƭ **KeyPair**: { [k in KeyLikeType]: KeyLike }

#### Defined in

[src/keys.ts:18](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L18)

___

### KeysAlgConfig

Ƭ **KeysAlgConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alg` | `string` |
| `crv?` | `string` |
| `jws` | `boolean` |
| `modulusLength?` | `number` |
| `signatureType?` | `CryptographicSignatureSuiteReference` |
| `type` | `string` |

#### Defined in

[src/keys.ts:24](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L24)

___

### VerificationMethodType

Ƭ **VerificationMethodType**: `VerificationMethodReference`[``"type"``]

#### Defined in

[src/keys.ts:22](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L22)

## Variables

### KeyTypes

• **KeyTypes**: [`VerificationMethodType`](keys.md#verificationmethodtype)[]

#### Defined in

[src/keys.ts:33](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L33)

___

### keyTypeConfig

• **keyTypeConfig**: `Object`

#### Index signature

▪ [key: `string`]: [`KeysAlgConfig`](keys.md#keysalgconfig)

#### Defined in

[src/keys.ts:41](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L41)

___

### keyTypeMap

• **keyTypeMap**: `Object`

#### Index signature

▪ [key: `string`]: [`VerificationMethodType`](keys.md#verificationmethodtype)

#### Defined in

[src/keys.ts:69](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L69)

___

### signatureTypeMap

• **signatureTypeMap**: `Object`

#### Index signature

▪ [key: `string`]: `CryptographicSignatureSuiteReference`

#### Defined in

[src/keys.ts:78](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L78)

## Functions

### createJWK

▸ `Const` **createJWK**(`key`): `Promise`<[`JWK`](../interfaces/keys.JWK.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KeyLike`](keys.md#keylike) |

#### Returns

`Promise`<[`JWK`](../interfaces/keys.JWK.md)\>

#### Defined in

[src/keys.ts:217](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L217)

___

### generateKeyPair

▸ `Const` **generateKeyPair**(`type`, `options?`): `Promise`<[`KeyPair`](keys.md#keypair)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `options` | `GenerateKeyPairOptions` |

#### Returns

`Promise`<[`KeyPair`](keys.md#keypair)\>

#### Defined in

[src/keys.ts:183](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L183)

___

### getAlgFromJWK

▸ `Const` **getAlgFromJWK**(`key`, `supportJws?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`JWK`](../interfaces/keys.JWK.md) | `undefined` |
| `supportJws` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[src/keys.ts:146](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L146)

___

### importKeyPrivatePem

▸ `Const` **importKeyPrivatePem**(`key`, `alg?`): `Promise`<[`KeyLike`](keys.md#keylike)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `alg` | `string` | `'ES256K'` |

#### Returns

`Promise`<[`KeyLike`](keys.md#keylike)\>

#### Defined in

[src/keys.ts:220](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L220)

___

### importKeyPublicPem

▸ `Const` **importKeyPublicPem**(`key`, `alg?`): `Promise`<[`KeyLike`](keys.md#keylike)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` | `undefined` |
| `alg` | `string` | `'ES256K'` |

#### Returns

`Promise`<[`KeyLike`](keys.md#keylike)\>

#### Defined in

[src/keys.ts:226](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L226)

___

### keyTypeFromJWK

▸ `Const` **keyTypeFromJWK**(`key`): ``"JsonWebKey2020"`` \| ``"EcdsaSecp256k1VerificationKey2019"`` \| ``"Ed25519VerificationKey2018"`` \| ``"RsaVerificationKey2018"`` \| ``"X25519KeyAgreementKey2019"`` \| ``"EcdsaSecp256k1RecoveryMethod2020"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`JWK`](../interfaces/keys.JWK.md) |

#### Returns

``"JsonWebKey2020"`` \| ``"EcdsaSecp256k1VerificationKey2019"`` \| ``"Ed25519VerificationKey2018"`` \| ``"RsaVerificationKey2018"`` \| ``"X25519KeyAgreementKey2019"`` \| ``"EcdsaSecp256k1RecoveryMethod2020"``

#### Defined in

[src/keys.ts:87](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L87)

___

### signatureTypeFromJWK

▸ `Const` **signatureTypeFromJWK**(`key`): `CryptographicSignatureSuiteReference`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`JWK`](../interfaces/keys.JWK.md) |

#### Returns

`CryptographicSignatureSuiteReference`

#### Defined in

[src/keys.ts:116](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/keys.ts#L116)
