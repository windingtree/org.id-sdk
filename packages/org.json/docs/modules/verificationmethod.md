[@windingtree/org.json-utils](../README.md) / verificationMethod

# Namespace: verificationMethod

## Table of contents

### Interfaces

- [DidVerificationMethod](../interfaces/verificationmethod.didverificationmethod.md)

### Type aliases

- [DidVerificationMethodRevocation](verificationmethod.md#didverificationmethodrevocation)

### Functions

- [createVerificationMethodWithBlockchainAccountId](verificationmethod.md#createverificationmethodwithblockchainaccountid)
- [createVerificationMethodWithKey](verificationmethod.md#createverificationmethodwithkey)
- [validateIdAndController](verificationmethod.md#validateidandcontroller)

## Type aliases

### DidVerificationMethodRevocation

Ƭ **DidVerificationMethodRevocation**: `VerificationMethodReference`[``"verificationMethodRevocation"``]

#### Defined in

[org.json/src/verificationMethod.ts:18](https://github.com/windingtree/org.id-sdk/blob/4009f33/packages/org.json/src/verificationMethod.ts#L18)

## Functions

### createVerificationMethodWithBlockchainAccountId

▸ `Const` **createVerificationMethodWithBlockchainAccountId**(`id`, `controller`, `blockchainAccountId`, `note?`): `Promise`<[`DidVerificationMethod`](../interfaces/verificationmethod.didverificationmethod.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `controller` | `string` |
| `blockchainAccountId` | `string` |
| `note?` | `string` |

#### Returns

`Promise`<[`DidVerificationMethod`](../interfaces/verificationmethod.didverificationmethod.md)\>

#### Defined in

[org.json/src/verificationMethod.ts:58](https://github.com/windingtree/org.id-sdk/blob/4009f33/packages/org.json/src/verificationMethod.ts#L58)

___

### createVerificationMethodWithKey

▸ `Const` **createVerificationMethodWithKey**(`id`, `controller`, `key`, `note?`): `Promise`<[`DidVerificationMethod`](../interfaces/verificationmethod.didverificationmethod.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `controller` | `string` |
| `key` | `JWK` \| `KeyLike` |
| `note?` | `string` |

#### Returns

`Promise`<[`DidVerificationMethod`](../interfaces/verificationmethod.didverificationmethod.md)\>

#### Defined in

[org.json/src/verificationMethod.ts:87](https://github.com/windingtree/org.id-sdk/blob/4009f33/packages/org.json/src/verificationMethod.ts#L87)

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

[org.json/src/verificationMethod.ts:33](https://github.com/windingtree/org.id-sdk/blob/4009f33/packages/org.json/src/verificationMethod.ts#L33)
