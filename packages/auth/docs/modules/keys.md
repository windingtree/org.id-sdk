[@windingtree/org.id-auth](../README.md) / keys

# Namespace: keys

## Table of contents

### Classes

- [KeyObject](../classes/keys.keyobject.md)

### Interfaces

- [JWK](../interfaces/keys.jwk.md)

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

Ƭ **KeyLike**: [`KeyObject`](../classes/keys.keyobject.md) \| `CryptoKey` \| `Uint8Array`

#### Defined in

node_modules/jose/dist/types/types.d.ts:35

___

### KeyLikeType

Ƭ **KeyLikeType**: ``"privateKey"`` \| ``"publicKey"``

#### Defined in

[src/keys.ts:30](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L30)

___

### KeyPair

Ƭ **KeyPair**: { [k in KeyLikeType]: KeyLike}

#### Defined in

[src/keys.ts:32](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L32)

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

[src/keys.ts:38](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L38)

___

### VerificationMethodType

Ƭ **VerificationMethodType**: `VerificationMethodReference`[``"type"``]

#### Defined in

[src/keys.ts:36](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L36)

## Variables

### KeyTypes

• `Const` **KeyTypes**: [`VerificationMethodType`](keys.md#verificationmethodtype)[]

#### Defined in

[src/keys.ts:47](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L47)

___

### keyTypeConfig

• `Const` **keyTypeConfig**: `Object`

#### Index signature

▪ [key: `string`]: [`KeysAlgConfig`](keys.md#keysalgconfig)

#### Defined in

[src/keys.ts:55](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L55)

___

### keyTypeMap

• `Const` **keyTypeMap**: `Object`

#### Index signature

▪ [key: `string`]: [`VerificationMethodType`](keys.md#verificationmethodtype)

#### Defined in

[src/keys.ts:83](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L83)

___

### signatureTypeMap

• `Const` **signatureTypeMap**: `Object`

#### Index signature

▪ [key: `string`]: `CryptographicSignatureSuiteReference`

#### Defined in

[src/keys.ts:92](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L92)

## Functions

### createJWK

▸ `Const` **createJWK**(`key`): `Promise`<[`JWK`](../interfaces/keys.jwk.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`KeyLike`](keys.md#keylike) |

#### Returns

`Promise`<[`JWK`](../interfaces/keys.jwk.md)\>

#### Defined in

[src/keys.ts:230](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L230)

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

[src/keys.ts:197](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L197)

___

### getAlgFromJWK

▸ `Const` **getAlgFromJWK**(`key`, `supportJws?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`JWK`](../interfaces/keys.jwk.md) | `undefined` |
| `supportJws` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[src/keys.ts:160](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L160)

___

### importKeyPrivatePem

▸ `Const` **importKeyPrivatePem**(`key`, `passphrase?`): [`KeyObject`](../classes/keys.keyobject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `Buffer` |
| `passphrase?` | `string` |

#### Returns

[`KeyObject`](../classes/keys.keyobject.md)

#### Defined in

[src/keys.ts:233](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L233)

___

### importKeyPublicPem

▸ `Const` **importKeyPublicPem**(`key`): [`KeyObject`](../classes/keys.keyobject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `Buffer` |

#### Returns

[`KeyObject`](../classes/keys.keyobject.md)

#### Defined in

[src/keys.ts:251](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L251)

___

### keyTypeFromJWK

▸ `Const` **keyTypeFromJWK**(`key`): ``"JsonWebKey2020"`` \| ``"EcdsaSecp256k1VerificationKey2019"`` \| ``"Ed25519VerificationKey2018"`` \| ``"RsaVerificationKey2018"`` \| ``"X25519KeyAgreementKey2019"`` \| ``"EcdsaSecp256k1RecoveryMethod2020"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`JWK`](../interfaces/keys.jwk.md) |

#### Returns

``"JsonWebKey2020"`` \| ``"EcdsaSecp256k1VerificationKey2019"`` \| ``"Ed25519VerificationKey2018"`` \| ``"RsaVerificationKey2018"`` \| ``"X25519KeyAgreementKey2019"`` \| ``"EcdsaSecp256k1RecoveryMethod2020"``

#### Defined in

[src/keys.ts:101](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L101)

___

### signatureTypeFromJWK

▸ `Const` **signatureTypeFromJWK**(`key`): `CryptographicSignatureSuiteReference`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`JWK`](../interfaces/keys.jwk.md) |

#### Returns

`CryptographicSignatureSuiteReference`

#### Defined in

[src/keys.ts:130](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/keys.ts#L130)
