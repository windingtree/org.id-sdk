[@windingtree/org.json-utils](../README.md) / [verificationMethod](../modules/verificationmethod.md) / DidVerificationMethod

# Interface: DidVerificationMethod

[verificationMethod](../modules/verificationmethod.md).DidVerificationMethod

## Table of contents

### Properties

- [blockchainAccountId](verificationmethod.didverificationmethod.md#blockchainaccountid)
- [controller](verificationmethod.didverificationmethod.md#controller)
- [id](verificationmethod.didverificationmethod.md#id)
- [note](verificationmethod.didverificationmethod.md#note)
- [publicKeyBase58](verificationmethod.didverificationmethod.md#publickeybase58)
- [publicKeyJwk](verificationmethod.didverificationmethod.md#publickeyjwk)
- [publicKeyPem](verificationmethod.didverificationmethod.md#publickeypem)
- [type](verificationmethod.didverificationmethod.md#type)
- [verificationMethodRevocation](verificationmethod.didverificationmethod.md#verificationmethodrevocation)

## Properties

### blockchainAccountId

• `Optional` **blockchainAccountId**: *string*

Defined in: [src/verificationMethod.ts:23](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L23)

___

### controller

• **controller**: *string*

Defined in: [src/verificationMethod.ts:21](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L21)

___

### id

• **id**: *string*

Defined in: [src/verificationMethod.ts:19](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L19)

___

### note

• `Optional` **note**: *string*

Defined in: [src/verificationMethod.ts:27](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L27)

___

### publicKeyBase58

• `Optional` **publicKeyBase58**: *string*

Defined in: [src/verificationMethod.ts:25](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L25)

___

### publicKeyJwk

• `Optional` **publicKeyJwk**: JWK

Defined in: [src/verificationMethod.ts:22](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L22)

___

### publicKeyPem

• `Optional` **publicKeyPem**: *string*

Defined in: [src/verificationMethod.ts:24](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L24)

___

### type

• **type**: *string*

Defined in: [src/verificationMethod.ts:20](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L20)

___

### verificationMethodRevocation

• `Optional` **verificationMethodRevocation**: *object*

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `invalidityDate?` | *string* | Date of the public key invalidation |
| `reason?` | ``"unspecified"`` \| ``"keyCompromise"`` \| ``"affiliationChanged"`` \| ``"superseded"`` \| ``"cessationOfOperation"`` \| ``"certificateHold"`` \| ``"privilegeWithdrawn"`` | Revocation reason according to https://datatracker.ietf.org/doc/html/rfc5280#section-5.3.1 |

Defined in: [src/verificationMethod.ts:26](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L26)
