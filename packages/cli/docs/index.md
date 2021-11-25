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

### OrgJson type

Signing of the ORG.JSON using the defined verification method.

> Requirement: The related to the verification method private key must be available as an `ACCOUNT_KEY` environment variable

```bash
npx orgid --type OrgJson --payload <PATH_TO_ORG_JSON> --method <VERIFICATION_METHOD_ID>
```

Example:

```bash
npx orgid --type OrgJson --payload ./path/to/raw/org.json --method did:orgid:4:0x9300bad07f0b9d904b23781e8bbb05c1219530c51e7e494701db2539b7a5a119#key-1
```

As a result of this operation the given ORG.JSON will be signed with the private key of the defined verification method.

> Currently, supported the `EcdsaSecp256k1RecoverySignature2020` verification method only
