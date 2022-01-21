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

[org.json/src/index.ts:17](https://github.com/windingtree/org.id-sdk/blob/7837f3e/packages/org.json/src/index.ts#L17)

## Functions

### createVerificationMethodWithBlockchainAccountId

▸ `Const` **createVerificationMethodWithBlockchainAccountId**(`id`, `controller`, `blockchainType`, `chainId`, `accountAddress`, `note?`): [`DidVerificationMethod`](interfaces/DidVerificationMethod.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `controller` | `string` |
| `blockchainType` | `string` |
| `chainId` | `string` \| `number` |
| `accountAddress` | `string` |
| `note?` | `string` |

#### Returns

[`DidVerificationMethod`](interfaces/DidVerificationMethod.md)

#### Defined in

[org.json/src/index.ts:57](https://github.com/windingtree/org.id-sdk/blob/7837f3e/packages/org.json/src/index.ts#L57)

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

[org.json/src/index.ts:90](https://github.com/windingtree/org.id-sdk/blob/7837f3e/packages/org.json/src/index.ts#L90)

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

[org.json/src/index.ts:32](https://github.com/windingtree/org.id-sdk/blob/7837f3e/packages/org.json/src/index.ts#L32)
