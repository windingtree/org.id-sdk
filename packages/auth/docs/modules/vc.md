[@windingtree/org.id-auth](../README.md) / vc

# Namespace: vc

## Table of contents

### Interfaces

- [SignedVC](../interfaces/vc.signedvc.md)
- [VCBuilderChain](../interfaces/vc.vcbuilderchain.md)

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

▸ `Const` **buildHolderUtil**(`holder`: *string*, `type?`: *string*): *string* \| VCTypedHolderReference

#### Parameters

| Name | Type |
| :------ | :------ |
| `holder` | *string* |
| `type?` | *string* |

**Returns:** *string* \| VCTypedHolderReference

Defined in: [src/vc.ts:55](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L55)

___

### buildProofUtil

▸ `Const` **buildProofUtil**(`jws`: *string*, `type`: ``"JsonWebKey2020"`` \| ``"EcdsaSecp256k1VerificationKey2019"`` \| ``"Ed25519VerificationKey2018"`` \| ``"RsaVerificationKey2018"`` \| ``"X25519KeyAgreementKey2019"``, `verificationMethod`: *string*): VCProofReference

#### Parameters

| Name | Type |
| :------ | :------ |
| `jws` | *string* |
| `type` | ``"JsonWebKey2020"`` \| ``"EcdsaSecp256k1VerificationKey2019"`` \| ``"Ed25519VerificationKey2018"`` \| ``"RsaVerificationKey2018"`` \| ``"X25519KeyAgreementKey2019"`` |
| `verificationMethod` | *string* |

**Returns:** VCProofReference

Defined in: [src/vc.ts:86](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L86)

___

### checkDateUtil

▸ `Const` **checkDateUtil**(`date`: *string*): *DateTime*

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | *string* |

**Returns:** *DateTime*

Defined in: [src/vc.ts:74](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L74)

___

### createVC

▸ `Const` **createVC**(`issuer`: *string*, `type`: *string* \| *string*[]): [*VCBuilderChain*](../interfaces/vc.vcbuilderchain.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuer` | *string* |
| `type` | *string* \| *string*[] |

**Returns:** [*VCBuilderChain*](../interfaces/vc.vcbuilderchain.md)

Defined in: [src/vc.ts:106](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L106)

___

### isExpired

▸ `Const` **isExpired**(`vc`: CredentialReference): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | CredentialReference |

**Returns:** *boolean*

Defined in: [src/vc.ts:375](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L375)

___

### isValidFromUntil

▸ `Const` **isValidFromUntil**(`vc`: CredentialReference): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | CredentialReference |

**Returns:** *boolean*

Defined in: [src/vc.ts:382](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L382)

___

### verifyVC

▸ `Const` **verifyVC**(`vc`: [*SignedVC*](../interfaces/vc.signedvc.md), `publicKey`: [*JWK*](../interfaces/keys.jwk.md) \| [*KeyLike*](keys.md#keylike)): *Promise*<CredentialReference\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vc` | [*SignedVC*](../interfaces/vc.signedvc.md) |
| `publicKey` | [*JWK*](../interfaces/keys.jwk.md) \| [*KeyLike*](keys.md#keylike) |

**Returns:** *Promise*<CredentialReference\>

Defined in: [src/vc.ts:335](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/vc.ts#L335)
