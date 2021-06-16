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

▸ `Const` **createAuthJWT**(`privateKey`, `issuer`, `audience`, `scope?`, `expiration?`): `Promise`<string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [JWK](../interfaces/keys.jwk.md) \| [KeyLike](keys.md#keylike) |
| `issuer` | `string` |
| `audience` | `string` |
| `scope?` | `string` \| `string`[] |
| `expiration?` | `string` |

#### Returns

`Promise`<string\>

#### Defined in

[src/tokens.ts:25](https://github.com/windingtree/org.id-sdk/blob/7afe153/packages/auth/src/tokens.ts#L25)

___

### verifyAuthJWT

▸ `Const` **verifyAuthJWT**(`jwt`, `publicKey`, `issuer`, `audience`, `scope?`): `Promise`<[JWTVerifyResult](../interfaces/tokens.jwtverifyresult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwt` | `string` |
| `publicKey` | [JWK](../interfaces/keys.jwk.md) \| [KeyLike](keys.md#keylike) |
| `issuer` | `string` |
| `audience` | `string` |
| `scope?` | `string` \| `string`[] |

#### Returns

`Promise`<[JWTVerifyResult](../interfaces/tokens.jwtverifyresult.md)\>

#### Defined in

[src/tokens.ts:102](https://github.com/windingtree/org.id-sdk/blob/7afe153/packages/auth/src/tokens.ts#L102)
