[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / ServerResponse

# Class: ServerResponse

[http](../modules/http.md).ServerResponse

This object is created internally by an HTTP server, not by the user. It is
passed as the second parameter to the `'request'` event.

**`since`** v0.1.17

## Hierarchy

- [`OutgoingMessage`](http.OutgoingMessage.md)

  ↳ **`ServerResponse`**

## Table of contents

### Constructors

- [constructor](http.ServerResponse.md#constructor)

### Properties

- [chunkedEncoding](http.ServerResponse.md#chunkedencoding)
- [connection](http.ServerResponse.md#connection)
- [destroyed](http.ServerResponse.md#destroyed)
- [finished](http.ServerResponse.md#finished)
- [headersSent](http.ServerResponse.md#headerssent)
- [req](http.ServerResponse.md#req)
- [sendDate](http.ServerResponse.md#senddate)
- [shouldKeepAlive](http.ServerResponse.md#shouldkeepalive)
- [socket](http.ServerResponse.md#socket)
- [statusCode](http.ServerResponse.md#statuscode)
- [statusMessage](http.ServerResponse.md#statusmessage)
- [useChunkedEncodingByDefault](http.ServerResponse.md#usechunkedencodingbydefault)
- [writable](http.ServerResponse.md#writable)
- [writableCorked](http.ServerResponse.md#writablecorked)
- [writableEnded](http.ServerResponse.md#writableended)
- [writableFinished](http.ServerResponse.md#writablefinished)
- [writableHighWaterMark](http.ServerResponse.md#writablehighwatermark)
- [writableLength](http.ServerResponse.md#writablelength)
- [writableObjectMode](http.ServerResponse.md#writableobjectmode)
- [captureRejectionSymbol](http.ServerResponse.md#capturerejectionsymbol)
- [captureRejections](http.ServerResponse.md#capturerejections)
- [defaultMaxListeners](http.ServerResponse.md#defaultmaxlisteners)
- [errorMonitor](http.ServerResponse.md#errormonitor)

### Methods

- [\_construct](http.ServerResponse.md#_construct)
- [\_destroy](http.ServerResponse.md#_destroy)
- [\_final](http.ServerResponse.md#_final)
- [\_write](http.ServerResponse.md#_write)
- [\_writev](http.ServerResponse.md#_writev)
- [addListener](http.ServerResponse.md#addlistener)
- [addTrailers](http.ServerResponse.md#addtrailers)
- [assignSocket](http.ServerResponse.md#assignsocket)
- [cork](http.ServerResponse.md#cork)
- [destroy](http.ServerResponse.md#destroy)
- [detachSocket](http.ServerResponse.md#detachsocket)
- [emit](http.ServerResponse.md#emit)
- [end](http.ServerResponse.md#end)
- [eventNames](http.ServerResponse.md#eventnames)
- [flushHeaders](http.ServerResponse.md#flushheaders)
- [getHeader](http.ServerResponse.md#getheader)
- [getHeaderNames](http.ServerResponse.md#getheadernames)
- [getHeaders](http.ServerResponse.md#getheaders)
- [getMaxListeners](http.ServerResponse.md#getmaxlisteners)
- [hasHeader](http.ServerResponse.md#hasheader)
- [listenerCount](http.ServerResponse.md#listenercount)
- [listeners](http.ServerResponse.md#listeners)
- [off](http.ServerResponse.md#off)
- [on](http.ServerResponse.md#on)
- [once](http.ServerResponse.md#once)
- [pipe](http.ServerResponse.md#pipe)
- [prependListener](http.ServerResponse.md#prependlistener)
- [prependOnceListener](http.ServerResponse.md#prependoncelistener)
- [rawListeners](http.ServerResponse.md#rawlisteners)
- [removeAllListeners](http.ServerResponse.md#removealllisteners)
- [removeHeader](http.ServerResponse.md#removeheader)
- [removeListener](http.ServerResponse.md#removelistener)
- [setDefaultEncoding](http.ServerResponse.md#setdefaultencoding)
- [setHeader](http.ServerResponse.md#setheader)
- [setMaxListeners](http.ServerResponse.md#setmaxlisteners)
- [setTimeout](http.ServerResponse.md#settimeout)
- [uncork](http.ServerResponse.md#uncork)
- [write](http.ServerResponse.md#write)
- [writeContinue](http.ServerResponse.md#writecontinue)
- [writeHead](http.ServerResponse.md#writehead)
- [writeProcessing](http.ServerResponse.md#writeprocessing)
- [getEventListeners](http.ServerResponse.md#geteventlisteners)
- [listenerCount](http.ServerResponse.md#listenercount)
- [on](http.ServerResponse.md#on)
- [once](http.ServerResponse.md#once)

## Constructors

### constructor

• **new ServerResponse**(`req`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`IncomingMessage`](http.IncomingMessage.md) |

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[constructor](http.OutgoingMessage.md#constructor)

#### Defined in

node_modules/@types/node/http.d.ts:493

## Properties

### chunkedEncoding

• **chunkedEncoding**: `boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[chunkedEncoding](http.OutgoingMessage.md#chunkedencoding)

#### Defined in

node_modules/@types/node/http.d.ts:327

___

### connection

• `Readonly` **connection**: ``null`` \| `Socket`

Aliases of `outgoingMessage.socket`

**`since`** v0.3.0

**`deprecated`** Since v15.12.0 - Use `socket` instead.

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[connection](http.OutgoingMessage.md#connection)

#### Defined in

node_modules/@types/node/http.d.ts:345

___

### destroyed

• **destroyed**: `boolean`

Is `true` after `writable.destroy()` has been called.

**`since`** v8.0.0

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[destroyed](http.OutgoingMessage.md#destroyed)

#### Defined in

node_modules/@types/node/stream.d.ts:543

___

### finished

• **finished**: `boolean`

**`deprecated`** Use `writableEnded` instead.

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[finished](http.OutgoingMessage.md#finished)

#### Defined in

node_modules/@types/node/http.d.ts:334

___

### headersSent

• `Readonly` **headersSent**: `boolean`

Read-only. `true` if the headers were sent, otherwise `false`.

**`since`** v0.9.3

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[headersSent](http.OutgoingMessage.md#headerssent)

#### Defined in

node_modules/@types/node/http.d.ts:339

___

### req

• `Readonly` **req**: [`IncomingMessage`](http.IncomingMessage.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[req](http.OutgoingMessage.md#req)

#### Defined in

node_modules/@types/node/http.d.ts:326

___

### sendDate

• **sendDate**: `boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[sendDate](http.OutgoingMessage.md#senddate)

#### Defined in

node_modules/@types/node/http.d.ts:330

___

### shouldKeepAlive

• **shouldKeepAlive**: `boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[shouldKeepAlive](http.OutgoingMessage.md#shouldkeepalive)

#### Defined in

node_modules/@types/node/http.d.ts:328

___

### socket

• `Readonly` **socket**: ``null`` \| `Socket`

Reference to the underlying socket. Usually, users will not want to access
this property.

After calling `outgoingMessage.end()`, this property will be nulled.

**`since`** v0.3.0

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[socket](http.OutgoingMessage.md#socket)

#### Defined in

node_modules/@types/node/http.d.ts:353

___

### statusCode

• **statusCode**: `number`

When using implicit headers (not calling `response.writeHead()` explicitly),
this property controls the status code that will be sent to the client when
the headers get flushed.

```js
response.statusCode = 404;
```

After response header was sent to the client, this property indicates the
status code which was sent out.

**`since`** v0.4.0

#### Defined in

node_modules/@types/node/http.d.ts:477

___

### statusMessage

• **statusMessage**: `string`

When using implicit headers (not calling `response.writeHead()` explicitly),
this property controls the status message that will be sent to the client when
the headers get flushed. If this is left as `undefined` then the standard
message for the status code will be used.

```js
response.statusMessage = 'Not found';
```

After response header was sent to the client, this property indicates the
status message which was sent out.

**`since`** v0.11.8

#### Defined in

node_modules/@types/node/http.d.ts:492

___

### useChunkedEncodingByDefault

• **useChunkedEncodingByDefault**: `boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[useChunkedEncodingByDefault](http.OutgoingMessage.md#usechunkedencodingbydefault)

#### Defined in

node_modules/@types/node/http.d.ts:329

___

### writable

• `Readonly` **writable**: `boolean`

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored or ended.

**`since`** v11.4.0

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[writable](http.OutgoingMessage.md#writable)

#### Defined in

node_modules/@types/node/stream.d.ts:504

___

### writableCorked

• `Readonly` **writableCorked**: `number`

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

**`since`** v13.2.0, v12.16.0

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[writableCorked](http.OutgoingMessage.md#writablecorked)

#### Defined in

node_modules/@types/node/stream.d.ts:538

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

**`since`** v12.9.0

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[writableEnded](http.OutgoingMessage.md#writableended)

#### Defined in

node_modules/@types/node/stream.d.ts:510

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

Is set to `true` immediately before the `'finish'` event is emitted.

**`since`** v12.6.0

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[writableFinished](http.OutgoingMessage.md#writablefinished)

#### Defined in

node_modules/@types/node/stream.d.ts:515

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

Return the value of `highWaterMark` passed when creating this `Writable`.

**`since`** v9.3.0

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[writableHighWaterMark](http.OutgoingMessage.md#writablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:520

___

### writableLength

• `Readonly` **writableLength**: `number`

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

**`since`** v9.4.0

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[writableLength](http.OutgoingMessage.md#writablelength)

#### Defined in

node_modules/@types/node/stream.d.ts:527

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

Getter for the property `objectMode` of a given `Writable` stream.

**`since`** v12.3.0

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[writableObjectMode](http.OutgoingMessage.md#writableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:532

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](http.Server.md#capturerejectionsymbol)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[captureRejectionSymbol](http.OutgoingMessage.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:273

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[captureRejections](http.OutgoingMessage.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:278

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[defaultMaxListeners](http.OutgoingMessage.md#defaultmaxlisteners)

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

[OutgoingMessage](http.OutgoingMessage.md).[errorMonitor](http.OutgoingMessage.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:272

## Methods

### \_construct

▸ `Optional` **_construct**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[_construct](http.OutgoingMessage.md#_construct)

#### Defined in

node_modules/@types/node/stream.d.ts:553

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

[OutgoingMessage](http.OutgoingMessage.md).[_destroy](http.OutgoingMessage.md#_destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:554

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[_final](http.OutgoingMessage.md#_final)

#### Defined in

node_modules/@types/node/stream.d.ts:555

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[_write](http.OutgoingMessage.md#_write)

#### Defined in

node_modules/@types/node/stream.d.ts:545

___

### \_writev

▸ `Optional` **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[_writev](http.OutgoingMessage.md#_writev)

#### Defined in

node_modules/@types/node/stream.d.ts:546

___

### addListener

▸ **addListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:721

▸ **addListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:722

▸ **addListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:723

▸ **addListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:724

▸ **addListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:725

▸ **addListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:726

▸ **addListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:727

___

### addTrailers

▸ **addTrailers**(`headers`): `void`

Adds HTTP trailers (headers but at the end of the message) to the message.

Trailers are **only** be emitted if the message is chunked encoded. If not,
the trailer will be silently discarded.

HTTP requires the `Trailer` header to be sent to emit trailers,
with a list of header fields in its value, e.g.

```js
message.writeHead(200, { 'Content-Type': 'text/plain',
                         'Trailer': 'Content-MD5' });
message.write(fileData);
message.addTrailers({ 'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667' });
message.end();
```

Attempting to set a header field name or value that contains invalid characters
will result in a `TypeError` being thrown.

**`since`** v0.3.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | [`OutgoingHttpHeaders`](../interfaces/http.OutgoingHttpHeaders.md) \| readonly [`string`, `string`][] |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[addTrailers](http.OutgoingMessage.md#addtrailers)

#### Defined in

node_modules/@types/node/http.d.ts:443

___

### assignSocket

▸ **assignSocket**(`socket`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:494

___

### cork

▸ **cork**(): `void`

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](http.OutgoingMessage.md#uncork) or [end](http.OutgoingMessage.md#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()`buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing`writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

**`since`** v0.11.2

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[cork](http.OutgoingMessage.md#cork)

#### Defined in

node_modules/@types/node/stream.d.ts:659

___

### destroy

▸ **destroy**(`error?`): `void`

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'`event (unless `emitClose` is set to `false`). After this call, the writable
stream has ended and subsequent calls to `write()` or `end()` will result in
an `ERR_STREAM_DESTROYED` error.
This is a destructive and immediate way to destroy a stream. Previous calls to`write()` may not have drained, and may trigger an `ERR_STREAM_DESTROYED` error.
Use `end()` instead of destroy if data should flush before close, or wait for
the `'drain'` event before destroying the stream.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method,
but instead implement `writable._destroy()`.

**`since`** v8.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | `Error` | Optional, an error to emit with `'error'` event. |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[destroy](http.OutgoingMessage.md#destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:710

___

### detachSocket

▸ **detachSocket**(`socket`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:495

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

[OutgoingMessage](http.OutgoingMessage.md).[emit](http.OutgoingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:728

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[emit](http.OutgoingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:729

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[emit](http.OutgoingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:730

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[emit](http.OutgoingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:731

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[emit](http.OutgoingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:732

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[emit](http.OutgoingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:733

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[emit](http.OutgoingMessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:734

___

### end

▸ **end**(`cb?`): `void`

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](http.OutgoingMessage.md#write) method after calling [end](http.OutgoingMessage.md#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

**`since`** v0.9.4

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[end](http.OutgoingMessage.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:642

▸ **end**(`chunk`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[end](http.OutgoingMessage.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:643

▸ **end**(`chunk`, `encoding`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[end](http.OutgoingMessage.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:644

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

[OutgoingMessage](http.OutgoingMessage.md).[eventNames](http.OutgoingMessage.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:614

___

### flushHeaders

▸ **flushHeaders**(): `void`

Compulsorily flushes the message headers

For efficiency reason, Node.js normally buffers the message headers
until `outgoingMessage.end()` is called or the first chunk of message data
is written. It then tries to pack the headers and data into a single TCP
packet.

It is usually desired (it saves a TCP round-trip), but not when the first
data is not sent until possibly much later. `outgoingMessage.flushHeaders()`bypasses the optimization and kickstarts the request.

**`since`** v1.6.0

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[flushHeaders](http.OutgoingMessage.md#flushheaders)

#### Defined in

node_modules/@types/node/http.d.ts:456

___

### getHeader

▸ **getHeader**(`name`): `undefined` \| `string` \| `number` \| `string`[]

Gets the value of HTTP header with the given name. If such a name doesn't
exist in message, it will be `undefined`.

**`since`** v0.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of header |

#### Returns

`undefined` \| `string` \| `number` \| `string`[]

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[getHeader](http.OutgoingMessage.md#getheader)

#### Defined in

node_modules/@types/node/http.d.ts:374

___

### getHeaderNames

▸ **getHeaderNames**(): `string`[]

Returns an array of names of headers of the outgoing outgoingMessage. All
names are lowercase.

**`since`** v8.0.0

#### Returns

`string`[]

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[getHeaderNames](http.OutgoingMessage.md#getheadernames)

#### Defined in

node_modules/@types/node/http.d.ts:402

___

### getHeaders

▸ **getHeaders**(): [`OutgoingHttpHeaders`](../interfaces/http.OutgoingHttpHeaders.md)

Returns a shallow copy of the current outgoing headers. Since a shallow
copy is used, array values may be mutated without additional calls to
various header-related HTTP module methods. The keys of the returned
object are the header names and the values are the respective header
values. All header names are lowercase.

The object returned by the `outgoingMessage.getHeaders()` method does
not prototypically inherit from the JavaScript Object. This means that
typical Object methods such as `obj.toString()`, `obj.hasOwnProperty()`,
and others are not defined and will not work.

```js
outgoingMessage.setHeader('Foo', 'bar');
outgoingMessage.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headers = outgoingMessage.getHeaders();
// headers === { foo: 'bar', 'set-cookie': ['foo=bar', 'bar=baz'] }
```

**`since`** v8.0.0

#### Returns

[`OutgoingHttpHeaders`](../interfaces/http.OutgoingHttpHeaders.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[getHeaders](http.OutgoingMessage.md#getheaders)

#### Defined in

node_modules/@types/node/http.d.ts:396

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](http.Server.md#defaultmaxlisteners).

**`since`** v1.0.0

#### Returns

`number`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[getMaxListeners](http.OutgoingMessage.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:471

___

### hasHeader

▸ **hasHeader**(`name`): `boolean`

Returns `true` if the header identified by `name` is currently set in the
outgoing headers. The header name is case-insensitive.

```js
const hasContentType = outgoingMessage.hasHeader('content-type');
```

**`since`** v8.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[hasHeader](http.OutgoingMessage.md#hasheader)

#### Defined in

node_modules/@types/node/http.d.ts:412

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

[OutgoingMessage](http.OutgoingMessage.md).[listenerCount](http.OutgoingMessage.md#listenercount)

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

[OutgoingMessage](http.OutgoingMessage.md).[listeners](http.OutgoingMessage.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:484

___

### off

▸ **off**(`eventName`, `listener`): [`ServerResponse`](http.ServerResponse.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[off](http.OutgoingMessage.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:735

▸ **on**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:736

▸ **on**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:737

▸ **on**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:738

▸ **on**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:739

▸ **on**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:740

▸ **on**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:741

___

### once

▸ **once**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:742

▸ **once**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:743

▸ **once**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:744

▸ **once**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:745

▸ **once**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:746

▸ **once**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:747

▸ **once**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:748

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

[OutgoingMessage](http.OutgoingMessage.md).[pipe](http.OutgoingMessage.md#pipe)

#### Defined in

node_modules/@types/node/stream.d.ts:24

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:749

▸ **prependListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:750

▸ **prependListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:751

▸ **prependListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:752

▸ **prependListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:753

▸ **prependListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:754

▸ **prependListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:755

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:756

▸ **prependOnceListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:757

▸ **prependOnceListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:758

▸ **prependOnceListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:759

▸ **prependOnceListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:760

▸ **prependOnceListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:761

▸ **prependOnceListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:762

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

[OutgoingMessage](http.OutgoingMessage.md).[rawListeners](http.OutgoingMessage.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:514

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ServerResponse`](http.ServerResponse.md)

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

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeAllListeners](http.OutgoingMessage.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:455

___

### removeHeader

▸ **removeHeader**(`name`): `void`

Removes a header that is queued for implicit sending.

```js
outgoingMessage.removeHeader('Content-Encoding');
```

**`since`** v0.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeHeader](http.OutgoingMessage.md#removeheader)

#### Defined in

node_modules/@types/node/http.d.ts:421

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:763

▸ **removeListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:764

▸ **removeListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:765

▸ **removeListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:766

▸ **removeListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:767

▸ **removeListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:768

▸ **removeListener**(`event`, `listener`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:769

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`ServerResponse`](http.ServerResponse.md)

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The new default encoding |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[setDefaultEncoding](http.OutgoingMessage.md#setdefaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:619

___

### setHeader

▸ **setHeader**(`name`, `value`): [`ServerResponse`](http.ServerResponse.md)

Sets a single header value for the header object.

**`since`** v0.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Header name |
| `value` | `string` \| `number` \| readonly `string`[] | Header value |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[setHeader](http.OutgoingMessage.md#setheader)

#### Defined in

node_modules/@types/node/http.d.ts:367

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ServerResponse`](http.ServerResponse.md)

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

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[setMaxListeners](http.OutgoingMessage.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:465

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [`ServerResponse`](http.ServerResponse.md)

Once a socket is associated with the message and is connected,`socket.setTimeout()` will be called with `msecs` as the first parameter.

**`since`** v0.9.12

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `msecs` | `number` | - |
| `callback?` | () => `void` | Optional function to be called when a timeout occurs. Same as binding to the `timeout` event. |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[setTimeout](http.OutgoingMessage.md#settimeout)

#### Defined in

node_modules/@types/node/http.d.ts:360

___

### uncork

▸ **uncork**(): `void`

The `writable.uncork()` method flushes all data buffered since [cork](http.OutgoingMessage.md#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, it is recommended that calls to `writable.uncork()` be
deferred using `process.nextTick()`. Doing so allows batching of all`writable.write()` calls that occur within a given Node.js event loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

**`since`** v0.11.2

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[uncork](http.OutgoingMessage.md#uncork)

#### Defined in

node_modules/@types/node/stream.d.ts:693

___

### write

▸ **write**(`chunk`, `callback?`): `boolean`

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the`highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
It is recommended that once `write()` returns false, no more chunks be written
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](http.OutgoingMessage.md#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

**`since`** v0.9.4

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `chunk` | `any` | Optional data to write. For streams not operating in object mode, `chunk` must be a string, `Buffer` or `Uint8Array`. For object mode streams, `chunk` may be any JavaScript value other than `null`. |
| `callback?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` | Callback for when this chunk of data is flushed. |

#### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[write](http.OutgoingMessage.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:612

▸ **write**(`chunk`, `encoding`, `callback?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[write](http.OutgoingMessage.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:613

___

### writeContinue

▸ **writeContinue**(`callback?`): `void`

Sends a HTTP/1.1 100 Continue message to the client, indicating that
the request body should be sent. See the `'checkContinue'` event on`Server`.

**`since`** v0.3.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:501

___

### writeHead

▸ **writeHead**(`statusCode`, `statusMessage?`, `headers?`): [`ServerResponse`](http.ServerResponse.md)

Sends a response header to the request. The status code is a 3-digit HTTP
status code, like `404`. The last argument, `headers`, are the response headers.
Optionally one can give a human-readable `statusMessage` as the second
argument.

`headers` may be an `Array` where the keys and values are in the same list.
It is _not_ a list of tuples. So, the even-numbered offsets are key values,
and the odd-numbered offsets are the associated values. The array is in the same
format as `request.rawHeaders`.

Returns a reference to the `ServerResponse`, so that calls can be chained.

```js
const body = 'hello world';
response
  .writeHead(200, {
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);
```

This method must only be called once on a message and it must
be called before `response.end()` is called.

If `response.write()` or `response.end()` are called before calling
this, the implicit/mutable headers will be calculated and call this function.

When headers have been set with `response.setHeader()`, they will be merged
with any headers passed to `response.writeHead()`, with the headers passed
to `response.writeHead()` given precedence.

If this method is called and `response.setHeader()` has not been called,
it will directly write the supplied header values onto the network channel
without caching internally, and the `response.getHeader()` on the header
will not yield the expected result. If progressive population of headers is
desired with potential future retrieval and modification, use `response.setHeader()` instead.

```js
// Returns content-type = text/plain
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('ok');
});
```

`Content-Length` is given in bytes, not characters. Use `Buffer.byteLength()` to determine the length of the body in bytes. Node.js
does not check whether `Content-Length` and the length of the body which has
been transmitted are equal or not.

Attempting to set a header field name or value that contains invalid characters
will result in a `TypeError` being thrown.

**`since`** v0.1.30

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `statusMessage?` | `string` |
| `headers?` | [`OutgoingHttpHeaders`](../interfaces/http.OutgoingHttpHeaders.md) \| [`OutgoingHttpHeader`](../modules/http.md#outgoinghttpheader)[] |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Defined in

node_modules/@types/node/http.d.ts:559

▸ **writeHead**(`statusCode`, `headers?`): [`ServerResponse`](http.ServerResponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `headers?` | [`OutgoingHttpHeaders`](../interfaces/http.OutgoingHttpHeaders.md) \| [`OutgoingHttpHeader`](../modules/http.md#outgoinghttpheader)[] |

#### Returns

[`ServerResponse`](http.ServerResponse.md)

#### Defined in

node_modules/@types/node/http.d.ts:560

___

### writeProcessing

▸ **writeProcessing**(): `void`

Sends a HTTP/1.1 102 Processing message to the client, indicating that
the request body should be sent.

**`since`** v10.0.0

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:566

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

[OutgoingMessage](http.OutgoingMessage.md).[getEventListeners](http.OutgoingMessage.md#geteventlisteners)

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

[OutgoingMessage](http.OutgoingMessage.md).[listenerCount](http.OutgoingMessage.md#listenercount)

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

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

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

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

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

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:158
