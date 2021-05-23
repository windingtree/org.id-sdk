[@windingtree/org.id-test-helpers](../README.md) / http

# Namespace: http

## Table of contents

### Classes

- [Agent](../classes/http.agent.md)
- [ClientRequest](../classes/http.clientrequest.md)
- [IncomingMessage](../classes/http.incomingmessage.md)
- [OutgoingMessage](../classes/http.outgoingmessage.md)
- [Server](../classes/http.server.md)
- [ServerResponse](../classes/http.serverresponse.md)

### Interfaces

- [AgentOptions](../interfaces/http.agentoptions.md)
- [ClientRequestArgs](../interfaces/http.clientrequestargs.md)
- [HttpBase](../interfaces/http.httpbase.md)
- [IncomingHttpHeaders](../interfaces/http.incominghttpheaders.md)
- [InformationEvent](../interfaces/http.informationevent.md)
- [OutgoingHttpHeaders](../interfaces/http.outgoinghttpheaders.md)
- [RequestOptions](../interfaces/http.requestoptions.md)
- [ServerOptions](../interfaces/http.serveroptions.md)

### Type aliases

- [OutgoingHttpHeader](http.md#outgoinghttpheader)
- [RequestListener](http.md#requestlistener)

### Variables

- [METHODS](http.md#methods)
- [STATUS\_CODES](http.md#status_codes)
- [globalAgent](http.md#globalagent)
- [maxHeaderSize](http.md#maxheadersize)

### Functions

- [createServer](http.md#createserver)
- [get](http.md#get)
- [request](http.md#request)

## Type aliases

### OutgoingHttpHeader

Ƭ **OutgoingHttpHeader**: *number* \| *string* \| *string*[]

Defined in: node_modules/@types/node/http.d.ts:74

___

### RequestListener

Ƭ **RequestListener**: (`req`: [*IncomingMessage*](../classes/http.incomingmessage.md), `res`: [*ServerResponse*](../classes/http.serverresponse.md)) => *void*

#### Type declaration

▸ (`req`: [*IncomingMessage*](../classes/http.incomingmessage.md), `res`: [*ServerResponse*](../classes/http.serverresponse.md)): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [*IncomingMessage*](../classes/http.incomingmessage.md) |
| `res` | [*ServerResponse*](../classes/http.serverresponse.md) |

**Returns:** *void*

Defined in: node_modules/@types/node/http.d.ts:124

## Variables

### METHODS

• `Const` **METHODS**: *string*[]

Defined in: node_modules/@types/node/http.d.ts:402

___

### STATUS\_CODES

• `Const` **STATUS\_CODES**: *object*

#### Type declaration

Defined in: node_modules/@types/node/http.d.ts:404

___

### globalAgent

• `Let` **globalAgent**: [*Agent*](../classes/http.agent.md)

Defined in: node_modules/@types/node/http.d.ts:419

___

### maxHeaderSize

• `Const` **maxHeaderSize**: *number*

Read-only property specifying the maximum allowed size of HTTP headers in bytes.
Defaults to 16KB. Configurable using the [`--max-http-header-size`][] CLI option.

Defined in: node_modules/@types/node/http.d.ts:425

## Functions

### createServer

▸ **createServer**(`requestListener?`: [*RequestListener*](http.md#requestlistener)): [*Server*](../classes/http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestListener?` | [*RequestListener*](http.md#requestlistener) |

**Returns:** [*Server*](../classes/http.server.md)

Defined in: node_modules/@types/node/http.d.ts:409

▸ **createServer**(`options`: [*ServerOptions*](../interfaces/http.serveroptions.md), `requestListener?`: [*RequestListener*](http.md#requestlistener)): [*Server*](../classes/http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [*ServerOptions*](../interfaces/http.serveroptions.md) |
| `requestListener?` | [*RequestListener*](http.md#requestlistener) |

**Returns:** [*Server*](../classes/http.server.md)

Defined in: node_modules/@types/node/http.d.ts:410

___

### get

▸ **get**(`options`: [*RequestOptions*](../interfaces/http.requestoptions.md) \| *string* \| URL, `callback?`: (`res`: [*IncomingMessage*](../classes/http.incomingmessage.md)) => *void*): [*ClientRequest*](../classes/http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [*RequestOptions*](../interfaces/http.requestoptions.md) \| *string* \| URL |
| `callback?` | (`res`: [*IncomingMessage*](../classes/http.incomingmessage.md)) => *void* |

**Returns:** [*ClientRequest*](../classes/http.clientrequest.md)

Defined in: node_modules/@types/node/http.d.ts:417

▸ **get**(`url`: *string* \| URL, `options`: [*RequestOptions*](../interfaces/http.requestoptions.md), `callback?`: (`res`: [*IncomingMessage*](../classes/http.incomingmessage.md)) => *void*): [*ClientRequest*](../classes/http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* \| URL |
| `options` | [*RequestOptions*](../interfaces/http.requestoptions.md) |
| `callback?` | (`res`: [*IncomingMessage*](../classes/http.incomingmessage.md)) => *void* |

**Returns:** [*ClientRequest*](../classes/http.clientrequest.md)

Defined in: node_modules/@types/node/http.d.ts:418

___

### request

▸ **request**(`options`: [*RequestOptions*](../interfaces/http.requestoptions.md) \| *string* \| URL, `callback?`: (`res`: [*IncomingMessage*](../classes/http.incomingmessage.md)) => *void*): [*ClientRequest*](../classes/http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [*RequestOptions*](../interfaces/http.requestoptions.md) \| *string* \| URL |
| `callback?` | (`res`: [*IncomingMessage*](../classes/http.incomingmessage.md)) => *void* |

**Returns:** [*ClientRequest*](../classes/http.clientrequest.md)

Defined in: node_modules/@types/node/http.d.ts:415

▸ **request**(`url`: *string* \| URL, `options`: [*RequestOptions*](../interfaces/http.requestoptions.md), `callback?`: (`res`: [*IncomingMessage*](../classes/http.incomingmessage.md)) => *void*): [*ClientRequest*](../classes/http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* \| URL |
| `options` | [*RequestOptions*](../interfaces/http.requestoptions.md) |
| `callback?` | (`res`: [*IncomingMessage*](../classes/http.incomingmessage.md)) => *void* |

**Returns:** [*ClientRequest*](../classes/http.clientrequest.md)

Defined in: node_modules/@types/node/http.d.ts:416
