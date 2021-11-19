[@windingtree/org.id-utils](../README.md) / http

# Namespace: http

## Table of contents

### Interfaces

- [ExtraHeaders](../interfaces/http.ExtraHeaders.md)

### Type aliases

- [Code](http.md#code)
- [HttpStatusCodes](http.md#httpstatuscodes)
- [HttpStatuses](http.md#httpstatuses)
- [Method](http.md#method)
- [Methods](http.md#methods)
- [Status](http.md#status)

### Variables

- [HTTP\_METHODS](http.md#http_methods)
- [HTTP\_STATUS](http.md#http_status)
- [HTTP\_STATUS\_CODES](http.md#http_status_codes)

### Functions

- [createAuthBearerHeader](http.md#createauthbearerheader)
- [request](http.md#request)

## Type aliases

### Code

Ƭ **Code**: ``200`` \| ``400`` \| ``401`` \| ``403`` \| ``404`` \| ``405`` \| ``500`` \| ``501`` \| ``502`` \| ``503``

#### Defined in

[src/http/codes.ts:13](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/codes.ts#L13)

___

### HttpStatusCodes

Ƭ **HttpStatusCodes**: { [key in Status]: Code }

#### Defined in

[src/http/codes.ts:35](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/codes.ts#L35)

___

### HttpStatuses

Ƭ **HttpStatuses**: { [key in Status]: Status }

#### Defined in

[src/http/codes.ts:27](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/codes.ts#L27)

___

### Method

Ƭ **Method**: ``"get"`` \| ``"GET"`` \| ``"delete"`` \| ``"DELETE"`` \| ``"head"`` \| ``"HEAD"`` \| ``"options"`` \| ``"OPTIONS"`` \| ``"post"`` \| ``"POST"`` \| ``"put"`` \| ``"PUT"`` \| ``"patch"`` \| ``"PATCH"`` \| ``"purge"`` \| ``"PURGE"`` \| ``"link"`` \| ``"LINK"`` \| ``"unlink"`` \| ``"UNLINK"``

#### Defined in

[src/http/codes.ts:15](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/codes.ts#L15)

___

### Methods

Ƭ **Methods**: { [key in Method]: Method }

#### Defined in

[src/http/codes.ts:31](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/codes.ts#L31)

___

### Status

Ƭ **Status**: ``"OK"`` \| ``"BAD_REQUEST"`` \| ``"UNAUTHORIZED"`` \| ``"FORBIDDEN"`` \| ``"NOT_FOUND"`` \| ``"METHOD_NOT_ALLOWED"`` \| ``"INTERNAL_SERVER_ERROR"`` \| ``"NOT_IMPLEMENTED"`` \| ``"BAD_GATEWAY"`` \| ``"SERVICE_UNAVAILABLE"``

#### Defined in

[src/http/codes.ts:1](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/codes.ts#L1)

## Variables

### HTTP\_METHODS

• **HTTP\_METHODS**: [`Methods`](http.md#methods)

#### Defined in

[src/http/codes.ts:68](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/codes.ts#L68)

___

### HTTP\_STATUS

• **HTTP\_STATUS**: [`HttpStatuses`](http.md#httpstatuses)

#### Defined in

[src/http/codes.ts:40](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/codes.ts#L40)

___

### HTTP\_STATUS\_CODES

• **HTTP\_STATUS\_CODES**: [`HttpStatusCodes`](http.md#httpstatuscodes)

#### Defined in

[src/http/codes.ts:54](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/codes.ts#L54)

## Functions

### createAuthBearerHeader

▸ `Const` **createAuthBearerHeader**(`jwt`): [`ExtraHeaders`](../interfaces/http.ExtraHeaders.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwt` | `string` |

#### Returns

[`ExtraHeaders`](../interfaces/http.ExtraHeaders.md)

#### Defined in

[src/http/request.ts:20](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/request.ts#L20)

___

### request

▸ `Const` **request**(`url`, `method`, `data?`, `extraHeaders?`, `timeout?`, `transformResponse?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `string` | `undefined` |
| `method` | [`Method`](http.md#method) | `undefined` |
| `data?` | `unknown` | `undefined` |
| `extraHeaders?` | [`ExtraHeaders`](../interfaces/http.ExtraHeaders.md) | `undefined` |
| `timeout` | `number` | `10000` |
| `transformResponse?` | `AxiosResponseTransformer` | `undefined` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/http/request.ts:25](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/http/request.ts#L25)
