[@windingtree/org.id-test-helpers](../README.md) / [http](../modules/http.md) / Agent

# Class: Agent

[http](../modules/http.md).Agent

## Table of contents

### Constructors

- [constructor](http.agent.md#constructor)

### Properties

- [freeSockets](http.agent.md#freesockets)
- [maxFreeSockets](http.agent.md#maxfreesockets)
- [maxSockets](http.agent.md#maxsockets)
- [maxTotalSockets](http.agent.md#maxtotalsockets)
- [requests](http.agent.md#requests)
- [sockets](http.agent.md#sockets)

### Methods

- [destroy](http.agent.md#destroy)

## Constructors

### constructor

\+ **new Agent**(`opts?`: [*AgentOptions*](../interfaces/http.agentoptions.md)): [*Agent*](http.agent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [*AgentOptions*](../interfaces/http.agentoptions.md) |

**Returns:** [*Agent*](http.agent.md)

Defined in: node_modules/@types/node/http.d.ts:389

## Properties

### freeSockets

• `Readonly` **freeSockets**: *ReadOnlyDict*<Socket[]\>

Defined in: node_modules/@types/node/http.d.ts:387

___

### maxFreeSockets

• **maxFreeSockets**: *number*

Defined in: node_modules/@types/node/http.d.ts:384

___

### maxSockets

• **maxSockets**: *number*

Defined in: node_modules/@types/node/http.d.ts:385

___

### maxTotalSockets

• **maxTotalSockets**: *number*

Defined in: node_modules/@types/node/http.d.ts:386

___

### requests

• `Readonly` **requests**: *ReadOnlyDict*<[*IncomingMessage*](http.incomingmessage.md)[]\>

Defined in: node_modules/@types/node/http.d.ts:389

___

### sockets

• `Readonly` **sockets**: *ReadOnlyDict*<Socket[]\>

Defined in: node_modules/@types/node/http.d.ts:388

## Methods

### destroy

▸ **destroy**(): *void*

Destroy any sockets that are currently in use by the agent.
It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
sockets may hang open for quite a long time before the server terminates them.

**Returns:** *void*

Defined in: node_modules/@types/node/http.d.ts:399
