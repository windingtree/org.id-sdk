# The ORGiD CLI Beta testing

`ORGiD CLI` is an all-in-one utility that helps to manage multiple ORGiDs. This tool is in beta. The CLI syntax and features may be unstable and APIs are subject to change.

## Testing aims

Public testing of the CLI should help to achieve the following aims:

- Find and fix bugs
- Improve the UX
- Collect ideas and feature requests for better planning

## Known limitations

### Data storage

The current version of the CLI supports files hosting using IPFS via WindingTree managed IPFS node. This option cannot be changed but future utility versions will support more storage options.

The IPFS node supports the following features:

- adding/removing files
- files pinning
- web gateway

...and doesn't support (but will support in the future):

- remote pining services
- IPNS
- DNS-link

> WindingTree does not provide any guarantees on its IPFS node until this service is out from beta (expected at Q3 2022)

### Keys management

The current version of the CLI supports the secure import and usage of Ethereum compatible private keys. This is the only option for now though future versions of the CLI will support more key types and key pair generation supported by the ORGiD SDK.

An export of previously imported keys is not implemented yet. This feature is planned.

### Security

Private keys and API provider URIs that are imported into the CLI configuration can be encrypted but every encryption session is required a separate password. That also means what each time the CLI is accessing encrypted data a user will be prompted for a password. This UX is not ideal and the CLI will go forward to having one general password for all entities inside the CLI flow.

### ORGiD features

Here is the list of features that have not been implemented yet in the CLI:

- `capabilityDelegates` feature that required for cases when a user wants to transfer his ORGiD ownership to a multisig wallet
- key pairs generation. This feature is providing by SDK but not by CLI
- organization profile does not support complex data types (like array of objects, etc)
- personal profiles are partially supported even of the ORG.JSON schema level
- organizations hierarchy management
- off-chain ORGiD management (will be available when IPFS node starts to support IPNS or/and DNS-link resources or simple HTTP resources)

## Test cases

### CLI setup

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

After that you should to add in you `.profile.rc` or `.bash_profile` (or similar for your system) the following command:

```bash
export PATH=$PATH:/path/to/yarn/global/bin/dir
```

After you updated your shell configuration file you need to refresh the environment using this command:

```bash
source ~/.<YOUR_SHELL_RC_FILE>
```

> It is recommended to use the ORGiD CLI in the node.js v14 environment and up.

After the setup, the CLI must be callable by the utility name `orgid`.

```bash
npx orgid --operation <OPERATION_TYPE> <OPERATION_PARAMETERS>
```

### CLI configuration

The CLI usage should start from the adding of blockchain network providers (RPC) that are required for interaction with the ORGiD smart contracts.

To test this feature a user has to use the `--operation config --record networkProviders` CLI parameters.

It is required to add one provider per blockchain network supported by ORGiD protocol.

