[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / ServerResponse

# Class: ServerResponse

[http](../modules/http.md).ServerResponse

## Hierarchy

- [OutgoingMessage](http.outgoingmessage.md)

  ↳ **ServerResponse**

## Table of contents

### Constructors

- [constructor](http.serverresponse.md#constructor)

### Properties

- [chunkedEncoding](http.serverresponse.md#chunkedencoding)
- [connection](http.serverresponse.md#connection)
- [destroyed](http.serverresponse.md#destroyed)
- [finished](http.serverresponse.md#finished)
- [headersSent](http.serverresponse.md#headerssent)
- [req](http.serverresponse.md#req)
- [sendDate](http.serverresponse.md#senddate)
- [shouldKeepAlive](http.serverresponse.md#shouldkeepalive)
- [socket](http.serverresponse.md#socket)
- [statusCode](http.serverresponse.md#statuscode)
- [statusMessage](http.serverresponse.md#statusmessage)
- [useChunkedEncodingByDefault](http.serverresponse.md#usechunkedencodingbydefault)
- [writable](http.serverresponse.md#writable)
- [writableCorked](http.serverresponse.md#writablecorked)
- [writableEnded](http.serverresponse.md#writableended)
- [writableFinished](http.serverresponse.md#writablefinished)
- [writableHighWaterMark](http.serverresponse.md#writablehighwatermark)
- [writableLength](http.serverresponse.md#writablelength)
- [writableObjectMode](http.serverresponse.md#writableobjectmode)
- [captureRejectionSymbol](http.serverresponse.md#capturerejectionsymbol)
- [captureRejections](http.serverresponse.md#capturerejections)
- [defaultMaxListeners](http.serverresponse.md#defaultmaxlisteners)
- [errorMonitor](http.serverresponse.md#errormonitor)

### Methods

- [\_construct](http.serverresponse.md#_construct)
- [\_destroy](http.serverresponse.md#_destroy)
- [\_final](http.serverresponse.md#_final)
- [\_write](http.serverresponse.md#_write)
- [\_writev](http.serverresponse.md#_writev)
- [addListener](http.serverresponse.md#addlistener)
- [addTrailers](http.serverresponse.md#addtrailers)
- [assignSocket](http.serverresponse.md#assignsocket)
- [cork](http.serverresponse.md#cork)
- [destroy](http.serverresponse.md#destroy)
- [detachSocket](http.serverresponse.md#detachsocket)
- [emit](http.serverresponse.md#emit)
- [end](http.serverresponse.md#end)
- [eventNames](http.serverresponse.md#eventnames)
- [flushHeaders](http.serverresponse.md#flushheaders)
- [getHeader](http.serverresponse.md#getheader)
- [getHeaderNames](http.serverresponse.md#getheadernames)
- [getHeaders](http.serverresponse.md#getheaders)
- [getMaxListeners](http.serverresponse.md#getmaxlisteners)
- [hasHeader](http.serverresponse.md#hasheader)
- [listenerCount](http.serverresponse.md#listenercount)
- [listeners](http.serverresponse.md#listeners)
- [off](http.serverresponse.md#off)
- [on](http.serverresponse.md#on)
- [once](http.serverresponse.md#once)
- [pipe](http.serverresponse.md#pipe)
- [prependListener](http.serverresponse.md#prependlistener)
- [prependOnceListener](http.serverresponse.md#prependoncelistener)
- [rawListeners](http.serverresponse.md#rawlisteners)
- [removeAllListeners](http.serverresponse.md#removealllisteners)
- [removeHeader](http.serverresponse.md#removeheader)
- [removeListener](http.serverresponse.md#removelistener)
- [setDefaultEncoding](http.serverresponse.md#setdefaultencoding)
- [setHeader](http.serverresponse.md#setheader)
- [setMaxListeners](http.serverresponse.md#setmaxlisteners)
- [setTimeout](http.serverresponse.md#settimeout)
- [uncork](http.serverresponse.md#uncork)
- [write](http.serverresponse.md#write)
- [writeContinue](http.serverresponse.md#writecontinue)
- [writeHead](http.serverresponse.md#writehead)
- [writeProcessing](http.serverresponse.md#writeprocessing)
- [getEventListener](http.serverresponse.md#geteventlistener)
- [listenerCount](http.serverresponse.md#listenercount)
- [on](http.serverresponse.md#on)
- [once](http.serverresponse.md#once)

## Constructors

### constructor

• **new ServerResponse**(`req`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [IncomingMessage](http.incomingmessage.md) |

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[constructor](http.outgoingmessage.md#constructor)

#### Defined in

node_modules/@types/node/http.d.ts:192

## Properties

### chunkedEncoding

• **chunkedEncoding**: `boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[chunkedEncoding](http.outgoingmessage.md#chunkedencoding)

#### Defined in

node_modules/@types/node/http.d.ts:161

___

### connection

• `Readonly` **connection**: ``null`` \| `Socket`

**`deprecated`** Use `socket` instead.

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[connection](http.outgoingmessage.md#connection)

#### Defined in

node_modules/@types/node/http.d.ts:173

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[destroyed](http.outgoingmessage.md#destroyed)

#### Defined in

node_modules/@types/node/stream.d.ts:150

___

### finished

• **finished**: `boolean`

**`deprecated`** Use `writableEnded` instead.

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[finished](http.outgoingmessage.md#finished)

#### Defined in

node_modules/@types/node/http.d.ts:168

___

### headersSent

• `Readonly` **headersSent**: `boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[headersSent](http.outgoingmessage.md#headerssent)

#### Defined in

node_modules/@types/node/http.d.ts:169

___

### req

• `Readonly` **req**: [IncomingMessage](http.incomingmessage.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[req](http.outgoingmessage.md#req)

#### Defined in

node_modules/@types/node/http.d.ts:159

___

### sendDate

• **sendDate**: `boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[sendDate](http.outgoingmessage.md#senddate)

#### Defined in

node_modules/@types/node/http.d.ts:164

___

### shouldKeepAlive

• **shouldKeepAlive**: `boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[shouldKeepAlive](http.outgoingmessage.md#shouldkeepalive)

#### Defined in

node_modules/@types/node/http.d.ts:162

___

### socket

• `Readonly` **socket**: ``null`` \| `Socket`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[socket](http.outgoingmessage.md#socket)

#### Defined in

node_modules/@types/node/http.d.ts:174

___

### statusCode

• **statusCode**: `number`

#### Defined in

node_modules/@types/node/http.d.ts:191

___

### statusMessage

• **statusMessage**: `string`

#### Defined in

node_modules/@types/node/http.d.ts:192

___

### useChunkedEncodingByDefault

• **useChunkedEncodingByDefault**: `boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[useChunkedEncodingByDefault](http.outgoingmessage.md#usechunkedencodingbydefault)

#### Defined in

node_modules/@types/node/http.d.ts:163

___

### writable

• `Readonly` **writable**: `boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[writable](http.outgoingmessage.md#writable)

#### Defined in

node_modules/@types/node/stream.d.ts:143

___

### writableCorked

• `Readonly` **writableCorked**: `number`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[writableCorked](http.outgoingmessage.md#writablecorked)

#### Defined in

node_modules/@types/node/stream.d.ts:149

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[writableEnded](http.outgoingmessage.md#writableended)

#### Defined in

node_modules/@types/node/stream.d.ts:144

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[writableFinished](http.outgoingmessage.md#writablefinished)

#### Defined in

node_modules/@types/node/stream.d.ts:145

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[writableHighWaterMark](http.outgoingmessage.md#writablehighwatermark)

#### Defined in

node_modules/@types/node/stream.d.ts:146

___

### writableLength

• `Readonly` **writableLength**: `number`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[writableLength](http.outgoingmessage.md#writablelength)

#### Defined in

node_modules/@types/node/stream.d.ts:147

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[writableObjectMode](http.outgoingmessage.md#writableobjectmode)

#### Defined in

node_modules/@types/node/stream.d.ts:148

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [captureRejectionSymbol](http.server.md#capturerejectionsymbol)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[captureRejectionSymbol](http.outgoingmessage.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/events.d.ts:46

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[captureRejections](http.outgoingmessage.md#capturerejections)

#### Defined in

node_modules/@types/node/events.d.ts:52

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[defaultMaxListeners](http.outgoingmessage.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:53

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [errorMonitor](http.server.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[errorMonitor](http.outgoingmessage.md#errormonitor)

#### Defined in

node_modules/@types/node/events.d.ts:45

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

[OutgoingMessage](http.outgoingmessage.md).[_construct](http.outgoingmessage.md#_construct)

#### Defined in

node_modules/@types/node/stream.d.ts:154

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

[OutgoingMessage](http.outgoingmessage.md).[_destroy](http.outgoingmessage.md#_destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:155

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

[OutgoingMessage](http.outgoingmessage.md).[_final](http.outgoingmessage.md#_final)

#### Defined in

node_modules/@types/node/stream.d.ts:156

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

[OutgoingMessage](http.outgoingmessage.md).[_write](http.outgoingmessage.md#_write)

#### Defined in

node_modules/@types/node/stream.d.ts:152

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

[OutgoingMessage](http.outgoingmessage.md).[_writev](http.outgoingmessage.md#_writev)

#### Defined in

node_modules/@types/node/stream.d.ts:153

___

### addListener

▸ **addListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

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

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:177

▸ **addListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:178

▸ **addListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:179

▸ **addListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:180

▸ **addListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:181

▸ **addListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:182

▸ **addListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:183

___

### addTrailers

▸ **addTrailers**(`headers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | [OutgoingHttpHeaders](../interfaces/http.outgoinghttpheaders.md) \| readonly [`string`, `string`][] |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[addTrailers](http.outgoingmessage.md#addtrailers)

#### Defined in

node_modules/@types/node/http.d.ts:185

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

node_modules/@types/node/http.d.ts:196

___

### cork

▸ **cork**(): `void`

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[cork](http.outgoingmessage.md#cork)

#### Defined in

node_modules/@types/node/stream.d.ts:163

___

### destroy

▸ **destroy**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[destroy](http.outgoingmessage.md#destroy)

#### Defined in

node_modules/@types/node/stream.d.ts:165

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

node_modules/@types/node/http.d.ts:197

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

[OutgoingMessage](http.outgoingmessage.md).[emit](http.outgoingmessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:185

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[emit](http.outgoingmessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:186

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[emit](http.outgoingmessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:187

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[emit](http.outgoingmessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:188

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[emit](http.outgoingmessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:189

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[emit](http.outgoingmessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:190

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[emit](http.outgoingmessage.md#emit)

#### Defined in

node_modules/@types/node/stream.d.ts:191

___

### end

▸ **end**(`cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[end](http.outgoingmessage.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:160

▸ **end**(`chunk`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[end](http.outgoingmessage.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:161

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

[OutgoingMessage](http.outgoingmessage.md).[end](http.outgoingmessage.md#end)

#### Defined in

node_modules/@types/node/stream.d.ts:162

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[eventNames](http.outgoingmessage.md#eventnames)

#### Defined in

node_modules/@types/node/events.d.ts:87

___

### flushHeaders

▸ **flushHeaders**(): `void`

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[flushHeaders](http.outgoingmessage.md#flushheaders)

#### Defined in

node_modules/@types/node/http.d.ts:186

___

### getHeader

▸ **getHeader**(`name`): `undefined` \| `string` \| `number` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `string` \| `number` \| `string`[]

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[getHeader](http.outgoingmessage.md#getheader)

#### Defined in

node_modules/@types/node/http.d.ts:180

___

### getHeaderNames

▸ **getHeaderNames**(): `string`[]

#### Returns

`string`[]

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[getHeaderNames](http.outgoingmessage.md#getheadernames)

#### Defined in

node_modules/@types/node/http.d.ts:182

___

### getHeaders

▸ **getHeaders**(): [OutgoingHttpHeaders](../interfaces/http.outgoinghttpheaders.md)

#### Returns

[OutgoingHttpHeaders](../interfaces/http.outgoinghttpheaders.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[getHeaders](http.outgoingmessage.md#getheaders)

#### Defined in

node_modules/@types/node/http.d.ts:181

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[getMaxListeners](http.outgoingmessage.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:79

___

### hasHeader

▸ **hasHeader**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[hasHeader](http.outgoingmessage.md#hasheader)

#### Defined in

node_modules/@types/node/http.d.ts:183

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[listenerCount](http.outgoingmessage.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:83

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[listeners](http.outgoingmessage.md#listeners)

#### Defined in

node_modules/@types/node/events.d.ts:80

___

### off

▸ **off**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[off](http.outgoingmessage.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:193

▸ **on**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:194

▸ **on**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:195

▸ **on**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:196

▸ **on**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:197

▸ **on**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:198

▸ **on**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/stream.d.ts:199

___

### once

▸ **once**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:201

▸ **once**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:202

▸ **once**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:203

▸ **once**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:204

▸ **once**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:205

▸ **once**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:206

▸ **once**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/stream.d.ts:207

___

### pipe

▸ **pipe**<T\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T`: `WritableStream`<T\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[pipe](http.outgoingmessage.md#pipe)

#### Defined in

node_modules/@types/node/stream.d.ts:6

___

### prependListener

▸ **prependListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:209

▸ **prependListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:210

▸ **prependListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:211

▸ **prependListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:212

▸ **prependListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:213

▸ **prependListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:214

▸ **prependListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/stream.d.ts:215

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:217

▸ **prependOnceListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:218

▸ **prependOnceListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:219

▸ **prependOnceListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:220

▸ **prependOnceListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:221

▸ **prependOnceListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:222

▸ **prependOnceListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:223

___

### rawListeners

▸ **rawListeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[rawListeners](http.outgoingmessage.md#rawlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:81

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeAllListeners](http.outgoingmessage.md#removealllisteners)

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### removeHeader

▸ **removeHeader**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeHeader](http.outgoingmessage.md#removeheader)

#### Defined in

node_modules/@types/node/http.d.ts:184

___

### removeListener

▸ **removeListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:225

▸ **removeListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:226

▸ **removeListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:227

▸ **removeListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:228

▸ **removeListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:229

▸ **removeListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:230

▸ **removeListener**(`event`, `listener`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:231

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[setDefaultEncoding](http.outgoingmessage.md#setdefaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:159

___

### setHeader

▸ **setHeader**(`name`, `value`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` \| `number` \| readonly `string`[] |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[setHeader](http.outgoingmessage.md#setheader)

#### Defined in

node_modules/@types/node/http.d.ts:179

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[setMaxListeners](http.outgoingmessage.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:78

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs` | `number` |
| `callback?` | () => `void` |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[setTimeout](http.outgoingmessage.md#settimeout)

#### Defined in

node_modules/@types/node/http.d.ts:178

___

### uncork

▸ **uncork**(): `void`

#### Returns

`void`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[uncork](http.outgoingmessage.md#uncork)

#### Defined in

node_modules/@types/node/stream.d.ts:164

___

### write

▸ **write**(`chunk`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[write](http.outgoingmessage.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:157

▸ **write**(`chunk`, `encoding`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `cb?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[write](http.outgoingmessage.md#write)

#### Defined in

node_modules/@types/node/stream.d.ts:158

___

### writeContinue

▸ **writeContinue**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:200

___

### writeHead

▸ **writeHead**(`statusCode`, `reasonPhrase?`, `headers?`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `reasonPhrase?` | `string` |
| `headers?` | [OutgoingHttpHeaders](../interfaces/http.outgoinghttpheaders.md) \| [OutgoingHttpHeader](../modules/http.md#outgoinghttpheader)[] |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Defined in

node_modules/@types/node/http.d.ts:201

▸ **writeHead**(`statusCode`, `headers?`): [ServerResponse](http.serverresponse.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `statusCode` | `number` |
| `headers?` | [OutgoingHttpHeaders](../interfaces/http.outgoinghttpheaders.md) \| [OutgoingHttpHeader](../modules/http.md#outgoinghttpheader)[] |

#### Returns

[ServerResponse](http.serverresponse.md)

#### Defined in

node_modules/@types/node/http.d.ts:202

___

### writeProcessing

▸ **writeProcessing**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:203

___

### getEventListener

▸ `Static` **getEventListener**(`emitter`, `name`): `Function`[]

Returns a list listener for a specific emitter event name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` \| `EventEmitter` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[getEventListener](http.outgoingmessage.md#geteventlistener)

#### Defined in

node_modules/@types/node/events.d.ts:34

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `event`): `number`

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[listenerCount](http.outgoingmessage.md#listenercount)

#### Defined in

node_modules/@types/node/events.d.ts:30

___

### on

▸ `Static` **on**(`emitter`, `event`, `options?`): `AsyncIterableIterator`<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`AsyncIterableIterator`<any\>

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/events.d.ts:27

___

### once

▸ `Static` **once**(`emitter`, `event`, `options?`): `Promise`<any[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `event` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<any[]\>

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:25

▸ `Static` **once**(`emitter`, `event`, `options?`): `Promise`<any[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `event` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<any[]\>

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/events.d.ts:26
