[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / Server

# Class: Server

[http](../modules/http.md).Server

**`since`** v0.1.17

## Hierarchy

- `NetServer`

  ↳ **`Server`**

## Table of contents

### Constructors

- [constructor](http.Server.md#constructor)

### Properties

- [connections](http.Server.md#connections)
- [headersTimeout](http.Server.md#headerstimeout)
- [keepAliveTimeout](http.Server.md#keepalivetimeout)
- [listening](http.Server.md#listening)
- [maxConnections](http.Server.md#maxconnections)
- [maxHeadersCount](http.Server.md#maxheaderscount)
- [maxRequestsPerSocket](http.Server.md#maxrequestspersocket)
- [requestTimeout](http.Server.md#requesttimeout)
- [timeout](http.Server.md#timeout)
- [captureRejectionSymbol](http.Server.md#capturerejectionsymbol)
- [captureRejections](http.Server.md#capturerejections)
- [defaultMaxListeners](http.Server.md#defaultmaxlisteners)
- [errorMonitor](http.Server.md#errormonitor)

### Methods

- [addListener](http.Server.md#addlistener)
- [address](http.Server.md#address)
- [close](http.Server.md#close)
- [emit](http.Server.md#emit)
- [eventNames](http.Server.md#eventnames)
- [getConnections](http.Server.md#getconnections)
- [getMaxListeners](http.Server.md#getmaxlisteners)
- [listen](http.Server.md#listen)
- [listenerCount](http.Server.md#listenercount)
- [listeners](http.Server.md#listeners)
- [off](http.Server.md#off)
- [on](http.Server.md#on)
- [once](http.Server.md#once)
- [prependListener](http.Server.md#prependlistener)
- [prependOnceListener](http.Server.md#prependoncelistener)
- [rawListeners](http.Server.md#rawlisteners)
- [ref](http.Server.md#ref)
- [removeAllListeners](http.Server.md#removealllisteners)
- [removeListener](http.Server.md#removelistener)
- [setMaxListeners](http.Server.md#setmaxlisteners)
- [setTimeout](http.Server.md#settimeout)
- [unref](http.Server.md#unref)
- [getEventListeners](http.Server.md#geteventlisteners)
- [listenerCount](http.Server.md#listenercount)
- [on](http.Server.md#on)
- [once](http.Server.md#once)

## Constructors

### constructor

• **new Server**(`requestListener?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestListener?` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Overrides

NetServer.constructor

#### Defined in

node_modules/@types/node/http.d.ts:163

• **new Server**(`options`, `requestListener?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ServerOptions`](../interfaces/http.ServerOptions.md) |
| `requestListener?` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Overrides

NetServer.constructor

#### Defined in

node_modules/@types/node/http.d.ts:164

## Properties

### connections

• **connections**: `number`

#### Inherited from

NetServer.connections

#### Defined in

node_modules/@types/node/net.d.ts:514

___

### headersTimeout

• **headersTimeout**: `number`

Limit the amount of time the parser will wait to receive the complete HTTP
headers.

In case of inactivity, the rules defined in `server.timeout` apply. However,
that inactivity based timeout would still allow the connection to be kept open
if the headers are being sent very slowly (by default, up to a byte per 2
minutes). In order to prevent this, whenever header data arrives an additional
check is made that more than `server.headersTimeout` milliseconds has not
passed since the connection was established. If the check fails, a `'timeout'`event is emitted on the server object, and (by default) the socket is destroyed.
See `server.timeout` for more information on how timeout behavior can be
customized.

**`since`** v11.3.0, v10.14.0

#### Defined in

node_modules/@types/node/http.d.ts:223

___

### keepAliveTimeout

• **keepAliveTimeout**: `number`

The number of milliseconds of inactivity a server needs to wait for additional
incoming data, after it has finished writing the last response, before a socket
will be destroyed. If the server receives new data before the keep-alive
timeout has fired, it will reset the regular inactivity timeout, i.e.,`server.timeout`.

A value of `0` will disable the keep-alive timeout behavior on incoming
connections.
A value of `0` makes the http server behave similarly to Node.js versions prior
to 8.0.0, which did not have a keep-alive timeout.

The socket timeout logic is set up on connection, so changing this value only
affects new connections to the server, not any existing connections.

**`since`** v8.0.0

#### Defined in

node_modules/@types/node/http.d.ts:239

___

### listening

• **listening**: `boolean`

Indicates whether or not the server is listening for connections.

**`since`** v5.7.0

#### Inherited from

NetServer.listening

#### Defined in

node_modules/@types/node/net.d.ts:519

___

### maxConnections

• **maxConnections**: `number`

Set this property to reject connections when the server's connection count gets
high.

It is not recommended to use this option once a socket has been sent to a child
with `child_process.fork()`.

**`since`** v0.2.0

#### Inherited from

NetServer.maxConnections

#### Defined in

node_modules/@types/node/net.d.ts:513

___

### maxHeadersCount

• **maxHeadersCount**: ``null`` \| `number`

Limits maximum incoming headers count. If set to 0, no limit will be applied.

**`since`** v0.7.0

#### Defined in

node_modules/@types/node/http.d.ts:185

___

### maxRequestsPerSocket

• **maxRequestsPerSocket**: ``null`` \| `number`

The maximum number of requests socket can handle
before closing keep alive connection.

A value of `null` will disable the limit.

When limit is reach it will set `Connection` header value to `closed`,
but will not actually close the connection, subsequent requests sent
after the limit is reached will get `503 Service Unavailable` as a response.

**`since`** v16.10.0

#### Defined in

node_modules/@types/node/http.d.ts:197

___

### requestTimeout

• **requestTimeout**: `number`

Sets the timeout value in milliseconds for receiving the entire request from
the client.

If the timeout expires, the server responds with status 408 without
forwarding the request to the request listener and then closes the connection.

It must be set to a non-zero value (e.g. 120 seconds) to protect against
potential Denial-of-Service attacks in case the server is deployed without a
reverse proxy in front.

**`since`** v14.11.0

#### Defined in

node_modules/@types/node/http.d.ts:252

___

### timeout

• **timeout**: `number`

The number of milliseconds of inactivity before a socket is presumed
to have timed out.

A value of `0` will disable the timeout behavior on incoming connections.

The socket timeout logic is set up on connection, so changing this
value only affects new connections to the server, not any existing connections.

**`since`** v0.9.12

#### Defined in

node_modules/@types/node/http.d.ts:208

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](http.Server.md#capturerejectionsymbol)

#### Inherited from

NetServer.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:273

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

NetServer.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:278

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

NetServer.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:279

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](http.Server.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

NetServer.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:272

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:253

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:254

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:255

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:256

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:257

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:258

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:259

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: `Duplex`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:260

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:261

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:262

▸ **addListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.addListener

#### Defined in

node_modules/@types/node/http.d.ts:263

___

### address

▸ **address**(): ``null`` \| `string` \| `AddressInfo`

Returns the bound `address`, the address `family` name, and `port` of the server
as reported by the operating system if listening on an IP socket
(useful to find which port was assigned when getting an OS-assigned address):`{ port: 12346, family: 'IPv4', address: '127.0.0.1' }`.

For a server listening on a pipe or Unix domain socket, the name is returned
as a string.

```js
const server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // Handle errors here.
  throw err;
});

// Grab an arbitrary unused port.
server.listen(() => {
  console.log('opened server on', server.address());
});
```

`server.address()` returns `null` before the `'listening'` event has been
emitted or after calling `server.close()`.

**`since`** v0.1.90

#### Returns

``null`` \| `string` \| `AddressInfo`

#### Inherited from

NetServer.address

#### Defined in

node_modules/@types/node/net.d.ts:484

___

### close

▸ **close**(`callback?`): [`Server`](http.Server.md)

Stops the server from accepting new connections and keeps existing
connections. This function is asynchronous, the server is finally closed
when all connections are ended and the server emits a `'close'` event.
The optional `callback` will be called once the `'close'` event occurs. Unlike
that event, it will be called with an `Error` as its only argument if the server
was not open when it was closed.

**`since`** v0.1.90

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback?` | (`err?`: `Error`) => `void` | Called when the server is closed. |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.close

#### Defined in

node_modules/@types/node/net.d.ts:457

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:264

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:265

▸ **emit**(`event`, `socket`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `socket` | `Socket` |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:266

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:267

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:268

▸ **emit**(`event`, `req`, `res`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `req` | [`IncomingMessage`](http.IncomingMessage.md) |
| `res` | [`ServerResponse`](http.ServerResponse.md) |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:269

▸ **emit**(`event`, `req`, `res`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `req` | [`IncomingMessage`](http.IncomingMessage.md) |
| `res` | [`ServerResponse`](http.ServerResponse.md) |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:270

▸ **emit**(`event`, `err`, `socket`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `err` | `Error` |
| `socket` | `Duplex` |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:271

▸ **emit**(`event`, `req`, `socket`, `head`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `req` | [`IncomingMessage`](http.IncomingMessage.md) |
| `socket` | `Duplex` |
| `head` | `Buffer` |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:272

▸ **emit**(`event`, `req`, `res`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `req` | [`IncomingMessage`](http.IncomingMessage.md) |
| `res` | [`ServerResponse`](http.ServerResponse.md) |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:273

▸ **emit**(`event`, `req`, `socket`, `head`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `req` | [`IncomingMessage`](http.IncomingMessage.md) |
| `socket` | `Duplex` |
| `head` | `Buffer` |

#### Returns

`boolean`

#### Overrides

NetServer.emit

#### Defined in

node_modules/@types/node/http.d.ts:274

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`since`** v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

NetServer.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:614

___

### getConnections

▸ **getConnections**(`cb`): `void`

Asynchronously get the number of concurrent connections on the server. Works
when sockets were sent to forks.

Callback should take two arguments `err` and `count`.

**`since`** v0.9.7

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`error`: ``null`` \| `Error`, `count`: `number`) => `void` |

#### Returns

`void`

#### Inherited from

NetServer.getConnections

#### Defined in

node_modules/@types/node/net.d.ts:492

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](http.Server.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

NetServer.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:471

___

### listen

▸ **listen**(`port?`, `hostname?`, `backlog?`, `listeningListener?`): [`Server`](http.Server.md)

Start a server listening for connections. A `net.Server` can be a TCP or
an `IPC` server depending on what it listens to.

Possible signatures:

* `server.listen(handle[, backlog][, callback])`
* `server.listen(options[, callback])`
* `server.listen(path[, backlog][, callback])` for `IPC` servers
* `server.listen([port[, host[, backlog]]][, callback])` for TCP servers

This function is asynchronous. When the server starts listening, the `'listening'` event will be emitted. The last parameter `callback`will be added as a listener for the `'listening'`
event.

All `listen()` methods can take a `backlog` parameter to specify the maximum
length of the queue of pending connections. The actual length will be determined
by the OS through sysctl settings such as `tcp_max_syn_backlog` and `somaxconn`on Linux. The default value of this parameter is 511 (not 512).

All {@link Socket} are set to `SO_REUSEADDR` (see [`socket(7)`](https://man7.org/linux/man-pages/man7/socket.7.html) for
details).

The `server.listen()` method can be called again if and only if there was an
error during the first `server.listen()` call or `server.close()` has been
called. Otherwise, an `ERR_SERVER_ALREADY_LISTEN` error will be thrown.

One of the most common errors raised when listening is `EADDRINUSE`.
This happens when another server is already listening on the requested`port`/`path`/`handle`. One way to handle this would be to retry
after a certain amount of time:

```js
server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  }
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `hostname?` | `string` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:438

▸ **listen**(`port?`, `hostname?`, `listeningListener?`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `hostname?` | `string` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:439

▸ **listen**(`port?`, `backlog?`, `listeningListener?`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:440

▸ **listen**(`port?`, `listeningListener?`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:441

▸ **listen**(`path`, `backlog?`, `listeningListener?`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:442

▸ **listen**(`path`, `listeningListener?`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:443

▸ **listen**(`options`, `listeningListener?`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ListenOptions` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:444

▸ **listen**(`handle`, `backlog?`, `listeningListener?`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:445

▸ **listen**(`handle`, `listeningListener?`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `listeningListener?` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.listen

#### Defined in

node_modules/@types/node/net.d.ts:446

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`since`** v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

NetServer.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:561

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

NetServer.listeners

#### Defined in

node_modules/@types/node/events.d.ts:484

___

### off

▸ **off**(`eventName`, `listener`): [`Server`](http.Server.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.off

#### Defined in

node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:275

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:276

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:277

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:278

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:279

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:280

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:281

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: `Duplex`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:282

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:283

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:284

▸ **on**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.on

#### Defined in

node_modules/@types/node/http.d.ts:285

___

### once

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:286

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:287

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:288

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:289

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:290

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:291

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:292

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: `Duplex`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:293

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:294

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:295

▸ **once**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.once

#### Defined in

node_modules/@types/node/http.d.ts:296

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:297

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:298

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:299

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:300

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:301

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:302

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:303

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: `Duplex`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:304

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:305

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:306

▸ **prependListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:307

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:308

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:309

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:310

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:311

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:312

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkContinue"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:313

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"checkExpectation"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:314

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"clientError"`` |
| `listener` | (`err`: `Error`, `socket`: `Duplex`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:315

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`req`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:316

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"request"`` |
| `listener` | [`RequestListener`](../modules/http.md#requestlistener) |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:317

▸ **prependOnceListener**(`event`, `listener`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`req`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Duplex`, `head`: `Buffer`) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Overrides

NetServer.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:318

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`since`** v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

NetServer.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:514

___

### ref

▸ **ref**(): [`Server`](http.Server.md)

Opposite of `unref()`, calling `ref()` on a previously `unref`ed server will_not_ let the program exit if it's the only server left (the default behavior).
If the server is `ref`ed calling `ref()` again will have no effect.

**`since`** v0.9.1

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.ref

#### Defined in

node_modules/@types/node/net.d.ts:498

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Server`](http.Server.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:455

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Server`](http.Server.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and_before_ the last listener finishes execution will
not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:439

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Server`](http.Server.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`since`** v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:465

___

### setTimeout

▸ **setTimeout**(`msecs?`, `callback?`): [`Server`](http.Server.md)

Sets the timeout value for sockets, and emits a `'timeout'` event on
the Server object, passing the socket as an argument, if a timeout
occurs.

If there is a `'timeout'` event listener on the Server object, then it
will be called with the timed-out socket as an argument.

By default, the Server does not timeout sockets. However, if a callback
is assigned to the Server's `'timeout'` event, timeouts must be handled
explicitly.

**`since`** v0.9.12

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs?` | `number` |
| `callback?` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Defined in

node_modules/@types/node/http.d.ts:179

▸ **setTimeout**(`callback`): [`Server`](http.Server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

[`Server`](http.Server.md)

#### Defined in

node_modules/@types/node/http.d.ts:180

___

### unref

▸ **unref**(): [`Server`](http.Server.md)

Calling `unref()` on a server will allow the program to exit if this is the only
active server in the event system. If the server is already `unref`ed calling`unref()` again will have no effect.

**`since`** v0.9.1

#### Returns

[`Server`](http.Server.md)

#### Inherited from

NetServer.unref

#### Defined in

node_modules/@types/node/net.d.ts:504

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
const { getEventListeners, EventEmitter } = require('events');

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  getEventListeners(ee, 'foo'); // [listener]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  getEventListeners(et, 'foo'); // [listener]
}
```

**`since`** v15.2.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

NetServer.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:262

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
const { EventEmitter, listenerCount } = require('events');
const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`since`** v0.9.12

**`deprecated`** Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

NetServer.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:234

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
const { on, EventEmitter } = require('events');

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo')) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
const { on, EventEmitter } = require('events');
const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`since`** v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

NetServer.on

#### Defined in

node_modules/@types/node/events.d.ts:217

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
const { once, EventEmitter } = require('events');

async function run() {
  const ee = new EventEmitter();

  process.nextTick(() => {
    ee.emit('myevent', 42);
  });

  const [value] = await once(ee, 'myevent');
  console.log(value);

  const err = new Error('kaboom');
  process.nextTick(() => {
    ee.emit('error', err);
  });

  try {
    await once(ee, 'myevent');
  } catch (err) {
    console.log('error happened', err);
  }
}

run();
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.log('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
const { EventEmitter, once } = require('events');

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`since`** v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

NetServer.once

#### Defined in

node_modules/@types/node/events.d.ts:157

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

NetServer.once

#### Defined in

node_modules/@types/node/events.d.ts:158
