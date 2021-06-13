[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / IncomingMessage

# Class: IncomingMessage

[http](../modules/http.md).IncomingMessage

## Hierarchy

- `Readable`

  ↳ **IncomingMessage**

## Table of contents

### Constructors

- [constructor](http.incomingmessage.md#constructor)

### Properties

- [aborted](http.incomingmessage.md#aborted)
- [complete](http.incomingmessage.md#complete)
- [connection](http.incomingmessage.md#connection)
- [destroyed](http.incomingmessage.md#destroyed)
- [headers](http.incomingmessage.md#headers)
- [httpVersion](http.incomingmessage.md#httpversion)
- [httpVersionMajor](http.incomingmessage.md#httpversionmajor)
- [httpVersionMinor](http.incomingmessage.md#httpversionminor)
- [method](http.incomingmessage.md#method)
- [rawHeaders](http.incomingmessage.md#rawheaders)
- [rawTrailers](http.incomingmessage.md#rawtrailers)
- [readable](http.incomingmessage.md#readable)
- [readableEncoding](http.incomingmessage.md#readableencoding)
- [readableEnded](http.incomingmessage.md#readableended)
- [readableFlowing](http.incomingmessage.md#readableflowing)
- [readableHighWaterMark](http.incomingmessage.md#readablehighwatermark)
- [readableLength](http.incomingmessage.md#readablelength)
- [readableObjectMode](http.incomingmessage.md#readableobjectmode)
- [socket](http.incomingmessage.md#socket)
- [statusCode](http.incomingmessage.md#statuscode)
- [statusMessage](http.incomingmessage.md#statusmessage)
- [trailers](http.incomingmessage.md#trailers)
- [url](http.incomingmessage.md#url)
- [captureRejectionSymbol](http.incomingmessage.md#capturerejectionsymbol)
- [captureRejections](http.incomingmessage.md#capturerejections)
- [defaultMaxListeners](http.incomingmessage.md#defaultmaxlisteners)
- [errorMonitor](http.incomingmessage.md#errormonitor)

### Methods

- [[Symbol.asyncIterator]](http.incomingmessage.md#[symbol.asynciterator])
- [\_construct](http.incomingmessage.md#_construct)
- [\_destroy](http.incomingmessage.md#_destroy)
- [\_read](http.incomingmessage.md#_read)
- [addListener](http.incomingmessage.md#addlistener)
- [destroy](http.incomingmessage.md#destroy)
- [emit](http.incomingmessage.md#emit)
- [eventNames](http.incomingmessage.md#eventnames)
- [getMaxListeners](http.incomingmessage.md#getmaxlisteners)
- [isPaused](http.incomingmessage.md#ispaused)
- [listenerCount](http.incomingmessage.md#listenercount)
- [listeners](http.incomingmessage.md#listeners)
- [off](http.incomingmessage.md#off)
- [on](http.incomingmessage.md#on)
- [once](http.incomingmessage.md#once)
- [pause](http.incomingmessage.md#pause)
- [pipe](http.incomingmessage.md#pipe)
- [prependListener](http.incomingmessage.md#prependlistener)
- [prependOnceListener](http.incomingmessage.md#prependoncelistener)
- [push](http.incomingmessage.md#push)
- [rawListeners](http.incomingmessage.md#rawlisteners)
- [read](http.incomingmessage.md#read)
- [removeAllListeners](http.incomingmessage.md#removealllisteners)
- [removeListener](http.incomingmessage.md#removelistener)
- [resume](http.incomingmessage.md#resume)
- [setEncoding](http.incomingmessage.md#setencoding)
- [setMaxListeners](http.incomingmessage.md#setmaxlisteners)
- [setTimeout](http.incomingmessage.md#settimeout)
- [unpipe](http.incomingmessage.md#unpipe)
- [unshift](http.incomingmessage.md#unshift)
- [wrap](http.incomingmessage.md#wrap)
- [from](http.incomingmessage.md#from)
- [getEventListener](http.incomingmessage.md#geteventlistener)
- [listenerCount](http.incomingmessage.md#listenercount)
- [on](http.incomingmessage.md#on)
- [once](http.incomingmessage.md#once)

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

node_modules/@types/node/http.d.ts:314

## Properties

### aborted

• **aborted**: `boolean`

#### Defined in

node_modules/@types/node/http.d.ts:317

___

### complete

• **complete**: `boolean`

#### Defined in

node_modules/@types/node/http.d.ts:321

___

### connection

• **connection**: `Socket`

**`deprecated`** since v13.0.0 - Use `socket` instead.

#### Defined in

node_modules/@types/node/http.d.ts:325

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

stream.Readable.destroyed

#### Defined in

node_modules/@types/node/stream.d.ts:41

___

### headers

• **headers**: [IncomingHttpHeaders](../interfaces/http.incominghttpheaders.md)

#### Defined in

node_modules/@types/node/http.d.ts:327

___

### httpVersion

• **httpVersion**: `string`

#### Defined in

node_modules/@types/node/http.d.ts:318

___

### httpVersionMajor

• **httpVersionMajor**: `number`

#### Defined in

node_modules/@types/node/http.d.ts:319

___

### httpVersionMinor

• **httpVersionMinor**: `number`

#### Defined in

node_modules/@types/node/http.d.ts:320

___

### method

• `Optional` **method**: `string`

Only valid for request obtained from http.Server.

#### Defined in

node_modules/@types/node/http.d.ts:335

___

### rawHeaders

• **rawHeaders**: `string`[]

#### Defined in

node_modules/@types/node/http.d.ts:328

___

### rawTrailers

• **rawTrailers**: `string`[]

#### Defined in

node_modules/@types/node/http.d.ts:330

___

### readable

• **readable**: `boolean`

#### Inherited from

stream.Readable.readable

#### Defined in

node_modules/@types/node/stream.d.ts:34

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| `BufferEncoding`

#### Inherited from

stream.Readable.readableEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:35

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

#### Inherited from

stream.Readable.readableEnded

#### Defined in

node_modules/@types/node/stream.d.ts:36

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

#### Inherited from

stream.Readable.readableFlowing

#### Defined in

node_modules/@types/node/stream.d.ts:37

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

#### Inherited from

stream.Readable.readableHighWaterMark

#### Defined in

node_modules/@types/node/stream.d.ts:38

___

### readableLength

• `Readonly` **readableLength**: `number`

#### Inherited from

stream.Readable.readableLength

#### Defined in

node_modules/@types/node/stream.d.ts:39

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

#### Inherited from

stream.Readable.readableObjectMode

#### Defined in

node_modules/@types/node/stream.d.ts:40

___

### socket

• **socket**: `Socket`

#### Defined in

node_modules/@types/node/http.d.ts:326

___

### statusCode

• `Optional` **statusCode**: `number`

Only valid for response obtained from http.ClientRequest.

#### Defined in

node_modules/@types/node/http.d.ts:343

___

### statusMessage

• `Optional` **statusMessage**: `string`

Only valid for response obtained from http.ClientRequest.

#### Defined in

node_modules/@types/node/http.d.ts:347

___

### trailers

• **trailers**: `Dict`<string\>

#### Defined in

node_modules/@types/node/http.d.ts:329

___

### url

• `Optional` **url**: `string`

Only valid for request obtained from http.Server.

#### Defined in

node_modules/@types/node/http.d.ts:339

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [captureRejectionSymbol](http.server.md#capturerejectionsymbol)

#### Inherited from

stream.Readable.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:46

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

stream.Readable.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:52

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

stream.Readable.defaultMaxListeners

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

stream.Readable.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:45

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): `AsyncIterableIterator`<any\>

#### Returns

`AsyncIterableIterator`<any\>

#### Inherited from

stream.Readable.\_\_@asyncIterator

#### Defined in

node_modules/@types/node/stream.d.ts:131

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

node_modules/@types/node/stream.d.ts:43

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

node_modules/@types/node/stream.d.ts:54

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

node_modules/@types/node/stream.d.ts:44

___

### addListener

▸ **addListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

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

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:68

▸ **addListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:69

▸ **addListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:70

▸ **addListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:71

▸ **addListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:72

▸ **addListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:73

▸ **addListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:74

▸ **addListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.addListener

#### Defined in

node_modules/@types/node/stream.d.ts:75

___

### destroy

▸ **destroy**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` |

#### Returns

`void`

#### Overrides

stream.Readable.destroy

#### Defined in

node_modules/@types/node/http.d.ts:348

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

node_modules/@types/node/stream.d.ts:77

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

node_modules/@types/node/stream.d.ts:78

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

node_modules/@types/node/stream.d.ts:79

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

node_modules/@types/node/stream.d.ts:80

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

node_modules/@types/node/stream.d.ts:81

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

node_modules/@types/node/stream.d.ts:82

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

node_modules/@types/node/stream.d.ts:83

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

node_modules/@types/node/stream.d.ts:84

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

stream.Readable.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:87

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

stream.Readable.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:79

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

stream.Readable.isPaused

#### Defined in

node_modules/@types/node/stream.d.ts:49

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

stream.Readable.listenerCount

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

stream.Readable.listeners

#### Defined in

node_modules/@types/node/events.d.ts:80

___

### off

▸ **off**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.off

#### Defined in

node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:86

▸ **on**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:87

▸ **on**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:88

▸ **on**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:89

▸ **on**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:90

▸ **on**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:91

▸ **on**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:92

▸ **on**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.on

#### Defined in

node_modules/@types/node/stream.d.ts:93

___

### once

▸ **once**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:95

▸ **once**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:96

▸ **once**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:97

▸ **once**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:98

▸ **once**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:99

▸ **once**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:100

▸ **once**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:101

▸ **once**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.once

#### Defined in

node_modules/@types/node/stream.d.ts:102

___

### pause

▸ **pause**(): [IncomingMessage](http.incomingmessage.md)

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.pause

#### Defined in

node_modules/@types/node/stream.d.ts:47

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

stream.Readable.pipe

#### Defined in

node_modules/@types/node/stream.d.ts:6

___

### prependListener

▸ **prependListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:104

▸ **prependListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:105

▸ **prependListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:106

▸ **prependListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:107

▸ **prependListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:108

▸ **prependListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:109

▸ **prependListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:110

▸ **prependListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/stream.d.ts:111

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:113

▸ **prependOnceListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:114

▸ **prependOnceListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:115

▸ **prependOnceListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:116

▸ **prependOnceListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:117

▸ **prependOnceListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:118

▸ **prependOnceListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:119

▸ **prependOnceListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/stream.d.ts:120

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

node_modules/@types/node/stream.d.ts:53

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

stream.Readable.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:81

___

### read

▸ **read**(`size?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`any`

#### Inherited from

stream.Readable.read

#### Defined in

node_modules/@types/node/stream.d.ts:45

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### removeListener

▸ **removeListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:122

▸ **removeListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:123

▸ **removeListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:124

▸ **removeListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:125

▸ **removeListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:126

▸ **removeListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:127

▸ **removeListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:128

▸ **removeListener**(`event`, `listener`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:129

___

### resume

▸ **resume**(): [IncomingMessage](http.incomingmessage.md)

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.resume

#### Defined in

node_modules/@types/node/stream.d.ts:48

___

### setEncoding

▸ **setEncoding**(`encoding`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.setEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:46

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:78

___

### setTimeout

▸ **setTimeout**(`msecs`, `callback?`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs` | `number` |
| `callback?` | () => `void` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Defined in

node_modules/@types/node/http.d.ts:331

___

### unpipe

▸ **unpipe**(`destination?`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | `WritableStream` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.unpipe

#### Defined in

node_modules/@types/node/stream.d.ts:50

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`void`

#### Inherited from

stream.Readable.unshift

#### Defined in

node_modules/@types/node/stream.d.ts:51

___

### wrap

▸ **wrap**(`oldStream`): [IncomingMessage](http.incomingmessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | `ReadableStream` |

#### Returns

[IncomingMessage](http.incomingmessage.md)

#### Inherited from

stream.Readable.wrap

#### Defined in

node_modules/@types/node/stream.d.ts:52

___

### from

▸ `Static` **from**(`iterable`, `options?`): `Readable`

A utility method for creating Readable Streams out of iterators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<any\> \| `AsyncIterable`<any\> |
| `options?` | `ReadableOptions` |

#### Returns

`Readable`

#### Inherited from

stream.Readable.from

#### Defined in

node_modules/@types/node/stream.d.ts:32

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

stream.Readable.getEventListener

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

stream.Readable.listenerCount

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

stream.Readable.on

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

stream.Readable.once

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

stream.Readable.once

#### Defined in

node_modules/@types/node/events.d.ts:26
