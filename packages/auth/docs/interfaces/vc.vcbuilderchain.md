[@windingtree/org.id-auth](../README.md) / [vc](../modules/vc.md) / VCBuilderChain

# Interface: VCBuilderChain

[vc](../modules/vc.md).VCBuilderChain

## Table of contents

### Methods

- [setCredentialSubject](vc.vcbuilderchain.md#setcredentialsubject)
- [setExpirationDate](vc.vcbuilderchain.md#setexpirationdate)
- [setHolder](vc.vcbuilderchain.md#setholder)
- [setValidFrom](vc.vcbuilderchain.md#setvalidfrom)
- [setValidUntil](vc.vcbuilderchain.md#setvaliduntil)
- [sign](vc.vcbuilderchain.md#sign)
- [signWithBlockchainAccount](vc.vcbuilderchain.md#signwithblockchainaccount)

## Methods

### setCredentialSubject

▸ **setCredentialSubject**(`subject`): [`VCBuilderChain`](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject` | [`CredentialSubject`](vc.credentialsubject.md) |

#### Returns

[`VCBuilderChain`](vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:77](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L77)

___

### setExpirationDate

▸ **setExpirationDate**(`expire`): [`VCBuilderChain`](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expire` | `string` |

#### Returns

[`VCBuilderChain`](vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:74](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L74)

___

### setHolder

▸ **setHolder**(`holder`, `type?`): [`VCBuilderChain`](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `holder` | `string` |
| `type?` | `string` |

#### Returns

[`VCBuilderChain`](vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:64](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L64)

___

### setValidFrom

▸ **setValidFrom**(`date`): [`VCBuilderChain`](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

[`VCBuilderChain`](vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:68](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L68)

___

### setValidUntil

▸ **setValidUntil**(`date`): [`VCBuilderChain`](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

[`VCBuilderChain`](vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:71](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L71)

___

### sign

▸ **sign**(`privateKey`): `Promise`<[`SignedVC`](vc.signedvc.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`JWK`](keys.jwk.md) \| [`KeyLike`](../modules/keys.md#keylike) |

#### Returns

`Promise`<[`SignedVC`](vc.signedvc.md)\>

#### Defined in

[src/vc.ts:80](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L80)

___

### signWithBlockchainAccount

▸ **signWithBlockchainAccount**(`blockchainAccountId`, `options?`): `Promise`<[`SignedVC`](vc.signedvc.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockchainAccountId` | `string` |
| `options?` | [`SignatureOptions`](vc.signatureoptions.md) |

#### Returns

`Promise`<[`SignedVC`](vc.signedvc.md)\>

#### Defined in

[src/vc.ts:83](https://github.com/windingtree/org.id-sdk/blob/45c8f9f/packages/auth/src/vc.ts#L83)
