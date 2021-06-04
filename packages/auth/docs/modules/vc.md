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

### Functions

- [buildHolderUtil](vc.md#buildholderutil)
- [buildProofUtil](vc.md#buildproofutil)
- [checkDateUtil](vc.md#checkdateutil)
- [createVC](vc.md#createvc)
- [isExpired](vc.md#isexpired)
- [isValidFromUntil](vc.md#isvalidfromuntil)
- [verifyVC](vc.md#verifyvc)

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

[src/vc.ts:69](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L69)

___

### buildProofUtil

▸ `Const` **buildProofUtil**(`jws`, `type`, `verificationMethod`): [VCProofReference](../interfaces/vc.vcproofreference.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | `string` |
| `type` | ``"JsonWebKey2020"`` \| ``"EcdsaSecp256k1VerificationKey2019"`` \| ``"Ed25519VerificationKey2018"`` \| ``"RsaVerificationKey2018"`` \| ``"X25519KeyAgreementKey2019"`` |
| `verificationMethod` | `string` |

#### Returns

[VCProofReference](../interfaces/vc.vcproofreference.md)

#### Defined in

[src/vc.ts:100](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L100)

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

[src/vc.ts:88](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L88)

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

[src/vc.ts:120](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L120)

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

[src/vc.ts:395](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L395)

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

[src/vc.ts:402](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L402)

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

[src/vc.ts:355](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L355)
