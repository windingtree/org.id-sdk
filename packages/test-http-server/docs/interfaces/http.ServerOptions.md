[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / ServerOptions

# Interface: ServerOptions

[http](../modules/http.md).ServerOptions

## Table of contents

### Properties

- [IncomingMessage](http.ServerOptions.md#incomingmessage)
- [ServerResponse](http.ServerOptions.md#serverresponse)
- [insecureHTTPParser](http.ServerOptions.md#insecurehttpparser)
- [maxHeaderSize](http.ServerOptions.md#maxheadersize)

## Properties

### IncomingMessage

• `Optional` **IncomingMessage**: typeof [`IncomingMessage`](../classes/http.IncomingMessage.md)

#### Defined in

node_modules/@types/node/http.d.ts:141

___

### ServerResponse

• `Optional` **ServerResponse**: typeof [`ServerResponse`](../classes/http.ServerResponse.md)

#### Defined in

node_modules/@types/node/http.d.ts:142

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

Use an insecure HTTP parser that accepts invalid HTTP headers when true.
Using the insecure parser should be avoided.
See --insecure-http-parser for more information.

**`default`** false

#### Defined in

node_modules/@types/node/http.d.ts:156

___

### maxHeaderSize

• `Optional` **maxHeaderSize**: `number`

Optionally overrides the value of
`--max-http-header-size` for requests received by this server, i.e.
the maximum length of request headers in bytes.

**`default`** 8192

#### Defined in

node_modules/@types/node/http.d.ts:149
