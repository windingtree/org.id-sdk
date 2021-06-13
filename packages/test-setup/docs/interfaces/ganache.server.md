[@windingtree/org.id-test-helpers](../README.md) / [Ganache](../modules/ganache.md) / Server

# Interface: Server

[Ganache](../modules/ganache.md).Server

## Hierarchy

- [Server](../classes/http.server.md)

  ↳ **Server**

## Table of contents

### Properties

- [connections](ganache.server.md#connections)
- [headersTimeout](ganache.server.md#headerstimeout)
- [keepAliveTimeout](ganache.server.md#keepalivetimeout)
- [listening](ganache.server.md#listening)
- [maxConnections](ganache.server.md#maxconnections)
- [maxHeadersCount](ganache.server.md#maxheaderscount)
- [provider](ganache.server.md#provider)
- [requestTimeout](ganache.server.md#requesttimeout)
- [timeout](ganache.server.md#timeout)

### Methods

- [addListener](ganache.server.md#addlistener)
- [address](ganache.server.md#address)
- [close](ganache.server.md#close)
- [emit](ganache.server.md#emit)
- [eventNames](ganache.server.md#eventnames)
- [getConnections](ganache.server.md#getconnections)
- [getMaxListeners](ganache.server.md#getmaxlisteners)
- [listen](ganache.server.md#listen)
- [listenerCount](ganache.server.md#listenercount)
- [listeners](ganache.server.md#listeners)
- [off](ganache.server.md#off)
- [on](ganache.server.md#on)
- [once](ganache.server.md#once)
- [prependListener](ganache.server.md#prependlistener)
- [prependOnceListener](ganache.server.md#prependoncelistener)
- [rawListeners](ganache.server.md#rawlisteners)
- [ref](ganache.server.md#ref)
- [removeAllListeners](ganache.server.md#removealllisteners)
- [removeListener](ganache.server.md#removelistener)
- [setMaxListeners](ganache.server.md#setmaxlisteners)
- [setTimeout](ganache.server.md#settimeout)
- [unref](ganache.server.md#unref)

## Properties

### connections

• **connections**: `number`

#### Inherited from

[Server](../classes/http.server.md).[connections](../classes/http.server.md#connections)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:219

___

### headersTimeout

• **headersTimeout**: `number`

Limit the amount of time the parser will wait to receive the complete HTTP headers.

**`default`** 60000
[https://nodejs.org/api/http.html#http_server_headerstimeout](https://nodejs.org/api/http.html#http_server_headerstimeout)

#### Inherited from

[Server](../classes/http.server.md).[headersTimeout](../classes/http.server.md#headerstimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:141

___

### keepAliveTimeout

• **keepAliveTimeout**: `number`

#### Inherited from

[Server](../classes/http.server.md).[keepAliveTimeout](../classes/http.server.md#keepalivetimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:142

___

### listening

• **listening**: `boolean`

#### Inherited from

[Server](../classes/http.server.md).[listening](../classes/http.server.md#listening)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:220

___

### maxConnections

• **maxConnections**: `number`

#### Inherited from

[Server](../classes/http.server.md).[maxConnections](../classes/http.server.md#maxconnections)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:218

___

### maxHeadersCount

• **maxHeadersCount**: ``null`` \| `number`

Limits maximum incoming headers count. If set to 0, no limit will be applied.

**`default`** 2000
[https://nodejs.org/api/http.html#http_server_maxheaderscount](https://nodejs.org/api/http.html#http_server_maxheaderscount)

#### Inherited from

[Server](../classes/http.server.md).[maxHeadersCount](../classes/http.server.md#maxheaderscount)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:134

___

### provider

• **provider**: [Provider](ganache.provider.md)

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:58

___

### requestTimeout

• **requestTimeout**: `number`

Sets the timeout value in milliseconds for receiving the entire request from the client.

**`default`** 0
[https://nodejs.org/api/http.html#http_server_requesttimeout](https://nodejs.org/api/http.html#http_server_requesttimeout)

#### Inherited from

[Server](../classes/http.server.md).[requestTimeout](../classes/http.server.md#requesttimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:148

___

### timeout

• **timeout**: `number`

#### Inherited from

[Server](../classes/http.server.md).[timeout](../classes/http.server.md#timeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:135

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [Server](ganache.server.md)

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

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[addListener](../classes/http.server.md#addlistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:229

▸ **addListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[addListener](../classes/http.server.md#addlistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:230

▸ **addListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[addListener](../classes/http.server.md#addlistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:231

▸ **addListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[addListener](../classes/http.server.md#addlistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:232

▸ **addListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[addListener](../classes/http.server.md#addlistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:233

___

### address

▸ **address**(): ``null`` \| `string` \| `AddressInfo`

#### Returns

``null`` \| `string` \| `AddressInfo`

#### Inherited from

[Server](../classes/http.server.md).[address](../classes/http.server.md#address)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:214

___

### close

▸ **close**(`callback?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`err?`: `Error`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[close](../classes/http.server.md#close)

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

#### Inherited from

[Server](../classes/http.server.md).[emit](../classes/http.server.md#emit)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:235

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Inherited from

[Server](../classes/http.server.md).[emit](../classes/http.server.md#emit)

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

#### Inherited from

[Server](../classes/http.server.md).[emit](../classes/http.server.md#emit)

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

#### Inherited from

[Server](../classes/http.server.md).[emit](../classes/http.server.md#emit)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:238

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |

#### Returns

`boolean`

#### Inherited from

[Server](../classes/http.server.md).[emit](../classes/http.server.md#emit)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:239

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[Server](../classes/http.server.md).[eventNames](../classes/http.server.md#eventnames)

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

#### Inherited from

[Server](../classes/http.server.md).[getConnections](../classes/http.server.md#getconnections)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:215

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

[Server](../classes/http.server.md).[getMaxListeners](../classes/http.server.md#getmaxlisteners)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:79

___

### listen

▸ **listen**(`port?`, `hostname?`, `backlog?`, `listeningListener?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `hostname?` | `string` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[listen](../classes/http.server.md#listen)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:204

▸ **listen**(`port?`, `hostname?`, `listeningListener?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `hostname?` | `string` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[listen](../classes/http.server.md#listen)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:205

▸ **listen**(`port?`, `backlog?`, `listeningListener?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[listen](../classes/http.server.md#listen)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:206

▸ **listen**(`port?`, `listeningListener?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[listen](../classes/http.server.md#listen)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:207

▸ **listen**(`path`, `backlog?`, `listeningListener?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[listen](../classes/http.server.md#listen)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:208

▸ **listen**(`path`, `listeningListener?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[listen](../classes/http.server.md#listen)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:209

▸ **listen**(`options`, `listeningListener?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ListenOptions` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[listen](../classes/http.server.md#listen)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:210

▸ **listen**(`handle`, `backlog?`, `listeningListener?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `backlog?` | `number` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[listen](../classes/http.server.md#listen)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:211

▸ **listen**(`handle`, `listeningListener?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `any` |
| `listeningListener?` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[listen](../classes/http.server.md#listen)

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

#### Inherited from

[Server](../classes/http.server.md).[listenerCount](../classes/http.server.md#listenercount)

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

[Server](../classes/http.server.md).[listeners](../classes/http.server.md#listeners)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:80

___

### off

▸ **off**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[off](../classes/http.server.md#off)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[on](../classes/http.server.md#on)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:241

▸ **on**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[on](../classes/http.server.md#on)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:242

▸ **on**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[on](../classes/http.server.md#on)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:243

▸ **on**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[on](../classes/http.server.md#on)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:244

▸ **on**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[on](../classes/http.server.md#on)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:245

___

### once

▸ **once**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[once](../classes/http.server.md#once)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:247

▸ **once**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[once](../classes/http.server.md#once)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:248

▸ **once**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[once](../classes/http.server.md#once)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:249

▸ **once**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[once](../classes/http.server.md#once)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:250

▸ **once**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[once](../classes/http.server.md#once)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:251

___

### prependListener

▸ **prependListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[prependListener](../classes/http.server.md#prependlistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:253

▸ **prependListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[prependListener](../classes/http.server.md#prependlistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:254

▸ **prependListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[prependListener](../classes/http.server.md#prependlistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:255

▸ **prependListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[prependListener](../classes/http.server.md#prependlistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:256

▸ **prependListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[prependListener](../classes/http.server.md#prependlistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:257

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[prependOnceListener](../classes/http.server.md#prependoncelistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:259

▸ **prependOnceListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[prependOnceListener](../classes/http.server.md#prependoncelistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:260

▸ **prependOnceListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: `Socket`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[prependOnceListener](../classes/http.server.md#prependoncelistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:261

▸ **prependOnceListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[prependOnceListener](../classes/http.server.md#prependoncelistener)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:262

▸ **prependOnceListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[prependOnceListener](../classes/http.server.md#prependoncelistener)

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

#### Inherited from

[Server](../classes/http.server.md).[rawListeners](../classes/http.server.md#rawlisteners)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:81

___

### ref

▸ **ref**(): [Server](ganache.server.md)

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[ref](../classes/http.server.md#ref)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:216

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[removeAllListeners](../classes/http.server.md#removealllisteners)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:77

___

### removeListener

▸ **removeListener**(`event`, `listener`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[removeListener](../classes/http.server.md#removelistener)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:75

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[setMaxListeners](../classes/http.server.md#setmaxlisteners)

#### Defined in

test-helpers/node_modules/@types/node/events.d.ts:78

___

### setTimeout

▸ **setTimeout**(`msecs?`, `callback?`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs?` | `number` |
| `callback?` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[setTimeout](../classes/http.server.md#settimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:127

▸ **setTimeout**(`callback`): [Server](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[setTimeout](../classes/http.server.md#settimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:128

___

### unref

▸ **unref**(): [Server](ganache.server.md)

#### Returns

[Server](ganache.server.md)

#### Inherited from

[Server](../classes/http.server.md).[unref](../classes/http.server.md#unref)

#### Defined in

test-helpers/node_modules/@types/node/net.d.ts:217
