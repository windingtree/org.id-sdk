@windingtree/org.id-test-setup

# @windingtree/org.id-test-setup

## Table of contents

### Interfaces

- [OrgIdSetup](interfaces/OrgIdSetup.md)
- [TestOverrideOptions](interfaces/TestOverrideOptions.md)

### Type aliases

- [OrgIdRegistrationResult](README.md#orgidregistrationresult)

### Properties

- [orgJsonTemplate](README.md#orgjsontemplate)

### Functions

- [buildOrgJson](README.md#buildorgjson)
- [generateOrgIdWithAddress](README.md#generateorgidwithaddress)
- [generateOrgIdWithSigner](README.md#generateorgidwithsigner)
- [generateSalt](README.md#generatesalt)
- [orgIdSetup](README.md#orgidsetup)
- [registerOrgId](README.md#registerorgid)

## Type aliases

### OrgIdRegistrationResult

Ƭ **OrgIdRegistrationResult**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `delegates?` | `string`[] |
| `orgIdHash` | `string` |
| `orgJson` | `SignedVC` |
| `tokenId` | `BigNumber` |

#### Defined in

[test-setup/src/index.ts:48](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/test-setup/src/index.ts#L48)

## Properties

### orgJsonTemplate

• **orgJsonTemplate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `@context` | `string`[] |
| `created` | `string` |
| `credentials` | `never`[] |
| `id` | `string` |
| `legalEntity` | `Object` |
| `legalEntity.alternativeName` | `string` |
| `legalEntity.contacts` | ({ `email`: `string` = "email@spam.com"; `function`: `string` = "Customer Service"; `name`: `string` = "John Smith"; `phone`: `string` = "+1234567890" } \| { `email`: `string` = "email@spam.com"; `function`: `string` = "Press"; `name`: `undefined` = "John Smith"; `phone`: `string` = "+1234567890" })[] |
| `legalEntity.identifiers` | { `type`: `string` = "IATA"; `value`: `string` = "123456" }[] |
| `legalEntity.legalName` | `string` |
| `legalEntity.legalType` | `string` |
| `legalEntity.locations` | { `address`: { `country`: `string` = "CZ"; `geocodes`: { `type`: `string` = "olc"; `value`: `string` = "3CQ9+F2 Prague" }[] ; `gps`: `string` = "50.087070,14.417210"; `locality`: `string` = "Jihlava"; `postalCode`: `string` = "71354"; `premise`: `string` = "STE 100"; `streetAddress`: `string` = "3150 Main St."; `subdivision`: `string` = "71" } ; `contacts`: { `email`: `string` = "email@spam.com"; `function`: `string` = "Reception"; `messengers`: { `type`: `string` = "whatsapp"; `value`: `string` = "+1234567890" }[] ; `name`: `string` = "John Smith"; `phone`: `string` = "+1234567890" }[] ; `description`: `string` = "This is our main office"; `name`: `string` = "Main Office"; `openingHours`: { `hours`: `string` = "9:00-18:00"; `weekDay`: `string` = "mon,tue,wed" }[]  }[] |
| `legalEntity.media` | `Object` |
| `legalEntity.media.logo` | `string` |
| `legalEntity.registeredAddress` | `Object` |
| `legalEntity.registeredAddress.country` | `string` |
| `legalEntity.registeredAddress.locality` | `string` |
| `legalEntity.registeredAddress.postalCode` | `string` |
| `legalEntity.registeredAddress.premise` | `string` |
| `legalEntity.registeredAddress.streetAddress` | `string` |
| `legalEntity.registeredAddress.subdivision` | `string` |
| `legalEntity.registryCode` | `string` |
| `payment` | `never`[] |
| `schemaVersion` | `string` |
| `service` | `never`[] |
| `trustAssertions` | `never`[] |
| `updated` | `string` |
| `verificationMethod` | `never`[] |

## Functions

### buildOrgJson

▸ `Const` **buildOrgJson**(`did`, `owner`, `overrideOptions?`): `Promise`<`SignedVC`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |
| `owner` | `VoidSigner` |
| `overrideOptions` | [`TestOverrideOptions`](interfaces/TestOverrideOptions.md) |

#### Returns

`Promise`<`SignedVC`\>

#### Defined in

[test-setup/src/index.ts:76](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/test-setup/src/index.ts#L76)

___

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

utils/dist/common/index.d.ts:4

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

utils/dist/common/index.d.ts:3

___

### generateSalt

▸ `Const` **generateSalt**(): `string`

#### Returns

`string`

#### Defined in

utils/dist/common/index.d.ts:2

___

### orgIdSetup

▸ `Const` **orgIdSetup**(): `Promise`<[`OrgIdSetup`](interfaces/OrgIdSetup.md)\>

#### Returns

`Promise`<[`OrgIdSetup`](interfaces/OrgIdSetup.md)\>

#### Defined in

[test-setup/src/index.ts:261](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/test-setup/src/index.ts#L261)

___

### registerOrgId

▸ `Const` **registerOrgId**(`contract`, `httpServer`, `owner`, `overrideOptions?`): `Promise`<[`OrgIdRegistrationResult`](README.md#orgidregistrationresult)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `contract` | `OrgId` |
| `httpServer` | `HttpFileServer` |
| `owner` | `VoidSigner` |
| `overrideOptions` | [`TestOverrideOptions`](interfaces/TestOverrideOptions.md) |

#### Returns

`Promise`<[`OrgIdRegistrationResult`](README.md#orgidregistrationresult)\>

#### Defined in

[test-setup/src/index.ts:171](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/test-setup/src/index.ts#L171)
