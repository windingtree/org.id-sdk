[@windingtree/org.id-utils](../README.md) / uid

# Namespace: uid

## Table of contents

### Functions

- [simpleUid](uid.md#simpleuid)
- [uuid4](uid.md#uuid4)

## Functions

### simpleUid

▸ `Const` **simpleUid**(`length?`): `string`

Simple unique ID generator

**`example`**
simpleUid(); // returns a string like 'hhhkiwbxz'

**`example`**
simpleUid(5); // returns a string like 'jedpr'

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `length` | `number` | 11 |

#### Returns

`string`

#### Defined in

[src/uid/index.ts:8](https://github.com/windingtree/org.id-sdk/blob/bcbadf0/packages/utils/src/uid/index.ts#L8)

___

### uuid4

▸ `Const` **uuid4**(): `string`

UUID v4

**`example`**
uuid4(); // 955a781f-f427-2d8e-e895-4ab3f87026c1

#### Returns

`string`

#### Defined in

[src/uid/index.ts:24](https://github.com/windingtree/org.id-sdk/blob/bcbadf0/packages/utils/src/uid/index.ts#L24)
