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

[src/vc.ts:41](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L41)

___

### Web3Provider

Ƭ **Web3Provider**: `HttpProvider` \| `WebsocketProvider` \| `IpcProvider`

#### Defined in

[src/vc.ts:43](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L43)

___

### WebProvider

Ƭ **WebProvider**: [`Web3Provider`](vc.md#web3provider)

#### Defined in

[src/vc.ts:49](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L49)

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

[src/vc.ts:257](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L257)

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

[src/vc.ts:288](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L288)

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

[src/vc.ts:113](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L113)

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

[src/vc.ts:276](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L276)

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

[src/vc.ts:308](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L308)

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

[src/vc.ts:184](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L184)

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

[src/vc.ts:151](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L151)

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

[src/vc.ts:129](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L129)

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

[src/vc.ts:224](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L224)

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

[src/vc.ts:601](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L601)
