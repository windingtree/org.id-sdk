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
- [signWithWeb3Provider](vc.vcbuilderchain.md#signwithweb3provider)

## Methods

### setCredentialSubject

▸ **setCredentialSubject**(`subject`): [VCBuilderChain](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject` | [CredentialSubject](vc.credentialsubject.md) |

#### Returns

[VCBuilderChain](vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:66](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L66)

___

### setExpirationDate

▸ **setExpirationDate**(`expire`): [VCBuilderChain](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expire` | `string` |

#### Returns

[VCBuilderChain](vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:63](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L63)

___

### setHolder

▸ **setHolder**(`holder`, `type?`): [VCBuilderChain](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `holder` | `string` |
| `type?` | `string` |

#### Returns

[VCBuilderChain](vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:53](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L53)

___

### setValidFrom

▸ **setValidFrom**(`date`): [VCBuilderChain](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

[VCBuilderChain](vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:57](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L57)

___

### setValidUntil

▸ **setValidUntil**(`date`): [VCBuilderChain](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

[VCBuilderChain](vc.vcbuilderchain.md)

#### Defined in

[src/vc.ts:60](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L60)

___

### sign

▸ **sign**(`privateKey`): `Promise`<[SignedVC](vc.signedvc.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [JWK](keys.jwk.md) \| [KeyLike](../modules/keys.md#keylike) |

#### Returns

`Promise`<[SignedVC](vc.signedvc.md)\>

#### Defined in

[src/vc.ts:69](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L69)

___

### signWithWeb3Provider

▸ **signWithWeb3Provider**(`web3Provider`, `ownerAddress`): `Promise`<[SignedVC](vc.signedvc.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `web3Provider` | [WebProvider](../modules/vc.md#webprovider) |
| `ownerAddress` | `string` |

#### Returns

`Promise`<[SignedVC](vc.signedvc.md)\>

#### Defined in

[src/vc.ts:72](https://github.com/windingtree/org.id-sdk/blob/37fdd44/packages/auth/src/vc.ts#L72)
