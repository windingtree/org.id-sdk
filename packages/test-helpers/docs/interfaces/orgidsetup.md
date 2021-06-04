[@windingtree/org.id-test-helpers](../README.md) / OrgIdSetup

# Interface: OrgIdSetup

## Table of contents

### Properties

- [accounts](orgidsetup.md#accounts)
- [address](orgidsetup.md#address)
- [httpServer](orgidsetup.md#httpserver)
- [keyPairs](orgidsetup.md#keypairs)
- [owner](orgidsetup.md#owner)
- [salts](orgidsetup.md#salts)
- [server](orgidsetup.md#server)

### Methods

- [buildOrgJson](orgidsetup.md#buildorgjson)
- [close](orgidsetup.md#close)
- [registerOrgId](orgidsetup.md#registerorgid)

## Properties

### accounts

• **accounts**: `string`[]

#### Defined in

[test-helpers/src/orgIdSetup.ts:22](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L22)

___

### address

• **address**: `string`

#### Defined in

[test-helpers/src/orgIdSetup.ts:26](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L26)

___

### httpServer

• **httpServer**: [HttpFileServer](../classes/httpfileserver.md)

#### Defined in

[test-helpers/src/orgIdSetup.ts:28](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L28)

___

### keyPairs

• **keyPairs**: `KeyPair`[]

#### Defined in

[test-helpers/src/orgIdSetup.ts:24](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L24)

___

### owner

• **owner**: `string`

#### Defined in

[test-helpers/src/orgIdSetup.ts:25](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L25)

___

### salts

• **salts**: `string`[]

#### Defined in

[test-helpers/src/orgIdSetup.ts:23](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L23)

___

### server

• **server**: [DevelopmentServer](../classes/developmentserver.md)

#### Defined in

[test-helpers/src/orgIdSetup.ts:27](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L27)

## Methods

### buildOrgJson

▸ **buildOrgJson**(`did`, `keyPair`): `Promise`<ORGJSON\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `keyPair` | `KeyPair` |

#### Returns

`Promise`<ORGJSON\>

#### Defined in

[test-helpers/src/orgIdSetup.ts:30](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L30)

___

### close

▸ **close**(): `Promise`<void\>

#### Returns

`Promise`<void\>

#### Defined in

[test-helpers/src/orgIdSetup.ts:34](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L34)

___

### registerOrgId

▸ **registerOrgId**(`orgIdOwner`): `Promise`<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdOwner` | `string` |

#### Returns

`Promise`<string\>

#### Defined in

[test-helpers/src/orgIdSetup.ts:29](https://github.com/windingtree/org.id-sdk/blob/c66281f/packages/test-helpers/src/orgIdSetup.ts#L29)
