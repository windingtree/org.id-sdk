[@windingtree/org.id-test-helpers](../README.md) / DevelopmentServer

# Class: DevelopmentServer

## Table of contents

### Constructors

- [constructor](developmentserver.md#constructor)

### Properties

- [port](developmentserver.md#port)
- [providerUri](developmentserver.md#provideruri)
- [server](developmentserver.md#server)
- [web3](developmentserver.md#web3)

### Accessors

- [provider](developmentserver.md#provider)

### Methods

- [close](developmentserver.md#close)
- [getAccounts](developmentserver.md#getaccounts)

## Constructors

### constructor

\+ **new DevelopmentServer**(`server`: [*Server*](../interfaces/ganache.server.md), `port`: *number*): [*DevelopmentServer*](developmentserver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [*Server*](../interfaces/ganache.server.md) |
| `port` | *number* |

**Returns:** [*DevelopmentServer*](developmentserver.md)

Defined in: [src/ganache.ts:10](https://github.com/windingtree/org.id-sdk/blob/4fdede4/packages/test-helpers/src/ganache.ts#L10)

## Properties

### port

• **port**: *number*

Defined in: [src/ganache.ts:9](https://github.com/windingtree/org.id-sdk/blob/4fdede4/packages/test-helpers/src/ganache.ts#L9)

___

### providerUri

• **providerUri**: *string*

Defined in: [src/ganache.ts:10](https://github.com/windingtree/org.id-sdk/blob/4fdede4/packages/test-helpers/src/ganache.ts#L10)

___

### server

• **server**: [*Server*](../interfaces/ganache.server.md)

Defined in: [src/ganache.ts:7](https://github.com/windingtree/org.id-sdk/blob/4fdede4/packages/test-helpers/src/ganache.ts#L7)

___

### web3

• **web3**: *default*

Defined in: [src/ganache.ts:8](https://github.com/windingtree/org.id-sdk/blob/4fdede4/packages/test-helpers/src/ganache.ts#L8)

## Accessors

### provider

• get **provider**(): [*Provider*](../interfaces/ganache.provider.md)

**Returns:** [*Provider*](../interfaces/ganache.provider.md)

Defined in: [src/ganache.ts:19](https://github.com/windingtree/org.id-sdk/blob/4fdede4/packages/test-helpers/src/ganache.ts#L19)

## Methods

### close

▸ **close**(): *Promise*<void \| Error\>

**Returns:** *Promise*<void \| Error\>

Defined in: [src/ganache.ts:23](https://github.com/windingtree/org.id-sdk/blob/4fdede4/packages/test-helpers/src/ganache.ts#L23)

___

### getAccounts

▸ **getAccounts**(): *Promise*<string[]\>

**Returns:** *Promise*<string[]\>

Defined in: [src/ganache.ts:36](https://github.com/windingtree/org.id-sdk/blob/4fdede4/packages/test-helpers/src/ganache.ts#L36)
