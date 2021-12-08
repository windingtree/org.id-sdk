@windingtree/org.json-utils

# @windingtree/org.json-utils

## Table of contents

### Interfaces

- [DidVerificationMethod](interfaces/DidVerificationMethod.md)

### Type aliases

- [DidVerificationMethodRevocation](README.md#didverificationmethodrevocation)

### Functions

- [createVerificationMethodWithBlockchainAccountId](README.md#createverificationmethodwithblockchainaccountid)
- [createVerificationMethodWithKey](README.md#createverificationmethodwithkey)
- [validateIdAndController](README.md#validateidandcontroller)

## Type aliases

### DidVerificationMethodRevocation

Ƭ **DidVerificationMethodRevocation**: `VerificationMethodReference`[``"verificationMethodRevocation"``]

#### Defined in

[org.json/src/index.ts:17](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/org.json/src/index.ts#L17)

## Functions

### createVerificationMethodWithBlockchainAccountId

▸ `Const` **createVerificationMethodWithBlockchainAccountId**(`id`, `controller`, `blockchainAccountId`, `note?`): `Promise`<[`DidVerificationMethod`](interfaces/DidVerificationMethod.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `controller` | `string` |
| `blockchainAccountId` | `string` |
| `note?` | `string` |

#### Returns

`Promise`<[`DidVerificationMethod`](interfaces/DidVerificationMethod.md)\>

#### Defined in

[org.json/src/index.ts:57](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/org.json/src/index.ts#L57)

___

### createVerificationMethodWithKey

▸ `Const` **createVerificationMethodWithKey**(`id`, `controller`, `key`, `note?`): `Promise`<[`DidVerificationMethod`](interfaces/DidVerificationMethod.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `controller` | `string` |
| `key` | `JWK` \| `KeyLike` |
| `note?` | `string` |

#### Returns

`Promise`<[`DidVerificationMethod`](interfaces/DidVerificationMethod.md)\>

#### Defined in

[org.json/src/index.ts:86](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/org.json/src/index.ts#L86)

___

### validateIdAndController

▸ `Const` **validateIdAndController**(`id`, `controller`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `controller` | `string` |

#### Returns

`void`

#### Defined in

[org.json/src/index.ts:32](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/org.json/src/index.ts#L32)
