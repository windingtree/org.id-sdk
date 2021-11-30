# ORGiD SDK structure

> ORGiD SDK is in beta. Libraries may be unstable and APIs are subject to change.

## SDK repository packages

| Package  | Version | Description  |
|---|---|---|
| [@windingtree/org.id-utils](https://github.com/windingtree/org.id-sdk/tree/master/packages/utils#readme) | [![@windingtree/org.id-utils](https://img.shields.io/npm/v/@windingtree/org.id-utils.svg)](https://www.npmjs.com/package/@windingtree/org.id-utils) | Shared ORGiD utilities |
| [@windingtree/org.id-auth](https://github.com/windingtree/org.id-sdk/tree/master/packages/auth#readme) | [![@windingtree/org.id-auth](https://img.shields.io/npm/v/@windingtree/org.id-auth.svg)](https://www.npmjs.com/package/@windingtree/org.id-auth) | ORGiD authentication library |
| [@windingtree/org.id-core](https://github.com/windingtree/org.id-sdk/tree/master/packages/core#readme) | [![@windingtree/org.id-core](https://img.shields.io/npm/v/@windingtree/org.id-core.svg)](https://www.npmjs.com/package/@windingtree/org.id-core) | Core ORGiD library |
| [@windingtree/org.json-utils](https://github.com/windingtree/org.id-sdk/tree/master/packages/org.json#readme) | [![@windingtree/org.json-utils](https://img.shields.io/npm/v/@windingtree/org.json-utils.svg)](https://www.npmjs.com/package/@windingtree/org.json-utils) | ORG.JSON utilities |
| [@windingtree/org.id-cli](https://github.com/windingtree/org.id-sdk/tree/master/packages/clip#readme) | [![@windingtree/org.id-cli](https://img.shields.io/npm/v/@windingtree/org.id-cli.svg)](https://www.npmjs.com/package/@windingtree/org.id-cli) | An ORGiD command-line utility |
| [@windingtree/org.id-test-http-server](https://github.com/windingtree/org.id-sdk/tree/master/packages/test-http-server#readme) | [![@windingtree/org.id-test-http-server](https://img.shields.io/npm/v/@windingtree/org.id-test-http-server.svg)](https://www.npmjs.com/package/@windingtree/org.id-test-http-server) | Simple Http Server for ORGiD protocol testing |
| [@windingtree/org.id-test-setup](https://github.com/windingtree/org.id-sdk/tree/master/packages/test-setup#readme) | [![@windingtree/org.id-test-setup](https://img.shields.io/npm/v/@windingtree/org.id-test-setup.svg)](https://www.npmjs.com/package/@windingtree/org.id-test-setup) | Ease ORGiD setup for testing purposes |

## SDK external packages

| Package  | Version | Description  |
|---|---|---|
| [@windingtree/org.json-schema](https://github.com/windingtree/org.json-schema/tree/feat/new-orgid#readme) | [![@windingtree/org.json-schema](https://img.shields.io/npm/v/@windingtree/org.json-schema.svg)](https://www.npmjs.com/package/@windingtree/org.json-schema) | ORG.JSON schema |
| [@windingtree/org.id](https://github.com/windingtree/org.id/tree/orgid-nft#readme) | [![@windingtree/org.id](https://img.shields.io/npm/v/@windingtree/org.id.svg)](https://www.npmjs.com/package/@windingtree/org.id) | ORGiD smart contract |
| [@windingtree/org.id-resolver](https://github.com/windingtree/org.id-resolver/tree/new-resolver#readme) | [![@windingtree/org.id-resolver](https://img.shields.io/npm/v/@windingtree/org.id-resolver.svg)](https://www.npmjs.com/package/@windingtree/org.id-resolver) | ORGiD DID resolver |

## Packages dependency diagram

> External packages marked by the beige color

![ORGiD SDK Packages dependencies](../assets/dependencies.svg)

## Maintenance

The SDK repository is managed with [Lerna package manager](https://github.com/lerna/lerna) and uses a common [sematic versioning](https://semver.org/).
