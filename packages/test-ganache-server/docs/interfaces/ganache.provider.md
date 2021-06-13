[@windingtree/org.id-test-ganache-server](../README.md) / [Ganache](../modules/ganache.md) / Provider

# Interface: Provider

[Ganache](../modules/ganache.md).Provider

## Table of contents

### Properties

- [close](ganache.provider.md#close)

### Methods

- [on](ganache.provider.md#on)
- [once](ganache.provider.md#once)
- [removeAllListeners](ganache.provider.md#removealllisteners)
- [removeListener](ganache.provider.md#removelistener)
- [send](ganache.provider.md#send)

## Properties

### close

• **close**: (`callback`: `Function`) => `void`

#### Type declaration

▸ (`callback`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `Function` |

##### Returns

`void`

#### Defined in

node_modules/ganache-core/typings/index.d.ts:75

## Methods

### on

▸ **on**(`type`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/ganache-core/typings/index.d.ts:67

___

### once

▸ **once**(`type`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/ganache-core/typings/index.d.ts:69

___

### removeAllListeners

▸ **removeAllListeners**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Defined in

node_modules/ganache-core/typings/index.d.ts:73

___

### removeListener

▸ **removeListener**(`type`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/ganache-core/typings/index.d.ts:71

___

### send

▸ **send**(`payload`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `JsonRpcPayload` |
| `callback` | (`error`: ``null`` \| `Error`, `result?`: `JsonRpcResponse`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/ganache-core/typings/index.d.ts:62
