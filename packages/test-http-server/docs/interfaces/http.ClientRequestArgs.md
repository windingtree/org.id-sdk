[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / ClientRequestArgs

# Interface: ClientRequestArgs

[http](../modules/http.md).ClientRequestArgs

## Hierarchy

- **`ClientRequestArgs`**

  ↳ [`RequestOptions`](http.RequestOptions.md)

## Table of contents

### Properties

- [\_defaultAgent](http.ClientRequestArgs.md#_defaultagent)
- [abort](http.ClientRequestArgs.md#abort)
- [agent](http.ClientRequestArgs.md#agent)
- [auth](http.ClientRequestArgs.md#auth)
- [createConnection](http.ClientRequestArgs.md#createconnection)
- [defaultPort](http.ClientRequestArgs.md#defaultport)
- [family](http.ClientRequestArgs.md#family)
- [headers](http.ClientRequestArgs.md#headers)
- [host](http.ClientRequestArgs.md#host)
- [hostname](http.ClientRequestArgs.md#hostname)
- [localAddress](http.ClientRequestArgs.md#localaddress)
- [maxHeaderSize](http.ClientRequestArgs.md#maxheadersize)
- [method](http.ClientRequestArgs.md#method)
- [path](http.ClientRequestArgs.md#path)
- [port](http.ClientRequestArgs.md#port)
- [protocol](http.ClientRequestArgs.md#protocol)
- [setHost](http.ClientRequestArgs.md#sethost)
- [socketPath](http.ClientRequestArgs.md#socketpath)
- [timeout](http.ClientRequestArgs.md#timeout)

## Properties

### \_defaultAgent

• `Optional` **\_defaultAgent**: [`Agent`](../classes/http.Agent.md)

#### Defined in

node_modules/@types/node/http.d.ts:134

___

### abort

• `Optional` **abort**: `AbortSignal`

#### Defined in

node_modules/@types/node/http.d.ts:116

___

### agent

• `Optional` **agent**: `boolean` \| [`Agent`](../classes/http.Agent.md)

#### Defined in

node_modules/@types/node/http.d.ts:133

___

### auth

• `Optional` **auth**: ``null`` \| `string`

#### Defined in

node_modules/@types/node/http.d.ts:132

___

### createConnection

• `Optional` **createConnection**: (`options`: [`ClientRequestArgs`](http.ClientRequestArgs.md), `oncreate`: (`err`: `Error`, `socket`: `Socket`) => `void`) => `Socket`

#### Type declaration

▸ (`options`, `oncreate`): `Socket`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ClientRequestArgs`](http.ClientRequestArgs.md) |
| `oncreate` | (`err`: `Error`, `socket`: `Socket`) => `void` |

##### Returns

`Socket`

#### Defined in

node_modules/@types/node/http.d.ts:138

___

### defaultPort

• `Optional` **defaultPort**: `string` \| `number`

#### Defined in

node_modules/@types/node/http.d.ts:122

___

### family

• `Optional` **family**: `number`

#### Defined in

node_modules/@types/node/http.d.ts:120

___

### headers

• `Optional` **headers**: [`OutgoingHttpHeaders`](http.OutgoingHttpHeaders.md)

#### Defined in

node_modules/@types/node/http.d.ts:131

___

### host

• `Optional` **host**: ``null`` \| `string`

#### Defined in

node_modules/@types/node/http.d.ts:118

___

### hostname

• `Optional` **hostname**: ``null`` \| `string`

#### Defined in

node_modules/@types/node/http.d.ts:119

___

### localAddress

• `Optional` **localAddress**: `string`

#### Defined in

node_modules/@types/node/http.d.ts:123

___

### maxHeaderSize

• `Optional` **maxHeaderSize**: `number`

**`default`** 8192

#### Defined in

node_modules/@types/node/http.d.ts:128

___

### method

• `Optional` **method**: `string`

#### Defined in

node_modules/@types/node/http.d.ts:129

___

### path

• `Optional` **path**: ``null`` \| `string`

#### Defined in

node_modules/@types/node/http.d.ts:130

___

### port

• `Optional` **port**: ``null`` \| `string` \| `number`

#### Defined in

node_modules/@types/node/http.d.ts:121

___

### protocol

• `Optional` **protocol**: ``null`` \| `string`

#### Defined in

node_modules/@types/node/http.d.ts:117

___

### setHost

• `Optional` **setHost**: `boolean`

#### Defined in

node_modules/@types/node/http.d.ts:136

___

### socketPath

• `Optional` **socketPath**: `string`

#### Defined in

node_modules/@types/node/http.d.ts:124

___

### timeout

• `Optional` **timeout**: `number`

#### Defined in

node_modules/@types/node/http.d.ts:135
