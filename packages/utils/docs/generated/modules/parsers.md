[@windingtree/org.id-utils](../README.md) / parsers

# Namespace: parsers

## Table of contents

### Interfaces

- [BlockchainAccountIdGroupedResult](../interfaces/parsers.BlockchainAccountIdGroupedResult.md)
- [DidGroupedCheckResult](../interfaces/parsers.DidGroupedCheckResult.md)
- [IpfsUriGroupedResult](../interfaces/parsers.IpfsUriGroupedResult.md)
- [ParsedBlockchainAccountId](../interfaces/parsers.ParsedBlockchainAccountId.md)
- [ParsedDid](../interfaces/parsers.ParsedDid.md)
- [ParsedUri](../interfaces/parsers.ParsedUri.md)

### Functions

- [parseBlockchainAccountId](parsers.md#parseblockchainaccountid)
- [parseDid](parsers.md#parsedid)
- [parseUri](parsers.md#parseuri)

## Functions

### parseBlockchainAccountId

▸ `Const` **parseBlockchainAccountId**(`blockchainAccountId`): [`ParsedBlockchainAccountId`](../interfaces/parsers.ParsedBlockchainAccountId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockchainAccountId` | `string` |

#### Returns

[`ParsedBlockchainAccountId`](../interfaces/parsers.ParsedBlockchainAccountId.md)

#### Defined in

[src/parsers/index.ts:110](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/utils/src/parsers/index.ts#L110)

___

### parseDid

▸ `Const` **parseDid**(`did`): [`ParsedDid`](../interfaces/parsers.ParsedDid.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

#### Returns

[`ParsedDid`](../interfaces/parsers.ParsedDid.md)

#### Defined in

[src/parsers/index.ts:51](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/utils/src/parsers/index.ts#L51)

___

### parseUri

▸ `Const` **parseUri**(`uri`): [`ParsedUri`](../interfaces/parsers.ParsedUri.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

[`ParsedUri`](../interfaces/parsers.ParsedUri.md)

#### Defined in

[src/parsers/index.ts:77](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/utils/src/parsers/index.ts#L77)
