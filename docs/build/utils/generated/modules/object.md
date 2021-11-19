[@windingtree/org.id-utils](../README.md) / object

# Namespace: object

## Table of contents

### Type aliases

- [AnySchema](object.md#anyschema)

### Functions

- [getDeepValue](object.md#getdeepvalue)
- [validateWithSchemaOrRef](object.md#validatewithschemaorref)

## Type aliases

### AnySchema

Ƭ **AnySchema**: `Schema` \| `AsyncSchema`

#### Defined in

node_modules/ajv/dist/types/index.d.ts:24

## Functions

### getDeepValue

▸ `Const` **getDeepValue**(`obj`, `path`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `unknown`\> |
| `path` | `string` |

#### Returns

`unknown`

#### Defined in

[src/object/index.ts:15](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/object/index.ts#L15)

___

### validateWithSchemaOrRef

▸ `Const` **validateWithSchemaOrRef**(`schemaJson`, `ref`, `data`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaJson` | [`AnySchema`](object.md#anyschema) |
| `ref` | `string` |
| `data` | `unknown` |

#### Returns

``null`` \| `string`

#### Defined in

[src/object/index.ts:33](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/object/index.ts#L33)
