[@windingtree/org.id-test-helpers](../README.md) / [Ganache](../modules/ganache.md) / Server

# Interface: Server

[Ganache](../modules/ganache.md).Server

## Hierarchy

- [*Server*](../classes/http.server.md)

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

• **connections**: *number*

Inherited from: [Server](../classes/http.server.md).[connections](../classes/http.server.md#connections)

Defined in: node_modules/@types/node/net.d.ts:219

___

### headersTimeout

• **headersTimeout**: *number*

Limit the amount of time the parser will wait to receive the complete HTTP headers.

**`default`** 60000
[https://nodejs.org/api/http.html#http_server_headerstimeout](https://nodejs.org/api/http.html#http_server_headerstimeout)

Inherited from: [Server](../classes/http.server.md).[headersTimeout](../classes/http.server.md#headerstimeout)

Defined in: node_modules/@types/node/http.d.ts:141

___

### keepAliveTimeout

• **keepAliveTimeout**: *number*

Inherited from: [Server](../classes/http.server.md).[keepAliveTimeout](../classes/http.server.md#keepalivetimeout)

Defined in: node_modules/@types/node/http.d.ts:142

___

### listening

• **listening**: *boolean*

Inherited from: [Server](../classes/http.server.md).[listening](../classes/http.server.md#listening)

Defined in: node_modules/@types/node/net.d.ts:220

___

### maxConnections

• **maxConnections**: *number*

Inherited from: [Server](../classes/http.server.md).[maxConnections](../classes/http.server.md#maxconnections)

Defined in: node_modules/@types/node/net.d.ts:218

___

### maxHeadersCount

• **maxHeadersCount**: *number*

Limits maximum incoming headers count. If set to 0, no limit will be applied.

**`default`** 2000
[https://nodejs.org/api/http.html#http_server_maxheaderscount](https://nodejs.org/api/http.html#http_server_maxheaderscount)

Inherited from: [Server](../classes/http.server.md).[maxHeadersCount](../classes/http.server.md#maxheaderscount)

Defined in: node_modules/@types/node/http.d.ts:134

___

### provider

• **provider**: [*Provider*](ganache.provider.md)

Defined in: node_modules/ganache-core/typings/index.d.ts:58

___

### requestTimeout

• **requestTimeout**: *number*

Sets the timeout value in milliseconds for receiving the entire request from the client.

**`default`** 0
[https://nodejs.org/api/http.html#http_server_requesttimeout](https://nodejs.org/api/http.html#http_server_requesttimeout)

Inherited from: [Server](../classes/http.server.md).[requestTimeout](../classes/http.server.md#requesttimeout)

Defined in: node_modules/@types/node/http.d.ts:148

___

### timeout

• **timeout**: *number*

Inherited from: [Server](../classes/http.server.md).[timeout](../classes/http.server.md#timeout)

Defined in: node_modules/@types/node/http.d.ts:135

## Methods

### addListener

▸ **addListener**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*Server*](ganache.server.md)

events.EventEmitter
  1. close
  2. connection
  3. error
  4. listening

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:229

▸ **addListener**(`event`: ``"close"``, `listener`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:230

▸ **addListener**(`event`: ``"connection"``, `listener`: (`socket`: *Socket*) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: *Socket*) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:231

▸ **addListener**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:232

▸ **addListener**(`event`: ``"listening"``, `listener`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:233

___

### address

▸ **address**(): *string* \| AddressInfo

**Returns:** *string* \| AddressInfo

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:214

___

### close

▸ **close**(`callback?`: (`err?`: Error) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | (`err?`: Error) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:213

___

### emit

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `...args` | *any*[] |

**Returns:** *boolean*

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:235

▸ **emit**(`event`: ``"close"``): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

**Returns:** *boolean*

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:236

▸ **emit**(`event`: ``"connection"``, `socket`: *Socket*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `socket` | *Socket* |

**Returns:** *boolean*

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:237

▸ **emit**(`event`: ``"error"``, `err`: Error): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | Error |

**Returns:** *boolean*

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:238

▸ **emit**(`event`: ``"listening"``): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |

**Returns:** *boolean*

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:239

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/events.d.ts:87

___

### getConnections

▸ **getConnections**(`cb`: (`error`: Error, `count`: *number*) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`error`: Error, `count`: *number*) => *void* |

**Returns:** *void*

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:215

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/events.d.ts:79

___

### listen

▸ **listen**(`port?`: *number*, `hostname?`: *string*, `backlog?`: *number*, `listeningListener?`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | *number* |
| `hostname?` | *string* |
| `backlog?` | *number* |
| `listeningListener?` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:204

▸ **listen**(`port?`: *number*, `hostname?`: *string*, `listeningListener?`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | *number* |
| `hostname?` | *string* |
| `listeningListener?` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:205

▸ **listen**(`port?`: *number*, `backlog?`: *number*, `listeningListener?`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | *number* |
| `backlog?` | *number* |
| `listeningListener?` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:206

▸ **listen**(`port?`: *number*, `listeningListener?`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `port?` | *number* |
| `listeningListener?` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:207

▸ **listen**(`path`: *string*, `backlog?`: *number*, `listeningListener?`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `backlog?` | *number* |
| `listeningListener?` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:208

▸ **listen**(`path`: *string*, `listeningListener?`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | *string* |
| `listeningListener?` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:209

▸ **listen**(`options`: ListenOptions, `listeningListener?`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | ListenOptions |
| `listeningListener?` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:210

▸ **listen**(`handle`: *any*, `backlog?`: *number*, `listeningListener?`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | *any* |
| `backlog?` | *number* |
| `listeningListener?` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:211

▸ **listen**(`handle`: *any*, `listeningListener?`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | *any* |
| `listeningListener?` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:212

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/events.d.ts:83

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/events.d.ts:80

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:241

▸ **on**(`event`: ``"close"``, `listener`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:242

▸ **on**(`event`: ``"connection"``, `listener`: (`socket`: *Socket*) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: *Socket*) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:243

▸ **on**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:244

▸ **on**(`event`: ``"listening"``, `listener`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:245

___

### once

▸ **once**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:247

▸ **once**(`event`: ``"close"``, `listener`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:248

▸ **once**(`event`: ``"connection"``, `listener`: (`socket`: *Socket*) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: *Socket*) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:249

▸ **once**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:250

▸ **once**(`event`: ``"listening"``, `listener`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:251

___

### prependListener

▸ **prependListener**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:253

▸ **prependListener**(`event`: ``"close"``, `listener`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:254

▸ **prependListener**(`event`: ``"connection"``, `listener`: (`socket`: *Socket*) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: *Socket*) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:255

▸ **prependListener**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:256

▸ **prependListener**(`event`: ``"listening"``, `listener`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:257

___

### prependOnceListener

▸ **prependOnceListener**(`event`: *string*, `listener`: (...`args`: *any*[]) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:259

▸ **prependOnceListener**(`event`: ``"close"``, `listener`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:260

▸ **prependOnceListener**(`event`: ``"connection"``, `listener`: (`socket`: *Socket*) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connection"`` |
| `listener` | (`socket`: *Socket*) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:261

▸ **prependOnceListener**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:262

▸ **prependOnceListener**(`event`: ``"listening"``, `listener`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"listening"`` |
| `listener` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:263

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/events.d.ts:81

___

### ref

▸ **ref**(): [*Server*](ganache.server.md)

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:216

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | *string* \| *symbol* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/events.d.ts:77

___

### removeListener

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/events.d.ts:75

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/events.d.ts:78

___

### setTimeout

▸ **setTimeout**(`msecs?`: *number*, `callback?`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs?` | *number* |
| `callback?` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/http.d.ts:127

▸ **setTimeout**(`callback`: () => *void*): [*Server*](ganache.server.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => *void* |

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/http.d.ts:128

___

### unref

▸ **unref**(): [*Server*](ganache.server.md)

**Returns:** [*Server*](ganache.server.md)

Inherited from: [Server](../classes/http.server.md)

Defined in: node_modules/@types/node/net.d.ts:217
