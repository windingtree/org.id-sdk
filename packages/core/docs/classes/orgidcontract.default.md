[@windingtree/org.id-core](../README.md) / [OrgIdContract](../modules/orgidcontract.md) / default

# Class: default

[OrgIdContract](../modules/orgidcontract.md).default

## Table of contents

### Constructors

- [constructor](orgidcontract.default.md#constructor)

### Properties

- [address](orgidcontract.default.md#address)
- [contract](orgidcontract.default.md#contract)
- [web3](orgidcontract.default.md#web3)

### Methods

- [createOrgId](orgidcontract.default.md#createorgid)
- [getOrgId](orgidcontract.default.md#getorgid)
- [getOrgIds](orgidcontract.default.md#getorgids)
- [getOrgIdsCount](orgidcontract.default.md#getorgidscount)
- [setOrgJson](orgidcontract.default.md#setorgjson)
- [transferOrgIdOwnership](orgidcontract.default.md#transferorgidownership)

## Constructors

### constructor

\+ **new default**(`networkOrAddress`: *string*, `web3ProviderOrUri`: *string* \| Web3Provider): [*default*](orgidcontract.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `networkOrAddress` | *string* |
| `web3ProviderOrUri` | *string* \| Web3Provider |

**Returns:** [*default*](orgidcontract.default.md)

Defined in: [contract.ts:25](https://github.com/windingtree/org.id-sdk/blob/a7b1c3f/packages/core/src/contract.ts#L25)

## Properties

### address

• **address**: *string*

Defined in: [contract.ts:23](https://github.com/windingtree/org.id-sdk/blob/a7b1c3f/packages/core/src/contract.ts#L23)

___

### contract

• **contract**: *Contract*

Defined in: [contract.ts:25](https://github.com/windingtree/org.id-sdk/blob/a7b1c3f/packages/core/src/contract.ts#L25)

___

### web3

• **web3**: *default*

Defined in: [contract.ts:24](https://github.com/windingtree/org.id-sdk/blob/a7b1c3f/packages/core/src/contract.ts#L24)

## Methods

### createOrgId

▸ **createOrgId**(`salt`: *string*, `orgJsonUri`: *string*, `orgIdOwner`: *string*, `gasPrice?`: *string* \| *number*, `gasLimit?`: *string* \| *number*, `transactionHashCb?`: CallbackFn): *Promise*<OrgIdData\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `salt` | *string* |
| `orgJsonUri` | *string* |
| `orgIdOwner` | *string* |
| `gasPrice?` | *string* \| *number* |
| `gasLimit?` | *string* \| *number* |
| `transactionHashCb?` | CallbackFn |

**Returns:** *Promise*<OrgIdData\>

Defined in: [contract.ts:56](https://github.com/windingtree/org.id-sdk/blob/a7b1c3f/packages/core/src/contract.ts#L56)

___

### getOrgId

▸ **getOrgId**(`orgIdHash`: *string*): *Promise*<OrgIdData\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | *string* |

**Returns:** *Promise*<OrgIdData\>

Defined in: [contract.ts:93](https://github.com/windingtree/org.id-sdk/blob/a7b1c3f/packages/core/src/contract.ts#L93)

___

### getOrgIds

▸ **getOrgIds**(`cursor?`: *number*, `count?`: *number*): *Promise*<string[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor?` | *number* |
| `count?` | *number* |

**Returns:** *Promise*<string[]\>

Defined in: [contract.ts:97](https://github.com/windingtree/org.id-sdk/blob/a7b1c3f/packages/core/src/contract.ts#L97)

___

### getOrgIdsCount

▸ **getOrgIdsCount**(): *Promise*<number\>

**Returns:** *Promise*<number\>

Defined in: [contract.ts:89](https://github.com/windingtree/org.id-sdk/blob/a7b1c3f/packages/core/src/contract.ts#L89)

___

### setOrgJson

▸ **setOrgJson**(`orgIdHash`: *string*, `orgJsonUri`: *string*, `orgIdOwner`: *string*, `gasPrice?`: *string* \| *number*, `gasLimit?`: *string* \| *number*, `transactionHashCb?`: CallbackFn): *Promise*<OrgIdData\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | *string* |
| `orgJsonUri` | *string* |
| `orgIdOwner` | *string* |
| `gasPrice?` | *string* \| *number* |
| `gasLimit?` | *string* \| *number* |
| `transactionHashCb?` | CallbackFn |

**Returns:** *Promise*<OrgIdData\>

Defined in: [contract.ts:67](https://github.com/windingtree/org.id-sdk/blob/a7b1c3f/packages/core/src/contract.ts#L67)

___

### transferOrgIdOwnership

▸ **transferOrgIdOwnership**(`orgIdHash`: *string*, `newOrgIdOwner`: *string*, `orgIdOwner`: *string*, `gasPrice?`: *string* \| *number*, `gasLimit?`: *string* \| *number*, `transactionHashCb?`: CallbackFn): *Promise*<OrgIdData\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdHash` | *string* |
| `newOrgIdOwner` | *string* |
| `orgIdOwner` | *string* |
| `gasPrice?` | *string* \| *number* |
| `gasLimit?` | *string* \| *number* |
| `transactionHashCb?` | CallbackFn |

**Returns:** *Promise*<OrgIdData\>

Defined in: [contract.ts:78](https://github.com/windingtree/org.id-sdk/blob/a7b1c3f/packages/core/src/contract.ts#L78)
