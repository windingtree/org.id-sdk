[@windingtree/org.id-utils](../README.md) / common

# Namespace: common

## Table of contents

### Functions

- [generateOrgIdWithAddress](common.md#generateorgidwithaddress)
- [generateOrgIdWithSigner](common.md#generateorgidwithsigner)
- [generateSalt](common.md#generatesalt)

## Functions

### generateOrgIdWithAddress

▸ `Const` **generateOrgIdWithAddress**(`address`, `salt`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `salt` | `string` |

#### Returns

`string`

#### Defined in

[src/common/index.ts:33](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/utils/src/common/index.ts#L33)

___

### generateOrgIdWithSigner

▸ `Const` **generateOrgIdWithSigner**(`sender`, `salt`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sender` | `Signer` \| `VoidSigner` |
| `salt` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/common/index.ts:15](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/utils/src/common/index.ts#L15)

___

### generateSalt

▸ `Const` **generateSalt**(): `string`

#### Returns

`string`

#### Defined in

[src/common/index.ts:5](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/utils/src/common/index.ts#L5)
