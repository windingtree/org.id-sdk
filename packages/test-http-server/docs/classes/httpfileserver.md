[@windingtree/org.id-test-http-server](../README.md) / HttpFileServer

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

[src/index.ts:33](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L33)

___

### files

• **files**: [Files](../README.md#files) = {}

#### Defined in

[src/index.ts:40](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L40)

___

### mime

• **mime**: [Mimes](../README.md#mimes)

#### Defined in

[src/index.ts:34](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L34)

___

### port

• **port**: `number`

#### Defined in

[src/index.ts:32](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L32)

___

### server

• **server**: ``null`` \| [Server](http.server.md) = null

#### Defined in

[src/index.ts:39](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L39)

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

[src/index.ts:82](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L82)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[src/index.ts:57](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L57)

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

[src/index.ts:104](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L104)

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

[src/index.ts:65](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L65)

___

### start

▸ **start**(): `Promise`<[Server](http.server.md)\>

#### Returns

`Promise`<[Server](http.server.md)\>

#### Defined in

[src/index.ts:42](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L42)
