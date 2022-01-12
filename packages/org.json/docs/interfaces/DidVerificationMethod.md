[@windingtree/org.json-utils](../README.md) / DidVerificationMethod

# Interface: DidVerificationMethod

## Table of contents

### Properties

- [blockchainAccountId](DidVerificationMethod.md#blockchainaccountid)
- [controller](DidVerificationMethod.md#controller)
- [id](DidVerificationMethod.md#id)
- [note](DidVerificationMethod.md#note)
- [publicKeyBase58](DidVerificationMethod.md#publickeybase58)
- [publicKeyJwk](DidVerificationMethod.md#publickeyjwk)
- [publicKeyPem](DidVerificationMethod.md#publickeypem)
- [type](DidVerificationMethod.md#type)
- [verificationMethodRevocation](DidVerificationMethod.md#verificationmethodrevocation)

## Properties

### blockchainAccountId

• `Optional` **blockchainAccountId**: `string`

#### Defined in

[org.json/src/index.ts:25](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/org.json/src/index.ts#L25)

___

### controller

• **controller**: `string`

#### Defined in

[org.json/src/index.ts:23](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/org.json/src/index.ts#L23)

___

### id

• **id**: `string`

#### Defined in

[org.json/src/index.ts:21](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/org.json/src/index.ts#L21)

___

### note

• `Optional` **note**: `string`

#### Defined in

[org.json/src/index.ts:29](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/org.json/src/index.ts#L29)

___

### publicKeyBase58

• `Optional` **publicKeyBase58**: `string`

#### Defined in

[org.json/src/index.ts:27](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/org.json/src/index.ts#L27)

___

### publicKeyJwk

• `Optional` **publicKeyJwk**: `JWK`

#### Defined in

[org.json/src/index.ts:24](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/org.json/src/index.ts#L24)

___

### publicKeyPem

• `Optional` **publicKeyPem**: `string`

#### Defined in

[org.json/src/index.ts:26](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/org.json/src/index.ts#L26)

___

### type

• **type**: `string`

#### Defined in

[org.json/src/index.ts:22](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/org.json/src/index.ts#L22)

___

### verificationMethodRevocation

• `Optional` **verificationMethodRevocation**: `Object`

#### Index signature

▪ [k: `string`]: `unknown`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `invalidityDate?` | `string` | Date of the public key invalidation |
| `reason?` | ``"unspecified"`` \| ``"keyCompromise"`` \| ``"affiliationChanged"`` \| ``"superseded"`` \| ``"cessationOfOperation"`` \| ``"certificateHold"`` \| ``"privilegeWithdrawn"`` | Revocation reason according to https://datatracker.ietf.org/doc/html/rfc5280#section-5.3.1 |

#### Defined in

[org.json/src/index.ts:28](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/org.json/src/index.ts#L28)
