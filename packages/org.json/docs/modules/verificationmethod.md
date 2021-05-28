[@windingtree/org.json-utils](../README.md) / verificationMethod

# Namespace: verificationMethod

## Table of contents

### Interfaces

- [DidVerificationMethod](../interfaces/verificationmethod.didverificationmethod.md)

### Type aliases

- [DidVerificationMethodRevocation](verificationmethod.md#didverificationmethodrevocation)

### Functions

- [createVerificationMethod](verificationmethod.md#createverificationmethod)

## Type aliases

### DidVerificationMethodRevocation

Ƭ **DidVerificationMethodRevocation**: VerificationMethodReference[``"verificationMethodRevocation"``]

Defined in: [src/verificationMethod.ts:15](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L15)

## Functions

### createVerificationMethod

▸ `Const` **createVerificationMethod**(`id`: *string*, `controller`: *string*, `key`: JWK \| KeyLike, `note?`: *string*): *Promise*<[*DidVerificationMethod*](../interfaces/verificationmethod.didverificationmethod.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | *string* |
| `controller` | *string* |
| `key` | JWK \| KeyLike |
| `note?` | *string* |

**Returns:** *Promise*<[*DidVerificationMethod*](../interfaces/verificationmethod.didverificationmethod.md)\>

Defined in: [src/verificationMethod.ts:30](https://github.com/windingtree/org.id-sdk/blob/4778438/packages/org.json/src/verificationMethod.ts#L30)
