[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / ClientRequest

# Class: ClientRequest

[http](../modules/http.md).ClientRequest

## Hierarchy

- [OutgoingMessage](http.outgoingmessage.md)

  ↳ **ClientRequest**

## Table of contents

### Constructors

- [constructor](http.clientrequest.md#constructor)

### Properties

- [aborted](http.clientrequest.md#aborted)
- [chunkedEncoding](http.clientrequest.md#chunkedencoding)
- [connection](http.clientrequest.md#connection)
- [destroyed](http.clientrequest.md#destroyed)
- [finished](http.clientrequest.md#finished)
- [headersSent](http.clientrequest.md#headerssent)
- [host](http.clientrequest.md#host)
- [method](http.clientrequest.md#method)
- [path](http.clientrequest.md#path)
- [protocol](http.clientrequest.md#protocol)
- [req](http.clientrequest.md#req)
- [sendDate](http.clientrequest.md#senddate)
- [shouldKeepAlive](http.clientrequest.md#shouldkeepalive)
- [socket](http.clientrequest.md#socket)
- [useChunkedEncodingByDefault](http.clientrequest.md#usechunkedencodingbydefault)
- [writable](http.clientrequest.md#writable)
- [writableCorked](http.clientrequest.md#writablecorked)
- [writableEnded](http.clientrequest.md#writableended)
- [writableFinished](http.clientrequest.md#writablefinished)
- [writableHighWaterMark](http.clientrequest.md#writablehighwatermark)
- [writableLength](http.clientrequest.md#writablelength)
- [writableObjectMode](http.clientrequest.md#writableobjectmode)
- [captureRejectionSymbol](http.clientrequest.md#capturerejectionsymbol)
- [captureRejections](http.clientrequest.md#capturerejections)
- [defaultMaxListeners](http.clientrequest.md#defaultmaxlisteners)
- [errorMonitor](http.clientrequest.md#errormonitor)

### Methods

- [\_construct](http.clientrequest.md#_construct)
- [\_destroy](http.clientrequest.md#_destroy)
- [\_final](http.clientrequest.md#_final)
- [\_write](http.clientrequest.md#_write)
- [\_writev](http.clientrequest.md#_writev)
- [abort](http.clientrequest.md#abort)
- [addListener](http.clientrequest.md#addlistener)
- [addTrailers](http.clientrequest.md#addtrailers)
- [cork](http.clientrequest.md#cork)
- [destroy](http.clientrequest.md#destroy)
- [emit](http.clientrequest.md#emit)
- [end](http.clientrequest.md#end)
- [eventNames](http.clientrequest.md#eventnames)
- [flushHeaders](http.clientrequest.md#flushheaders)
- [getHeader](http.clientrequest.md#getheader)
- [getHeaderNames](http.clientrequest.md#getheadernames)
- [getHeaders](http.clientrequest.md#getheaders)
- [getMaxListeners](http.clientrequest.md#getmaxlisteners)
- [hasHeader](http.clientrequest.md#hasheader)
- [listenerCount](http.clientrequest.md#listenercount)
- [listeners](http.clientrequest.md#listeners)
- [off](http.clientrequest.md#off)
- [on](http.clientrequest.md#on)
- [onSocket](http.clientrequest.md#onsocket)
- [once](http.clientrequest.md#once)
- [pipe](http.clientrequest.md#pipe)
- [prependListener](http.clientrequest.md#prependlistener)
- [prependOnceListener](http.clientrequest.md#prependoncelistener)
- [rawListeners](http.clientrequest.md#rawlisteners)
- [removeAllListeners](http.clientrequest.md#removealllisteners)
- [removeHeader](http.clientrequest.md#removeheader)
- [removeListener](http.clientrequest.md#removelistener)
- [setDefaultEncoding](http.clientrequest.md#setdefaultencoding)
- [setHeader](http.clientrequest.md#setheader)
- [setMaxListeners](http.clientrequest.md#setmaxlisteners)
- [setNoDelay](http.clientrequest.md#setnodelay)
- [setSocketKeepAlive](http.clientrequest.md#setsocketkeepalive)
- [setTimeout](http.clientrequest.md#settimeout)
- [uncork](http.clientrequest.md#uncork)
- [write](http.clientrequest.md#write)
- [getEventListener](http.clientrequest.md#geteventlistener)
- [listenerCount](http.clientrequest.md#listenercount)
- [on](http.clientrequest.md#on)
- [once](http.clientrequest.md#once)

## Constructors

### constructor

• **new ClientRequest**(`url`, `cb?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| [ClientRequestArgs](../interfaces/http.clientrequestargs.md) \| `URL` |
| `cb?` | (`res`: [IncomingMessage](http.incomingmessage.md)) => `void` |

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[constructor](http.outgoingmessage.md#constructor)

#### Defined in

node_modules/@types/node/http.d.ts:220

## Properties

### aborted

• **aborted**: `boolean`

#### Defined in

node_modules/@types/node/http.d.ts:218

___

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

### host

• **host**: `string`

#### Defined in

node_modules/@types/node/http.d.ts:219

___

### method

• **method**: `string`

#### Defined in

node_modules/@types/node/http.d.ts:224

___

### path

• **path**: `string`

#### Defined in

node_modules/@types/node/http.d.ts:225

___

### protocol

• **protocol**: `string`

#### Defined in

node_modules/@types/node/http.d.ts:220

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

### abort

▸ **abort**(): `void`

**`deprecated`** since v14.1.0 Use `request.destroy()` instead.

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:227

___

### addListener

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:233

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:234

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:235

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [InformationEvent](../interfaces/http.informationevent.md)) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:236

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md)) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:237

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:238

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[addListener](http.outgoingmessage.md#addlistener)

#### Defined in

node_modules/@types/node/http.d.ts:239

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:240

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:241

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:242

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:243

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:244

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:245

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:246

▸ **addListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.addListener

#### Defined in

node_modules/@types/node/http.d.ts:247

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

▸ **off**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[off](http.outgoingmessage.md#off)

#### Defined in

node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:249

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:250

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:251

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [InformationEvent](../interfaces/http.informationevent.md)) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:252

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md)) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:253

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:254

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[on](http.outgoingmessage.md#on)

#### Defined in

node_modules/@types/node/http.d.ts:255

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:256

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:257

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:258

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:259

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:260

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:261

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:262

▸ **on**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.on

#### Defined in

node_modules/@types/node/http.d.ts:263

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

node_modules/@types/node/http.d.ts:228

___

### once

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:265

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:266

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:267

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [InformationEvent](../interfaces/http.informationevent.md)) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:268

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md)) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:269

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:270

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[once](http.outgoingmessage.md#once)

#### Defined in

node_modules/@types/node/http.d.ts:271

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:272

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:273

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:274

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:275

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:276

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:277

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:278

▸ **once**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.once

#### Defined in

node_modules/@types/node/http.d.ts:279

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

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:281

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:282

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:283

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [InformationEvent](../interfaces/http.informationevent.md)) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:284

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md)) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:285

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:286

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependListener](http.outgoingmessage.md#prependlistener)

#### Defined in

node_modules/@types/node/http.d.ts:287

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:288

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:289

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:290

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:291

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:292

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:293

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:294

▸ **prependListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependListener

#### Defined in

node_modules/@types/node/http.d.ts:295

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:297

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:298

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:299

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [InformationEvent](../interfaces/http.informationevent.md)) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:300

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md)) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:301

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:302

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[prependOnceListener](http.outgoingmessage.md#prependoncelistener)

#### Defined in

node_modules/@types/node/http.d.ts:303

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [IncomingMessage](http.incomingmessage.md), `socket`: `Socket`, `head`: `Buffer`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:304

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:305

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:306

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:307

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:308

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:309

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:310

▸ **prependOnceListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

OutgoingMessage.prependOnceListener

#### Defined in

node_modules/@types/node/http.d.ts:311

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

▸ **removeAllListeners**(`event?`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[ClientRequest](http.clientrequest.md)

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

▸ **removeListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:225

▸ **removeListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:226

▸ **removeListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:227

▸ **removeListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:228

▸ **removeListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:229

▸ **removeListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:230

▸ **removeListener**(`event`, `listener`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[removeListener](http.outgoingmessage.md#removelistener)

#### Defined in

node_modules/@types/node/stream.d.ts:231

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[setDefaultEncoding](http.outgoingmessage.md#setdefaultencoding)

#### Defined in

node_modules/@types/node/stream.d.ts:159

___

### setHeader

▸ **setHeader**(`name`, `value`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` \| `number` \| readonly `string`[] |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[setHeader](http.outgoingmessage.md#setheader)

#### Defined in

node_modules/@types/node/http.d.ts:179

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Inherited from

[OutgoingMessage](http.outgoingmessage.md).[setMaxListeners](http.outgoingmessage.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/events.d.ts:78

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:230

___

### setSocketKeepAlive

▸ **setSocketKeepAlive**(`enable?`, `initialDelay?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | `boolean` |
| `initialDelay?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/http.d.ts:231

___

### setTimeout

▸ **setTimeout**(`timeout`, `callback?`): [ClientRequest](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | `number` |
| `callback?` | () => `void` |

#### Returns

[ClientRequest](http.clientrequest.md)

#### Overrides

[OutgoingMessage](http.outgoingmessage.md).[setTimeout](http.outgoingmessage.md#settimeout)

#### Defined in

node_modules/@types/node/http.d.ts:229

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
