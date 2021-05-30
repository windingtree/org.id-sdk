[@windingtree/org.id-auth](../README.md) / tokens

# Namespace: tokens

## Table of contents

### Interfaces

- [JWTVerifyResult](../interfaces/tokens.jwtverifyresult.md)

### Functions

- [createAuthJWT](tokens.md#createauthjwt)
- [verifyAuthJWT](tokens.md#verifyauthjwt)

## Functions

### createAuthJWT

▸ `Const` **createAuthJWT**(`privateKey`: [*JWK*](../interfaces/keys.jwk.md) \| [*KeyLike*](keys.md#keylike), `issuer`: *string*, `audience`: *string*, `scope?`: *string* \| *string*[], `expiration?`: *string*): *Promise*<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [*JWK*](../interfaces/keys.jwk.md) \| [*KeyLike*](keys.md#keylike) |
| `issuer` | *string* |
| `audience` | *string* |
| `scope?` | *string* \| *string*[] |
| `expiration?` | *string* |

**Returns:** *Promise*<string\>

Defined in: [src/tokens.ts:25](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/tokens.ts#L25)

___

### verifyAuthJWT

▸ `Const` **verifyAuthJWT**(`jwt`: *string*, `publicKey`: [*JWK*](../interfaces/keys.jwk.md) \| [*KeyLike*](keys.md#keylike), `issuer`: *string*, `audience`: *string*, `scope?`: *string* \| *string*[]): *Promise*<[*JWTVerifyResult*](../interfaces/tokens.jwtverifyresult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwt` | *string* |
| `publicKey` | [*JWK*](../interfaces/keys.jwk.md) \| [*KeyLike*](keys.md#keylike) |
| `issuer` | *string* |
| `audience` | *string* |
| `scope?` | *string* \| *string*[] |

**Returns:** *Promise*<[*JWTVerifyResult*](../interfaces/tokens.jwtverifyresult.md)\>

Defined in: [src/tokens.ts:98](https://github.com/windingtree/org.id-sdk/blob/cc06f59/packages/auth/src/tokens.ts#L98)
