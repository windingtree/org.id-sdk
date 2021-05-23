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

- [OrgIdSetup](interfaces/orgidsetup.md)

### Type aliases

- [AllowedMimes](README.md#allowedmimes)
- [ContractObject](README.md#contractobject)
- [File](README.md#file)
- [Files](README.md#files)
- [MimeKeys](README.md#mimekeys)
- [Mimes](README.md#mimes)

### Variables

- [defaults](README.md#defaults)

### Functions

- [ganache](README.md#ganache)
- [generateSalt](README.md#generatesalt)
- [orgIdSetup](README.md#orgidsetup)

## Type aliases

### AllowedMimes

Ƭ **AllowedMimes**: ``"text/html"`` \| ``"text/plain"`` \| ``"application/json"``

Defined in: [src/httpServer.ts:11](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/httpServer.ts#L11)

___

### ContractObject

Ƭ **ContractObject**: *any*

Defined in: [src/orgIdSetup.ts:17](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/orgIdSetup.ts#L17)

___

### File

Ƭ **File**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `content` | *string* \| *Record*<string, unknown\> |
| `path` | *string* |
| `type` | [*MimeKeys*](README.md#mimekeys) |

Defined in: [src/httpServer.ts:17](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/httpServer.ts#L17)

___

### Files

Ƭ **Files**: *object*

#### Type declaration

Defined in: [src/httpServer.ts:23](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/httpServer.ts#L23)

___

### MimeKeys

Ƭ **MimeKeys**: ``"html"`` \| ``"text"`` \| ``"json"``

Defined in: [src/httpServer.ts:9](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/httpServer.ts#L9)

___

### Mimes

Ƭ **Mimes**: { [key in MimeKeys]: AllowedMimes}

Defined in: [src/httpServer.ts:13](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/httpServer.ts#L13)

## Variables

### defaults

• `Const` **defaults**: [*IServerOptions*](interfaces/ganache.iserveroptions.md)

Defined in: [src/ganache.ts:46](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/ganache.ts#L46)

## Functions

### ganache

▸ `Const` **ganache**(`options?`: [*IServerOptions*](interfaces/ganache.iserveroptions.md)): *Promise*<[*DevelopmentServer*](classes/developmentserver.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [*IServerOptions*](interfaces/ganache.iserveroptions.md) |

**Returns:** *Promise*<[*DevelopmentServer*](classes/developmentserver.md)\>

Defined in: [src/ganache.ts:54](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/ganache.ts#L54)

___

### generateSalt

▸ `Const` **generateSalt**(): *string*

**Returns:** *string*

Defined in: [src/orgIdSetup.ts:19](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/orgIdSetup.ts#L19)

___

### orgIdSetup

▸ `Const` **orgIdSetup**(): *Promise*<[*OrgIdSetup*](interfaces/orgidsetup.md)\>

**Returns:** *Promise*<[*OrgIdSetup*](interfaces/orgidsetup.md)\>

Defined in: [src/orgIdSetup.ts:43](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/orgIdSetup.ts#L43)
