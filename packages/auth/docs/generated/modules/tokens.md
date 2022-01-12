[@windingtree/org.id-auth](../README.md) / tokens

# Namespace: tokens

## Table of contents

### Interfaces

- [JWTVerifyResult](../interfaces/tokens.JWTVerifyResult.md)

### Functions

- [createAuthJWT](tokens.md#createauthjwt)
- [verifyAuthJWT](tokens.md#verifyauthjwt)

## Functions

### createAuthJWT

▸ `Const` **createAuthJWT**(`privateKey`, `issuer`, `audience`, `scope?`, `expiration?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | [`KeyLike`](keys.md#keylike) \| [`JWK`](../interfaces/keys.JWK.md) |
| `issuer` | `string` |
| `audience` | `string` |
| `scope?` | `string` \| `string`[] |
| `expiration?` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/tokens.ts:15](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/auth/src/tokens.ts#L15)

___

### verifyAuthJWT

▸ `Const` **verifyAuthJWT**(`jwt`, `publicKey`, `issuer`, `audience`, `scope?`): `Promise`<[`JWTVerifyResult`](../interfaces/tokens.JWTVerifyResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `jwt` | `string` |
| `publicKey` | [`KeyLike`](keys.md#keylike) \| [`JWK`](../interfaces/keys.JWK.md) |
| `issuer` | `string` |
| `audience` | `string` |
| `scope?` | `string` \| `string`[] |

#### Returns

`Promise`<[`JWTVerifyResult`](../interfaces/tokens.JWTVerifyResult.md)\>

#### Defined in

[src/tokens.ts:95](https://github.com/windingtree/org.id-sdk/blob/b4abc84/packages/auth/src/tokens.ts#L95)
