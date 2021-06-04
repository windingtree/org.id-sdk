[@windingtree/org.id-test-helpers](../README.md) / [http](../modules/http.md) / RequestOptions

# Interface: RequestOptions

[http](../modules/http.md).RequestOptions

## Hierarchy

- [ClientRequestArgs](http.clientrequestargs.md)

  ↳ **RequestOptions**

## Table of contents

### Properties

- [\_defaultAgent](http.requestoptions.md#_defaultagent)
- [abort](http.requestoptions.md#abort)
- [agent](http.requestoptions.md#agent)
- [auth](http.requestoptions.md#auth)
- [createConnection](http.requestoptions.md#createconnection)
- [defaultPort](http.requestoptions.md#defaultport)
- [family](http.requestoptions.md#family)
- [headers](http.requestoptions.md#headers)
- [host](http.requestoptions.md#host)
- [hostname](http.requestoptions.md#hostname)
- [localAddress](http.requestoptions.md#localaddress)
- [maxHeaderSize](http.requestoptions.md#maxheadersize)
- [method](http.requestoptions.md#method)
- [path](http.requestoptions.md#path)
- [port](http.requestoptions.md#port)
- [protocol](http.requestoptions.md#protocol)
- [setHost](http.requestoptions.md#sethost)
- [socketPath](http.requestoptions.md#socketpath)
- [timeout](http.requestoptions.md#timeout)

## Properties

### \_defaultAgent

• `Optional` **\_defaultAgent**: [Agent](../classes/http.agent.md)

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[_defaultAgent](http.clientrequestargs.md#_defaultagent)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:98

___

### abort

• `Optional` **abort**: `AbortSignal`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[abort](http.clientrequestargs.md#abort)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:80

___

### agent

• `Optional` **agent**: `boolean` \| [Agent](../classes/http.agent.md)

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[agent](http.clientrequestargs.md#agent)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:97

___

### auth

• `Optional` **auth**: ``null`` \| `string`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[auth](http.clientrequestargs.md#auth)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:96

___

### createConnection

• `Optional` **createConnection**: (`options`: [ClientRequestArgs](http.clientrequestargs.md), `oncreate`: (`err`: `Error`, `socket`: `Socket`) => `void`) => `Socket`

#### Type declaration

▸ (`options`, `oncreate`): `Socket`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [ClientRequestArgs](http.clientrequestargs.md) |
| `oncreate` | (`err`: `Error`, `socket`: `Socket`) => `void` |

##### Returns

`Socket`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[createConnection](http.clientrequestargs.md#createconnection)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:102

___

### defaultPort

• `Optional` **defaultPort**: `string` \| `number`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[defaultPort](http.clientrequestargs.md#defaultport)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:86

___

### family

• `Optional` **family**: `number`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[family](http.clientrequestargs.md#family)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:84

___

### headers

• `Optional` **headers**: [OutgoingHttpHeaders](http.outgoinghttpheaders.md)

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[headers](http.clientrequestargs.md#headers)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:95

___

### host

• `Optional` **host**: ``null`` \| `string`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[host](http.clientrequestargs.md#host)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:82

___

### hostname

• `Optional` **hostname**: ``null`` \| `string`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[hostname](http.clientrequestargs.md#hostname)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:83

___

### localAddress

• `Optional` **localAddress**: `string`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[localAddress](http.clientrequestargs.md#localaddress)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:87

___

### maxHeaderSize

• `Optional` **maxHeaderSize**: `number`

**`default`** 8192

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[maxHeaderSize](http.clientrequestargs.md#maxheadersize)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:92

___

### method

• `Optional` **method**: `string`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[method](http.clientrequestargs.md#method)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:93

___

### path

• `Optional` **path**: ``null`` \| `string`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[path](http.clientrequestargs.md#path)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:94

___

### port

• `Optional` **port**: ``null`` \| `string` \| `number`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[port](http.clientrequestargs.md#port)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:85

___

### protocol

• `Optional` **protocol**: ``null`` \| `string`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[protocol](http.clientrequestargs.md#protocol)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:81

___

### setHost

• `Optional` **setHost**: `boolean`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[setHost](http.clientrequestargs.md#sethost)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:100

___

### socketPath

• `Optional` **socketPath**: `string`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[socketPath](http.clientrequestargs.md#socketpath)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:88

___

### timeout

• `Optional` **timeout**: `number`

#### Inherited from

[ClientRequestArgs](http.clientrequestargs.md).[timeout](http.clientrequestargs.md#timeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:99
