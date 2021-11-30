# An ORGiD command-line utility

## Setup

```bash
yarn add @windingtree/org.id-cli
yarn link
```

## Usage

```bash
npx orgid --type <OPERATION_TYPE> <OPERATION_OPTIONS>
```

## Operations

### `--type OrgJson`

Signing of the ORG.JSON using the defined verification method. Current version of the utility supports the following verification methods:

- `EcdsaSecp256k1RecoveryMethod2020`: signature made with blockchain account
- `EcdsaSecp256k1VerificationKey2019`: signature made with EC private key

> - Requirement: The related to the verification method private key must be available as an `ACCOUNT_KEY` environment variable
> - The verification method that you want to use for the signing must be properly defined in the ORG.JSON file

```bash
npx orgid --type OrgJson --payload <PATH_TO_ORG_JSON> --method <VERIFICATION_METHOD_ID> --output <PATH_TO_OUTPUT_FILE>
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

As a result of this operation the given ORG.JSON will be signed with the private key of the defined verification method.

## TODO

- Tests
- ORGiD resolver operation
