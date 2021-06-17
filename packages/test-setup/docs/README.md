@windingtree/org.id-test-setup

# @windingtree/org.id-test-setup

## Table of contents

### Interfaces

- [ContractObject](interfaces/contractobject.md)
- [OrgIdSetup](interfaces/orgidsetup.md)

### Type aliases

- [OrgIdRegistrationResult](README.md#orgidregistrationresult)

### Functions

- [buildOrgJson](README.md#buildorgjson)
- [generateOrgIdHash](README.md#generateorgidhash)
- [generateSalt](README.md#generatesalt)
- [orgIdSetup](README.md#orgidsetup)
- [registerOrgId](README.md#registerorgid)

## Type aliases

### OrgIdRegistrationResult

Ƭ **OrgIdRegistrationResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `orgIdHash` | `string` |
| `orgJson` | `SignedVC` |

#### Defined in

[test-setup/src/index.ts:47](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L47)

## Functions

### buildOrgJson

▸ `Const` **buildOrgJson**(`did`, `web3Provider`, `owner`): `Promise`<SignedVC\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `web3Provider` | `Provider` |
| `owner` | `string` |

#### Returns

`Promise`<SignedVC\>

#### Defined in

[test-setup/src/index.ts:52](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L52)

___

### generateOrgIdHash

▸ `Const` **generateOrgIdHash**(`address`, `salt`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `salt` | `string` |

#### Returns

`string`

#### Defined in

utils/dist/common/index.d.ts:2

___

### generateSalt

▸ `Const` **generateSalt**(): `string`

#### Returns

`string`

#### Defined in

utils/dist/common/index.d.ts:1

___

### orgIdSetup

▸ `Const` **orgIdSetup**(): `Promise`<[OrgIdSetup](interfaces/orgidsetup.md)\>

#### Returns

`Promise`<[OrgIdSetup](interfaces/orgidsetup.md)\>

#### Defined in

[test-setup/src/index.ts:117](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L117)

___

### registerOrgId

▸ `Const` **registerOrgId**(`server`, `contract`, `httpServer`, `owner`): `Promise`<[OrgIdRegistrationResult](README.md#orgidregistrationresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `server` | `DevelopmentServer` |
| `contract` | [ContractObject](interfaces/contractobject.md) |
| `httpServer` | `HttpFileServer` |
| `owner` | `string` |

#### Returns

`Promise`<[OrgIdRegistrationResult](README.md#orgidregistrationresult)\>

#### Defined in

[test-setup/src/index.ts:84](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L84)
