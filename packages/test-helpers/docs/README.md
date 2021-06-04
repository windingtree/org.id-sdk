@windingtree/org.id-test-helpers

# @windingtree/org.id-test-helpers

## Table of contents

### Namespaces

- [Ganache](modules/ganache.md)
- [http](modules/http.md)

### Classes

- [DevelopmentServer](classes/developmentserver.md)
- [HttpFileServer](classes/httpfileserver.md)

### Interfaces

- [ContractObject](interfaces/contractobject.md)
- [OrgIdSetup](interfaces/orgidsetup.md)

### Type aliases

- [AllowedMimes](README.md#allowedmimes)
- [File](README.md#file)
- [Files](README.md#files)
- [MimeKeys](README.md#mimekeys)
- [Mimes](README.md#mimes)

### Variables

- [defaults](README.md#defaults)

### Functions

- [buildOrgJson](README.md#buildorgjson)
- [ganache](README.md#ganache)
- [generateOrgIdHash](README.md#generateorgidhash)
- [generateSalt](README.md#generatesalt)
- [orgIdSetup](README.md#orgidsetup)
- [registerOrgId](README.md#registerorgid)

## Type aliases

### AllowedMimes

Ƭ **AllowedMimes**: ``"text/html"`` \| ``"text/plain"`` \| ``"application/json"``

#### Defined in

[test-helpers/src/httpServer.ts:11](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L11)

___

### File

Ƭ **File**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content` | `string` \| `Record`<string, unknown\> |
| `path` | `string` |
| `type` | [MimeKeys](README.md#mimekeys) |

#### Defined in

[test-helpers/src/httpServer.ts:17](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L17)

___

### Files

Ƭ **Files**: `Object`

#### Index signature

▪ [path: `string`]: [File](README.md#file)

#### Defined in

[test-helpers/src/httpServer.ts:23](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L23)

___

### MimeKeys

Ƭ **MimeKeys**: ``"html"`` \| ``"text"`` \| ``"json"``

#### Defined in

[test-helpers/src/httpServer.ts:9](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L9)

___

### Mimes

Ƭ **Mimes**: { [key in MimeKeys]: AllowedMimes}

#### Defined in

[test-helpers/src/httpServer.ts:13](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/httpServer.ts#L13)

## Variables

### defaults

• `Const` **defaults**: [IServerOptions](interfaces/ganache.iserveroptions.md)

#### Defined in

[test-helpers/src/ganache.ts:46](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/ganache.ts#L46)

## Functions

### buildOrgJson

▸ `Const` **buildOrgJson**(`did`, `keyPair`): `Promise`<ORGJSON\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `keyPair` | `KeyPair` |

#### Returns

`Promise`<ORGJSON\>

#### Defined in

[test-helpers/src/orgIdSetup.ts:41](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L41)

___

### ganache

▸ `Const` **ganache**(`options?`): `Promise`<[DevelopmentServer](classes/developmentserver.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [IServerOptions](interfaces/ganache.iserveroptions.md) |

#### Returns

`Promise`<[DevelopmentServer](classes/developmentserver.md)\>

#### Defined in

[test-helpers/src/ganache.ts:54](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/ganache.ts#L54)

___

### generateOrgIdHash

▸ `Const` **generateOrgIdHash**(`address`, `salt`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `salt` | `string` |

#### Returns

`string`

#### Defined in

utils/dist/common/index.d.ts:2

___

### generateSalt

▸ `Const` **generateSalt**(): `string`

#### Returns

`string`

#### Defined in

utils/dist/common/index.d.ts:1

___

### orgIdSetup

▸ `Const` **orgIdSetup**(): `Promise`<[OrgIdSetup](interfaces/orgidsetup.md)\>

#### Returns

`Promise`<[OrgIdSetup](interfaces/orgidsetup.md)\>

#### Defined in

[test-helpers/src/orgIdSetup.ts:80](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L80)

___

### registerOrgId

▸ `Const` **registerOrgId**(`contract`, `httpServer`, `owner`, `orgJsonFile?`): `Promise`<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | [ContractObject](interfaces/contractobject.md) |
| `httpServer` | [HttpFileServer](classes/httpfileserver.md) |
| `owner` | `string` |
| `orgJsonFile?` | [File](README.md#file) |

#### Returns

`Promise`<string\>

#### Defined in

[test-helpers/src/orgIdSetup.ts:56](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L56)
