[@windingtree/org.id-auth](../README.md) / vc

# Namespace: vc

## Table of contents

### Interfaces

- [CredentialReference](../interfaces/vc.credentialreference.md)
- [CredentialSubject](../interfaces/vc.credentialsubject.md)
- [DidGroupedCheckResult](../interfaces/vc.didgroupedcheckresult.md)
- [SignedVC](../interfaces/vc.signedvc.md)
- [VCBuilderChain](../interfaces/vc.vcbuilderchain.md)
- [VCProofReference](../interfaces/vc.vcproofreference.md)
- [VCTypedHolderReference](../interfaces/vc.vctypedholderreference.md)

### Type aliases

- [WebProvider](vc.md#webprovider)

### Functions

- [buildHolderUtil](vc.md#buildholderutil)
- [buildProofUtil](vc.md#buildproofutil)
- [checkDateUtil](vc.md#checkdateutil)
- [createVC](vc.md#createvc)
- [isExpired](vc.md#isexpired)
- [isValidFromUntil](vc.md#isvalidfromuntil)
- [signWithWeb3Provider](vc.md#signwithweb3provider)
- [verifyVC](vc.md#verifyvc)

## Type aliases

### WebProvider

Ƭ **WebProvider**: `HttpProvider` \| `WebsocketProvider` \| `IpcProvider`

#### Defined in

[src/vc.ts:39](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L39)

## Functions

### buildHolderUtil

▸ `Const` **buildHolderUtil**(`holder`, `type?`): `string` \| [VCTypedHolderReference](../interfaces/vc.vctypedholderreference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `holder` | `string` |
| `type?` | `string` |

#### Returns

`string` \| [VCTypedHolderReference](../interfaces/vc.vctypedholderreference.md)

#### Defined in

[src/vc.ts:148](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L148)

___

### buildProofUtil

▸ `Const` **buildProofUtil**(`jws`, `type`, `verificationMethod`): [VCProofReference](../interfaces/vc.vcproofreference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |
| `type` | `CryptographicSignatureSuiteReference` |
| `verificationMethod` | `string` |

#### Returns

[VCProofReference](../interfaces/vc.vcproofreference.md)

#### Defined in

[src/vc.ts:179](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L179)

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

[src/vc.ts:167](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L167)

___

### createVC

▸ `Const` **createVC**(`issuer`, `type`): [VCBuilderChain](../interfaces/vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuer` | `string` |
| `type` | `undefined` \| `string` \| `string`[] |

#### Returns

[VCBuilderChain](../interfaces/vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:199](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L199)

___

### isExpired

▸ `Const` **isExpired**(`vc`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | [CredentialReference](../interfaces/vc.credentialreference.md) |

#### Returns

`boolean`

#### Defined in

[src/vc.ts:508](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L508)

___

### isValidFromUntil

▸ `Const` **isValidFromUntil**(`vc`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | [CredentialReference](../interfaces/vc.credentialreference.md) |

#### Returns

`boolean`

#### Defined in

[src/vc.ts:515](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L515)

___

### signWithWeb3Provider

▸ `Const` **signWithWeb3Provider**(`web3Provider`, `from`, `verificationMethod`, `payload`): `Promise`<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `web3Provider` | [WebProvider](vc.md#webprovider) |
| `from` | `string` |
| `verificationMethod` | `string` |
| `payload` | `string` \| { [k: string]: `unknown`;  } |

#### Returns

`Promise`<string\>

#### Defined in

[src/vc.ts:83](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L83)

___

### verifyVC

▸ `Const` **verifyVC**(`vc`, `publicKey`): `Promise`<[CredentialReference](../interfaces/vc.credentialreference.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | [SignedVC](../interfaces/vc.signedvc.md) |
| `publicKey` | [JWK](../interfaces/keys.jwk.md) \| [KeyLike](keys.md#keylike) |

#### Returns

`Promise`<[CredentialReference](../interfaces/vc.credentialreference.md)\>

#### Defined in

[src/vc.ts:468](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L468)
