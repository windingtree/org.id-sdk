[@windingtree/org.id-test-helpers](../README.md) / [http](../modules/http.md) / HttpBase

# Interface: HttpBase

[http](../modules/http.md).HttpBase

## Hierarchy

- **HttpBase**

  ↳ [Server](../classes/http.server.md)

## Table of contents

### Properties

- [headersTimeout](http.httpbase.md#headerstimeout)
- [keepAliveTimeout](http.httpbase.md#keepalivetimeout)
- [maxHeadersCount](http.httpbase.md#maxheaderscount)
- [requestTimeout](http.httpbase.md#requesttimeout)
- [timeout](http.httpbase.md#timeout)

### Methods

- [setTimeout](http.httpbase.md#settimeout)

## Properties

### headersTimeout

• **headersTimeout**: `number`

Limit the amount of time the parser will wait to receive the complete HTTP headers.

**`default`** 60000
[https://nodejs.org/api/http.html#http_server_headerstimeout](https://nodejs.org/api/http.html#http_server_headerstimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:141

___

### keepAliveTimeout

• **keepAliveTimeout**: `number`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:142

___

### maxHeadersCount

• **maxHeadersCount**: ``null`` \| `number`

Limits maximum incoming headers count. If set to 0, no limit will be applied.

**`default`** 2000
[https://nodejs.org/api/http.html#http_server_maxheaderscount](https://nodejs.org/api/http.html#http_server_maxheaderscount)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:134

___

### requestTimeout

• **requestTimeout**: `number`

Sets the timeout value in milliseconds for receiving the entire request from the client.

**`default`** 0
[https://nodejs.org/api/http.html#http_server_requesttimeout](https://nodejs.org/api/http.html#http_server_requesttimeout)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:148

___

### timeout

• **timeout**: `number`

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:135

## Methods

### setTimeout

▸ **setTimeout**(`msecs?`, `callback?`): [HttpBase](http.httpbase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msecs?` | `number` |
| `callback?` | () => `void` |

#### Returns

[HttpBase](http.httpbase.md)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:127

▸ **setTimeout**(`callback`): [HttpBase](http.httpbase.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

[HttpBase](http.httpbase.md)

#### Defined in

test-helpers/node_modules/@types/node/http.d.ts:128
