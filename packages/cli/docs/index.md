# The ORGiD command-line utility

## Setup

The CLI can be set up via npm package:

```bash
yarn add @windingtree/org.id-cli
```

...or globally:

```bash
yarn global add @windingtree/org.id-cli
```

To use the CLI installed by `yarn` you should be sure that its global `bin` directory is available in the PATH in your system.

To know your `yarn` global bin dir please run the command:

```bash
yarn global bin
/path/to/yarn/global/bin/dir
```

After that you should to add in you `.profile.rc` (or similar for your system) the following command:

```bash
export PATH=$PATH:/path/to/yarn/global/bin/dir
```

> It is recommended to use the ORGiD CLI in the node.js v14 environment and up.

After the setup, the CLI must be callable by the utility name `orgid`.

```bash
npx orgid --operation <OPERATION_TYPE> <OPERATION_PARAMETERS>
```

## Usage

```bash
npx orgid --operation <OPERATION_TYPE> <OPERATION_PARAMETERS>
```

## Glossary

- `operation`: an utility operation, a scope of functionality
- `local project file`: a special JSON file which will be automatically created in the root utility folder where it is installed. This file contains the utility configuration and artifacts that can be reused between operations. Some information such as private keys and API keys is stored in the encrypted form.

## General CLI usage flow

- [The ORGiD command-line utility](#the-orgid-command-line-utility)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Glossary](#glossary)
  - [General CLI usage flow](#general-cli-usage-flow)
  - [CLI configuration](#cli-configuration)
  - [Keys management](#keys-management)
  - [ORG.JSON bootstrap](#orgjson-bootstrap)
  - [ORGiD VC](#orgid-vc)
  - [Deployments](#deployments)
  - [ORGiD creation](#orgid-creation)
  - [ORGiD update](#orgid-update)
  - [ORGiD DID resolve](#orgid-did-resolve)
  - [TODO](#todo)

## CLI configuration

The utility configuration data is stored in the file `./orgid/project.json` that is automatically created in the root repository directory.

This file is also dedicated to storing valuable utility usage data that can be reused between operations.

**`--operation config --record networkProviders`**

This operation allows adding network providers with their JSON RPC APIs. When you will add a network provider you will be prompted to set a password for the API URI that can contain secret API keys.

> Please save passwords in a safe place. When any CLI operation where required network provider access you will be prompted to enter a password to decrypt a URI.

## Keys management

**`--operation keys:import --keytype:ethereum`**

> Currently, `ethereum` key pair type is the only supported. More key pairs types will be added soon.

The CLI is allows to add key pair in the following format:

- `publicKey`: account address
- `privateKey`: account private key. For example, you can export this key from Metamask wallet. When you add a private key you will be prompted to set a password to encrypt this sensitive data
- `tag`: unique key id that will be used across operations and verification methods

> When you need to update a key data just use the same `tag` and a key pair record will be overwritten.

## ORG.JSON bootstrap

**`--operation bootstrap --output <PATH_TO_OUTPUT_FILE>`**

To bootstrap a new ORG.JSON file the CLI will prompt you for the following information:

- `ORGiD blockchain network`: selection from the allowed options
- `ORGiD owner key`: a selection from the registered (imported) keys
- `entity type`: `legalEntity` or `organizationalUnit` options. `personal` profile type will be added soon.

During the interaction, the CLI will prompt to fill mandatory or whole profile properties. For now, it is possible to fill properties with simple types (string, number, enum). Support for complex types (arrays of objects, etc.) will be added soon.

> `EcdsaSecp256k1RecoveryMethod2020` is the only verification method that will be bootstrapped. More verification methods will be added soon.

## ORGiD VC

> An ORGiD VC is a cryptographically signed version of an ORG.JSON file.

**`--operation orgIdVc --payload <PATH_TO_RAW_ORGJSON_FILE> --output <PATH_TO_OUTPUT_FILE> --deploy ipfs`**

Parameters:

- `--payload`: a path to ORG.JSON file
- `--output`: a path where to save an ORGID VC
- `--deploy` (optional): deployment type. With an `ipfs` value means that created ORGiD VC will be deployed to IPFS right after creation

Signing of the ORG.JSON using the defined verification method. Current version of the utility supports the following verification methods:

- `EcdsaSecp256k1RecoveryMethod2020`: signature made with blockchain account
- `EcdsaSecp256k1VerificationKey2019`: (**not supported yet, will be added soon**) signature made with EC private key. This method type will be used for `capabilityDelegation` flow

Verification method will be automatically loaded from the ORG.JSON file.

> - The related to the verification method private key must be registered in the local project file.<br>
> - The verification method that you want to use for the signing must be properly defined in the ORG.JSON file

## Deployments

**`--operation deploy:ipfs --path <PATH_TO_FILE>`**

Deployment of any files to IPFS.

Parameters:

- `--path`: a path to file that should be deployed
- `--filetype orgIdVc`: (**optional**) use this parameter when you want to deploy an ORGiD VC file

## ORGiD creation

After a `bootstrap` operation in the local project file will be created a record for the ORGiD that contains all the information required for the ORGiD creation:

- `salt`: unique hash that is used in the organization identifier generation procedure
- `owner`: ORGiD owner address
- `did`: ORGiD DID
- `orgJson`: path to the local file with ORG.JSON content
- `orgIdVc`: URI of deployed ORGiD VC file

**`--operation create`**

During the interaction, the CLI will prompt for all the required information and send a transaction to the ORGiD smart contract.

If saved in the CLI configuration network provider URI is encrypted the user will be prompted for entering a password. The same for a private key.

## ORGiD update

**`--operation update`**

Working the same way as for an ORGiD creation but send a transaction for the ORGiD VC URI update.

## ORGiD DID resolve

**`--operation resolve --did <ORGiD_DID>`**

Allows to make an ORGiD DID resolution. `<ORGiD_DID>` must be a valid DID that looks like `did:orgid:4:0xd6a429d09a197adafbe8c0d751e2e26711fe870f0ee126ae236481fc2b40895b`. The related network provider (`4`) must be registered before. If you have encrypted you provider URI you will be prompted for password during the resolution flow.

## TODO

---

- Implement TODOs
- Tests
- ORGiD resolver operation
