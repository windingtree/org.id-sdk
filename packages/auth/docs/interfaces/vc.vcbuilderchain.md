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

▸ **setCredentialSubject**(`subject`: *unknown*): [*VCBuilderChain*](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `subject` | *unknown* |

**Returns:** [*VCBuilderChain*](vc.vcbuilderchain.md)

Defined in: [src/vc.ts:46](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L46)

___

### setExpirationDate

▸ **setExpirationDate**(`expire`: *string*): [*VCBuilderChain*](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expire` | *string* |

**Returns:** [*VCBuilderChain*](vc.vcbuilderchain.md)

Defined in: [src/vc.ts:43](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L43)

___

### setHolder

▸ **setHolder**(`holder`: *string*, `type?`: *string*): [*VCBuilderChain*](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `holder` | *string* |
| `type?` | *string* |

**Returns:** [*VCBuilderChain*](vc.vcbuilderchain.md)

Defined in: [src/vc.ts:33](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L33)

___

### setValidFrom

▸ **setValidFrom**(`date`: *string*): [*VCBuilderChain*](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | *string* |

**Returns:** [*VCBuilderChain*](vc.vcbuilderchain.md)

Defined in: [src/vc.ts:37](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L37)

___

### setValidUntil

▸ **setValidUntil**(`date`: *string*): [*VCBuilderChain*](vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | *string* |

**Returns:** [*VCBuilderChain*](vc.vcbuilderchain.md)

Defined in: [src/vc.ts:40](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L40)

___

### sign

▸ **sign**(`privateKey`: [*JWK*](keys.jwk.md) \| [*KeyLike*](../modules/keys.md#keylike)): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [*JWK*](keys.jwk.md) \| [*KeyLike*](../modules/keys.md#keylike) |

**Returns:** *any*

Defined in: [src/vc.ts:49](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L49)
