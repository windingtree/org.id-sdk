# The ORGiD command-line utility

## Setup

```bash
yarn add @windingtree/org.id-cli
```

## Usage

```bash
npx orgid --type <OPERATION_TYPE> <OPERATION_PARAMETERS>
```

## Glossary

- `operation`: an utility operation, a scope of functionality
- `local project file`: a special JSON file which will be automatically created in the root utility folder where it is installed. This file contains the utility configuration and artifacts that can be reused between operations. Some information such as private keys and API keys is stored in the encrypted form.

## Operation types

---

### `--keys:import`

Import of key pairs.

Parameters:

- `--keytype`: supported key pair types.


Currently, `eip155` key pair type (Ethereum) is supported only. During an import process, the utility will prompt a user for a password witch will be used for the encryption of the private key and for a unique tag that will be used as a key pair identifier. Imported key pairs will be stored in the local project file and can be used across operations. Each time when another operation will access a key pair a user will be prompted for a password with which the key pair was encrypted.

### `--type OrgJson`

Creation of an ORGiD VC on an ORG.JSON basis.

Parameters:

- `--method`: a verification method registered in the ORG.JSON
- `--payload`: a path to ORG.JSON file
- `--output`: a path where to save an ORGID VC
- `--deploy:ipfs` (optional): created ORGiD VC will be deployed to IPFS

Signing of the ORG.JSON using the defined verification method. Current version of the utility supports the following verification methods:

- `EcdsaSecp256k1RecoveryMethod2020`: signature made with blockchain account
- `EcdsaSecp256k1VerificationKey2019`: signature made with EC private key

> - Requirement: The related to the verification method private key must be registered in the local project file or available as an `ACCOUNT_KEY` environment variable.
> - The verification method that you want to use for the signing must be properly defined in the ORG.JSON file

During an interaction with a user, he will be prompted to choose how to access a private key that should be used for an ORGiD VC signature. In the case of a registered key, a user has to provide a key pair tag and password. Using this data a proper key will be loaded from the local project file, decrypted and used for making of signature.

```bash
npx orgid --type OrgJson --payload <PATH_TO_ORG_JSON> --method <VERIFICATION_METHOD_ID> --output <PATH_TO_OUTPUT_FILE> --deploy:ipfs true
```

Example for the `EcdsaSecp256k1RecoveryMethod2020` method:

> to prepare this example please run this script: `source ./test/scripts/exportEthPriv.sh`

```bash
npx orgid --type OrgJson --payload ./test/mocks/validOrg.json --method "did:orgid:4:0x9300bad07f0b9d904b23781e8bbb05c1219530c51e7e494701db2539b7a5a119#key-1" --output ./temp/orgJsonVc.json
```

Example for the `EcdsaSecp256k1VerificationKey2019` method:

> - to prepare this example please run this script: `source ./test/scripts/exportEcPriv.sh`
> - The verification method `EcdsaSecp256k1VerificationKey2019` requires the inclusion of the method Id into the `capabilityDelegation` list (and registration of this ID in the smart contract as a delegate)

```bash
npx orgid --type OrgJson --payload ./test/mocks/validOrgWithInnerDelegate.json --method "did:orgid:4:0x9300bad07f0b9d904b23781e8bbb05c1219530c51e7e494701db2539b7a5a119#key-2" --output ./temp/orgJsonVc.json
```

As a result of this operation the given ORG.JSON will be signed with the private key of the defined verification method. A generated templated will contain a proper verification method record.

The created file will be automatically deployed to the IPFS if the property `--deploy:ipfs` is defined.

### `--type deploy:ipfs`

Deployment of files to IPFS.

Parameters:

- `--path`: a path to file that should be deployed

Example:

```bash
npx orgid --type deploy:ipfs --path ./temp/orgVc.json
```

### `--type bootstrap`

Generation of the ORG.JSON template.

Parameters:

- `--output`: a path where to save a generated ORG.JSON template

During the generation process you will be prompted for the following information:

- Network where an ORGiD will issued
- Ethereum account address of the ORGiD owner
- Type of profile
- Mandatory profile properties

Example:

```bash
npx orgid --type bootstrap --output ./temp/myTestOrgJson.json
```

As a result of this operation will be generated a template of an ORG.JSON file and saved on the requested path.

## Project configuration file

---

When the ORGiD CLI utility makes operations all valuable data that can be reused is logged to the project file. This file is automatically created in the root repository directory on the path `./orgid/project.json`.

## TODO

---

- Tests
- ORGiD resolver operation
