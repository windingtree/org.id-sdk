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
| `web3ProviderOrUri` | `string` \| `Web3Provider` |

#### Defined in

[contract.ts:25](https://github.com/windingtree/org.id-sdk/blob/ad447a3/packages/core/src/contract.ts#L25)

## Properties

### address

• **address**: `string`

#### Defined in

[contract.ts:23](https://github.com/windingtree/org.id-sdk/blob/ad447a3/packages/core/src/contract.ts#L23)

___

### contract

• **contract**: `Contract`

#### Defined in

[contract.ts:25](https://github.com/windingtree/org.id-sdk/blob/ad447a3/packages/core/src/contract.ts#L25)

___

### web3

• **web3**: `default`

#### Defined in

[contract.ts:24](https://github.com/windingtree/org.id-sdk/blob/ad447a3/packages/core/src/contract.ts#L24)

## Methods

### createOrgId

▸ **createOrgId**(`salt`, `orgJsonUri`, `orgIdOwner`, `gasPrice?`, `gasLimit?`, `transactionHashCb?`): `Promise`<``null`` \| OrgIdData\>

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

`Promise`<``null`` \| OrgIdData\>

#### Defined in

[contract.ts:56](https://github.com/windingtree/org.id-sdk/blob/ad447a3/packages/core/src/contract.ts#L56)

___

### getOrgId

▸ **getOrgId**(`orgIdHash`): `Promise`<``null`` \| OrgIdData\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |

#### Returns

`Promise`<``null`` \| OrgIdData\>

#### Defined in

[contract.ts:93](https://github.com/windingtree/org.id-sdk/blob/ad447a3/packages/core/src/contract.ts#L93)

___

### getOrgIds

▸ **getOrgIds**(`cursor?`, `count?`): `Promise`<string[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor?` | `number` |
| `count?` | `number` |

#### Returns

`Promise`<string[]\>

#### Defined in

[contract.ts:97](https://github.com/windingtree/org.id-sdk/blob/ad447a3/packages/core/src/contract.ts#L97)

___

### getOrgIdsCount

▸ **getOrgIdsCount**(): `Promise`<number\>

#### Returns

`Promise`<number\>

#### Defined in

[contract.ts:89](https://github.com/windingtree/org.id-sdk/blob/ad447a3/packages/core/src/contract.ts#L89)

___

### setOrgJson

▸ **setOrgJson**(`orgIdHash`, `orgJsonUri`, `orgIdOwner`, `gasPrice?`, `gasLimit?`, `transactionHashCb?`): `Promise`<``null`` \| OrgIdData\>

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

`Promise`<``null`` \| OrgIdData\>

#### Defined in

[contract.ts:67](https://github.com/windingtree/org.id-sdk/blob/ad447a3/packages/core/src/contract.ts#L67)

___

### transferOrgIdOwnership

▸ **transferOrgIdOwnership**(`orgIdHash`, `newOrgIdOwner`, `orgIdOwner`, `gasPrice?`, `gasLimit?`, `transactionHashCb?`): `Promise`<``null`` \| OrgIdData\>

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

`Promise`<``null`` \| OrgIdData\>

#### Defined in

[contract.ts:78](https://github.com/windingtree/org.id-sdk/blob/ad447a3/packages/core/src/contract.ts#L78)
