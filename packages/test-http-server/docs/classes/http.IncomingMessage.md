[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / IncomingMessage

# Class: IncomingMessage

[http](../modules/http.md).IncomingMessage

An `IncomingMessage` object is created by [Server](http.Server.md) or [ClientRequest](http.ClientRequest.md) and passed as the first argument to the `'request'` and `'response'` event respectively. It may be used to
access response
status, headers and data.

Different from its `socket` value which is a subclass of `stream.Duplex`, the`IncomingMessage` itself extends `stream.Readable` and is created separately to
parse and emit the incoming HTTP headers and payload, as the underlying socket
may be reused multiple times in case of keep-alive.

**`since`** v0.1.17

## Hierarchy

- `Readable`

  ↳ **`IncomingMessage`**

## Table of contents

### Constructors

- [constructor](http.IncomingMessage.md#constructor)

### Properties

- [aborted](http.IncomingMessage.md#aborted)
- [complete](http.IncomingMessage.md#complete)
- [connection](http.IncomingMessage.md#connection)
- [destroyed](http.IncomingMessage.md#destroyed)
- [headers](http.IncomingMessage.md#headers)
- [httpVersion](http.IncomingMessage.md#httpversion)
- [httpVersionMajor](http.IncomingMessage.md#httpversionmajor)
- [httpVersionMinor](http.IncomingMessage.md#httpversionminor)
- [method](http.IncomingMessage.md#method)
- [rawHeaders](http.IncomingMessage.md#rawheaders)
- [rawTrailers](http.IncomingMessage.md#rawtrailers)
- [readable](http.IncomingMessage.md#readable)
- [readableAborted](http.IncomingMessage.md#readableaborted)
- [readableDidRead](http.IncomingMessage.md#readabledidread)
- [readableEncoding](http.IncomingMessage.md#readableencoding)
- [readableEnded](http.IncomingMessage.md#readableended)
- [readableFlowing](http.IncomingMessage.md#readableflowing)
- [readableHighWaterMark](http.IncomingMessage.md#readablehighwatermark)
- [readableLength](http.IncomingMessage.md#readablelength)
- [readableObjectMode](http.IncomingMessage.md#readableobjectmode)
- [socket](http.IncomingMessage.md#socket)
- [statusCode](http.IncomingMessage.md#statuscode)
- [statusMessage](http.IncomingMessage.md#statusmessage)
- [trailers](http.IncomingMessage.md#trailers)
- [url](http.IncomingMessage.md#url)
- [captureRejectionSymbol](http.IncomingMessage.md#capturerejectionsymbol)
- [captureRejections](http.IncomingMessage.md#capturerejections)
- [defaultMaxListeners](http.IncomingMessage.md#defaultmaxlisteners)
- [errorMonitor](http.IncomingMessage.md#errormonitor)

### Methods

- [[asyncIterator]](http.IncomingMessage.md#[asynciterator])
- [\_construct](http.IncomingMessage.md#_construct)
- [\_destroy](http.IncomingMessage.md#_destroy)
- [\_read](http.IncomingMessage.md#_read)
- [addListener](http.IncomingMessage.md#addlistener)
- [destroy](http.IncomingMessage.md#destroy)
- [emit](http.IncomingMessage.md#emit)
- [eventNames](http.IncomingMessage.md#eventnames)
- [getMaxListeners](http.IncomingMessage.md#getmaxlisteners)
- [isPaused](http.IncomingMessage.md#ispaused)
- [listenerCount](http.IncomingMessage.md#listenercount)
- [listeners](http.IncomingMessage.md#listeners)
- [off](http.IncomingMessage.md#off)
- [on](http.IncomingMessage.md#on)
- [once](http.IncomingMessage.md#once)
- [pause](http.IncomingMessage.md#pause)
- [pipe](http.IncomingMessage.md#pipe)
- [prependListener](http.IncomingMessage.md#prependlistener)
- [prependOnceListener](http.IncomingMessage.md#prependoncelistener)
- [push](http.IncomingMessage.md#push)
- [rawListeners](http.IncomingMessage.md#rawlisteners)
- [read](http.IncomingMessage.md#read)
- [removeAllListeners](http.IncomingMessage.md#removealllisteners)
- [removeListener](http.IncomingMessage.md#removelistener)
- [resume](http.IncomingMessage.md#resume)
- [setEncoding](http.IncomingMessage.md#setencoding)
- [setMaxListeners](http.IncomingMessage.md#setmaxlisteners)
- [setTimeout](http.IncomingMessage.md#settimeout)
- [unpipe](http.IncomingMessage.md#unpipe)
- [unshift](http.IncomingMessage.md#unshift)
- [wrap](http.IncomingMessage.md#wrap)
- [from](http.IncomingMessage.md#from)
- [getEventListeners](http.IncomingMessage.md#geteventlisteners)
- [isDisturbed](http.IncomingMessage.md#isdisturbed)
- [listenerCount](http.IncomingMessage.md#listenercount)
- [on](http.IncomingMessage.md#on)
- [once](http.IncomingMessage.md#once)

## Constructors

### constructor

• **new IncomingMessage**(`socket`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Overrides

stream.Readable.constructor

#### Defined in

node_modules/@types/node/http.d.ts:759

## Properties

### aborted

• **aborted**: `boolean`

The `message.aborted` property will be `true` if the request has
been aborted.

**`since`** v10.1.0

#### Defined in

node_modules/@types/node/http.d.ts:765

___

### complete

• **complete**: `boolean`

The `message.complete` property will be `true` if a complete HTTP message has
been received and successfully parsed.

This property is particularly useful as a means of determining if a client or
server fully transmitted a message before a connection was terminated:

```js
const req = http.request({
  host: '127.0.0.1',
  port: 8080,
  method: 'POST'
}, (res) => {
  res.resume();
  res.on('end', () => {
    if (!res.complete)
      console.error(
        'The connection was terminated while the message was still being sent');
  });
});
```

**`since`** v0.3.0

#### Defined in

node_modules/@types/node/http.d.ts:800

___

### connection

• **connection**: `Socket`

Alias for `message.socket`.

**`since`** v0.1.90

**`deprecated`** Since v16.0.0 - Use `socket`.

#### Defined in

node_modules/@types/node/http.d.ts:806

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `readable.destroy()` has been called.

**`since`** v8.0.0

#### Inherited from

stream.Readable.destroyed

#### Defined in

node_modules/@types/node/stream.d.ts:115

___

### headers

• **headers**: [`IncomingHttpHeaders`](../interfaces/http.IncomingHttpHeaders.md)

The request/response headers object.

Key-value pairs of header names and values. Header names are lower-cased.

```js
// Prints something like:
//
// { 'user-agent': 'curl/7.22.0',
//   host: '127.0.0.1:8000',
//   accept: '*' }
console.log(request.headers);
```

Duplicates in raw headers are handled in the following ways, depending on the
header name:

* Duplicates of `age`, `authorization`, `content-length`, `content-type`,`etag`, `expires`, `from`, `host`, `if-modified-since`, `if-unmodified-since`,`last-modified`, `location`,
`max-forwards`, `proxy-authorization`, `referer`,`retry-after`, `server`, or `user-agent` are discarded.
* `set-cookie` is always an array. Duplicates are added to the array.
* For duplicate `cookie` headers, the values are joined together with '; '.
* For all other headers, the values are joined together with ', '.

**`since`** v0.1.5

#### Defined in

node_modules/@types/node/http.d.ts:843

___

### httpVersion

• **httpVersion**: `string`

In case of server request, the HTTP version sent by the client. In the case of
client response, the HTTP version of the connected-to server.
Probably either `'1.1'` or `'1.0'`.

Also `message.httpVersionMajor` is the first integer and`message.httpVersionMinor` is the second.

**`since`** v0.1.1

#### Defined in

node_modules/@types/node/http.d.ts:774

___

### httpVersionMajor

• **httpVersionMajor**: `number`

#### Defined in

node_modules/@types/node/http.d.ts:775

___

### httpVersionMinor

• **httpVersionMinor**: `number`

#### Defined in

node_modules/@types/node/http.d.ts:776

___

### method

• `Optional` **method**: `string`

**Only valid for request obtained from [Server](http.Server.md).**

The request method as a string. Read only. Examples: `'GET'`, `'DELETE'`.

**`since`** v0.1.1

#### Defined in

node_modules/@types/node/http.d.ts:891

___

### rawHeaders

• **rawHeaders**: `string`[]

The raw request/response headers list exactly as they were received.

The keys and values are in the same list. It is _not_ a
list of tuples. So, the even-numbered offsets are key values, and the
odd-numbered offsets are the associated values.

Header names are not lowercased, and duplicates are not merged.

```js
// Prints something like:
//
// [ 'user-agent',
//   'this is invalid because there can be only one',
//   'User-Agent',
//   'curl/7.22.0',
//   'Host',
//   '127.0.0.1:8000',
//   'ACCEPT',
//   '*' ]
console.log(request.rawHeaders);
```

**`since`** v0.11.6

#### Defined in

node_modules/@types/node/http.d.ts:868

___

### rawTrailers

• **rawTrailers**: `string`[]

The raw request/response trailer keys and values exactly as they were
received. Only populated at the `'end'` event.

**`since`** v0.11.6

#### Defined in

node_modules/@types/node/http.d.ts:879

___

### readable

• **readable**: `boolean`

Is `true` if it is safe to call `readable.read()`, which means
the stream has not been destroyed or emitted `'error'` or `'end'`.

**`since`** v11.4.0

#### Inherited from

stream.Readable.readable

#### Defined in

node_modules/@types/node/stream.d.ts:71

___

### readableAborted

• `Readonly` **readableAborted**: `boolean`

Returns whether the stream was destroyed or errored before emitting `'end'`.

**`since`** v16.8.0

**`experimental`**

#### Inherited from

stream.Readable.readableAborted

#### Defined in

node_modules/@types/node/stream.d.ts:65

___

### readableDidRead

• `Readonly` **readableDidRead**: `boolean`

Returns whether `'data'` has been emitted.

**`since`** v16.7.0

**`experimental`**

#### Inherited from

stream.Readable.readableDidRead

#### Defined in

node_modules/@types/node/stream.d.ts:77

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| `BufferEncoding`

Getter for the property `encoding` of a given `Readable` stream. The `encoding`property can be set using the `readable.setEncoding()` method.

**`since`** v12.7.0

#### Inherited from

stream.Readable.readableEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:82

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

Becomes `true` when `'end'` event is emitted.

**`since`** v12.9.0

#### Inherited from

stream.Readable.readableEnded

#### Defined in

node_modules/@types/node/stream.d.ts:87

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

This property reflects the current state of a `Readable` stream as described
in the `Three states` section.

**`since`** v9.4.0

#### Inherited from

stream.Readable.readableFlowing

#### Defined in

node_modules/@types/node/stream.d.ts:93

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

Returns the value of `highWaterMark` passed when creating this `Readable`.

**`since`** v9.3.0

#### Inherited from

stream.Readable.readableHighWaterMark

#### Defined in

node_modules/@types/node/stream.d.ts:98

___

### readableLength

• `Readonly` **readableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be read. The value provides introspection data regarding
the status of the `highWaterMark`.

**`since`** v9.4.0

#### Inherited from

stream.Readable.readableLength

#### Defined in

node_modules/@types/node/stream.d.ts:105

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Readable` stream.

**`since`** v12.3.0

#### Inherited from

stream.Readable.readableObjectMode

#### Defined in

node_modules/@types/node/stream.d.ts:110

___

### socket

• **socket**: `Socket`

The `net.Socket` object associated with the connection.

With HTTPS support, use `request.socket.getPeerCertificate()` to obtain the
client's authentication details.

This property is guaranteed to be an instance of the `net.Socket` class,
a subclass of `stream.Duplex`, unless the user specified a socket
type other than `net.Socket`.

**`since`** v0.3.0

#### Defined in

node_modules/@types/node/http.d.ts:818

___

### statusCode

• `Optional` **statusCode**: `number`

**Only valid for response obtained from [ClientRequest](http.ClientRequest.md).**

The 3-digit HTTP response status code. E.G. `404`.

**`since`** v0.1.1

#### Defined in

node_modules/@types/node/http.d.ts:938

___

### statusMessage

• `Optional` **statusMessage**: `string`

**Only valid for response obtained from [ClientRequest](http.ClientRequest.md).**

The HTTP response status message (reason phrase). E.G. `OK` or `Internal Server Error`.

**`since`** v0.11.10

#### Defined in

node_modules/@types/node/http.d.ts:945

___

### trailers

• **trailers**: `Dict`<`string`\>

The request/response trailers object. Only populated at the `'end'` event.

**`since`** v0.3.0

#### Defined in

node_modules/@types/node/http.d.ts:873

___

### url

• `Optional` **url**: `string`

**Only valid for request obtained from [Server](http.Server.md).**

Request URL string. This contains only the URL that is present in the actual
HTTP request. Take the following request:

```http
GET /status?name=ryan HTTP/1.1
Accept: text/plain
```

To parse the URL into its parts:

```js
new URL(request.url, `http://${request.headers.host}`);
```

When `request.url` is `'/status?name=ryan'` and`request.headers.host` is `'localhost:3000'`:

```console
$ node
> new URL(request.url, `http://${request.headers.host}`)
URL {
  href: 'http://localhost:3000/status?name=ryan',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/status',
  search: '?name=ryan',
  searchParams: URLSearchParams { 'name' => 'ryan' },
  hash: ''
}
```

**`since`** v0.1.90

#### Defined in

node_modules/@types/node/http.d.ts:931

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](http.Server.md#capturerejectionsymbol)

#### Inherited from

stream.Readable.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:273

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

stream.Readable.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:278

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

stream.Readable.defaultMaxListeners

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

stream.Readable.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:272

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): `AsyncIterableIterator`<`any`\>

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

stream.Readable.\_\_@asyncIterator@3276

#### Defined in

node_modules/@types/node/stream.d.ts:479

___

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

stream.Readable.\_construct

#### Defined in

node_modules/@types/node/stream.d.ts:117

___

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

stream.Readable.\_destroy

#### Defined in

node_modules/@types/node/stream.d.ts:399

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

stream.Readable.\_read

#### Defined in

node_modules/@types/node/stream.d.ts:118

___

### addListener

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

Event emitter
The defined events on documents including:
1. close
2. data
3. end
4. error
5. pause
6. readable
7. resume

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:423

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:424

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:425

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:426

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:427

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:428

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:429

▸ **addListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:430

___

### destroy

▸ **destroy**(`error?`): `void`

Calls `destroy()` on the socket that received the `IncomingMessage`. If `error`is provided, an `'error'` event is emitted on the socket and `error` is passed
as an argument to any listeners on the event.

**`since`** v0.3.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` |

#### Returns

`void`

#### Overrides

stream.Readable.destroy

#### Defined in

node_modules/@types/node/http.d.ts:951

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:431

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:432

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:433

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:434

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:435

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:436

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:437

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:438

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

stream.Readable.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:614

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](http.Server.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

stream.Readable.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:471

___

### isPaused

▸ **isPaused**(): `boolean`

The `readable.isPaused()` method returns the current operating state of the`Readable`. This is used primarily by the mechanism that underlies the`readable.pipe()` method. In most
typical cases, there will be no reason to
use this method directly.

```js
const readable = new stream.Readable();

readable.isPaused(); // === false
readable.pause();
readable.isPaused(); // === true
readable.resume();
readable.isPaused(); // === false
```

**`since`** v0.11.14

#### Returns

`boolean`

#### Inherited from

stream.Readable.isPaused

#### Defined in

node_modules/@types/node/stream.d.ts:278

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

stream.Readable.listenerCount

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

stream.Readable.listeners

#### Defined in

node_modules/@types/node/events.d.ts:484

___

### off

▸ **off**(`eventName`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.off

#### Defined in

node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:439

▸ **on**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:440

▸ **on**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:441

▸ **on**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:442

▸ **on**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:443

▸ **on**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:444

▸ **on**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:445

▸ **on**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:446

___

### once

▸ **once**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:447

▸ **once**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:448

▸ **once**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:449

▸ **once**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:450

▸ **once**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:451

▸ **once**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:452

▸ **once**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:453

▸ **once**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:454

___

### pause

▸ **pause**(): [`IncomingMessage`](http.IncomingMessage.md)

The `readable.pause()` method will cause a stream in flowing mode to stop
emitting `'data'` events, switching out of flowing mode. Any data that
becomes available will remain in the internal buffer.

```js
const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  readable.pause();
  console.log('There will be no additional data for 1 second.');
  setTimeout(() => {
    console.log('Now data will start flowing again.');
    readable.resume();
  }, 1000);
});
```

The `readable.pause()` method has no effect if there is a `'readable'`event listener.

**`since`** v0.9.4

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.pause

#### Defined in

node_modules/@types/node/stream.d.ts:242

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `WritableStream`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

stream.Readable.pipe

#### Defined in

node_modules/@types/node/stream.d.ts:24

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:455

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:456

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:457

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:458

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:459

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:460

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:461

▸ **prependListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:462

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:463

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:464

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:465

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:466

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:467

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:468

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:469

▸ **prependOnceListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:470

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.push

#### Defined in

node_modules/@types/node/stream.d.ts:398

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

stream.Readable.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:514

___

### read

▸ **read**(`size?`): `any`

The `readable.read()` method pulls some data out of the internal buffer and
returns it. If no data available to be read, `null` is returned. By default,
the data will be returned as a `Buffer` object unless an encoding has been
specified using the `readable.setEncoding()` method or the stream is operating
in object mode.

The optional `size` argument specifies a specific number of bytes to read. If`size` bytes are not available to be read, `null` will be returned _unless_the stream has ended, in which
case all of the data remaining in the internal
buffer will be returned.

If the `size` argument is not specified, all of the data contained in the
internal buffer will be returned.

The `size` argument must be less than or equal to 1 GiB.

The `readable.read()` method should only be called on `Readable` streams
operating in paused mode. In flowing mode, `readable.read()` is called
automatically until the internal buffer is fully drained.

```js
const readable = getReadableStreamSomehow();

// 'readable' may be triggered multiple times as data is buffered in
readable.on('readable', () => {
  let chunk;
  console.log('Stream is readable (new data received in buffer)');
  // Use a loop to make sure we read all currently available data
  while (null !== (chunk = readable.read())) {
    console.log(`Read ${chunk.length} bytes of data...`);
  }
});

// 'end' will be triggered once when there is no more data available
readable.on('end', () => {
  console.log('Reached end of stream.');
});
```

Each call to `readable.read()` returns a chunk of data, or `null`. The chunks
are not concatenated. A `while` loop is necessary to consume all data
currently in the buffer. When reading a large file `.read()` may return `null`,
having consumed all buffered content so far, but there is still more data to
come not yet buffered. In this case a new `'readable'` event will be emitted
when there is more data in the buffer. Finally the `'end'` event will be
emitted when there is no more data to come.

Therefore to read a file's whole contents from a `readable`, it is necessary
to collect chunks across multiple `'readable'` events:

```js
const chunks = [];

readable.on('readable', () => {
  let chunk;
  while (null !== (chunk = readable.read())) {
    chunks.push(chunk);
  }
});

readable.on('end', () => {
  const content = chunks.join('');
});
```

A `Readable` stream in object mode will always return a single item from
a call to `readable.read(size)`, regardless of the value of the`size` argument.

If the `readable.read()` method returns a chunk of data, a `'data'` event will
also be emitted.

Calling [read](http.IncomingMessage.md#read) after the `'end'` event has
been emitted will return `null`. No runtime error will be raised.

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size?` | `number` | Optional argument to specify how much data to read. |

#### Returns

`any`

#### Inherited from

stream.Readable.read

#### Defined in

node_modules/@types/node/stream.d.ts:195

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`IncomingMessage`](http.IncomingMessage.md)

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

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:455

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:471

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:472

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:473

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:474

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:475

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:476

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:477

▸ **removeListener**(`event`, `listener`): [`IncomingMessage`](http.IncomingMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:478

___

### resume

▸ **resume**(): [`IncomingMessage`](http.IncomingMessage.md)

The `readable.resume()` method causes an explicitly paused `Readable` stream to
resume emitting `'data'` events, switching the stream into flowing mode.

The `readable.resume()` method can be used to fully consume the data from a
stream without actually processing any of that data:

```js
getReadableStreamSomehow()
  .resume()
  .on('end', () => {
    console.log('Reached the end, but did not read anything.');
  });
```

The `readable.resume()` method has no effect if there is a `'readable'`event listener.

**`since`** v0.9.4

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.resume

#### Defined in

node_modules/@types/node/stream.d.ts:261

___

### setEncoding

▸ **setEncoding**(`encoding`): [`IncomingMessage`](http.IncomingMessage.md)

The `readable.setEncoding()` method sets the character encoding for
data read from the `Readable` stream.

By default, no encoding is assigned and stream data will be returned as`Buffer` objects. Setting an encoding causes the stream data
to be returned as strings of the specified encoding rather than as `Buffer`objects. For instance, calling `readable.setEncoding('utf8')` will cause the
output data to be interpreted as UTF-8 data, and passed as strings. Calling`readable.setEncoding('hex')` will cause the data to be encoded in hexadecimal
string format.

The `Readable` stream will properly handle multi-byte characters delivered
through the stream that would otherwise become improperly decoded if simply
pulled from the stream as `Buffer` objects.

```js
const readable = getReadableStreamSomehow();
readable.setEncoding('utf8');
readable.on('data', (chunk) => {
  assert.equal(typeof chunk, 'string');
  console.log('Got %d characters of string data:', chunk.length);
});
```

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The encoding to use. |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.setEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:220

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`IncomingMessage`](http.IncomingMessage.md)

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

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:465

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [`IncomingMessage`](http.IncomingMessage.md)

Calls `message.socket.setTimeout(msecs, callback)`.

**`since`** v0.5.9

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs` | `number` |
| `callback?` | () => `void` |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Defined in

node_modules/@types/node/http.d.ts:884

___

### unpipe

▸ **unpipe**(`destination?`): [`IncomingMessage`](http.IncomingMessage.md)

The `readable.unpipe()` method detaches a `Writable` stream previously attached
using the [pipe](http.OutgoingMessage.md#pipe) method.

If the `destination` is not specified, then _all_ pipes are detached.

If the `destination` is specified, but no pipe is set up for it, then
the method does nothing.

```js
const fs = require('fs');
const readable = getReadableStreamSomehow();
const writable = fs.createWriteStream('file.txt');
// All the data from readable goes into 'file.txt',
// but only for the first second.
readable.pipe(writable);
setTimeout(() => {
  console.log('Stop writing to file.txt.');
  readable.unpipe(writable);
  console.log('Manually close the file stream.');
  writable.end();
}, 1000);
```

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination?` | `WritableStream` | Optional specific stream to unpipe |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.unpipe

#### Defined in

node_modules/@types/node/stream.d.ts:305

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

Passing `chunk` as `null` signals the end of the stream (EOF) and behaves the
same as `readable.push(null)`, after which no more data can be written. The EOF
signal is put at the end of the buffer and any buffered data will still be
flushed.

The `readable.unshift()` method pushes a chunk of data back into the internal
buffer. This is useful in certain situations where a stream is being consumed by
code that needs to "un-consume" some amount of data that it has optimistically
pulled out of the source, so that the data can be passed on to some other party.

The `stream.unshift(chunk)` method cannot be called after the `'end'` event
has been emitted or a runtime error will be thrown.

Developers using `stream.unshift()` often should consider switching to
use of a `Transform` stream instead. See the `API for stream implementers` section for more information.

```js
// Pull off a header delimited by \n\n.
// Use unshift() if we get too much.
// Call the callback with (error, header, stream).
const { StringDecoder } = require('string_decoder');
function parseHeader(stream, callback) {
  stream.on('error', callback);
  stream.on('readable', onReadable);
  const decoder = new StringDecoder('utf8');
  let header = '';
  function onReadable() {
    let chunk;
    while (null !== (chunk = stream.read())) {
      const str = decoder.write(chunk);
      if (str.match(/\n\n/)) {
        // Found the header boundary.
        const split = str.split(/\n\n/);
        header += split.shift();
        const remaining = split.join('\n\n');
        const buf = Buffer.from(remaining, 'utf8');
        stream.removeListener('error', callback);
        // Remove the 'readable' listener before unshifting.
        stream.removeListener('readable', onReadable);
        if (buf.length)
          stream.unshift(buf);
        // Now the body of the message can be read from the stream.
        callback(null, header, stream);
      } else {
        // Still reading the header.
        header += str;
      }
    }
  }
}
```

Unlike [push](http.IncomingMessage.md#push), `stream.unshift(chunk)` will not
end the reading process by resetting the internal reading state of the stream.
This can cause unexpected results if `readable.unshift()` is called during a
read (i.e. from within a [_read](http.IncomingMessage.md#_read) implementation on a
custom stream). Following the call to `readable.unshift()` with an immediate [push](http.IncomingMessage.md#push) will reset the reading state appropriately,
however it is best to simply avoid calling `readable.unshift()` while in the
process of performing a read.

**`since`** v0.9.11

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Chunk of data to unshift onto the read queue. For streams not operating in object mode, `chunk` must be a string, `Buffer`, `Uint8Array` or `null`. For object mode streams, `chunk` may be any JavaScript value. |
| `encoding?` | `BufferEncoding` | Encoding of string chunks. Must be a valid `Buffer` encoding, such as `'utf8'` or `'ascii'`. |

#### Returns

`void`

#### Inherited from

stream.Readable.unshift

#### Defined in

node_modules/@types/node/stream.d.ts:371

___

### wrap

▸ **wrap**(`stream`): [`IncomingMessage`](http.IncomingMessage.md)

Prior to Node.js 0.10, streams did not implement the entire `stream` module API
as it is currently defined. (See `Compatibility` for more information.)

When using an older Node.js library that emits `'data'` events and has a [pause](http.IncomingMessage.md#pause) method that is advisory only, the`readable.wrap()` method can be used to create a `Readable`
stream that uses
the old stream as its data source.

It will rarely be necessary to use `readable.wrap()` but the method has been
provided as a convenience for interacting with older Node.js applications and
libraries.

```js
const { OldReader } = require('./old-api-module.js');
const { Readable } = require('stream');
const oreader = new OldReader();
const myReader = new Readable().wrap(oreader);

myReader.on('readable', () => {
  myReader.read(); // etc.
});
```

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stream` | `ReadableStream` | An "old style" readable stream |

#### Returns

[`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

stream.Readable.wrap

#### Defined in

node_modules/@types/node/stream.d.ts:397

___

### from

▸ `Static` **from**(`iterable`, `options?`): `Readable`

A utility method for creating Readable Streams out of iterators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`any`\> \| `AsyncIterable`<`any`\> |
| `options?` | `ReadableOptions` |

#### Returns

`Readable`

#### Inherited from

stream.Readable.from

#### Defined in

node_modules/@types/node/stream.d.ts:54

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

stream.Readable.getEventListeners

#### Defined in

node_modules/@types/node/events.d.ts:262

___

### isDisturbed

▸ `Static` **isDisturbed**(`stream`): `boolean`

Returns whether the stream has been read from or cancelled.

**`since`** v16.8.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | `Readable` \| `ReadableStream` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.isDisturbed

#### Defined in

node_modules/@types/node/stream.d.ts:59

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

stream.Readable.listenerCount

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

stream.Readable.on

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

stream.Readable.once

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

stream.Readable.once

#### Defined in

node_modules/@types/node/events.d.ts:158
