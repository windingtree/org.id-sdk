[@windingtree/org.id-test-ganache-server](../README.md) / DevelopmentServer

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

• **new DevelopmentServer**(`server`, `port`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | [Server](../interfaces/ganache.server.md) |
| `port` | `number` |

#### Defined in

src/index.ts:10

## Properties

### port

• **port**: `number`

#### Defined in

src/index.ts:9

___

### providerUri

• **providerUri**: `string`

#### Defined in

src/index.ts:10

___

### server

• **server**: [Server](../interfaces/ganache.server.md)

#### Defined in

src/index.ts:7

___

### web3

• **web3**: `default`

#### Defined in

src/index.ts:8

## Accessors

### provider

• `get` **provider**(): [Provider](../interfaces/ganache.provider.md)

#### Returns

[Provider](../interfaces/ganache.provider.md)

#### Defined in

src/index.ts:19

## Methods

### close

▸ **close**(): `Promise`<void \| Error\>

#### Returns

`Promise`<void \| Error\>

#### Defined in

src/index.ts:23

___

### getAccounts

▸ **getAccounts**(): `Promise`<string[]\>

#### Returns

`Promise`<string[]\>

#### Defined in

src/index.ts:36
