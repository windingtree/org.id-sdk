[@windingtree/org.id-test-helpers](../README.md) / [http](../modules/http.md) / AgentOptions

# Interface: AgentOptions

[http](../modules/http.md).AgentOptions

## Table of contents

### Properties

- [keepAlive](http.agentoptions.md#keepalive)
- [keepAliveMsecs](http.agentoptions.md#keepalivemsecs)
- [maxFreeSockets](http.agentoptions.md#maxfreesockets)
- [maxSockets](http.agentoptions.md#maxsockets)
- [maxTotalSockets](http.agentoptions.md#maxtotalsockets)
- [scheduling](http.agentoptions.md#scheduling)
- [timeout](http.agentoptions.md#timeout)

## Properties

### keepAlive

• `Optional` **keepAlive**: *boolean*

Keep sockets around in a pool to be used by other requests in the future. Default = false

Defined in: node_modules/@types/node/http.d.ts:354

___

### keepAliveMsecs

• `Optional` **keepAliveMsecs**: *number*

When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
Only relevant if keepAlive is set to true.

Defined in: node_modules/@types/node/http.d.ts:359

___

### maxFreeSockets

• `Optional` **maxFreeSockets**: *number*

Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.

Defined in: node_modules/@types/node/http.d.ts:371

___

### maxSockets

• `Optional` **maxSockets**: *number*

Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity

Defined in: node_modules/@types/node/http.d.ts:363

___

### maxTotalSockets

• `Optional` **maxTotalSockets**: *number*

Maximum number of sockets allowed for all hosts in total. Each request will use a new socket until the maximum is reached. Default: Infinity.

Defined in: node_modules/@types/node/http.d.ts:367

___

### scheduling

• `Optional` **scheduling**: ``"fifo"`` \| ``"lifo"``

Scheduling strategy to apply when picking the next free socket to use.

**`default`** `lifo`

Defined in: node_modules/@types/node/http.d.ts:380

___

### timeout

• `Optional` **timeout**: *number*

Socket timeout in milliseconds. This will set the timeout after the socket is connected.

Defined in: node_modules/@types/node/http.d.ts:375
