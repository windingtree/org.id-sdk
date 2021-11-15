# Glossary of terms

## ORGiD DID

ORGiD DID is the unique identifier compatible with [DID specification](https://www.w3.org/TR/did-core/).

The example of ORGiD DID:

```text
did:orgid:1:0x9300bad07f0b9d904b23781e8bbb05c1219530c51e7e494701db2539b7a5a119
```

- `orgid` is a DID method supported by ORGiD
- `1` - is a blockchain Id according to [chainlist.org](https://chainlist.org/) where the identity has been issued
- `0x9300bad07f0b9d904b23781e8bbb05c1219530c51e7e494701db2539b7a5a119` is unique organization (or personal) profile Id

## ORG.JSON

ORG.JSON is a data format based on the [json-schema](http://json-schema.org/specification.html) specification used for describing organization of all types: commercial firms, NGOs, even organizations that aren't incorporated (like [W3C](https://www.w3.org/Consortium/facts#org), for example) and for personal profiles as well.

The goal behind ORG.JSON is to provide correct and truthful snapshot of a data about an organization or a person, sufficient to represent its subject in any online transaction.

The ORGiD SDK provides with a methods of data verification according to ORG.JSON schemas.

## ORGiD delegate

An ORGiD delegate is a verification method Id that should be used in a verification of the cryptographically signed ORG.JSON. These delegates are managed by an ORGiD owner via a smart-contract interface (functions: `addDelegate`, `removeDelegate`, `getDelegate`) and specific records in the ORG.JSON file (see `capabilityDelegation` definition).

The example of an ORGiD delegate:

```text
did:orgid:4:0x9300bad07f0b9d904b23781e8bbb05c1219530c51e7e494701db2539b7a5a119#key-1
```

- `did:orgid:4:0x9300bad07f0b9d904b23781e8bbb05c1219530c51e7e494701db2539b7a5a119` - ORGiD
- `#key-1` is unique verification method tag

The general use-case for ORGiD delegates is when an ORGiD owner delegates a possibility to make a signed ORG.JSON to another entity. That another entity may be another own private cryptographic key or another ORGiD. Usage of the ORGiD delegates feature is absolutely required when the ORGiD is managed via a multisig wallet.
