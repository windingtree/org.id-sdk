@windingtree/org.json-utils

# @windingtree/org.json-utils

## Table of contents

### Functions

- [createVerificationMethodWithBlockchainAccountId](README.md#createverificationmethodwithblockchainaccountid)
- [createVerificationMethodWithKey](README.md#createverificationmethodwithkey)
- [validateIdAndController](README.md#validateidandcontroller)

## Functions

### createVerificationMethodWithBlockchainAccountId

▸ `Const` **createVerificationMethodWithBlockchainAccountId**(`id`, `controller`, `blockchainType`, `chainId`, `accountAddress`, `note?`): `VerificationMethodReference`

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

`VerificationMethodReference`

#### Defined in

[index.ts:42](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/org.json/src/index.ts#L42)

___

### createVerificationMethodWithKey

▸ `Const` **createVerificationMethodWithKey**(`id`, `controller`, `key`, `note?`): `Promise`<`VerificationMethodReference`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `controller` | `string` |
| `key` | `KeyLike` \| `JWK` |
| `note?` | `string` |

#### Returns

`Promise`<`VerificationMethodReference`\>

#### Defined in

[index.ts:75](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/org.json/src/index.ts#L75)

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

[index.ts:17](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/org.json/src/index.ts#L17)
