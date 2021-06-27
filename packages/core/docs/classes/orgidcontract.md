[@windingtree/org.id-core](../README.md) / OrgIdContract

# Class: OrgIdContract

## Table of contents

### Constructors

- [constructor](orgidcontract.md#constructor)

### Properties

- [address](orgidcontract.md#address)
- [contract](orgidcontract.md#contract)
- [web3](orgidcontract.md#web3)

### Methods

- [createOrgId](orgidcontract.md#createorgid)
- [getOrgId](orgidcontract.md#getorgid)
- [getOrgIds](orgidcontract.md#getorgids)
- [getOrgIdsCount](orgidcontract.md#getorgidscount)
- [setOrgJson](orgidcontract.md#setorgjson)
- [transferOrgIdOwnership](orgidcontract.md#transferorgidownership)

## Constructors

### constructor

• **new OrgIdContract**(`networkOrAddress`, `web3ProviderOrUri`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `networkOrAddress` | `string` |
| `web3ProviderOrUri` | `string` \| [`Web3Provider`](../README.md#web3provider) |

#### Defined in

[index.ts:33](https://github.com/windingtree/org.id-sdk/blob/c8f06ff/packages/core/src/index.ts#L33)

## Properties

### address

• **address**: `string`

#### Defined in

[index.ts:31](https://github.com/windingtree/org.id-sdk/blob/c8f06ff/packages/core/src/index.ts#L31)

___

### contract

• **contract**: `Contract`

#### Defined in

[index.ts:33](https://github.com/windingtree/org.id-sdk/blob/c8f06ff/packages/core/src/index.ts#L33)

___

### web3

• **web3**: `default`

#### Defined in

[index.ts:32](https://github.com/windingtree/org.id-sdk/blob/c8f06ff/packages/core/src/index.ts#L32)

## Methods

### createOrgId

▸ **createOrgId**(`salt`, `orgJsonUri`, `orgIdOwner`, `gasPrice?`, `gasLimit?`, `transactionHashCb?`): `Promise`<``null`` \| [`OrgIdData`](../interfaces/orgiddata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `salt` | `string` |
| `orgJsonUri` | `string` |
| `orgIdOwner` | `string` |
| `gasPrice?` | `string` \| `number` |
| `gasLimit?` | `string` \| `number` |
| `transactionHashCb?` | `CallbackFn` |

#### Returns

`Promise`<``null`` \| [`OrgIdData`](../interfaces/orgiddata.md)\>

#### Defined in

[index.ts:64](https://github.com/windingtree/org.id-sdk/blob/c8f06ff/packages/core/src/index.ts#L64)

___

### getOrgId

▸ **getOrgId**(`orgIdHash`): `Promise`<``null`` \| [`OrgIdData`](../interfaces/orgiddata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |

#### Returns

`Promise`<``null`` \| [`OrgIdData`](../interfaces/orgiddata.md)\>

#### Defined in

[index.ts:101](https://github.com/windingtree/org.id-sdk/blob/c8f06ff/packages/core/src/index.ts#L101)

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

[index.ts:105](https://github.com/windingtree/org.id-sdk/blob/c8f06ff/packages/core/src/index.ts#L105)

___

### getOrgIdsCount

▸ **getOrgIdsCount**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[index.ts:97](https://github.com/windingtree/org.id-sdk/blob/c8f06ff/packages/core/src/index.ts#L97)

___

### setOrgJson

▸ **setOrgJson**(`orgIdHash`, `orgJsonUri`, `orgIdOwner`, `gasPrice?`, `gasLimit?`, `transactionHashCb?`): `Promise`<``null`` \| [`OrgIdData`](../interfaces/orgiddata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |
| `orgJsonUri` | `string` |
| `orgIdOwner` | `string` |
| `gasPrice?` | `string` \| `number` |
| `gasLimit?` | `string` \| `number` |
| `transactionHashCb?` | `CallbackFn` |

#### Returns

`Promise`<``null`` \| [`OrgIdData`](../interfaces/orgiddata.md)\>

#### Defined in

[index.ts:75](https://github.com/windingtree/org.id-sdk/blob/c8f06ff/packages/core/src/index.ts#L75)

___

### transferOrgIdOwnership

▸ **transferOrgIdOwnership**(`orgIdHash`, `newOrgIdOwner`, `orgIdOwner`, `gasPrice?`, `gasLimit?`, `transactionHashCb?`): `Promise`<``null`` \| [`OrgIdData`](../interfaces/orgiddata.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |
| `newOrgIdOwner` | `string` |
| `orgIdOwner` | `string` |
| `gasPrice?` | `string` \| `number` |
| `gasLimit?` | `string` \| `number` |
| `transactionHashCb?` | `CallbackFn` |

#### Returns

`Promise`<``null`` \| [`OrgIdData`](../interfaces/orgiddata.md)\>

#### Defined in

[index.ts:86](https://github.com/windingtree/org.id-sdk/blob/c8f06ff/packages/core/src/index.ts#L86)
