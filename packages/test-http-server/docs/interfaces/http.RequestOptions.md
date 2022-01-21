[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / RequestOptions

# Interface: RequestOptions

[http](../modules/http.md).RequestOptions

## Hierarchy

- [`ClientRequestArgs`](http.ClientRequestArgs.md)

  ↳ **`RequestOptions`**

## Table of contents

### Properties

- [\_defaultAgent](http.RequestOptions.md#_defaultagent)
- [abort](http.RequestOptions.md#abort)
- [agent](http.RequestOptions.md#agent)
- [auth](http.RequestOptions.md#auth)
- [createConnection](http.RequestOptions.md#createconnection)
- [defaultPort](http.RequestOptions.md#defaultport)
- [family](http.RequestOptions.md#family)
- [headers](http.RequestOptions.md#headers)
- [host](http.RequestOptions.md#host)
- [hostname](http.RequestOptions.md#hostname)
- [localAddress](http.RequestOptions.md#localaddress)
- [maxHeaderSize](http.RequestOptions.md#maxheadersize)
- [method](http.RequestOptions.md#method)
- [path](http.RequestOptions.md#path)
- [port](http.RequestOptions.md#port)
- [protocol](http.RequestOptions.md#protocol)
- [setHost](http.RequestOptions.md#sethost)
- [socketPath](http.RequestOptions.md#socketpath)
- [timeout](http.RequestOptions.md#timeout)

## Properties

### \_defaultAgent

• `Optional` **\_defaultAgent**: [`Agent`](../classes/http.Agent.md)

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[_defaultAgent](http.ClientRequestArgs.md#_defaultagent)

#### Defined in

node_modules/@types/node/http.d.ts:134

___

### abort

• `Optional` **abort**: `AbortSignal`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[abort](http.ClientRequestArgs.md#abort)

#### Defined in

node_modules/@types/node/http.d.ts:116

___

### agent

• `Optional` **agent**: `boolean` \| [`Agent`](../classes/http.Agent.md)

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[agent](http.ClientRequestArgs.md#agent)

#### Defined in

node_modules/@types/node/http.d.ts:133

___

### auth

• `Optional` **auth**: ``null`` \| `string`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[auth](http.ClientRequestArgs.md#auth)

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

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[createConnection](http.ClientRequestArgs.md#createconnection)

#### Defined in

node_modules/@types/node/http.d.ts:138

___

### defaultPort

• `Optional` **defaultPort**: `string` \| `number`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[defaultPort](http.ClientRequestArgs.md#defaultport)

#### Defined in

node_modules/@types/node/http.d.ts:122

___

### family

• `Optional` **family**: `number`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[family](http.ClientRequestArgs.md#family)

#### Defined in

node_modules/@types/node/http.d.ts:120

___

### headers

• `Optional` **headers**: [`OutgoingHttpHeaders`](http.OutgoingHttpHeaders.md)

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[headers](http.ClientRequestArgs.md#headers)

#### Defined in

node_modules/@types/node/http.d.ts:131

___

### host

• `Optional` **host**: ``null`` \| `string`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[host](http.ClientRequestArgs.md#host)

#### Defined in

node_modules/@types/node/http.d.ts:118

___

### hostname

• `Optional` **hostname**: ``null`` \| `string`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[hostname](http.ClientRequestArgs.md#hostname)

#### Defined in

node_modules/@types/node/http.d.ts:119

___

### localAddress

• `Optional` **localAddress**: `string`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[localAddress](http.ClientRequestArgs.md#localaddress)

#### Defined in

node_modules/@types/node/http.d.ts:123

___

### maxHeaderSize

• `Optional` **maxHeaderSize**: `number`

**`default`** 8192

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[maxHeaderSize](http.ClientRequestArgs.md#maxheadersize)

#### Defined in

node_modules/@types/node/http.d.ts:128

___

### method

• `Optional` **method**: `string`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[method](http.ClientRequestArgs.md#method)

#### Defined in

node_modules/@types/node/http.d.ts:129

___

### path

• `Optional` **path**: ``null`` \| `string`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[path](http.ClientRequestArgs.md#path)

#### Defined in

node_modules/@types/node/http.d.ts:130

___

### port

• `Optional` **port**: ``null`` \| `string` \| `number`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[port](http.ClientRequestArgs.md#port)

#### Defined in

node_modules/@types/node/http.d.ts:121

___

### protocol

• `Optional` **protocol**: ``null`` \| `string`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[protocol](http.ClientRequestArgs.md#protocol)

#### Defined in

node_modules/@types/node/http.d.ts:117

___

### setHost

• `Optional` **setHost**: `boolean`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[setHost](http.ClientRequestArgs.md#sethost)

#### Defined in

node_modules/@types/node/http.d.ts:136

___

### socketPath

• `Optional` **socketPath**: `string`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[socketPath](http.ClientRequestArgs.md#socketpath)

#### Defined in

node_modules/@types/node/http.d.ts:124

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[ClientRequestArgs](http.ClientRequestArgs.md).[timeout](http.ClientRequestArgs.md#timeout)

#### Defined in

node_modules/@types/node/http.d.ts:135
