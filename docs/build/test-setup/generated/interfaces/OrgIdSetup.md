[@windingtree/org.id-test-setup](../README.md) / OrgIdSetup

# Interface: OrgIdSetup

## Table of contents

### Properties

- [accounts](OrgIdSetup.md#accounts)
- [httpServer](OrgIdSetup.md#httpserver)
- [orgIdContract](OrgIdSetup.md#orgidcontract)
- [signers](OrgIdSetup.md#signers)

### Methods

- [buildOrgJson](OrgIdSetup.md#buildorgjson)
- [close](OrgIdSetup.md#close)
- [registerOrgId](OrgIdSetup.md#registerorgid)

## Properties

### accounts

• **accounts**: `string`[]

#### Defined in

[test-setup/src/index.ts:33](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/test-setup/src/index.ts#L33)

___

### httpServer

• **httpServer**: `HttpFileServer`

#### Defined in

[test-setup/src/index.ts:35](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/test-setup/src/index.ts#L35)

___

### orgIdContract

• **orgIdContract**: `OrgId`

#### Defined in

[test-setup/src/index.ts:34](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/test-setup/src/index.ts#L34)

___

### signers

• **signers**: `Signer`[]

#### Defined in

[test-setup/src/index.ts:32](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/test-setup/src/index.ts#L32)

## Methods

### buildOrgJson

▸ **buildOrgJson**(`did`, `owner`, `overrideOptions?`): `Promise`<`SignedVC`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `owner` | `VoidSigner` |
| `overrideOptions?` | [`TestOverrideOptions`](TestOverrideOptions.md) |

#### Returns

`Promise`<`SignedVC`\>

#### Defined in

[test-setup/src/index.ts:40](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/test-setup/src/index.ts#L40)

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[test-setup/src/index.ts:45](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/test-setup/src/index.ts#L45)

___

### registerOrgId

▸ **registerOrgId**(`orgIdOwner`, `overrideOptions?`): `Promise`<[`OrgIdRegistrationResult`](../README.md#orgidregistrationresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdOwner` | `VoidSigner` |
| `overrideOptions?` | [`TestOverrideOptions`](TestOverrideOptions.md) |

#### Returns

`Promise`<[`OrgIdRegistrationResult`](../README.md#orgidregistrationresult)\>

#### Defined in

[test-setup/src/index.ts:36](https://github.com/windingtree/org.id-sdk/blob/6ea84e7/packages/test-setup/src/index.ts#L36)
