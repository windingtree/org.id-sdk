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

### Functions

- [createJWK](keys.md#createjwk)
- [generateKeyPair](keys.md#generatekeypair)
- [getAlgFromJWK](keys.md#getalgfromjwk)
- [importKeyPrivatePem](keys.md#importkeyprivatepem)
- [importKeyPublicPem](keys.md#importkeypublicpem)
- [keyTypeFromJWK](keys.md#keytypefromjwk)

## Type aliases

### KeyLike

Ƭ **KeyLike**: [KeyObject](../classes/keys.keyobject.md) \| `CryptoKey` \| `Uint8Array`

#### Defined in

node_modules/jose/dist/types/types.d.ts:35

___

### KeyLikeType

Ƭ **KeyLikeType**: ``"privateKey"`` \| ``"publicKey"``

#### Defined in

[src/keys.ts:29](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L29)

___

### KeyPair

Ƭ **KeyPair**: { [k in KeyLikeType]: KeyLike}

#### Defined in

[src/keys.ts:31](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L31)

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
| `type` | `string` |

#### Defined in

[src/keys.ts:37](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L37)

___

### VerificationMethodType

Ƭ **VerificationMethodType**: `VerificationMethodReference`[``"type"``]

#### Defined in

[src/keys.ts:35](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L35)

## Variables

### KeyTypes

• `Const` **KeyTypes**: [VerificationMethodType](keys.md#verificationmethodtype)[]

#### Defined in

[src/keys.ts:45](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L45)

___

### keyTypeConfig

• `Const` **keyTypeConfig**: `Object`

#### Index signature

▪ [key: `string`]: [KeysAlgConfig](keys.md#keysalgconfig)

#### Defined in

[src/keys.ts:52](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L52)

___

### keyTypeMap

• `Const` **keyTypeMap**: `Object`

#### Index signature

▪ [key: `string`]: [VerificationMethodType](keys.md#verificationmethodtype)

#### Defined in

[src/keys.ts:80](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L80)

## Functions

### createJWK

▸ `Const` **createJWK**(`key`): `Promise`<[JWK](../interfaces/keys.jwk.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [KeyLike](keys.md#keylike) |

#### Returns

`Promise`<[JWK](../interfaces/keys.jwk.md)\>

#### Defined in

[src/keys.ts:190](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L190)

___

### generateKeyPair

▸ `Const` **generateKeyPair**(`type`, `options?`): `Promise`<[KeyPair](keys.md#keypair)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `options` | `GenerateKeyPairOptions` |

#### Returns

`Promise`<[KeyPair](keys.md#keypair)\>

#### Defined in

[src/keys.ts:157](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L157)

___

### getAlgFromJWK

▸ `Const` **getAlgFromJWK**(`key`, `supportJws?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [JWK](../interfaces/keys.jwk.md) | `undefined` |
| `supportJws` | `boolean` | false |

#### Returns

`string`

#### Defined in

[src/keys.ts:120](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L120)

___

### importKeyPrivatePem

▸ `Const` **importKeyPrivatePem**(`key`, `passphrase?`): [KeyObject](../classes/keys.keyobject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `Buffer` |
| `passphrase?` | `string` |

#### Returns

[KeyObject](../classes/keys.keyobject.md)

#### Defined in

[src/keys.ts:193](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L193)

___

### importKeyPublicPem

▸ `Const` **importKeyPublicPem**(`key`): [KeyObject](../classes/keys.keyobject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| `Buffer` |

#### Returns

[KeyObject](../classes/keys.keyobject.md)

#### Defined in

[src/keys.ts:211](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L211)

___

### keyTypeFromJWK

▸ `Const` **keyTypeFromJWK**(`key`): ``"JsonWebKey2020"`` \| ``"EcdsaSecp256k1VerificationKey2019"`` \| ``"Ed25519VerificationKey2018"`` \| ``"RsaVerificationKey2018"`` \| ``"X25519KeyAgreementKey2019"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [JWK](../interfaces/keys.jwk.md) |

#### Returns

``"JsonWebKey2020"`` \| ``"EcdsaSecp256k1VerificationKey2019"`` \| ``"Ed25519VerificationKey2018"`` \| ``"RsaVerificationKey2018"`` \| ``"X25519KeyAgreementKey2019"``

#### Defined in

[src/keys.ts:90](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/keys.ts#L90)
