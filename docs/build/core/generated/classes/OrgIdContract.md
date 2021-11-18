[@windingtree/org.id-core](../README.md) / OrgIdContract

# Class: OrgIdContract

## Table of contents

### Constructors

- [constructor](OrgIdContract.md#constructor)

### Properties

- [address](OrgIdContract.md#address)
- [contract](OrgIdContract.md#contract)
- [provider](OrgIdContract.md#provider)

### Methods

- [addDelegates](OrgIdContract.md#adddelegates)
- [createOrgId](OrgIdContract.md#createorgid)
- [getDelegates](OrgIdContract.md#getdelegates)
- [getOrgId](OrgIdContract.md#getorgid)
- [getOrgIdByTokenId](OrgIdContract.md#getorgidbytokenid)
- [getOrgIds](OrgIdContract.md#getorgids)
- [getOrgIdsCount](OrgIdContract.md#getorgidscount)
- [removeDelegates](OrgIdContract.md#removedelegates)
- [setOrgJson](OrgIdContract.md#setorgjson)
- [transferOrgIdOwnership](OrgIdContract.md#transferorgidownership)

## Constructors

### constructor

• **new OrgIdContract**(`contractAddress`, `providerOrUri`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `contractAddress` | `string` |
| `providerOrUri` | [`KnownProvider`](../README.md#knownprovider) |

#### Defined in

[index.ts:46](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L46)

## Properties

### address

• `Readonly` **address**: `string`

#### Defined in

[index.ts:42](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L42)

___

### contract

• `Readonly` **contract**: `OrgId`

#### Defined in

[index.ts:44](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L44)

___

### provider

• `Readonly` **provider**: `BaseProvider`

#### Defined in

[index.ts:43](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L43)

## Methods

### addDelegates

▸ **addDelegates**(`orgIdHash`, `dids`, `orgIdOwner`, `overrides?`, `transactionHashCb?`, `confirmations?`): `Promise`<`AddDelegatesResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |
| `dids` | `string`[] |
| `orgIdOwner` | `Signer` |
| `overrides?` | `MethodOverrides` |
| `transactionHashCb` | `TxHashCallbackFn` |
| `confirmations?` | `number` |

#### Returns

`Promise`<`AddDelegatesResult`\>

#### Defined in

[index.ts:123](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L123)

___

### createOrgId

▸ **createOrgId**(`salt`, `orgJsonUri`, `orgIdOwner`, `overrides?`, `transactionHashCb?`, `confirmations?`): `Promise`<``null`` \| [`OrgIdData`](../interfaces/OrgIdData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `salt` | `string` |
| `orgJsonUri` | `string` |
| `orgIdOwner` | `Signer` |
| `overrides?` | `MethodOverrides` |
| `transactionHashCb` | `TxHashCallbackFn` |
| `confirmations?` | `number` |

#### Returns

`Promise`<``null`` \| [`OrgIdData`](../interfaces/OrgIdData.md)\>

#### Defined in

[index.ts:87](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L87)

___

### getDelegates

▸ **getDelegates**(`orgIdHash`): `Promise`<`Delegates`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |

#### Returns

`Promise`<`Delegates`\>

#### Defined in

[index.ts:163](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L163)

___

### getOrgId

▸ **getOrgId**(`orgIdHash`): `Promise`<``null`` \| [`OrgIdData`](../interfaces/OrgIdData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |

#### Returns

`Promise`<``null`` \| [`OrgIdData`](../interfaces/OrgIdData.md)\>

#### Defined in

[index.ts:155](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L155)

___

### getOrgIdByTokenId

▸ **getOrgIdByTokenId**(`tokenId`): `Promise`<``null`` \| [`OrgIdData`](../interfaces/OrgIdData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `number` \| `BigNumber` |

#### Returns

`Promise`<``null`` \| [`OrgIdData`](../interfaces/OrgIdData.md)\>

#### Defined in

[index.ts:151](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L151)

___

### getOrgIds

▸ **getOrgIds**(`cursor?`, `count?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor?` | `number` |
| `count?` | `number` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

[index.ts:159](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L159)

___

### getOrgIdsCount

▸ **getOrgIdsCount**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[index.ts:147](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L147)

___

### removeDelegates

▸ **removeDelegates**(`orgIdHash`, `dids`, `orgIdOwner`, `overrides?`, `transactionHashCb?`, `confirmations?`): `Promise`<`RemoveDelegatesResult`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |
| `dids` | `string`[] |
| `orgIdOwner` | `Signer` |
| `overrides?` | `MethodOverrides` |
| `transactionHashCb` | `TxHashCallbackFn` |
| `confirmations?` | `number` |

#### Returns

`Promise`<`RemoveDelegatesResult`\>

#### Defined in

[index.ts:135](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L135)

___

### setOrgJson

▸ **setOrgJson**(`orgIdHash`, `orgJsonUri`, `orgIdOwner`, `overrides?`, `transactionHashCb?`, `confirmations?`): `Promise`<``null`` \| [`OrgIdData`](../interfaces/OrgIdData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |
| `orgJsonUri` | `string` |
| `orgIdOwner` | `Signer` |
| `overrides?` | `MethodOverrides` |
| `transactionHashCb` | `TxHashCallbackFn` |
| `confirmations?` | `number` |

#### Returns

`Promise`<``null`` \| [`OrgIdData`](../interfaces/OrgIdData.md)\>

#### Defined in

[index.ts:99](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L99)

___

### transferOrgIdOwnership

▸ **transferOrgIdOwnership**(`orgIdHash`, `newOrgIdOwner`, `orgIdOwner`, `overrides?`, `transactionHashCb?`, `confirmations?`): `Promise`<``null`` \| [`OrgIdData`](../interfaces/OrgIdData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |
| `newOrgIdOwner` | `string` |
| `orgIdOwner` | `Signer` |
| `overrides?` | `MethodOverrides` |
| `transactionHashCb` | `TxHashCallbackFn` |
| `confirmations?` | `number` |

#### Returns

`Promise`<``null`` \| [`OrgIdData`](../interfaces/OrgIdData.md)\>

#### Defined in

[index.ts:111](https://github.com/windingtree/org.id-sdk/blob/239e892/packages/core/src/index.ts#L111)
