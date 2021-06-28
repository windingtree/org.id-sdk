[@windingtree/org.id-auth](../README.md) / vc

# Namespace: vc

## Table of contents

### Interfaces

- [BlockchainAccountIdGroupedResult](../interfaces/vc.blockchainaccountidgroupedresult.md)
- [BlockchainAccountIdParsed](../interfaces/vc.blockchainaccountidparsed.md)
- [CredentialReference](../interfaces/vc.credentialreference.md)
- [CredentialSubject](../interfaces/vc.credentialsubject.md)
- [DecodedJws](../interfaces/vc.decodedjws.md)
- [DidGroupedCheckResult](../interfaces/vc.didgroupedcheckresult.md)
- [SignatureOptions](../interfaces/vc.signatureoptions.md)
- [SignedVC](../interfaces/vc.signedvc.md)
- [VCBuilderChain](../interfaces/vc.vcbuilderchain.md)
- [VCProofReference](../interfaces/vc.vcproofreference.md)
- [VCTypedHolderReference](../interfaces/vc.vctypedholderreference.md)

### Type aliases

- [GenericObject](vc.md#genericobject)
- [Web3Provider](vc.md#web3provider)
- [WebProvider](vc.md#webprovider)

### Functions

- [buildHolderUtil](vc.md#buildholderutil)
- [buildProofUtil](vc.md#buildproofutil)
- [buildUnsignedDataForWeb3Signature](vc.md#buildunsigneddataforweb3signature)
- [checkDateUtil](vc.md#checkdateutil)
- [createVC](vc.md#createvc)
- [decodeJws](vc.md#decodejws)
- [isExpired](vc.md#isexpired)
- [isValidFromUntil](vc.md#isvalidfromuntil)
- [parseBlockchainAccountId](vc.md#parseblockchainaccountid)
- [signWithWeb3Provider](vc.md#signwithweb3provider)
- [verifyJwsSignedWithBlockchainAccount](vc.md#verifyjwssignedwithblockchainaccount)
- [verifyVC](vc.md#verifyvc)

## Type aliases

### GenericObject

Ƭ **GenericObject**: `Object`

#### Index signature

▪ [k: `string`]: `unknown`

#### Defined in

[src/vc.ts:40](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L40)

___

### Web3Provider

Ƭ **Web3Provider**: `HttpProvider` \| `WebsocketProvider` \| `IpcProvider`

#### Defined in

[src/vc.ts:42](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L42)

___

### WebProvider

Ƭ **WebProvider**: [`Web3Provider`](vc.md#web3provider)

#### Defined in

[src/vc.ts:48](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L48)

## Functions

### buildHolderUtil

▸ `Const` **buildHolderUtil**(`holder`, `type?`): `string` \| [`VCTypedHolderReference`](../interfaces/vc.vctypedholderreference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `holder` | `string` |
| `type?` | `string` |

#### Returns

`string` \| [`VCTypedHolderReference`](../interfaces/vc.vctypedholderreference.md)

#### Defined in

[src/vc.ts:256](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L256)

___

### buildProofUtil

▸ `Const` **buildProofUtil**(`jws`, `type`, `verificationMethod`): [`VCProofReference`](../interfaces/vc.vcproofreference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |
| `type` | `CryptographicSignatureSuiteReference` |
| `verificationMethod` | `string` |

#### Returns

[`VCProofReference`](../interfaces/vc.vcproofreference.md)

#### Defined in

[src/vc.ts:287](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L287)

___

### buildUnsignedDataForWeb3Signature

▸ `Const` **buildUnsignedDataForWeb3Signature**(`verificationMethod`, `payload`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `verificationMethod` | `string` |
| `payload` | `string` \| [`CredentialReference`](../interfaces/vc.credentialreference.md) \| [`GenericObject`](vc.md#genericobject) |

#### Returns

`string`

#### Defined in

[src/vc.ts:112](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L112)

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

[src/vc.ts:275](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L275)

___

### createVC

▸ `Const` **createVC**(`issuer`, `type`): [`VCBuilderChain`](../interfaces/vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuer` | `string` |
| `type` | `undefined` \| `string` \| `string`[] |

#### Returns

[`VCBuilderChain`](../interfaces/vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:307](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L307)

___

### decodeJws

▸ `Const` **decodeJws**(`jws`): [`DecodedJws`](../interfaces/vc.decodedjws.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |

#### Returns

[`DecodedJws`](../interfaces/vc.decodedjws.md)

#### Defined in

[src/vc.ts:183](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L183)

___

### isExpired

▸ `Const` **isExpired**(`vc`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | [`CredentialReference`](../interfaces/vc.credentialreference.md) |

#### Returns

`boolean`

#### Defined in

[src/vc.ts:670](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L670)

___

### isValidFromUntil

▸ `Const` **isValidFromUntil**(`vc`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | [`CredentialReference`](../interfaces/vc.credentialreference.md) |

#### Returns

`boolean`

#### Defined in

[src/vc.ts:677](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L677)

___

### parseBlockchainAccountId

▸ `Const` **parseBlockchainAccountId**(`blockchainAccountId`): [`BlockchainAccountIdParsed`](../interfaces/vc.blockchainaccountidparsed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockchainAccountId` | `string` |

#### Returns

[`BlockchainAccountIdParsed`](../interfaces/vc.blockchainaccountidparsed.md)

#### Defined in

[src/vc.ts:150](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L150)

___

### signWithWeb3Provider

▸ `Const` **signWithWeb3Provider**(`web3Provider`, `from`, `verificationMethod`, `payload`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `web3Provider` | [`Web3Provider`](vc.md#web3provider) |
| `from` | `string` |
| `verificationMethod` | `string` |
| `payload` | `string` \| [`GenericObject`](vc.md#genericobject) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/vc.ts:128](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L128)

___

### verifyJwsSignedWithBlockchainAccount

▸ `Const` **verifyJwsSignedWithBlockchainAccount**(`jws`, `accountId`): [`CredentialReference`](../interfaces/vc.credentialreference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |
| `accountId` | `string` |

#### Returns

[`CredentialReference`](../interfaces/vc.credentialreference.md)

#### Defined in

[src/vc.ts:223](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L223)

___

### verifyVC

▸ `Const` **verifyVC**(`vc`, `publicKey`): `Promise`<[`CredentialReference`](../interfaces/vc.credentialreference.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | [`SignedVC`](../interfaces/vc.signedvc.md) |
| `publicKey` | `string` \| [`JWK`](../interfaces/keys.jwk.md) \| [`KeyLike`](keys.md#keylike) |

#### Returns

`Promise`<[`CredentialReference`](../interfaces/vc.credentialreference.md)\>

#### Defined in

[src/vc.ts:600](https://github.com/windingtree/org.id-sdk/blob/074c18d/packages/auth/src/vc.ts#L600)
