# ORGiD SDK Features

## Decentralized identity

The ORGID [smart contract](https://github.com/windingtree/org.id) is a core component of the protocol that implements a decentralized registry of unique identifiers. Every identifier is exclusively managed by its owner and linked to off-chain metadata.

Everyone can create and manage their identifier and no one can restrict that. It's free, but a blockchain network transaction fee is required. Meanwhile, the ORGiD smart contract is deployed in different EVM compatible networks and most of them have really cheap transactions costs.

Except for the registry of identifiers, the smart contract manages lists of identity delegates. This is a useful feature that allows delegating a capability to manage own identity-related off-chain metadata to specific methods or another entity.

ORGiD SDK provides libraries and utilities for identity management that can be easily integrated into any node.js or browser-based application.

## ORGiD identifier Compatibility

ORGiD identity follows the [DID specification](https://www.w3.org/TR/did-core/), supports the related data-model and core properties.

An example of ORGiD DID:

```text
did:orgid:1:0x9300bad07f0b9d904b23781e8bbb05c1219530c51e7e494701db2539b7a5a119
```

- `orgid` is a DID method
- `1` - is a blockchain Id according to [chainlist.org](https://chainlist.org/) where the identity has been issued
- `0x9300bad07f0b9d904b23781e8bbb05c1219530c51e7e494701db2539b7a5a119` is unique organization (or personal) profile Id

## Multichain DIDs support

When the idea of the ORGiD has appeared, no one could predict how much an Ethereum transaction would cost. High transaction prices have dramatically affected the adoption of the protocol. To fix that was decided to use alternative blockchain networks with cheaper transaction costs.

Currently, the ORGiD smart contract is deployed to the following chains:

- `Arbitrum`
- `Optimism`
- (expected soon) `ZKSync`

As mentioned above, every ORGiD DID contains information in which blockchain network this identifier has been issued. Thanks to that it is easy to implement cross-chain identifiers lookup and verification.

## Off-chain identity metadata modification

Every ORGiD is linked with its off-chain metadata by the URI that can be obtained from the smart contract. The ORGiD protocol supports the following type of URI:

- `HTTP`
- `IPNS` (`IPFS`)

Other URI types can be added as plugins to the ORGiD resolver library. In near plans is implement [Filecoin](https://filecoin.io/) and [Arweave](https://www.arweave.org/) integration plugins.

The ORGiD protocol uses a [verifiable credential](https://www.w3.org/TR/vc-data-model/) standard to provide with an ability of off-chain metadata to be verifiable and its immutability guarantees.

Using the SDK an ORGiD owner (or delegate) is able to manage the source of the metadata file and sign it with the proper signature. Signed this way a metadata file can be easily verified and validated. Even more, the VC standard supports lifetime restrictions for digital credentials so an ORGiD owner can set a specific period of time when its profile will be valid.

Modification of off-chain metadata linked to an identifier does not require updating its URI stored in the smart contract. This approach allowing dramatically reduce transaction costs during ORGiD usage.

## ORGiD NFT

The ORGiD smart contract itself is fully compatible with the [ERC721](https://eips.ethereum.org/EIPS/eip-721) standard that is dedicated to Non-fungible Tokens so every identifier issued is an NFT. This feature increases interoperability and adds the ability to manage ORGiD decentralized identifier ownership using any wallet that supports the NFT standard. An ORGiD owner can hold and transfer their identifiers and even sell them on NFT markets.

The SDK is providing a method of managing NFT-specific metadata like `name`, `description`, `image`, `attributes`, etc along with VC features.

## ORG.JSON schema

The ORG.JSON is an open standard for profiles data for organizations and personals that covers a wide range of use-cases. The ORGiD SDK provides a set of data schemas in the [JSON-schema](http://json-schema.org/specification.html) format that are can be used for data preparation and validation. Also, ORG.JSON [package](https://github.com/windingtree/org.json-schema) of SDK provides a schemas-related set of Typescript typings.

## Authentication and authorization

An ORGiD DIDs and cryptographic features stand behind them can be used to arrange an easy and secure way of authentication and authorization. The ORGiD SDK has powerful tools for the generation and conversion of cryptographic keys, making authentication tokens and their verification.

## Verifiable credentials

[Verifiable credentials](https://www.w3.org/TR/vc-data-model/) can be used in various scenarios in real life, from a representation of physical credentials to tickets, abonnements, reputation facts proofs and so on. The SDK has a powerful library to work with VC's that has a built-in data validation feature based on the JSON-schema standard.

## Typescript support

The ORGiD SDK is made with Typescript and go along with built-in typings.

## Encrypted messaging

> To be developed soon
