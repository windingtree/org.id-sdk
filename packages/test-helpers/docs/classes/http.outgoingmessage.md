[@windingtree/org.id-test-helpers](../README.md) / [http](../modules/http.md) / OutgoingMessage

# Class: OutgoingMessage

[http](../modules/http.md).OutgoingMessage

## Hierarchy

- `Writable`

  ↳ **OutgoingMessage**

  ↳↳ [ServerResponse](http.serverresponse.md)

  ↳↳ [ClientRequest](http.clientrequest.md)

## Table of contents

### Constructors

- [constructor](http.outgoingmessage.md#constructor)

### Properties

- [chunkedEncoding](http.outgoingmessage.md#chunkedencoding)
- [connection](http.outgoingmessage.md#connection)
- [destroyed](http.outgoingmessage.md#destroyed)
- [finished](http.outgoingmessage.md#finished)
- [headersSent](http.outgoingmessage.md#headerssent)
- [sendDate](http.outgoingmessage.md#senddate)
- [shouldKeepAlive](http.outgoingmessage.md#shouldkeepalive)
- [socket](http.outgoingmessage.md#socket)
- [upgrading](http.outgoingmessage.md#upgrading)
- [useChunkedEncodingByDefault](http.outgoingmessage.md#usechunkedencodingbydefault)
- [writable](http.outgoingmessage.md#writable)
- [writableCorked](http.outgoingmessage.md#writablecorked)
- [writableEnded](http.outgoingmessage.md#writableended)
- [writableFinished](http.outgoingmessage.md#writablefinished)
- [writableHighWaterMark](http.outgoingmessage.md#writablehighwatermark)
- [writableLength](http.outgoingmessage.md#writablelength)
- [writableObjectMode](http.outgoingmessage.md#writableobjectmode)
- [captureRejectionSymbol](http.outgoingmessage.md#capturerejectionsymbol)
- [captureRejections](http.outgoingmessage.md#capturerejections)
- [defaultMaxListeners](http.outgoingmessage.md#defaultmaxlisteners)
- [errorMonitor](http.outgoingmessage.md#errormonitor)

### Methods

- [\_construct](http.outgoingmessage.md#_construct)
- [\_destroy](http.outgoingmessage.md#_destroy)
- [\_final](http.outgoingmessage.md#_final)
- [\_write](http.outgoingmessage.md#_write)
- [\_writev](http.outgoingmessage.md#_writev)
- [addListener](http.outgoingmessage.md#addlistener)
- [addTrailers](http.outgoingmessage.md#addtrailers)
- [cork](http.outgoingmessage.md#cork)
- [destroy](http.outgoingmessage.md#destroy)
- [emit](http.outgoingmessage.md#emit)
- [end](http.outgoingmessage.md#end)
- [eventNames](http.outgoingmessage.md#eventnames)
- [flushHeaders](http.outgoingmessage.md#flushheaders)
- [getHeader](http.outgoingmessage.md#getheader)
- [getHeaderNames](http.outgoingmessage.md#getheadernames)
- [getHeaders](http.outgoingmessage.md#getheaders)
- [getMaxListeners](http.outgoingmessage.md#getmaxlisteners)
- [hasHeader](http.outgoingmessage.md#hasheader)
- [listenerCount](http.outgoingmessage.md#listenercount)
- [listeners](http.outgoingmessage.md#listeners)
- [off](http.outgoingmessage.md#off)
- [on](http.outgoingmessage.md#on)
- [once](http.outgoingmessage.md#once)
- [pipe](http.outgoingmessage.md#pipe)
- [prependListener](http.outgoingmessage.md#prependlistener)
- [prependOnceListener](http.outgoingmessage.md#prependoncelistener)
- [rawListeners](http.outgoingmessage.md#rawlisteners)
- [removeAllListeners](http.outgoingmessage.md#removealllisteners)
- [removeHeader](http.outgoingmessage.md#removeheader)
- [removeListener](http.outgoingmessage.md#removelistener)
- [setDefaultEncoding](http.outgoingmessage.md#setdefaultencoding)
- [setHeader](http.outgoingmessage.md#setheader)
- [setMaxListeners](http.outgoingmessage.md#setmaxlisteners)
- [setTimeout](http.outgoingmessage.md#settimeout)
- [uncork](http.outgoingmessage.md#uncork)
- [write](http.outgoingmessage.md#write)
- [getEventListener](http.outgoingmessage.md#geteventlistener)
- [listenerCount](http.outgoingmessage.md#listenercount)
- [on](http.outgoingmessage.md#on)
- [once](http.outgoingmessage.md#once)

## Constructors

### constructor

• **new OutgoingMessage**()

#### Overrides

stream.Writable.constructor

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:173

## Properties

### chunkedEncoding

• **chunkedEncoding**: `boolean`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:160

___

### connection

• **connection**: ``null`` \| `Socket`

**`deprecated`** Use `socket` instead.

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:172

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

stream.Writable.destroyed

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:150

___

### finished

• **finished**: `boolean`

**`deprecated`** Use `writableEnded` instead.

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:167

___

### headersSent

• **headersSent**: `boolean`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:168

___

### sendDate

• **sendDate**: `boolean`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:163

___

### shouldKeepAlive

• **shouldKeepAlive**: `boolean`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:161

___

### socket

• **socket**: ``null`` \| `Socket`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:173

___

### upgrading

• **upgrading**: `boolean`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:159

___

### useChunkedEncodingByDefault

• **useChunkedEncodingByDefault**: `boolean`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:162

___

### writable

• `Readonly` **writable**: `boolean`

#### Inherited from

stream.Writable.writable

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:143

___

### writableCorked

• `Readonly` **writableCorked**: `number`

#### Inherited from

stream.Writable.writableCorked

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:149

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

#### Inherited from

stream.Writable.writableEnded

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:144

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

#### Inherited from

stream.Writable.writableFinished

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:145

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

#### Inherited from

stream.Writable.writableHighWaterMark

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:146

___

### writableLength

• `Readonly` **writableLength**: `number`

#### Inherited from

stream.Writable.writableLength

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:147

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

#### Inherited from

stream.Writable.writableObjectMode

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:148

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [captureRejectionSymbol](http.server.md#capturerejectionsymbol)

#### Inherited from

stream.Writable.captureRejectionSymbol

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:46

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

stream.Writable.captureRejections

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:52

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

stream.Writable.defaultMaxListeners

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:53

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

stream.Writable.errorMonitor

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:45

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

stream.Writable.\_construct

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:154

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

stream.Writable.\_destroy

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:155

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

stream.Writable.\_final

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:156

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

stream.Writable.\_write

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:152

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

stream.Writable.\_writev

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:153

___

### addListener

▸ **addListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

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

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.addListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:177

▸ **addListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.addListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:178

▸ **addListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.addListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:179

▸ **addListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.addListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:180

▸ **addListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.addListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:181

▸ **addListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.addListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:182

▸ **addListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.addListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:183

___

### addTrailers

▸ **addTrailers**(`headers`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | [OutgoingHttpHeaders](../interfaces/http.outgoinghttpheaders.md) \| readonly [`string`, `string`][] |

#### Returns

`void`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:184

___

### cork

▸ **cork**(): `void`

#### Returns

`void`

#### Inherited from

stream.Writable.cork

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:163

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

stream.Writable.destroy

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:165

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

stream.Writable.emit

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:185

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:186

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:187

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:188

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:189

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:190

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:191

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

stream.Writable.end

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:160

▸ **end**(`chunk`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

stream.Writable.end

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:161

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

stream.Writable.end

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:162

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

stream.Writable.eventNames

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:87

___

### flushHeaders

▸ **flushHeaders**(): `void`

#### Returns

`void`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:185

___

### getHeader

▸ **getHeader**(`name`): `undefined` \| `string` \| `number` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| `string` \| `number` \| `string`[]

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:179

___

### getHeaderNames

▸ **getHeaderNames**(): `string`[]

#### Returns

`string`[]

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:181

___

### getHeaders

▸ **getHeaders**(): [OutgoingHttpHeaders](../interfaces/http.outgoinghttpheaders.md)

#### Returns

[OutgoingHttpHeaders](../interfaces/http.outgoinghttpheaders.md)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:180

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

stream.Writable.getMaxListeners

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:79

___

### hasHeader

▸ **hasHeader**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:182

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

stream.Writable.listenerCount

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:83

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

stream.Writable.listeners

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:80

___

### off

▸ **off**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.off

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.on

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:193

▸ **on**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.on

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:194

▸ **on**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.on

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:195

▸ **on**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.on

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:196

▸ **on**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.on

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:197

▸ **on**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.on

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:198

▸ **on**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.on

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:199

___

### once

▸ **once**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.once

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:201

▸ **once**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.once

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:202

▸ **once**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.once

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:203

▸ **once**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.once

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:204

▸ **once**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.once

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:205

▸ **once**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.once

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:206

▸ **once**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.once

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:207

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

stream.Writable.pipe

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:6

___

### prependListener

▸ **prependListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:209

▸ **prependListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:210

▸ **prependListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:211

▸ **prependListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:212

▸ **prependListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:213

▸ **prependListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:214

▸ **prependListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:215

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependOnceListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:217

▸ **prependOnceListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependOnceListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:218

▸ **prependOnceListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependOnceListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:219

▸ **prependOnceListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependOnceListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:220

▸ **prependOnceListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependOnceListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:221

▸ **prependOnceListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependOnceListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:222

▸ **prependOnceListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.prependOnceListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:223

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

stream.Writable.rawListeners

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:81

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.removeAllListeners

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:77

___

### removeHeader

▸ **removeHeader**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:183

___

### removeListener

▸ **removeListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:225

▸ **removeListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:226

▸ **removeListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:227

▸ **removeListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:228

▸ **removeListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:229

▸ **removeListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:230

▸ **removeListener**(`event`, `listener`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:231

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.setDefaultEncoding

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:159

___

### setHeader

▸ **setHeader**(`name`, `value`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` \| `number` \| readonly `string`[] |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:178

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Inherited from

stream.Writable.setMaxListeners

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:78

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [OutgoingMessage](http.outgoingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs` | `number` |
| `callback?` | () => `void` |

#### Returns

[OutgoingMessage](http.outgoingmessage.md)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:177

___

### uncork

▸ **uncork**(): `void`

#### Returns

`void`

#### Inherited from

stream.Writable.uncork

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:164

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

stream.Writable.write

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:157

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

stream.Writable.write

#### Defined in

test-helpers/node_modules/@types/node/stream.d.ts:158

___

### getEventListener

▸ `Static` **getEventListener**(`emitter`, `name`): `Function`[]

Returns a list listener for a specific emitter event name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

stream.Writable.getEventListener

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:34

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

stream.Writable.listenerCount

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:30

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

stream.Writable.on

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:27

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

stream.Writable.once

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:25

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

stream.Writable.once

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:26
