[@windingtree/org.id-auth](../README.md) / [keys](../modules/keys.md) / KeyObject

# Class: KeyObject

[keys](../modules/keys.md).KeyObject

## Table of contents

### Constructors

- [constructor](keys.keyobject.md#constructor)

### Properties

- [asymmetricKeySize](keys.keyobject.md#asymmetrickeysize)
- [asymmetricKeyType](keys.keyobject.md#asymmetrickeytype)
- [symmetricKeySize](keys.keyobject.md#symmetrickeysize)
- [type](keys.keyobject.md#type)

### Methods

- [export](keys.keyobject.md#export)

## Constructors

### constructor

\+ `Private` **new KeyObject**(): [*KeyObject*](keys.keyobject.md)

**Returns:** [*KeyObject*](keys.keyobject.md)

Defined in: node_modules/@types/node/crypto.d.ts:200

## Properties

### asymmetricKeySize

• `Optional` **asymmetricKeySize**: *number*

For asymmetric keys, this property represents the size of the embedded key in
bytes. This property is `undefined` for symmetric keys.

Defined in: node_modules/@types/node/crypto.d.ts:207

___

### asymmetricKeyType

• `Optional` **asymmetricKeyType**: KeyType

Defined in: node_modules/@types/node/crypto.d.ts:202

___

### symmetricKeySize

• `Optional` **symmetricKeySize**: *number*

Defined in: node_modules/@types/node/crypto.d.ts:210

___

### type

• **type**: KeyObjectType

Defined in: node_modules/@types/node/crypto.d.ts:211

## Methods

### export

▸ **export**(`options`: *KeyExportOptions*<``"pem"``\>): *string* \| *Buffer*

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | *KeyExportOptions*<``"pem"``\> |

**Returns:** *string* \| *Buffer*

Defined in: node_modules/@types/node/crypto.d.ts:208

▸ **export**(`options?`: *KeyExportOptions*<``"der"``\>): *Buffer*

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | *KeyExportOptions*<``"der"``\> |

**Returns:** *Buffer*

Defined in: node_modules/@types/node/crypto.d.ts:209
