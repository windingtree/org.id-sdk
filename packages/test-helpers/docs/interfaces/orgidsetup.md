[@windingtree/org.id-test-helpers](../README.md) / OrgIdSetup

# Interface: OrgIdSetup

## Table of contents

### Properties

- [accounts](orgidsetup.md#accounts)
- [address](orgidsetup.md#address)
- [httpServer](orgidsetup.md#httpserver)
- [owner](orgidsetup.md#owner)
- [server](orgidsetup.md#server)

### Methods

- [close](orgidsetup.md#close)
- [registerOrgId](orgidsetup.md#registerorgid)

## Properties

### accounts

• **accounts**: *string*[]

Defined in: [src/orgIdSetup.ts:8](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/orgIdSetup.ts#L8)

___

### address

• **address**: *string*

Defined in: [src/orgIdSetup.ts:10](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/orgIdSetup.ts#L10)

___

### httpServer

• **httpServer**: [*HttpFileServer*](../classes/httpfileserver.md)

Defined in: [src/orgIdSetup.ts:12](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/orgIdSetup.ts#L12)

___

### owner

• **owner**: *string*

Defined in: [src/orgIdSetup.ts:9](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/orgIdSetup.ts#L9)

___

### server

• **server**: [*DevelopmentServer*](../classes/developmentserver.md)

Defined in: [src/orgIdSetup.ts:11](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/orgIdSetup.ts#L11)

## Methods

### close

▸ **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

Defined in: [src/orgIdSetup.ts:14](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/orgIdSetup.ts#L14)

___

### registerOrgId

▸ **registerOrgId**(`orgIdOwner`: *string*): *Promise*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `orgIdOwner` | *string* |

**Returns:** *Promise*<string\>

Defined in: [src/orgIdSetup.ts:13](https://github.com/windingtree/org.id-sdk/blob/c4e7118/packages/test-helpers/src/orgIdSetup.ts#L13)
