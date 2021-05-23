[@windingtree/org.id-test-helpers](../README.md) / [http](../modules/http.md) / ClientRequestArgs

# Interface: ClientRequestArgs

[http](../modules/http.md).ClientRequestArgs

## Hierarchy

- **ClientRequestArgs**

  ↳ [*RequestOptions*](http.requestoptions.md)

## Table of contents

### Properties

- [\_defaultAgent](http.clientrequestargs.md#_defaultagent)
- [abort](http.clientrequestargs.md#abort)
- [agent](http.clientrequestargs.md#agent)
- [auth](http.clientrequestargs.md#auth)
- [createConnection](http.clientrequestargs.md#createconnection)
- [defaultPort](http.clientrequestargs.md#defaultport)
- [family](http.clientrequestargs.md#family)
- [headers](http.clientrequestargs.md#headers)
- [host](http.clientrequestargs.md#host)
- [hostname](http.clientrequestargs.md#hostname)
- [localAddress](http.clientrequestargs.md#localaddress)
- [maxHeaderSize](http.clientrequestargs.md#maxheadersize)
- [method](http.clientrequestargs.md#method)
- [path](http.clientrequestargs.md#path)
- [port](http.clientrequestargs.md#port)
- [protocol](http.clientrequestargs.md#protocol)
- [setHost](http.clientrequestargs.md#sethost)
- [socketPath](http.clientrequestargs.md#socketpath)
- [timeout](http.clientrequestargs.md#timeout)

## Properties

### \_defaultAgent

• `Optional` **\_defaultAgent**: [*Agent*](../classes/http.agent.md)

Defined in: node_modules/@types/node/http.d.ts:98

___

### abort

• `Optional` **abort**: AbortSignal

Defined in: node_modules/@types/node/http.d.ts:80

___

### agent

• `Optional` **agent**: *boolean* \| [*Agent*](../classes/http.agent.md)

Defined in: node_modules/@types/node/http.d.ts:97

___

### auth

• `Optional` **auth**: *string*

Defined in: node_modules/@types/node/http.d.ts:96

___

### createConnection

• `Optional` **createConnection**: (`options`: [*ClientRequestArgs*](http.clientrequestargs.md), `oncreate`: (`err`: Error, `socket`: *Socket*) => *void*) => *Socket*

#### Type declaration

▸ (`options`: [*ClientRequestArgs*](http.clientrequestargs.md), `oncreate`: (`err`: Error, `socket`: *Socket*) => *void*): *Socket*

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [*ClientRequestArgs*](http.clientrequestargs.md) |
| `oncreate` | (`err`: Error, `socket`: *Socket*) => *void* |

**Returns:** *Socket*

Defined in: node_modules/@types/node/http.d.ts:102

___

### defaultPort

• `Optional` **defaultPort**: *string* \| *number*

Defined in: node_modules/@types/node/http.d.ts:86

___

### family

• `Optional` **family**: *number*

Defined in: node_modules/@types/node/http.d.ts:84

___

### headers

• `Optional` **headers**: [*OutgoingHttpHeaders*](http.outgoinghttpheaders.md)

Defined in: node_modules/@types/node/http.d.ts:95

___

### host

• `Optional` **host**: *string*

Defined in: node_modules/@types/node/http.d.ts:82

___

### hostname

• `Optional` **hostname**: *string*

Defined in: node_modules/@types/node/http.d.ts:83

___

### localAddress

• `Optional` **localAddress**: *string*

Defined in: node_modules/@types/node/http.d.ts:87

___

### maxHeaderSize

• `Optional` **maxHeaderSize**: *number*

**`default`** 8192

Defined in: node_modules/@types/node/http.d.ts:92

___

### method

• `Optional` **method**: *string*

Defined in: node_modules/@types/node/http.d.ts:93

___

### path

• `Optional` **path**: *string*

Defined in: node_modules/@types/node/http.d.ts:94

___

### port

• `Optional` **port**: *string* \| *number*

Defined in: node_modules/@types/node/http.d.ts:85

___

### protocol

• `Optional` **protocol**: *string*

Defined in: node_modules/@types/node/http.d.ts:81

___

### setHost

• `Optional` **setHost**: *boolean*

Defined in: node_modules/@types/node/http.d.ts:100

___

### socketPath

• `Optional` **socketPath**: *string*

Defined in: node_modules/@types/node/http.d.ts:88

___

### timeout

• `Optional` **timeout**: *number*

Defined in: node_modules/@types/node/http.d.ts:99
