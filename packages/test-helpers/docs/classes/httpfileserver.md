[@windingtree/org.id-test-helpers](../README.md) / HttpFileServer

# Class: HttpFileServer

## Table of contents

### Constructors

- [constructor](httpfileserver.md#constructor)

### Properties

- [baseUri](httpfileserver.md#baseuri)
- [files](httpfileserver.md#files)
- [mime](httpfileserver.md#mime)
- [port](httpfileserver.md#port)
- [server](httpfileserver.md#server)

### Methods

- [addFile](httpfileserver.md#addfile)
- [close](httpfileserver.md#close)
- [removeFile](httpfileserver.md#removefile)
- [reqHandler](httpfileserver.md#reqhandler)
- [start](httpfileserver.md#start)

## Constructors

### constructor

• **new HttpFileServer**()

## Properties

### baseUri

• **baseUri**: `string`

#### Defined in

[test-helpers/src/httpServer.ts:33](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L33)

___

### files

• **files**: [Files](../README.md#files) = {}

#### Defined in

[test-helpers/src/httpServer.ts:40](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L40)

___

### mime

• **mime**: [Mimes](../README.md#mimes)

#### Defined in

[test-helpers/src/httpServer.ts:34](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L34)

___

### port

• **port**: `number`

#### Defined in

[test-helpers/src/httpServer.ts:32](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L32)

___

### server

• **server**: ``null`` \| [Server](http.server.md) = null

#### Defined in

[test-helpers/src/httpServer.ts:39](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L39)

## Methods

### addFile

▸ **addFile**(`file`): [File](../README.md#file)

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [File](../README.md#file) |

#### Returns

[File](../README.md#file)

#### Defined in

[test-helpers/src/httpServer.ts:82](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L82)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[test-helpers/src/httpServer.ts:57](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L57)

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

[test-helpers/src/httpServer.ts:104](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L104)

___

### reqHandler

▸ **reqHandler**(`request`, `res`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [ClientRequest](http.clientrequest.md) |
| `res` | [ServerResponse](http.serverresponse.md) |

#### Returns

`void`

#### Defined in

[test-helpers/src/httpServer.ts:65](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L65)

___

### start

▸ **start**(): `Promise`<[Server](http.server.md)\>

#### Returns

`Promise`<[Server](http.server.md)\>

#### Defined in

[test-helpers/src/httpServer.ts:42](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L42)
