# org.id-sdk
Core Javascript tools for the ORGiD ecosystem

## Javascript SDK

| Package  | Version | Description  |
|---|---|---|
| [@windingtree/org.id-core](packages/core#readme) | [![@windingtree/org.id-core](https://img.shields.io/npm/v/@windingtree/org.id-core.svg)](https://www.npmjs.com/package/@windingtree/org.id-core) | Core ORGiD library |
| [@windingtree/org.id-utils](packages/utils#readme) | [![@windingtree/org.id-utils](https://img.shields.io/npm/v/@windingtree/org.id-utils.svg)](https://www.npmjs.com/package/@windingtree/org.id-utils) | Shared ORGiD utilities |
| [@windingtree/org.json-utils](packages/org.json#readme) | [![@windingtree/org.json-utils](https://img.shields.io/npm/v/@windingtree/org.json-utils.svg)](https://www.npmjs.com/package/@windingtree/org.json-utils) | ORG.JSON utilities |
| [@windingtree/org.id-test-ganache-server](packages/test-ganache-server#readme) | [![@windingtree/org.id-test-ganache-server](https://img.shields.io/npm/v/@windingtree/org.id-test-ganache-server.svg)](https://www.npmjs.com/package/@windingtree/org.id-test-ganache-server) | Ease setup of the Ganache server for ORGiD protocol testing |
| [@windingtree/org.id-test-http-server](packages/test-http-server#readme) | [![@windingtree/org.id-test-http-server](https://img.shields.io/npm/v/@windingtree/org.id-test-http-server.svg)](https://www.npmjs.com/package/@windingtree/org.id-test-http-server) | Simple Http Server for ORGiD protocol testing |
| [@windingtree/org.id-test-setup](packages/test-setup#readme) | [![@windingtree/org.id-test-setup](https://img.shields.io/npm/v/@windingtree/org.id-test-setup.svg)](https://www.npmjs.com/package/@windingtree/org.id-test-setup) | Ease ORGiD setup for testing purposes |
| [@windingtree/org.id-auth](packages/auth#readme) | [![@windingtree/org.id-auth](https://img.shields.io/npm/v/@windingtree/org.id-auth.svg)](https://www.npmjs.com/package/@windingtree/org.id-auth) | ORGiD authentication library |



test-ganache-server
test-http-server
test-setup

## Maintenance

### Bootstrap

When you adding dependencies to your packages it is recommended to run `bootstrap` command from the root of the repository. This command will update packages dependencies.

```bash
yarn install
yarn run bootstrap
```

### Testing and linting

```bash
yarn run lint
yarn run test
```

### Packages release

To make a release`*` of the package run the following command.

```bash
./scripts/release <GITHUB_PERSONAL_ACCESS_TOKEN> <PACKAGE_NAME>
```

`*` Do not forget to set a proper version number of the package you want to release in the package.json of the selected package.

To get an access token please use this [guide](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)
