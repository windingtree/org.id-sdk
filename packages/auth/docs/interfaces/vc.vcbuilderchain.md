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

[src/vc.ts:55](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L55)

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

[src/vc.ts:52](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L52)

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

[src/vc.ts:42](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L42)

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

[src/vc.ts:46](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L46)

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

[src/vc.ts:49](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L49)

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

[src/vc.ts:58](https://github.com/windingtree/org.id-sdk/blob/86e41b1/packages/auth/src/vc.ts#L58)
