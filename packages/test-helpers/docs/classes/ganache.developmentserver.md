[@windingtree/org.id-test-helpers](../README.md) / [ganache](../modules/ganache.md) / DevelopmentServer

# Class: DevelopmentServer

[ganache](../modules/ganache.md).DevelopmentServer

## Table of contents

### Constructors

- [constructor](ganache.developmentserver.md#constructor)

### Properties

- [port](ganache.developmentserver.md#port)
- [server](ganache.developmentserver.md#server)
- [web3](ganache.developmentserver.md#web3)

### Methods

- [close](ganache.developmentserver.md#close)
- [getAccounts](ganache.developmentserver.md#getaccounts)

## Constructors

### constructor

\+ **new DevelopmentServer**(`server`: *Server*, `port`: *number*): [*DevelopmentServer*](ganache.developmentserver.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | *Server* |
| `port` | *number* |

**Returns:** [*DevelopmentServer*](ganache.developmentserver.md)

Defined in: ganache.ts:7

## Properties

### port

• **port**: *number*

Defined in: ganache.ts:7

___

### server

• **server**: *Server*

Defined in: ganache.ts:5

___

### web3

• **web3**: *default*

Defined in: ganache.ts:6

## Methods

### close

▸ **close**(): *Promise*<void \| Error\>

**Returns:** *Promise*<void \| Error\>

Defined in: ganache.ts:15

___

### getAccounts

▸ **getAccounts**(): *Promise*<string[]\>

**Returns:** *Promise*<string[]\>

Defined in: ganache.ts:28
