[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / AgentOptions

# Interface: AgentOptions

[http](../modules/http.md).AgentOptions

## Table of contents

### Properties

- [keepAlive](http.AgentOptions.md#keepalive)
- [keepAliveMsecs](http.AgentOptions.md#keepalivemsecs)
- [maxFreeSockets](http.AgentOptions.md#maxfreesockets)
- [maxSockets](http.AgentOptions.md#maxsockets)
- [maxTotalSockets](http.AgentOptions.md#maxtotalsockets)
- [scheduling](http.AgentOptions.md#scheduling)
- [timeout](http.AgentOptions.md#timeout)

## Properties

### keepAlive

• `Optional` **keepAlive**: `boolean`

Keep sockets around in a pool to be used by other requests in the future. Default = false

#### Defined in

node_modules/@types/node/http.d.ts:957

___

### keepAliveMsecs

• `Optional` **keepAliveMsecs**: `number`

When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
Only relevant if keepAlive is set to true.

#### Defined in

node_modules/@types/node/http.d.ts:962

___

### maxFreeSockets

• `Optional` **maxFreeSockets**: `number`

Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.

#### Defined in

node_modules/@types/node/http.d.ts:974

___

### maxSockets

• `Optional` **maxSockets**: `number`

Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity

#### Defined in

node_modules/@types/node/http.d.ts:966

___

### maxTotalSockets

• `Optional` **maxTotalSockets**: `number`

Maximum number of sockets allowed for all hosts in total. Each request will use a new socket until the maximum is reached. Default: Infinity.

#### Defined in

node_modules/@types/node/http.d.ts:970

___

### scheduling

• `Optional` **scheduling**: ``"fifo"`` \| ``"lifo"``

Scheduling strategy to apply when picking the next free socket to use.

**`default`** `lifo`

#### Defined in

node_modules/@types/node/http.d.ts:983

___

### timeout

• `Optional` **timeout**: `number`

Socket timeout in milliseconds. This will set the timeout after the socket is connected.

#### Defined in

node_modules/@types/node/http.d.ts:978
