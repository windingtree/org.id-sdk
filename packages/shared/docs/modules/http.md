[@windingtree/org.id-utils](../docs/modules.md) / [Exports](../modules.md) / http

# Namespace: http

## Table of contents

### Type aliases

- [Code](http.md#code)
- [HttpMethods](http.md#httpmethods)
- [HttpStatusCodes](http.md#httpstatuscodes)
- [HttpStatuses](http.md#httpstatuses)
- [Method](http.md#method)
- [Status](http.md#status)

### Variables

- [HTTP\_METHODS](http.md#http_methods)
- [HTTP\_STATUS](http.md#http_status)
- [HTTP\_STATUS\_CODES](http.md#http_status_codes)

## Type aliases

### Code

Ƭ **Code**: ``200`` \| ``400`` \| ``401`` \| ``403`` \| ``404`` \| ``405`` \| ``500`` \| ``501`` \| ``502`` \| ``503``

Defined in: [src/http/codes.ts:5](https://github.com/windingtree/org.id-sdk/blob/07aa4fa/packages/shared/src/http/codes.ts#L5)

___

### HttpMethods

Ƭ **HttpMethods**: { [key in Method]: Method}

Defined in: [src/http/codes.ts:13](https://github.com/windingtree/org.id-sdk/blob/07aa4fa/packages/shared/src/http/codes.ts#L13)

___

### HttpStatusCodes

Ƭ **HttpStatusCodes**: { [key in Status]: Code}

Defined in: [src/http/codes.ts:17](https://github.com/windingtree/org.id-sdk/blob/07aa4fa/packages/shared/src/http/codes.ts#L17)

___

### HttpStatuses

Ƭ **HttpStatuses**: { [key in Status]: Status}

Defined in: [src/http/codes.ts:9](https://github.com/windingtree/org.id-sdk/blob/07aa4fa/packages/shared/src/http/codes.ts#L9)

___

### Method

Ƭ **Method**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"DELETE"`` \| ``"PATCH"``

Defined in: [src/http/codes.ts:7](https://github.com/windingtree/org.id-sdk/blob/07aa4fa/packages/shared/src/http/codes.ts#L7)

___

### Status

Ƭ **Status**: ``"OK"`` \| ``"BAD_REQUEST"`` \| ``"UNAUTHORIZED"`` \| ``"FORBIDDEN"`` \| ``"NOT_FOUND"`` \| ``"METHOD_NOT_ALLOWED"`` \| ``"INTERNAL_SERVER_ERROR"`` \| ``"NOT_IMPLEMENTED"`` \| ``"BAD_GATEWAY"`` \| ``"SERVICE_UNAVAILABLE"``

Defined in: [src/http/codes.ts:1](https://github.com/windingtree/org.id-sdk/blob/07aa4fa/packages/shared/src/http/codes.ts#L1)

## Variables

### HTTP\_METHODS

• `Const` **HTTP\_METHODS**: [*HttpMethods*](http.md#httpmethods)

Defined in: [src/http/codes.ts:50](https://github.com/windingtree/org.id-sdk/blob/07aa4fa/packages/shared/src/http/codes.ts#L50)

___

### HTTP\_STATUS

• `Const` **HTTP\_STATUS**: [*HttpStatuses*](http.md#httpstatuses)

Defined in: [src/http/codes.ts:22](https://github.com/windingtree/org.id-sdk/blob/07aa4fa/packages/shared/src/http/codes.ts#L22)

___

### HTTP\_STATUS\_CODES

• `Const` **HTTP\_STATUS\_CODES**: [*HttpStatusCodes*](http.md#httpstatuscodes)

Defined in: [src/http/codes.ts:36](https://github.com/windingtree/org.id-sdk/blob/07aa4fa/packages/shared/src/http/codes.ts#L36)
