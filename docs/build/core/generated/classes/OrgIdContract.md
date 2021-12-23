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
- [getOwnOrgIds](OrgIdContract.md#getownorgids)
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

[index.ts:47](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L47)

## Properties

### address

• `Readonly` **address**: `string`

#### Defined in

[index.ts:43](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L43)

___

### contract

• `Readonly` **contract**: `OrgId`

#### Defined in

[index.ts:45](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L45)

___

### provider

• `Readonly` **provider**: `BaseProvider`

#### Defined in

[index.ts:44](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L44)

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

[index.ts:124](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L124)

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

[index.ts:88](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L88)

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

[index.ts:164](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L164)

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

[index.ts:156](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L156)

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

[index.ts:152](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L152)

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

[index.ts:160](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L160)

___

### getOrgIdsCount

▸ **getOrgIdsCount**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[index.ts:148](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L148)

___

### getOwnOrgIds

▸ **getOwnOrgIds**(`ownerAddress`): `Promise`<[`OrgIdData`](../interfaces/OrgIdData.md)[] \| []\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ownerAddress` | `string` |

#### Returns

`Promise`<[`OrgIdData`](../interfaces/OrgIdData.md)[] \| []\>

#### Defined in

[index.ts:168](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L168)

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

[index.ts:136](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L136)

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

[index.ts:100](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L100)

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

[index.ts:112](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/core/src/index.ts#L112)
