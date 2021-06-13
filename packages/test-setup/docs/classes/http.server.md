[@windingtree/org.id-test-helpers](../README.md) / [http](../modules/http.md) / Server

# Class: Server

[http](../modules/http.md).Server

## Hierarchy

- [HttpBase](../interfaces/http.httpbase.md)

- `NetServer`

  ↳ **Server**

  ↳↳ [Server](../interfaces/ganache.server.md)

## Table of contents

### Constructors

- [constructor](http.server.md#constructor)

### Properties

- [connections](http.server.md#connections)
- [headersTimeout](http.server.md#headerstimeout)
- [keepAliveTimeout](http.server.md#keepalivetimeout)
- [listening](http.server.md#listening)
- [maxConnections](http.server.md#maxconnections)
- [maxHeadersCount](http.server.md#maxheaderscount)
- [requestTimeout](http.server.md#requesttimeout)
- [timeout](http.server.md#timeout)
- [captureRejectionSymbol](http.server.md#capturerejectionsymbol)
- [captureRejections](http.server.md#capturerejections)
- [defaultMaxListeners](http.server.md#defaultmaxlisteners)
- [errorMonitor](http.server.md#errormonitor)

### Methods

- [addListener](http.server.md#addlistener)
- [address](http.server.md#address)
- [close](http.server.md#close)
- [emit](http.server.md#emit)
- [eventNames](http.server.md#eventnames)
- [getConnections](http.server.md#getconnections)
- [getMaxListeners](http.server.md#getmaxlisteners)
- [listen](http.server.md#listen)
- [listenerCount](http.server.md#listenercount)
- [listeners](http.server.md#listeners)
- [off](http.server.md#off)
- [on](http.server.md#on)
- [once](http.server.md#once)
- [prependListener](http.server.md#prependlistener)
- [prependOnceListener](http.server.md#prependoncelistener)
- [rawListeners](http.server.md#rawlisteners)
- [ref](http.server.md#ref)
- [removeAllListeners](http.server.md#removealllisteners)
- [removeListener](http.server.md#removelistener)
- [setMaxListeners](http.server.md#setmaxlisteners)
- [setTimeout](http.server.md#settimeout)
- [unref](http.server.md#unref)
- [getEventListener](http.server.md#geteventlistener)
- [listenerCount](http.server.md#listenercount)
- [on](http.server.md#on)
- [once](http.server.md#once)

## Constructors

### constructor

• **new Server**(`requestListener?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestListener?` | [RequestListener](../modules/http.md#requestlistener) |

#### Inherited from

HttpBase.constructor

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:152

• **new Server**(`options`, `requestListener?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [ServerOptions](../interfaces/http.serveroptions.md) |
| `requestListener?` | [RequestListener](../modules/http.md#requestlistener) |

#### Inherited from

HttpBase.constructor

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:153

## Properties

### connections

• **connections**: `number`

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:219

___

### headersTimeout

• **headersTimeout**: `number`

Limit the amount of time the parser will wait to receive the complete HTTP headers.

**`default`** 60000
[https://nodejs.org/api/http.html#http_server_headerstimeout](https://nodejs.org/api/http.html#http_server_headerstimeout)

#### Inherited from

[HttpBase](../interfaces/http.httpbase.md).[headersTimeout](../interfaces/http.httpbase.md#headerstimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:141

___

### keepAliveTimeout

• **keepAliveTimeout**: `number`

#### Inherited from

[HttpBase](../interfaces/http.httpbase.md).[keepAliveTimeout](../interfaces/http.httpbase.md#keepalivetimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:142

___

### listening

• **listening**: `boolean`

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:220

___

### maxConnections

• **maxConnections**: `number`

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:218

___

### maxHeadersCount

• **maxHeadersCount**: ``null`` \| `number`

Limits maximum incoming headers count. If set to 0, no limit will be applied.

**`default`** 2000
[https://nodejs.org/api/http.html#http_server_maxheaderscount](https://nodejs.org/api/http.html#http_server_maxheaderscount)

#### Inherited from

[HttpBase](../interfaces/http.httpbase.md).[maxHeadersCount](../interfaces/http.httpbase.md#maxheaderscount)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:134

___

### requestTimeout

• **requestTimeout**: `number`

Sets the timeout value in milliseconds for receiving the entire request from the client.

**`default`** 0
[https://nodejs.org/api/http.html#http_server_requesttimeout](https://nodejs.org/api/http.html#http_server_requesttimeout)

#### Inherited from

[HttpBase](../interfaces/http.httpbase.md).[requestTimeout](../interfaces/http.httpbase.md#requesttimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:148

___

### timeout

• **timeout**: `number`

#### Inherited from

[HttpBase](../interfaces/http.httpbase.md).[timeout](../interfaces/http.httpbase.md#timeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:135

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [captureRejectionSymbol](http.server.md#capturerejectionsymbol)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:46

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:52

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

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

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:45

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [Server](http.server.md)

events.EventEmitter
  1. close
  2. connection
  3. error
  4. listening

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:229

▸ **addListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:230

▸ **addListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:231

▸ **addListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:232

▸ **addListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:233

___

### address

▸ **address**(): ``null`` \| `string` \| `AddressInfo`

#### Returns

``null`` \| `string` \| `AddressInfo`

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:214

___

### close

▸ **close**(`callback?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`err?`: `Error`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:213

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:235

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:236

▸ **emit**(`event`, `socket`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `socket` | `Socket` |

#### Returns

`boolean`

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:237

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:238

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |

#### Returns

`boolean`

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:239

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:87

___

### getConnections

▸ **getConnections**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`error`: ``null`` \| `Error`, `count`: `number`) => `void` |

#### Returns

`void`

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:215

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:79

___

### listen

▸ **listen**(`port?`, `hostname?`, `backlog?`, `listeningListener?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `hostname?` | `string` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:204

▸ **listen**(`port?`, `hostname?`, `listeningListener?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `hostname?` | `string` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:205

▸ **listen**(`port?`, `backlog?`, `listeningListener?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:206

▸ **listen**(`port?`, `listeningListener?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:207

▸ **listen**(`path`, `backlog?`, `listeningListener?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:208

▸ **listen**(`path`, `listeningListener?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:209

▸ **listen**(`options`, `listeningListener?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ListenOptions` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:210

▸ **listen**(`handle`, `backlog?`, `listeningListener?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:211

▸ **listen**(`handle`, `listeningListener?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:212

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

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

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:80

___

### off

▸ **off**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:241

▸ **on**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:242

▸ **on**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:243

▸ **on**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:244

▸ **on**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:245

___

### once

▸ **once**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:247

▸ **once**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:248

▸ **once**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:249

▸ **once**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:250

▸ **once**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:251

___

### prependListener

▸ **prependListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:253

▸ **prependListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:254

▸ **prependListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:255

▸ **prependListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:256

▸ **prependListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:257

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:259

▸ **prependOnceListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:260

▸ **prependOnceListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:261

▸ **prependOnceListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:262

▸ **prependOnceListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:263

___

### rawListeners

▸ **rawListeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:81

___

### ref

▸ **ref**(): [Server](http.server.md)

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:216

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:77

___

### removeListener

▸ **removeListener**(`event`, `listener`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:75

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:78

___

### setTimeout

▸ **setTimeout**(`msecs?`, `callback?`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs?` | `number` |
| `callback?` | () => `void` |

#### Returns

[Server](http.server.md)

#### Inherited from

[HttpBase](../interfaces/http.httpbase.md).[setTimeout](../interfaces/http.httpbase.md#settimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:127

▸ **setTimeout**(`callback`): [Server](http.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

[Server](http.server.md)

#### Inherited from

[HttpBase](../interfaces/http.httpbase.md).[setTimeout](../interfaces/http.httpbase.md#settimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:128

___

### unref

▸ **unref**(): [Server](http.server.md)

#### Returns

[Server](http.server.md)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:217

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

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:26
