[@windingtree/org.id-test-helpers](../README.md) / [http](../modules/http.md) / ClientRequest

# Class: ClientRequest

[http](../modules/http.md).ClientRequest

## Hierarchy

- [*OutgoingMessage*](http.outgoingmessage.md)

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
- [sendDate](http.clientrequest.md#senddate)
- [shouldKeepAlive](http.clientrequest.md#shouldkeepalive)
- [socket](http.clientrequest.md#socket)
- [upgrading](http.clientrequest.md#upgrading)
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

\+ **new ClientRequest**(`url`: *string* \| [*ClientRequestArgs*](../interfaces/http.clientrequestargs.md) \| *URL*, `cb?`: (`res`: [*IncomingMessage*](http.incomingmessage.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | *string* \| [*ClientRequestArgs*](../interfaces/http.clientrequestargs.md) \| *URL* |
| `cb?` | (`res`: [*IncomingMessage*](http.incomingmessage.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:219

## Properties

### aborted

• **aborted**: *boolean*

Defined in: node_modules/@types/node/http.d.ts:217

___

### chunkedEncoding

• **chunkedEncoding**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[chunkedEncoding](http.outgoingmessage.md#chunkedencoding)

Defined in: node_modules/@types/node/http.d.ts:160

___

### connection

• **connection**: *Socket*

**`deprecate`** Use `socket` instead.

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[connection](http.outgoingmessage.md#connection)

Defined in: node_modules/@types/node/http.d.ts:172

___

### destroyed

• **destroyed**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[destroyed](http.outgoingmessage.md#destroyed)

Defined in: node_modules/@types/node/stream.d.ts:150

___

### finished

• **finished**: *boolean*

**`deprecated`** Use `writableEnded` instead.

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[finished](http.outgoingmessage.md#finished)

Defined in: node_modules/@types/node/http.d.ts:167

___

### headersSent

• **headersSent**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[headersSent](http.outgoingmessage.md#headerssent)

Defined in: node_modules/@types/node/http.d.ts:168

___

### host

• **host**: *string*

Defined in: node_modules/@types/node/http.d.ts:218

___

### method

• **method**: *string*

Defined in: node_modules/@types/node/http.d.ts:223

___

### path

• **path**: *string*

Defined in: node_modules/@types/node/http.d.ts:224

___

### protocol

• **protocol**: *string*

Defined in: node_modules/@types/node/http.d.ts:219

___

### sendDate

• **sendDate**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[sendDate](http.outgoingmessage.md#senddate)

Defined in: node_modules/@types/node/http.d.ts:163

___

### shouldKeepAlive

• **shouldKeepAlive**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[shouldKeepAlive](http.outgoingmessage.md#shouldkeepalive)

Defined in: node_modules/@types/node/http.d.ts:161

___

### socket

• **socket**: *Socket*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[socket](http.outgoingmessage.md#socket)

Defined in: node_modules/@types/node/http.d.ts:173

___

### upgrading

• **upgrading**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[upgrading](http.outgoingmessage.md#upgrading)

Defined in: node_modules/@types/node/http.d.ts:159

___

### useChunkedEncodingByDefault

• **useChunkedEncodingByDefault**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[useChunkedEncodingByDefault](http.outgoingmessage.md#usechunkedencodingbydefault)

Defined in: node_modules/@types/node/http.d.ts:162

___

### writable

• `Readonly` **writable**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[writable](http.outgoingmessage.md#writable)

Defined in: node_modules/@types/node/stream.d.ts:143

___

### writableCorked

• `Readonly` **writableCorked**: *number*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[writableCorked](http.outgoingmessage.md#writablecorked)

Defined in: node_modules/@types/node/stream.d.ts:149

___

### writableEnded

• `Readonly` **writableEnded**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[writableEnded](http.outgoingmessage.md#writableended)

Defined in: node_modules/@types/node/stream.d.ts:144

___

### writableFinished

• `Readonly` **writableFinished**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[writableFinished](http.outgoingmessage.md#writablefinished)

Defined in: node_modules/@types/node/stream.d.ts:145

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: *number*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[writableHighWaterMark](http.outgoingmessage.md#writablehighwatermark)

Defined in: node_modules/@types/node/stream.d.ts:146

___

### writableLength

• `Readonly` **writableLength**: *number*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[writableLength](http.outgoingmessage.md#writablelength)

Defined in: node_modules/@types/node/stream.d.ts:147

___

### writableObjectMode

• `Readonly` **writableObjectMode**: *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[writableObjectMode](http.outgoingmessage.md#writableobjectmode)

Defined in: node_modules/@types/node/stream.d.ts:148

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: *typeof* [*captureRejectionSymbol*](http.server.md#capturerejectionsymbol)

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[captureRejectionSymbol](http.outgoingmessage.md#capturerejectionsymbol)

Defined in: node_modules/@types/node/events.d.ts:46

___

### captureRejections

▪ `Static` **captureRejections**: *boolean*

Sets or gets the default captureRejection value for all emitters.

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[captureRejections](http.outgoingmessage.md#capturerejections)

Defined in: node_modules/@types/node/events.d.ts:52

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: *number*

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[defaultMaxListeners](http.outgoingmessage.md#defaultmaxlisteners)

Defined in: node_modules/@types/node/events.d.ts:53

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: *typeof* [*errorMonitor*](http.server.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

Inherited from: [OutgoingMessage](http.outgoingmessage.md).[errorMonitor](http.outgoingmessage.md#errormonitor)

Defined in: node_modules/@types/node/events.d.ts:45

## Methods

### \_construct

▸ `Optional` **_construct**(`callback`: (`error?`: Error) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:154

___

### \_destroy

▸ **_destroy**(`error`: Error, `callback`: (`error?`: Error) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | Error |
| `callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:155

___

### \_final

▸ **_final**(`callback`: (`error?`: Error) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:156

___

### \_write

▸ **_write**(`chunk`: *any*, `encoding`: BufferEncoding, `callback`: (`error?`: Error) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | *any* |
| `encoding` | BufferEncoding |
| `callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:152

___

### \_writev

▸ `Optional` **_writev**(`chunks`: { `chunk`: *any* ; `encoding`: BufferEncoding  }[], `callback`: (`error?`: Error) => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: *any* ; `encoding`: BufferEncoding  }[] |
| `callback` | (`error?`: Error) => *void* |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:153

___

### abort

▸ **abort**(): *void*

**`deprecated`** since v14.1.0 Use `request.destroy()` instead.

**Returns:** *void*

Defined in: node_modules/@types/node/http.d.ts:226

___

### addListener

▸ **addListener**(`event`: ``"abort"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:232

▸ **addListener**(`event`: ``"connect"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:233

▸ **addListener**(`event`: ``"continue"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:234

▸ **addListener**(`event`: ``"information"``, `listener`: (`info`: [*InformationEvent*](../interfaces/http.informationevent.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [*InformationEvent*](../interfaces/http.informationevent.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:235

▸ **addListener**(`event`: ``"response"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:236

▸ **addListener**(`event`: ``"socket"``, `listener`: (`socket`: *Socket*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: *Socket*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:237

▸ **addListener**(`event`: ``"timeout"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:238

▸ **addListener**(`event`: ``"upgrade"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.addListener

Defined in: node_modules/@types/node/http.d.ts:239

▸ **addListener**(`event`: ``"close"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.addListener

Defined in: node_modules/@types/node/http.d.ts:240

▸ **addListener**(`event`: ``"drain"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.addListener

Defined in: node_modules/@types/node/http.d.ts:241

▸ **addListener**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.addListener

Defined in: node_modules/@types/node/http.d.ts:242

▸ **addListener**(`event`: ``"finish"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.addListener

Defined in: node_modules/@types/node/http.d.ts:243

▸ **addListener**(`event`: ``"pipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.addListener

Defined in: node_modules/@types/node/http.d.ts:244

▸ **addListener**(`event`: ``"unpipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.addListener

Defined in: node_modules/@types/node/http.d.ts:245

▸ **addListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.addListener

Defined in: node_modules/@types/node/http.d.ts:246

___

### addTrailers

▸ **addTrailers**(`headers`: [*OutgoingHttpHeaders*](../interfaces/http.outgoinghttpheaders.md) \| readonly [*string*, *string*][]): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | [*OutgoingHttpHeaders*](../interfaces/http.outgoinghttpheaders.md) \| readonly [*string*, *string*][] |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:184

___

### cork

▸ **cork**(): *void*

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:163

___

### destroy

▸ **destroy**(`error?`: Error): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | Error |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:165

___

### emit

▸ **emit**(`event`: ``"close"``): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

**Returns:** *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:185

▸ **emit**(`event`: ``"drain"``): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

**Returns:** *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:186

▸ **emit**(`event`: ``"error"``, `err`: Error): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | Error |

**Returns:** *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:187

▸ **emit**(`event`: ``"finish"``): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

**Returns:** *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:188

▸ **emit**(`event`: ``"pipe"``, `src`: *Readable*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | *Readable* |

**Returns:** *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:189

▸ **emit**(`event`: ``"unpipe"``, `src`: *Readable*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | *Readable* |

**Returns:** *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:190

▸ **emit**(`event`: *string* \| *symbol*, ...`args`: *any*[]): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `...args` | *any*[] |

**Returns:** *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:191

___

### end

▸ **end**(`cb?`: () => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => *void* |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:160

▸ **end**(`chunk`: *any*, `cb?`: () => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | *any* |
| `cb?` | () => *void* |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:161

▸ **end**(`chunk`: *any*, `encoding`: BufferEncoding, `cb?`: () => *void*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | *any* |
| `encoding` | BufferEncoding |
| `cb?` | () => *void* |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:162

___

### eventNames

▸ **eventNames**(): (*string* \| *symbol*)[]

**Returns:** (*string* \| *symbol*)[]

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:87

___

### flushHeaders

▸ **flushHeaders**(): *void*

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:185

___

### getHeader

▸ **getHeader**(`name`: *string*): *string* \| *number* \| *string*[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *string* \| *number* \| *string*[]

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:179

___

### getHeaderNames

▸ **getHeaderNames**(): *string*[]

**Returns:** *string*[]

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:181

___

### getHeaders

▸ **getHeaders**(): [*OutgoingHttpHeaders*](../interfaces/http.outgoinghttpheaders.md)

**Returns:** [*OutgoingHttpHeaders*](../interfaces/http.outgoinghttpheaders.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:180

___

### getMaxListeners

▸ **getMaxListeners**(): *number*

**Returns:** *number*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:79

___

### hasHeader

▸ **hasHeader**(`name`: *string*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:182

___

### listenerCount

▸ **listenerCount**(`event`: *string* \| *symbol*): *number*

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:83

___

### listeners

▸ **listeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:80

___

### off

▸ **off**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:76

___

### on

▸ **on**(`event`: ``"abort"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:248

▸ **on**(`event`: ``"connect"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:249

▸ **on**(`event`: ``"continue"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:250

▸ **on**(`event`: ``"information"``, `listener`: (`info`: [*InformationEvent*](../interfaces/http.informationevent.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [*InformationEvent*](../interfaces/http.informationevent.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:251

▸ **on**(`event`: ``"response"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:252

▸ **on**(`event`: ``"socket"``, `listener`: (`socket`: *Socket*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: *Socket*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:253

▸ **on**(`event`: ``"timeout"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:254

▸ **on**(`event`: ``"upgrade"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.on

Defined in: node_modules/@types/node/http.d.ts:255

▸ **on**(`event`: ``"close"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.on

Defined in: node_modules/@types/node/http.d.ts:256

▸ **on**(`event`: ``"drain"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.on

Defined in: node_modules/@types/node/http.d.ts:257

▸ **on**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.on

Defined in: node_modules/@types/node/http.d.ts:258

▸ **on**(`event`: ``"finish"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.on

Defined in: node_modules/@types/node/http.d.ts:259

▸ **on**(`event`: ``"pipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.on

Defined in: node_modules/@types/node/http.d.ts:260

▸ **on**(`event`: ``"unpipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.on

Defined in: node_modules/@types/node/http.d.ts:261

▸ **on**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.on

Defined in: node_modules/@types/node/http.d.ts:262

___

### onSocket

▸ **onSocket**(`socket`: *Socket*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `socket` | *Socket* |

**Returns:** *void*

Defined in: node_modules/@types/node/http.d.ts:227

___

### once

▸ **once**(`event`: ``"abort"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:264

▸ **once**(`event`: ``"connect"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:265

▸ **once**(`event`: ``"continue"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:266

▸ **once**(`event`: ``"information"``, `listener`: (`info`: [*InformationEvent*](../interfaces/http.informationevent.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [*InformationEvent*](../interfaces/http.informationevent.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:267

▸ **once**(`event`: ``"response"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:268

▸ **once**(`event`: ``"socket"``, `listener`: (`socket`: *Socket*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: *Socket*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:269

▸ **once**(`event`: ``"timeout"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:270

▸ **once**(`event`: ``"upgrade"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.once

Defined in: node_modules/@types/node/http.d.ts:271

▸ **once**(`event`: ``"close"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.once

Defined in: node_modules/@types/node/http.d.ts:272

▸ **once**(`event`: ``"drain"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.once

Defined in: node_modules/@types/node/http.d.ts:273

▸ **once**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.once

Defined in: node_modules/@types/node/http.d.ts:274

▸ **once**(`event`: ``"finish"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.once

Defined in: node_modules/@types/node/http.d.ts:275

▸ **once**(`event`: ``"pipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.once

Defined in: node_modules/@types/node/http.d.ts:276

▸ **once**(`event`: ``"unpipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.once

Defined in: node_modules/@types/node/http.d.ts:277

▸ **once**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.once

Defined in: node_modules/@types/node/http.d.ts:278

___

### pipe

▸ **pipe**<T\>(`destination`: T, `options?`: { `end?`: *boolean*  }): T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | *WritableStream*<T\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | T |
| `options?` | *object* |
| `options.end?` | *boolean* |

**Returns:** T

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:6

___

### prependListener

▸ **prependListener**(`event`: ``"abort"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:280

▸ **prependListener**(`event`: ``"connect"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:281

▸ **prependListener**(`event`: ``"continue"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:282

▸ **prependListener**(`event`: ``"information"``, `listener`: (`info`: [*InformationEvent*](../interfaces/http.informationevent.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [*InformationEvent*](../interfaces/http.informationevent.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:283

▸ **prependListener**(`event`: ``"response"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:284

▸ **prependListener**(`event`: ``"socket"``, `listener`: (`socket`: *Socket*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: *Socket*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:285

▸ **prependListener**(`event`: ``"timeout"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:286

▸ **prependListener**(`event`: ``"upgrade"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependListener

Defined in: node_modules/@types/node/http.d.ts:287

▸ **prependListener**(`event`: ``"close"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependListener

Defined in: node_modules/@types/node/http.d.ts:288

▸ **prependListener**(`event`: ``"drain"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependListener

Defined in: node_modules/@types/node/http.d.ts:289

▸ **prependListener**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependListener

Defined in: node_modules/@types/node/http.d.ts:290

▸ **prependListener**(`event`: ``"finish"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependListener

Defined in: node_modules/@types/node/http.d.ts:291

▸ **prependListener**(`event`: ``"pipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependListener

Defined in: node_modules/@types/node/http.d.ts:292

▸ **prependListener**(`event`: ``"unpipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependListener

Defined in: node_modules/@types/node/http.d.ts:293

▸ **prependListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependListener

Defined in: node_modules/@types/node/http.d.ts:294

___

### prependOnceListener

▸ **prependOnceListener**(`event`: ``"abort"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"abort"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:296

▸ **prependOnceListener**(`event`: ``"connect"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"connect"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:297

▸ **prependOnceListener**(`event`: ``"continue"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"continue"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:298

▸ **prependOnceListener**(`event`: ``"information"``, `listener`: (`info`: [*InformationEvent*](../interfaces/http.informationevent.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"information"`` |
| `listener` | (`info`: [*InformationEvent*](../interfaces/http.informationevent.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:299

▸ **prependOnceListener**(`event`: ``"response"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md)) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"response"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md)) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:300

▸ **prependOnceListener**(`event`: ``"socket"``, `listener`: (`socket`: *Socket*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"socket"`` |
| `listener` | (`socket`: *Socket*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:301

▸ **prependOnceListener**(`event`: ``"timeout"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"timeout"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:302

▸ **prependOnceListener**(`event`: ``"upgrade"``, `listener`: (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"upgrade"`` |
| `listener` | (`response`: [*IncomingMessage*](http.incomingmessage.md), `socket`: *Socket*, `head`: *Buffer*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependOnceListener

Defined in: node_modules/@types/node/http.d.ts:303

▸ **prependOnceListener**(`event`: ``"close"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependOnceListener

Defined in: node_modules/@types/node/http.d.ts:304

▸ **prependOnceListener**(`event`: ``"drain"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependOnceListener

Defined in: node_modules/@types/node/http.d.ts:305

▸ **prependOnceListener**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependOnceListener

Defined in: node_modules/@types/node/http.d.ts:306

▸ **prependOnceListener**(`event`: ``"finish"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependOnceListener

Defined in: node_modules/@types/node/http.d.ts:307

▸ **prependOnceListener**(`event`: ``"pipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependOnceListener

Defined in: node_modules/@types/node/http.d.ts:308

▸ **prependOnceListener**(`event`: ``"unpipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependOnceListener

Defined in: node_modules/@types/node/http.d.ts:309

▸ **prependOnceListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: OutgoingMessage.prependOnceListener

Defined in: node_modules/@types/node/http.d.ts:310

___

### rawListeners

▸ **rawListeners**(`event`: *string* \| *symbol*): Function[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:81

___

### removeAllListeners

▸ **removeAllListeners**(`event?`: *string* \| *symbol*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | *string* \| *symbol* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:77

___

### removeHeader

▸ **removeHeader**(`name`: *string*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:183

___

### removeListener

▸ **removeListener**(`event`: ``"close"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:225

▸ **removeListener**(`event`: ``"drain"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:226

▸ **removeListener**(`event`: ``"error"``, `listener`: (`err`: Error) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: Error) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:227

▸ **removeListener**(`event`: ``"finish"``, `listener`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:228

▸ **removeListener**(`event`: ``"pipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:229

▸ **removeListener**(`event`: ``"unpipe"``, `listener`: (`src`: *Readable*) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: *Readable*) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:230

▸ **removeListener**(`event`: *string* \| *symbol*, `listener`: (...`args`: *any*[]) => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | *string* \| *symbol* |
| `listener` | (...`args`: *any*[]) => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:231

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`: BufferEncoding): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | BufferEncoding |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:159

___

### setHeader

▸ **setHeader**(`name`: *string*, `value`: *string* \| *number* \| readonly *string*[]): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `value` | *string* \| *number* \| readonly *string*[] |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:178

___

### setMaxListeners

▸ **setMaxListeners**(`n`: *number*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:78

___

### setNoDelay

▸ **setNoDelay**(`noDelay?`: *boolean*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `noDelay?` | *boolean* |

**Returns:** *void*

Defined in: node_modules/@types/node/http.d.ts:229

___

### setSocketKeepAlive

▸ **setSocketKeepAlive**(`enable?`: *boolean*, `initialDelay?`: *number*): *void*

#### Parameters

| Name | Type |
| :------ | :------ |
| `enable?` | *boolean* |
| `initialDelay?` | *number* |

**Returns:** *void*

Defined in: node_modules/@types/node/http.d.ts:230

___

### setTimeout

▸ **setTimeout**(`timeout`: *number*, `callback?`: () => *void*): [*ClientRequest*](http.clientrequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeout` | *number* |
| `callback?` | () => *void* |

**Returns:** [*ClientRequest*](http.clientrequest.md)

Overrides: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/http.d.ts:228

___

### uncork

▸ **uncork**(): *void*

**Returns:** *void*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:164

___

### write

▸ **write**(`chunk`: *any*, `cb?`: (`error`: Error) => *void*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | *any* |
| `cb?` | (`error`: Error) => *void* |

**Returns:** *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:157

▸ **write**(`chunk`: *any*, `encoding`: BufferEncoding, `cb?`: (`error`: Error) => *void*): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | *any* |
| `encoding` | BufferEncoding |
| `cb?` | (`error`: Error) => *void* |

**Returns:** *boolean*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/stream.d.ts:158

___

### getEventListener

▸ `Static` **getEventListener**(`emitter`: *EventEmitter* \| DOMEventTarget, `name`: *string* \| *symbol*): Function[]

Returns a list listener for a specific emitter event name.

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | *EventEmitter* \| DOMEventTarget |
| `name` | *string* \| *symbol* |

**Returns:** Function[]

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:34

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`: *EventEmitter*, `event`: *string* \| *symbol*): *number*

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | *EventEmitter* |
| `event` | *string* \| *symbol* |

**Returns:** *number*

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:30

___

### on

▸ `Static` **on**(`emitter`: *EventEmitter*, `event`: *string*, `options?`: StaticEventEmitterOptions): *AsyncIterableIterator*<any\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | *EventEmitter* |
| `event` | *string* |
| `options?` | StaticEventEmitterOptions |

**Returns:** *AsyncIterableIterator*<any\>

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:27

___

### once

▸ `Static` **once**(`emitter`: *NodeEventTarget*, `event`: *string* \| *symbol*, `options?`: StaticEventEmitterOptions): *Promise*<any[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | *NodeEventTarget* |
| `event` | *string* \| *symbol* |
| `options?` | StaticEventEmitterOptions |

**Returns:** *Promise*<any[]\>

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:25

▸ `Static` **once**(`emitter`: DOMEventTarget, `event`: *string*, `options?`: StaticEventEmitterOptions): *Promise*<any[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | DOMEventTarget |
| `event` | *string* |
| `options?` | StaticEventEmitterOptions |

**Returns:** *Promise*<any[]\>

Inherited from: [OutgoingMessage](http.outgoingmessage.md)

Defined in: node_modules/@types/node/events.d.ts:26
