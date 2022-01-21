[@windingtree/org.id-test-http-server](../README.md) / HttpFileServer

# Class: HttpFileServer

## Table of contents

### Constructors

- [constructor](HttpFileServer.md#constructor)

### Properties

- [baseUri](HttpFileServer.md#baseuri)
- [files](HttpFileServer.md#files)
- [mime](HttpFileServer.md#mime)
- [port](HttpFileServer.md#port)
- [server](HttpFileServer.md#server)

### Methods

- [addFile](HttpFileServer.md#addfile)
- [close](HttpFileServer.md#close)
- [removeFile](HttpFileServer.md#removefile)
- [reqHandler](HttpFileServer.md#reqhandler)
- [start](HttpFileServer.md#start)

## Constructors

### constructor

• **new HttpFileServer**(`shift?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `shift` | `number` | `0` |

#### Defined in

[src/index.ts:42](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L42)

## Properties

### baseUri

• **baseUri**: `string`

#### Defined in

[src/index.ts:33](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L33)

___

### files

• **files**: [`Files`](../README.md#files) = `{}`

#### Defined in

[src/index.ts:40](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L40)

___

### mime

• **mime**: [`Mimes`](../README.md#mimes)

#### Defined in

[src/index.ts:34](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L34)

___

### port

• **port**: `number`

#### Defined in

[src/index.ts:32](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L32)

___

### server

• **server**: ``null`` \| [`Server`](http.Server.md) = `null`

#### Defined in

[src/index.ts:39](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L39)

## Methods

### addFile

▸ **addFile**(`file`): [`File`](../README.md#file)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`File`](../README.md#file) |

#### Returns

[`File`](../README.md#file)

#### Defined in

[src/index.ts:93](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L93)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/index.ts:68](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L68)

___

### removeFile

▸ **removeFile**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Defined in

[src/index.ts:115](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L115)

___

### reqHandler

▸ **reqHandler**(`request`, `res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`ClientRequest`](http.ClientRequest.md) |
| `res` | [`ServerResponse`](http.ServerResponse.md) |

#### Returns

`void`

#### Defined in

[src/index.ts:76](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L76)

___

### start

▸ **start**(): `Promise`<[`Server`](http.Server.md)\>

#### Returns

`Promise`<[`Server`](http.Server.md)\>

#### Defined in

[src/index.ts:48](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/test-http-server/src/index.ts#L48)
