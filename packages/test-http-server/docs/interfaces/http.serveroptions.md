[@windingtree/org.id-test-http-server](../README.md) / [http](../modules/http.md) / ServerOptions

# Interface: ServerOptions

[http](../modules/http.md).ServerOptions

## Table of contents

### Properties

- [IncomingMessage](http.serveroptions.md#incomingmessage)
- [ServerResponse](http.serveroptions.md#serverresponse)
- [insecureHTTPParser](http.serveroptions.md#insecurehttpparser)
- [maxHeaderSize](http.serveroptions.md#maxheadersize)

## Properties

### IncomingMessage

• `Optional` **IncomingMessage**: typeof [IncomingMessage](../classes/http.incomingmessage.md)

#### Defined in

node_modules/@types/node/http.d.ts:106

___

### ServerResponse

• `Optional` **ServerResponse**: typeof [ServerResponse](../classes/http.serverresponse.md)

#### Defined in

node_modules/@types/node/http.d.ts:107

___

### insecureHTTPParser

• `Optional` **insecureHTTPParser**: `boolean`

Use an insecure HTTP parser that accepts invalid HTTP headers when true.
Using the insecure parser should be avoided.
See --insecure-http-parser for more information.

**`default`** false

#### Defined in

node_modules/@types/node/http.d.ts:121

___

### maxHeaderSize

• `Optional` **maxHeaderSize**: `number`

Optionally overrides the value of
`--max-http-header-size` for requests received by this server, i.e.
the maximum length of request headers in bytes.

**`default`** 8192

#### Defined in

node_modules/@types/node/http.d.ts:114
