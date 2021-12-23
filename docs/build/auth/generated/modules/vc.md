[@windingtree/org.id-auth](../README.md) / vc

# Namespace: vc

## Table of contents

### Interfaces

- [BlockchainAccountIdGroupedResult](../interfaces/vc.BlockchainAccountIdGroupedResult.md)
- [BlockchainAccountIdParsed](../interfaces/vc.BlockchainAccountIdParsed.md)
- [CreateVcOptions](../interfaces/vc.CreateVcOptions.md)
- [CredentialReference](../interfaces/vc.CredentialReference.md)
- [CredentialSubject](../interfaces/vc.CredentialSubject.md)
- [CredentialSubjectValidatorConfig](../interfaces/vc.CredentialSubjectValidatorConfig.md)
- [DecodedJws](../interfaces/vc.DecodedJws.md)
- [DidGroupedCheckResult](../interfaces/vc.DidGroupedCheckResult.md)
- [SignedVC](../interfaces/vc.SignedVC.md)
- [VCBuilderChain](../interfaces/vc.VCBuilderChain.md)
- [VCProofReference](../interfaces/vc.VCProofReference.md)
- [VCTypedHolderReference](../interfaces/vc.VCTypedHolderReference.md)

### Type aliases

- [GenericObject](vc.md#genericobject)
- [SubjectTypeConfig](vc.md#subjecttypeconfig)

### Variables

- [CredentialSubjectTypesMap](vc.md#credentialsubjecttypesmap)
- [verifiableCredentialDomain](vc.md#verifiablecredentialdomain)
- [verifiableCredentialSignatureTypes](vc.md#verifiablecredentialsignaturetypes)

### Functions

- [buildHolderUtil](vc.md#buildholderutil)
- [buildProofUtil](vc.md#buildproofutil)
- [buildUnsignedDataForSignature](vc.md#buildunsigneddataforsignature)
- [checkDateUtil](vc.md#checkdateutil)
- [createVC](vc.md#createvc)
- [decodeJws](vc.md#decodejws)
- [parseBlockchainAccountId](vc.md#parseblockchainaccountid)
- [signWithSigner](vc.md#signwithsigner)
- [verifyJwsSignedWithBlockchainAccount](vc.md#verifyjwssignedwithblockchainaccount)
- [verifyVC](vc.md#verifyvc)

## Type aliases

### GenericObject

Ƭ **GenericObject**: `Object`

#### Index signature

▪ [k: `string`]: `unknown`

#### Defined in

[src/vc.ts:36](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L36)

___

### SubjectTypeConfig

Ƭ **SubjectTypeConfig**: `Object`

#### Index signature

▪ [key: `string`]: [`CredentialSubjectValidatorConfig`](../interfaces/vc.CredentialSubjectValidatorConfig.md)

#### Defined in

[src/vc.ts:109](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L109)

## Variables

### CredentialSubjectTypesMap

• **CredentialSubjectTypesMap**: [`SubjectTypeConfig`](vc.md#subjecttypeconfig)

#### Defined in

[src/vc.ts:117](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L117)

___

### verifiableCredentialDomain

• **verifiableCredentialDomain**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[src/vc.ts:155](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L155)

___

### verifiableCredentialSignatureTypes

• **verifiableCredentialSignatureTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Payload` | { `name`: `string` = 'payload'; `type`: `string` = 'string' }[] |

#### Defined in

[src/vc.ts:160](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L160)

## Functions

### buildHolderUtil

▸ `Const` **buildHolderUtil**(`holder`, `type?`): `string` \| [`VCTypedHolderReference`](../interfaces/vc.VCTypedHolderReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `holder` | `string` |
| `type?` | `string` |

#### Returns

`string` \| [`VCTypedHolderReference`](../interfaces/vc.VCTypedHolderReference.md)

#### Defined in

[src/vc.ts:284](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L284)

___

### buildProofUtil

▸ `Const` **buildProofUtil**(`jws`, `type`, `verificationMethod`): [`VCProofReference`](../interfaces/vc.VCProofReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |
| `type` | `CryptographicSignatureSuiteReference` |
| `verificationMethod` | `string` |

#### Returns

[`VCProofReference`](../interfaces/vc.VCProofReference.md)

#### Defined in

[src/vc.ts:315](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L315)

___

### buildUnsignedDataForSignature

▸ `Const` **buildUnsignedDataForSignature**(`verificationMethod`, `payload`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `verificationMethod` | `string` |
| `payload` | `string` \| [`CredentialReference`](../interfaces/vc.CredentialReference.md) \| [`GenericObject`](vc.md#genericobject) |

#### Returns

`string`

#### Defined in

[src/vc.ts:133](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L133)

___

### checkDateUtil

▸ `Const` **checkDateUtil**(`date`): `DateTime`

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

`DateTime`

#### Defined in

[src/vc.ts:303](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L303)

___

### createVC

▸ `Const` **createVC**(`issuer`, `type`, `options?`): [`VCBuilderChain`](../interfaces/vc.VCBuilderChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuer` | `string` |
| `type` | `undefined` \| `string` \| `string`[] |
| `options?` | [`CreateVcOptions`](../interfaces/vc.CreateVcOptions.md) |

#### Returns

[`VCBuilderChain`](../interfaces/vc.VCBuilderChain.md)

#### Defined in

[src/vc.ts:335](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L335)

___

### decodeJws

▸ `Const` **decodeJws**(`jws`): [`DecodedJws`](../interfaces/vc.DecodedJws.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |

#### Returns

[`DecodedJws`](../interfaces/vc.DecodedJws.md)

#### Defined in

[src/vc.ts:215](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L215)

___

### parseBlockchainAccountId

▸ `Const` **parseBlockchainAccountId**(`blockchainAccountId`): [`BlockchainAccountIdParsed`](../interfaces/vc.BlockchainAccountIdParsed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockchainAccountId` | `string` |

#### Returns

[`BlockchainAccountIdParsed`](../interfaces/vc.BlockchainAccountIdParsed.md)

#### Defined in

[src/vc.ts:193](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L193)

___

### signWithSigner

▸ `Const` **signWithSigner**(`signer`, `verificationMethod`, `payload`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `VoidSigner` \| `Wallet` |
| `verificationMethod` | `string` |
| `payload` | `string` \| [`GenericObject`](vc.md#genericobject) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/vc.ts:170](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L170)

___

### verifyJwsSignedWithBlockchainAccount

▸ `Const` **verifyJwsSignedWithBlockchainAccount**(`jws`, `accountId`): [`CredentialReference`](../interfaces/vc.CredentialReference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |
| `accountId` | `string` |

#### Returns

[`CredentialReference`](../interfaces/vc.CredentialReference.md)

#### Defined in

[src/vc.ts:254](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L254)

___

### verifyVC

▸ `Const` **verifyVC**(`vc`, `publicKey`): `Promise`<[`CredentialReference`](../interfaces/vc.CredentialReference.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | [`SignedVC`](../interfaces/vc.SignedVC.md) |
| `publicKey` | `string` \| [`KeyLike`](keys.md#keylike) \| [`JWK`](../interfaces/keys.JWK.md) \| `Uint8Array` |

#### Returns

`Promise`<[`CredentialReference`](../interfaces/vc.CredentialReference.md)\>

#### Defined in

[src/vc.ts:700](https://github.com/windingtree/org.id-sdk/blob/625ccde/packages/auth/src/vc.ts#L700)
