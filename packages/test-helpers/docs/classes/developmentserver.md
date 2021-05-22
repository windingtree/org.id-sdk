[@windingtree/org.id-test-helpers](../README.md) / DevelopmentServer

# Class: DevelopmentServer

## Table of contents

### Constructors

- [constructor](developmentserver.md#constructor)

### Properties

- [port](developmentserver.md#port)
- [server](developmentserver.md#server)
- [web3](developmentserver.md#web3)

### Methods

- [close](developmentserver.md#close)
- [getAccounts](developmentserver.md#getaccounts)

## Constructors

### constructor

\+ **new DevelopmentServer**(`server`: *Server*, `port`: *number*): [*DevelopmentServer*](developmentserver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | *Server* |
| `port` | *number* |

**Returns:** [*DevelopmentServer*](developmentserver.md)

Defined in: [ganache.ts:7](https://github.com/windingtree/org.id-sdk/blob/7ceab2d/packages/test-helpers/src/ganache.ts#L7)

## Properties

### port

• **port**: *number*

Defined in: [ganache.ts:7](https://github.com/windingtree/org.id-sdk/blob/7ceab2d/packages/test-helpers/src/ganache.ts#L7)

___

### server

• **server**: *Server*

Defined in: [ganache.ts:5](https://github.com/windingtree/org.id-sdk/blob/7ceab2d/packages/test-helpers/src/ganache.ts#L5)

___

### web3

• **web3**: *default*

Defined in: [ganache.ts:6](https://github.com/windingtree/org.id-sdk/blob/7ceab2d/packages/test-helpers/src/ganache.ts#L6)

## Methods

### close

▸ **close**(): *Promise*<void \| Error\>

**Returns:** *Promise*<void \| Error\>

Defined in: [ganache.ts:15](https://github.com/windingtree/org.id-sdk/blob/7ceab2d/packages/test-helpers/src/ganache.ts#L15)

___

### getAccounts

▸ **getAccounts**(): *Promise*<string[]\>

**Returns:** *Promise*<string[]\>

Defined in: [ganache.ts:28](https://github.com/windingtree/org.id-sdk/blob/7ceab2d/packages/test-helpers/src/ganache.ts#L28)
