[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / ClientRequest

# Class: ClientRequest

[http](../modules/http.md).ClientRequest

This object is created internally and returned from {@link request}. It
represents an _in-progress_ request whose header has already been queued. The
header is still mutable using the `setHeader(name, value)`,`getHeader(name)`, `removeHeader(name)` API. The actual header will
be sent along with the first data chunk or when calling `request.end()`.

To get the response, add a listener for `'response'` to the request object.`'response'` will be emitted from the request object when the response
headers have been received. The `'response'` event is executed with one
argument which is an instance of [IncomingMessage](../interfaces/http.ServerOptions.md#incomingmessage).

During the `'response'` event, one can add listeners to the
response object; particularly to listen for the `'data'` event.

If no `'response'` handler is added, then the response will be
entirely discarded. However, if a `'response'` event handler is added,
then the data from the response object **must** be consumed, either by
calling `response.read()` whenever there is a `'readable'` event, or
by adding a `'data'` handler, or by calling the `.resume()` method.
Until the data is consumed, the `'end'` event will not fire. Also, until
the data is read it will consume memory that can eventually lead to a
'process out of memory' error.

For backward compatibility, `res` will only emit `'error'` if there is an`'error'` listener registered.

Node.js does not check whether Content-Length and the length of the
body which has been transmitted are equal or not.

**`since`** v0.1.17

## Hierarchy

- [`OutgoingMessage`](http.OutgoingMessage.md)

  ↳ **`ClientRequest`**

## Table of contents

### Constructors

- [constructor](http.ClientRequest.md#constructor)

### Properties

- [aborted](http.ClientRequest.md#aborted)
- [chunkedEncoding](http.ClientRequest.md#chunkedencoding)
- [connection](http.ClientRequest.md#connection)
- [destroyed](http.ClientRequest.md#destroyed)
- [finished](http.ClientRequest.md#finished)
- [headersSent](http.ClientRequest.md#headerssent)
- [host](http.ClientRequest.md#host)
- [method](http.ClientRequest.md#method)
- [path](http.ClientRequest.md#path)
- [protocol](http.ClientRequest.md#protocol)
- [req](http.ClientRequest.md#req)
- [sendDate](http.ClientRequest.md#senddate)
- [shouldKeepAlive](http.ClientRequest.md#shouldkeepalive)
- [socket](http.ClientRequest.md#socket)
- [useChunkedEncodingByDefault](http.ClientRequest.md#usechunkedencodingbydefault)
- [writable](http.ClientRequest.md#writable)
- [writableCorked](http.ClientRequest.md#writablecorked)
- [writableEnded](http.ClientRequest.md#writableended)
- [writableFinished](http.ClientRequest.md#writablefinished)
- [writableHighWaterMark](http.ClientRequest.md#writablehighwatermark)
- [writableLength](http.ClientRequest.md#writablelength)
- [writableObjectMode](http.ClientRequest.md#writableobjectmode)
- [captureRejectionSymbol](http.ClientRequest.md#capturerejectionsymbol)
- [captureRejections](http.ClientRequest.md#capturerejections)
- [defaultMaxListeners](http.ClientRequest.md#defaultmaxlisteners)
- [errorMonitor](http.ClientRequest.md#errormonitor)

### Methods

- [\_construct](http.ClientRequest.md#_construct)
- [\_destroy](http.ClientRequest.md#_destroy)
- [\_final](http.ClientRequest.md#_final)
- [\_write](http.ClientRequest.md#_write)
- [\_writev](http.ClientRequest.md#_writev)
- [abort](http.ClientRequest.md#abort)
- [addListener](http.ClientRequest.md#addlistener)
- [addTrailers](http.ClientRequest.md#addtrailers)
- [cork](http.ClientRequest.md#cork)
- [destroy](http.ClientRequest.md#destroy)
- [emit](http.ClientRequest.md#emit)
- [end](http.ClientRequest.md#end)
- [eventNames](http.ClientRequest.md#eventnames)
- [flushHeaders](http.ClientRequest.md#flushheaders)
- [getHeader](http.ClientRequest.md#getheader)
- [getHeaderNames](http.ClientRequest.md#getheadernames)
- [getHeaders](http.ClientRequest.md#getheaders)
- [getMaxListeners](http.ClientRequest.md#getmaxlisteners)
- [getRawHeaderNames](http.ClientRequest.md#getrawheadernames)
- [hasHeader](http.ClientRequest.md#hasheader)
- [listenerCount](http.ClientRequest.md#listenercount)
- [listeners](http.ClientRequest.md#listeners)
- [off](http.ClientRequest.md#off)
- [on](http.ClientRequest.md#on)
- [onSocket](http.ClientRequest.md#onsocket)
- [once](http.ClientRequest.md#once)
- [pipe](http.ClientRequest.md#pipe)
- [prependListener](http.ClientRequest.md#prependlistener)
- [prependOnceListener](http.ClientRequest.md#prependoncelistener)
- [rawListeners](http.ClientRequest.md#rawlisteners)
- [removeAllListeners](http.ClientRequest.md#removealllisteners)
- [removeHeader](http.ClientRequest.md#removeheader)
- [removeListener](http.ClientRequest.md#removelistener)
- [setDefaultEncoding](http.ClientRequest.md#setdefaultencoding)
- [setHeader](http.ClientRequest.md#setheader)
- [setMaxListeners](http.ClientRequest.md#setmaxlisteners)
- [setNoDelay](http.ClientRequest.md#setnodelay)
- [setSocketKeepAlive](http.ClientRequest.md#setsocketkeepalive)
- [setTimeout](http.ClientRequest.md#settimeout)
- [uncork](http.ClientRequest.md#uncork)
- [write](http.ClientRequest.md#write)
- [getEventListeners](http.ClientRequest.md#geteventlisteners)
- [listenerCount](http.ClientRequest.md#listenercount)
- [on](http.ClientRequest.md#on)
- [once](http.ClientRequest.md#once)

## Constructors

### constructor

• **new ClientRequest**(`url`, `cb?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [`ClientRequestArgs`](../interfaces/http.ClientRequestArgs.md) \| `URL` |
| `cb?` | (`res`: [`IncomingMessage`](http.IncomingMessage.md)) => `void` |

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[constructor](http.OutgoingMessage.md#constructor)

#### Defined in

node_modules/@types/node/http.d.ts:622

## Properties

### aborted

• **aborted**: `boolean`

The `request.aborted` property will be `true` if the request has
been aborted.

**`since`** v0.11.14

#### Defined in

node_modules/@types/node/http.d.ts:611

___

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

### host

• **host**: `string`

The request host.

**`since`** v14.5.0, v12.19.0

#### Defined in

node_modules/@types/node/http.d.ts:616

___

### method

• **method**: `string`

The request method.

**`since`** v0.1.97

#### Defined in

node_modules/@types/node/http.d.ts:627

___

### path

• **path**: `string`

The request path.

**`since`** v0.4.0

#### Defined in

node_modules/@types/node/http.d.ts:632

___

### protocol

• **protocol**: `string`

The request protocol.

**`since`** v14.5.0, v12.19.0

#### Defined in

node_modules/@types/node/http.d.ts:621

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

### abort

▸ **abort**(): `void`

Marks the request as aborting. Calling this will cause remaining data
in the response to be dropped and the socket to be destroyed.

**`since`** v0.3.8

**`deprecated`** Since v14.1.0,v13.14.0 - Use `destroy` instead.

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:639

___

### addListener

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

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
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:672

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:673

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:674

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](../interfaces/http.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:675

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:676

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:677

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[addListener](http.OutgoingMessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:678

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:679

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:680

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:681

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:682

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:683

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:684

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:685

▸ **addListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:686

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

### getRawHeaderNames

▸ **getRawHeaderNames**(): `string`[]

Returns an array containing the unique names of the current outgoing raw
headers. Header names are returned with their exact casing being set.

```js
request.setHeader('Foo', 'bar');
request.setHeader('Set-Cookie', ['foo=bar', 'bar=baz']);

const headerNames = request.getRawHeaderNames();
// headerNames === ['Foo', 'Set-Cookie']
```

**`since`** v15.13.0

#### Returns

`string`[]

#### Defined in

node_modules/@types/node/http.d.ts:671

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

▸ **off**(`eventName`, `listener`): [`ClientRequest`](http.ClientRequest.md)

Alias for `emitter.removeListener()`.

**`since`** v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[off](http.OutgoingMessage.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:444

___

### on

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:687

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:688

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:689

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](../interfaces/http.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:690

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:691

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:692

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[on](http.OutgoingMessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:693

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:694

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:695

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:696

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:697

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:698

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:699

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:700

▸ **on**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:701

___

### onSocket

▸ **onSocket**(`socket`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | `Socket` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:640

___

### once

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:702

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:703

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:704

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](../interfaces/http.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:705

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:706

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:707

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[once](http.OutgoingMessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:708

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:709

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:710

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:711

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:712

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:713

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:714

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:715

▸ **once**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:716

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

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:717

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:718

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:719

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](../interfaces/http.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:720

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:721

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:722

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependListener](http.OutgoingMessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:723

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:724

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:725

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:726

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:727

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:728

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:729

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:730

▸ **prependListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:731

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:732

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:733

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:734

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [`InformationEvent`](../interfaces/http.InformationEvent.md)) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:735

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md)) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:736

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:737

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[prependOnceListener](http.OutgoingMessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:738

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [`IncomingMessage`](http.IncomingMessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:739

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:740

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:741

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:742

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:743

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:744

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:745

▸ **prependOnceListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:746

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

▸ **removeAllListeners**(`event?`): [`ClientRequest`](http.ClientRequest.md)

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

[`ClientRequest`](http.ClientRequest.md)

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

▸ **removeListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:763

▸ **removeListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:764

▸ **removeListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:765

▸ **removeListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:766

▸ **removeListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:767

▸ **removeListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:768

▸ **removeListener**(`event`, `listener`): [`ClientRequest`](http.ClientRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[removeListener](http.OutgoingMessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:769

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`ClientRequest`](http.ClientRequest.md)

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

**`since`** v0.11.15

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encoding` | `BufferEncoding` | The new default encoding |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[setDefaultEncoding](http.OutgoingMessage.md#setdefaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:619

___

### setHeader

▸ **setHeader**(`name`, `value`): [`ClientRequest`](http.ClientRequest.md)

Sets a single header value for the header object.

**`since`** v0.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Header name |
| `value` | `string` \| `number` \| readonly `string`[] | Header value |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[setHeader](http.OutgoingMessage.md#setheader)

#### Defined in

node_modules/@types/node/http.d.ts:367

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ClientRequest`](http.ClientRequest.md)

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

[`ClientRequest`](http.ClientRequest.md)

#### Inherited from

[OutgoingMessage](http.OutgoingMessage.md).[setMaxListeners](http.OutgoingMessage.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:465

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`): `void`

Once a socket is assigned to this request and is connected `socket.setNoDelay()` will be called.

**`since`** v0.5.9

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:652

___

### setSocketKeepAlive

▸ **setSocketKeepAlive**(`enable?`, `initialDelay?`): `void`

Once a socket is assigned to this request and is connected `socket.setKeepAlive()` will be called.

**`since`** v0.5.9

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `initialDelay?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:657

___

### setTimeout

▸ **setTimeout**(`timeout`, `callback?`): [`ClientRequest`](http.ClientRequest.md)

Once a socket is assigned to this request and is connected `socket.setTimeout()` will be called.

**`since`** v0.5.9

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` | Milliseconds before a request times out. |
| `callback?` | () => `void` | Optional function to be called when a timeout occurs. Same as binding to the `'timeout'` event. |

#### Returns

[`ClientRequest`](http.ClientRequest.md)

#### Overrides

[OutgoingMessage](http.OutgoingMessage.md).[setTimeout](http.OutgoingMessage.md#settimeout)

#### Defined in

node_modules/@types/node/http.d.ts:647

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
