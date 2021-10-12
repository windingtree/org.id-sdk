[@windingtree/org.id-auth](../README.md) / [vc](../modules/vc.md) / VCBuilderChain

# Interface: VCBuilderChain

[vc](../modules/vc.md).VCBuilderChain

## Table of contents

### Methods

- [setCredentialSubject](vc.VCBuilderChain.md#setcredentialsubject)
- [setExpirationDate](vc.VCBuilderChain.md#setexpirationdate)
- [setHolder](vc.VCBuilderChain.md#setholder)
- [setValidFrom](vc.VCBuilderChain.md#setvalidfrom)
- [setValidUntil](vc.VCBuilderChain.md#setvaliduntil)
- [sign](vc.VCBuilderChain.md#sign)
- [signWithBlockchainAccount](vc.VCBuilderChain.md#signwithblockchainaccount)

## Methods

### setCredentialSubject

▸ **setCredentialSubject**(`subject`): [`VCBuilderChain`](vc.VCBuilderChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject` | [`CredentialSubject`](vc.CredentialSubject.md) |

#### Returns

[`VCBuilderChain`](vc.VCBuilderChain.md)

#### Defined in

[src/vc.ts:63](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/vc.ts#L63)

___

### setExpirationDate

▸ **setExpirationDate**(`expire`): [`VCBuilderChain`](vc.VCBuilderChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expire` | `string` |

#### Returns

[`VCBuilderChain`](vc.VCBuilderChain.md)

#### Defined in

[src/vc.ts:60](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/vc.ts#L60)

___

### setHolder

▸ **setHolder**(`holder`, `type?`): [`VCBuilderChain`](vc.VCBuilderChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `holder` | `string` |
| `type?` | `string` |

#### Returns

[`VCBuilderChain`](vc.VCBuilderChain.md)

#### Defined in

[src/vc.ts:50](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/vc.ts#L50)

___

### setValidFrom

▸ **setValidFrom**(`date`): [`VCBuilderChain`](vc.VCBuilderChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

[`VCBuilderChain`](vc.VCBuilderChain.md)

#### Defined in

[src/vc.ts:54](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/vc.ts#L54)

___

### setValidUntil

▸ **setValidUntil**(`date`): [`VCBuilderChain`](vc.VCBuilderChain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `string` |

#### Returns

[`VCBuilderChain`](vc.VCBuilderChain.md)

#### Defined in

[src/vc.ts:57](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/vc.ts#L57)

___

### sign

▸ **sign**(`privateKey`): `Promise`<[`SignedVC`](vc.SignedVC.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`KeyLike`](../modules/keys.md#keylike) \| [`JWK`](keys.JWK.md) \| `Uint8Array` |

#### Returns

`Promise`<[`SignedVC`](vc.SignedVC.md)\>

#### Defined in

[src/vc.ts:66](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/vc.ts#L66)

___

### signWithBlockchainAccount

▸ **signWithBlockchainAccount**(`blockchainAccountId`, `signer`): `Promise`<[`SignedVC`](vc.SignedVC.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockchainAccountId` | `string` |
| `signer` | `Signer` |

#### Returns

`Promise`<[`SignedVC`](vc.SignedVC.md)\>

#### Defined in

[src/vc.ts:69](https://github.com/windingtree/org.id-sdk/blob/5e5ef18/packages/auth/src/vc.ts#L69)
