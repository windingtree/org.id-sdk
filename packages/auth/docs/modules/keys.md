[@windingtree/org.id-auth](../README.md) / keys

# Namespace: keys

## Table of contents

### Classes

- [KeyObject](../classes/keys.keyobject.md)

### Interfaces

- [JWK](../interfaces/keys.jwk.md)

### Type aliases

- [KeyLike](keys.md#keylike)
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

Ƭ **KeyLike**: [*KeyObject*](../classes/keys.keyobject.md) \| CryptoKey \| Uint8Array

Defined in: node_modules/jose/dist/types/types.d.ts:35

___

### KeysAlgConfig

Ƭ **KeysAlgConfig**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `alg` | *string* |
| `crv?` | *string* |
| `jws` | *boolean* |
| `modulusLength?` | *number* |
| `type` | *string* |

Defined in: src/keys.ts:31

___

### VerificationMethodType

Ƭ **VerificationMethodType**: VerificationMethodReference[``"type"``]

Defined in: src/keys.ts:29

## Variables

### KeyTypes

• `Const` **KeyTypes**: [*VerificationMethodType*](keys.md#verificationmethodtype)[]

Defined in: src/keys.ts:39

___

### keyTypeConfig

• `Const` **keyTypeConfig**: *object*

#### Type declaration

Defined in: src/keys.ts:46

___

### keyTypeMap

• `Const` **keyTypeMap**: *object*

#### Type declaration

Defined in: src/keys.ts:74

## Functions

### createJWK

▸ `Const` **createJWK**(`key`: [*KeyLike*](keys.md#keylike)): *Promise*<[*JWK*](../interfaces/keys.jwk.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [*KeyLike*](keys.md#keylike) |

**Returns:** *Promise*<[*JWK*](../interfaces/keys.jwk.md)\>

Defined in: src/keys.ts:181

___

### generateKeyPair

▸ `Const` **generateKeyPair**(`type`: *string*, `options?`: GenerateKeyPairOptions): *Promise*<{ `privateKey`: [*KeyLike*](keys.md#keylike) ; `publicKey`: [*KeyLike*](keys.md#keylike)  }\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | *string* | - |
| `options` | GenerateKeyPairOptions | {} |

**Returns:** *Promise*<{ `privateKey`: [*KeyLike*](keys.md#keylike) ; `publicKey`: [*KeyLike*](keys.md#keylike)  }\>

Defined in: src/keys.ts:145

___

### getAlgFromJWK

▸ `Const` **getAlgFromJWK**(`key`: [*JWK*](../interfaces/keys.jwk.md), `supportJws?`: *boolean*): *string*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [*JWK*](../interfaces/keys.jwk.md) | - |
| `supportJws` | *boolean* | false |

**Returns:** *string*

Defined in: src/keys.ts:111

___

### importKeyPrivatePem

▸ `Const` **importKeyPrivatePem**(`key`: *string* \| *Buffer*, `passphrase?`: *string*): [*KeyObject*](../classes/keys.keyobject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* \| *Buffer* |
| `passphrase?` | *string* |

**Returns:** [*KeyObject*](../classes/keys.keyobject.md)

Defined in: src/keys.ts:184

___

### importKeyPublicPem

▸ `Const` **importKeyPublicPem**(`key`: *string* \| *Buffer*): [*KeyObject*](../classes/keys.keyobject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | *string* \| *Buffer* |

**Returns:** [*KeyObject*](../classes/keys.keyobject.md)

Defined in: src/keys.ts:202

___

### keyTypeFromJWK

▸ `Const` **keyTypeFromJWK**(`key`: [*JWK*](../interfaces/keys.jwk.md)): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [*JWK*](../interfaces/keys.jwk.md) |

**Returns:** *string*

Defined in: src/keys.ts:84
