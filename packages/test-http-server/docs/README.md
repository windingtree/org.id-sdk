@windingtree/org.id-test-http-server

# @windingtree/org.id-test-http-server

## Table of contents

### Namespaces

- [http](modules/http.md)

### Classes

- [HttpFileServer](classes/httpfileserver.md)

### Type aliases

- [AllowedMimes](README.md#allowedmimes)
- [File](README.md#file)
- [Files](README.md#files)
- [MimeKeys](README.md#mimekeys)
- [Mimes](README.md#mimes)

## Type aliases

### AllowedMimes

Ƭ **AllowedMimes**: ``"text/html"`` \| ``"text/plain"`` \| ``"application/json"``

#### Defined in

[src/index.ts:11](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L11)

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

[src/index.ts:17](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L17)

___

### Files

Ƭ **Files**: `Object`

#### Index signature

▪ [path: `string`]: [File](README.md#file)

#### Defined in

[src/index.ts:23](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L23)

___

### MimeKeys

Ƭ **MimeKeys**: ``"html"`` \| ``"text"`` \| ``"json"``

#### Defined in

[src/index.ts:9](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L9)

___

### Mimes

Ƭ **Mimes**: { [key in MimeKeys]: AllowedMimes}

#### Defined in

[src/index.ts:13](https://github.com/windingtree/org.id-sdk/blob/60e34e2/packages/test-http-server/src/index.ts#L13)