- The list of supported networks can be obtained via [documentation](https://windingtree.github.io/org.id-sdk/#/build/features?id=multichain-dids-support).
- Network Ids can be found here: [https://chainlist.org/](https://chainlist.org/)
- To get network providers URIs a user should create an account on the related provider service. We can recommend using [https://infura.io/](https://infura.io/) or [https://www.alchemy.com/](https://www.alchemy.com/) for access to Ethereum Test networks and Mainnet. All other networks have their own API providers, to get their URIs please refer to their docs: [Sokol POA network aka xDAI Testnet](https://www.poa.network/v/master-1/for-users/wallets/metamask#poa-sokol), [Arbitrum Rinkeby Testnet](https://developer.offchainlabs.com/docs/public_testnet)

To be able to send transactions a user must have a related to chain native tokens. Please refer to chain-specific web resources to obtain information of how to get these tokens.

As a result of adding providers, in the root folder where the CLI has been installed will be created a directory with configuration file `./orgid/project.json`.

A section with configuration data will looks like:

```json
{
  "config": {
    "networkProviders": [
      {
        "id": "3", // <-- Blockchain network Id
        "uri": "U2FsdGVkX...ciormws=", // <-- encrypted provider URI
        "encrypted": true,
        "date": "2021-12-21T20:44:16.588+02:00"
      },
      {
        "id": "4",
        "uri": "U2FsdGVkX...OZTpDQ=",
        "encrypted": true,
        "date": "2021-12-21T20:46:22.291+02:00"
      },
      {
        "id": "421611",
        "uri": "https://rinkeby.arbitrum.io/rpc", // <-- raw provider URI
        "encrypted": false,
        "date": "2021-12-21T20:47:19.565+02:00"
      },
      {
        "id": "77",
        "uri": "https://sokol.poa.network",
        "encrypted": false,
        "date": "2021-12-22T12:00:19.335+02:00"
      }
    ]
  }
}
```

If a user wants to update the provider URI he has to add a new provider record with the same `id` this leads to overwriting of the old record.

### Keys import

Having keys in the ORGiD CLI configuration is required for the possibility of making signatures of transactions and creation of Verifiable Credentials (eq ORGiD VC the signed version of organization profile in the ORG.JSON format).

In the current version of CLI, it is possible to import Ethereum compatible private keys only. For example, to obtain a private key of an account created using a user must use the `export` feature that can be found in the details view of the selected account in the Metamask wallet.

> Private keys are sensitive information a private key cannot be saved in the CLI configuration in the raw (unprotected) form. During the ley import, a user will be prompted to enter a password for key encryption.

To import key a user has to use the `--operation keys:import --keytype ethereum` CLI parameters.

As a result of importing keys, the related records will be created in the CLI configuration file.

A section with keys should looks like:

```json
{
  "keys": [
    {
      "type": "ethereum",
      "tag": "testCliKey1", // <-- Unique key tag
      "publicKey": "0xeE75487...B5E6e99d7A", // <-- In the case of Ethereum compatible keys, this an account address
      "privateKey": "U2Fsd...dnyFmJNEXb", // <-- encrypted private key
      "date": "2021-12-20T20:06:19.939+02:00"
    }
  ]
}
```

### Deployment to IPFS

To deploy any type of files a user should use the `--operation deploy:ipfs --path <PATH_TO_FILE>` CLI parameters. The deployment feature has an optional parameter `--filetype orgIdVc` that should be used when a file has ORGiD VC type. This parameter allows the CLI to link deployment information with ORGiD records (in the configuration file).

> In the future the parameter `--filetype orgIdVc` will be deprecated and removed. Instead of it the CLI will detect ORGiD VC file automatically.

Each deployment must be reflected in the CLI configuration file. It is required for the handling of cases when deploying a file that already has been deployed earlier. In that situation, the previously deployed file will be unpinned and removed from the IPFS node.

A section with deployment information in the configuration file should looks like:

```json
{
  "deployments": [
    {
      "type": "ipfs",
      "path": "/home/user/dev/cli/files/logo.jpg",
      "uri": "ipfs://QmSTgJiMGsaRbuieVttWDki3uMHwgqnGMpM9yJ3TXHBnBf",
      "date": "2021-12-23T00:40:39.708+02:00"
    },
    {
      "type": "ipfs",
      "path": "/home/user/dev/cli/files/myTestOrgJsonVc.json",
      "uri": "ipfs://QmVQnh7HJu4FeJZM945PifkCH8CFskYZgUDMSQqgQzDMQ4",
      "date": "2021-12-23T01:34:21.958+02:00"
    }
  ]
}
```

All deployed files must be accessible via public IPFS gateways. The list of such gateways can be obtained here: [https://ipfs.github.io/public-gateway-checker/](https://ipfs.github.io/public-gateway-checker/)

### Organization profile bootstrap

To create a well-formed organization profile file formatted according to ORG.JSON rules a user has to use the `--operation bootstrap --output <PATH_TO_OUTPUT_FILE>` CLI parameters.

All required information will be prompted during the CLI session.

It is recommended to deploy an organization logo before the bootstrap process starts. The CLI will prompt a user to fill the link field during profile creation.

> It is not recommended to ignore filling of the logotype link because a logo is mandatory for the building of NFT metadata (every ORGiD now are NFTs).

A result of the bootstrap procedure will be saved in a file by the path provided with a `--output` command-line parameter.

During a profile creation procedure, a user will be prompted to fill in properties that are required for an ORGiD creation.

Here is an example of a profile creation:

```json
{
  "@context": [
    "https://www.w3.org/ns/did/v1",
    "https://raw.githubusercontent.com/windingtree/org.json-schema/feat/new-orgid/src/context.json"
  ],
  "id": "did:orgid:4:0xd6a429d09a197ad...fe870f0ee126ae236481fc2b40895b",
  "created": "2021-12-21T23:32:51.818+02:00",
  "verificationMethod": [
    {
      "id": "did:orgid:4:0xd6a429d09a1...ae236481fc2b40895b#testCliKey1",
      "controller": "did:orgid:4:0xd6a429d09...711fe870f0ee126ae236481fc2b40895b",
      "type": "EcdsaSecp256k1RecoveryMethod2020",
      "blockchainAccountId": "0xeE754874099...52B0B5E6e99d7A@eip155:4"
    }
  ],
  "legalEntity": {
    "legalName": "Test entity",
    "registryCode": "123456789",
    "legalType": "Lsd",
    "registeredAddress": {
      "country": "ua",
      "locality": "Odesa",
      "postalCode": "65000",
      "streetAddress": "Deribasovskaya, str 0"
    },
    "media": {
      "logo": "ipfs://QmSTgJiMGsaRbuieVttWDki3uMHwgqnGMpM9yJ3TXHBnBf"
    }
  }
}
```

Also, to the CLI configuration file will be added a record with all properties that required for the ORGiD creation:

```json
{
  "orgIds": [
    {
      "did": "did:orgid:4:0xd6a429d09a197adafbe8c0d751e2e26711fe870f0ee126ae236481fc2b40895b",
      "salt": "0xbc855b1e8c2c1c513f5ca1d368de02dbae9950551451a96898e4a7e8fb4ce54d",
      "owner": "0xeE75487409991A8Fdc89adAdA852B0B5E6e99d7A",
      "orgJson": "/home/user/dev/files/myTestOrgJson.json",
      "date": "2021-12-23T01:34:21.959+02:00",
      "orgIdVc": "ipfs://QmVQnh7HJu4FeJZM945PifkCH8CFskYZgUDMSQqgQzDMQ4"
    }
  ]
}
```

### ORGiD VC creation

> ORGiD VC is a signed version of the organization profile created according to the ORG.JSON rules and extended with properties that represent the NFT interface.

ORGiD VC can be created on a basis of existed organization profile. So, a profile must be created first.

To create an ORGiD VC a user should use the `--operation orgIdVc --payload <PATH_TO_RAW_ORGJSON_FILE> --output <PATH_TO_OUTPUT_FILE> --deploy ipfs` CLI parameters. All parameters except for `--deploy` are mandatory.

If parameter `--deploy` is provided a created ORGiD VC file will be automatically deployed to IPFS node.

Every ORGiD VC creation procedure is automatically reflected in the CLI configuration file.

Here is an example of such records:

```json
{
  "vcs": [
    {
      "type": "OrgJson", // <-- type of verifiable credential subject
      "did": "did:orgid:4:0xd6a429d09a19...e870f0ee126ae236481fc2b40895b",
      "method": "did:orgid:4:0xd6a429d09a197adaf...2b40895b#testCliKey1",
      "payload": "./files/myTestOrgJson.json", // <-- raw organization profile
      "path": "./files/myTestOrgJsonVc.json", // <-- created ORGiD VC
      "date": "2021-12-23T01:34:22.182+02:00",
      "uri": "ipfs://QmVQnh7HJu4FeJZM945PifkCH8CFskYZgUDMSQqgQzDMQ4" // <-- will appear when ORGiD VC is deployed to IPFS
    }
  ]
}
```

Here is an example of created ORGiD VC file:

```json
{
  "@context": [
    "https://www.w3.org/2018/credentials/v1"
  ],
  "id": "a1b0e326-81c4-46c8-9776-ae065ffc7341",
  "type": [
    "VerifiableCredential",
    "OrgJson"
  ],
  "issuer": "did:orgid:4:0xd6a429d09a197ad...870f0ee126ae236481fc2b40895b",
  "issuanceDate": "2021-12-23T01:34:21.401+02:00",
  "name": "Test entity",
  "description": "Test entity",
  "image": "ipfs://QmSTgJiMGsaRbuieVttWDki3uMHwgqnGMpM9yJ3TXHBnBf",
  "credentialSubject": {
    "@context": [
      "https://www.w3.org/ns/did/v1",
      "https://raw.githubusercontent.com/windingtree/org.json-schema/feat/new-orgid/src/context.json"
    ],
    "id": "did:orgid:4:0xd6a429d09a1...0f0ee126ae236481fc2b40895b",
    "created": "2021-12-21T23:32:51.818+02:00",
    "verificationMethod": [
      {
        "id": "did:orgid:4:0xd6a429d09a197ad...6ae236481fc2b40895b#testCliKey1",
        "controller": "did:orgid:4:0xd6a429d09a197adafbe...6481fc2b40895b",
        "type": "EcdsaSecp256k1RecoveryMethod2020",
        "blockchainAccountId": "0xeE75487409991A...B0B5E6e99d7A@eip155:4"
      }
    ],
    "legalEntity": {
      "legalName": "Test entity",
      "registryCode": "123456789",
      "legalType": "Lsd",
      "registeredAddress": {
        "country": "ua",
        "locality": "Odesa",
        "postalCode": "65000",
        "streetAddress": "Deribasovskaya, str 0"
      },
      "media": {
        "logo": "ipfs://QmSTgJiMGsaRbuieVttWDki3uMHwgqnGMpM9yJ3TXHBnBf"
      }
    },
    "updated": "2021-12-23T01:34:21.386+02:00"
  },
  "proof": {
    "type": "EcdsaSecp256k1RecoverySignature2020",
    "created": "2021-12-23T01:34:21.621+02:00",
    "proofPurpose": "assertionMethod",
    "verificationMethod": "did:orgid:4:0xd6a429...26ae23648b40895b#testCliKey1",
    "jws": "eyJhbGciO...wMzFi"
  }
}
```

### ORGiD creation

To create an ORGiD a user has to use the `--operation create` CLI parameter. This command starts a dialogue of an ORGiD creation during which a user will be prompted to choose a previously created organization profile from the list. At the end of the procedure, the CLI will send a transaction to the smart contract and a new ORGiD will be created.

The related `orgIds` record will be updated and marked as `created` in the CLI configuration file.

### ORGiD update

Each time when the content of an organization profile is changed an ORGiD VC also must be updated (and a new file must be deployed to the IPFS node). Currently, the IPFS node is not supported IPNS so every file deployment will result in a new unique ORGiD VC URI. Because of that, it is required to send a transaction and update an `orgJsonUri` property in the smart contract. The `--operation update` CLI parameter is dedicated for that.

Every time when a user updates his ORGiD VS he must deploy it and then run the command `--operation update`. The CLI will prompt a user to choose which organization should be updated and then send a transaction.

To check if the updated ORGiD is still valid a user can resolve its DID using the `--operation resolve` CLI command.

### ORGiD DID resolution

An ORGiD DID resolution procedure should be used when it is required to confirm ORGiD validity. To accomplish a resolution a user has to use the `--operation resolve --did <ORGiD_DID>` CLI parameters. During this procedure, the CLI will interact with a blockchain network using a network provider that should be added to the configuration. Th the case is a URI of the required provider is encrypted a user will be prompted for entering the password.

A resolution result will be displayed in the terminal and must be formatted according to these recommendations [https://w3c-ccg.github.io/did-resolution/#did-resolution-result](https://w3c-ccg.github.io/did-resolution/#did-resolution-result).

Here is an example of an ORGiD DID resolution:

```json
{
   "@context": "https://w3id.org/did-resolution/v1",
   "did": "did:orgid:4:0xd6a429d09a197adafbe...1fe870f0ee126ae236481fc2b40895b",
   "didDocument": {
      "@context": [
         "https://www.w3.org/ns/did/v1",
         "https://raw.githubusercontent.com/windingtree/org.json-schema/feat/new-orgid/src/context.json"
      ],
      "id": "did:orgid:4:0xd6a429d09a19ada...711fe870f0ee126ae236481fc2b40895b",
      "created": "2021-12-21T23:32:51.818+02:00",
      "verificationMethod": [
         {
            "id": "did:orgid:4:0xd6a429d09a...126ae236481f2b40895b#testCliKey1",
            "controller": "did:orgid:4:0xd6a429d09a1...0ee26ae236481fc2b40895b",
            "type": "EcdsaSecp256k1RecoveryMethod2020",
            "blockchainAccountId": "0xeE75487409991A8F...5B0B5E6e99d7A@eip155:4"
         }
      ],
      "legalEntity": {
         "legalName": "Test entity",
         "registryCode": "123456789",
         "legalType": "Lsd",
         "registeredAddress": {
            "country": "ua",
            "locality": "Odesa",
            "postalCode": "65000",
            "streetAddress": "Deribasovskaya, str 0"
         },
         "media": {
            "logo": "ipfs://QmSTgJiMGsaRbuieVttWDki3uMHwgqnGMpM9yJ3TXHBnBf"
         }
      },
      "updated": "2021-12-23T01:34:21.386+02:00"
   },
   "didResolutionMetadata": {
      "contentType": "application/did+ld+json",
      "retrieved": "2021-12-31T00:05:05.104+02:00",
      "duration": 5101,
      "resolverVersion": "3.0.0-beta.12"
   },
   "didDocumentMetadata": {
      "created": "2021-12-21T23:32:51.818+02:00",
      "updated": "2021-12-23T01:34:21.386+02:00",
      "data":{
         "tokenId": "1",
         "orgId": "0xd6a429d09a197adafbe8c0d...70f0ee126ae236481fc2b40895b",
         "owner": "0xeE75487409991A8...AdA852B0B5E6e99d7A",
         "orgJsonUri": "ipfs://QmVQnh7HJu4FeJZM945PifkCH8CFskYZgUDMSQqgQzDMQ4",
         "delegates": [],
         "created": "2021-12-22T15:50:49.000Z"
      }
   }
}
```

> If a resolution process has failed a `didDocument` property of response will be equal to `null` and `didResolutionMetadata.error` property must contain an error message.

### Documentation

The documentation of the ORGiD CLI utility is here: [https://windingtree.github.io/org.id-sdk/#/build/cli/index](https://windingtree.github.io/org.id-sdk/#/build/cli/index).

## Issues management

It is proposed to use use [GitHub issues tracker](https://github.com/windingtree/org.id-sdk/issues) for issues management.

Here the commonly used [issue template](./issue.md).

## Testing period terms

- Internal phase: second week of Jan 2022
- Public phase: to the end of Feb 2022
- Release of the stable ORGiD CLI version in May 2022
