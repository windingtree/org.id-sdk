[@windingtree/org.id-utils](../README.md) / [errors](../modules/errors.md) / HttpError

# Class: HttpError

[errors](../modules/errors.md).HttpError

Generate custom error with HTTP codes support

**`example`**
new HttpError('Cannot find you in the list', 'FORBIDDEN');

## Hierarchy

- `Error`

  ↳ **`HttpError`**

## Table of contents

### Constructors

- [constructor](errors.HttpError.md#constructor)

### Properties

- [code](errors.HttpError.md#code)
- [message](errors.HttpError.md#message)
- [name](errors.HttpError.md#name)
- [stack](errors.HttpError.md#stack)
- [status](errors.HttpError.md#status)
- [prepareStackTrace](errors.HttpError.md#preparestacktrace)
- [stackTraceLimit](errors.HttpError.md#stacktracelimit)

### Methods

- [captureStackTrace](errors.HttpError.md#capturestacktrace)

## Constructors

### constructor

• **new HttpError**(...`args`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`ErrorArgs`](../modules/errors.md#errorargs) |

#### Defined in

[src/errors/index.ts:20](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/errors/index.ts#L20)

## Properties

### code

• **code**: [`Code`](../modules/http.md#code)

#### Defined in

[src/errors/index.ts:10](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/errors/index.ts#L10)

___

### message

• **message**: `string`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### status

• **status**: [`Status`](../modules/http.md#status)

#### Defined in

[src/errors/index.ts:11](https://github.com/windingtree/org.id-sdk/blob/fc1d09f/packages/utils/src/errors/index.ts#L11)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/globals.d.ts:4
