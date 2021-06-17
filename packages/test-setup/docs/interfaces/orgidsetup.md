[@windingtree/org.id-test-setup](../README.md) / OrgIdSetup

# Interface: OrgIdSetup

## Table of contents

### Properties

- [accounts](orgidsetup.md#accounts)
- [address](orgidsetup.md#address)
- [httpServer](orgidsetup.md#httpserver)
- [owner](orgidsetup.md#owner)
- [server](orgidsetup.md#server)

### Methods

- [buildOrgJson](orgidsetup.md#buildorgjson)
- [close](orgidsetup.md#close)
- [registerOrgId](orgidsetup.md#registerorgid)

## Properties

### accounts

• **accounts**: `string`[]

#### Defined in

[test-setup/src/index.ts:27](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L27)

___

### address

• **address**: `string`

#### Defined in

[test-setup/src/index.ts:29](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L29)

___

### httpServer

• **httpServer**: `HttpFileServer`

#### Defined in

[test-setup/src/index.ts:31](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L31)

___

### owner

• **owner**: `string`

#### Defined in

[test-setup/src/index.ts:28](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L28)

___

### server

• **server**: `DevelopmentServer`

#### Defined in

[test-setup/src/index.ts:30](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L30)

## Methods

### buildOrgJson

▸ **buildOrgJson**(`did`, `web3Provider`, `owner`): `Promise`<SignedVC\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `web3Provider` | `Provider` |
| `owner` | `string` |

#### Returns

`Promise`<SignedVC\>

#### Defined in

[test-setup/src/index.ts:35](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L35)

___

### close

▸ **close**(): `Promise`<void\>

#### Returns

`Promise`<void\>

#### Defined in

[test-setup/src/index.ts:40](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L40)

___

### registerOrgId

▸ **registerOrgId**(`orgIdOwner`): `Promise`<[OrgIdRegistrationResult](../README.md#orgidregistrationresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdOwner` | `string` |

#### Returns

`Promise`<[OrgIdRegistrationResult](../README.md#orgidregistrationresult)\>

#### Defined in

[test-setup/src/index.ts:32](https://github.com/windingtree/org.id-sdk/blob/853e449/packages/test-setup/src/index.ts#L32)
