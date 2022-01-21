[@windingtree/org.id-utils](../README.md) / [parsers](../modules/parsers.md) / BlockchainAccountIdGroupedResult

# Interface: BlockchainAccountIdGroupedResult

[parsers](../modules/parsers.md).BlockchainAccountIdGroupedResult

## Hierarchy

- `RegExpExecArray`

  ↳ **`BlockchainAccountIdGroupedResult`**

## Table of contents

### Properties

- [groups](parsers.BlockchainAccountIdGroupedResult.md#groups)
- [index](parsers.BlockchainAccountIdGroupedResult.md#index)
- [input](parsers.BlockchainAccountIdGroupedResult.md#input)
- [length](parsers.BlockchainAccountIdGroupedResult.md#length)

### Methods

- [[iterator]](parsers.BlockchainAccountIdGroupedResult.md#[iterator])
- [[unscopables]](parsers.BlockchainAccountIdGroupedResult.md#[unscopables])
- [at](parsers.BlockchainAccountIdGroupedResult.md#at)
- [concat](parsers.BlockchainAccountIdGroupedResult.md#concat)
- [copyWithin](parsers.BlockchainAccountIdGroupedResult.md#copywithin)
- [entries](parsers.BlockchainAccountIdGroupedResult.md#entries)
- [every](parsers.BlockchainAccountIdGroupedResult.md#every)
- [fill](parsers.BlockchainAccountIdGroupedResult.md#fill)
- [filter](parsers.BlockchainAccountIdGroupedResult.md#filter)
- [find](parsers.BlockchainAccountIdGroupedResult.md#find)
- [findIndex](parsers.BlockchainAccountIdGroupedResult.md#findindex)
- [flat](parsers.BlockchainAccountIdGroupedResult.md#flat)
- [flatMap](parsers.BlockchainAccountIdGroupedResult.md#flatmap)
- [forEach](parsers.BlockchainAccountIdGroupedResult.md#foreach)
- [includes](parsers.BlockchainAccountIdGroupedResult.md#includes)
- [indexOf](parsers.BlockchainAccountIdGroupedResult.md#indexof)
- [join](parsers.BlockchainAccountIdGroupedResult.md#join)
- [keys](parsers.BlockchainAccountIdGroupedResult.md#keys)
- [lastIndexOf](parsers.BlockchainAccountIdGroupedResult.md#lastindexof)
- [map](parsers.BlockchainAccountIdGroupedResult.md#map)
- [pop](parsers.BlockchainAccountIdGroupedResult.md#pop)
- [push](parsers.BlockchainAccountIdGroupedResult.md#push)
- [reduce](parsers.BlockchainAccountIdGroupedResult.md#reduce)
- [reduceRight](parsers.BlockchainAccountIdGroupedResult.md#reduceright)
- [reverse](parsers.BlockchainAccountIdGroupedResult.md#reverse)
- [shift](parsers.BlockchainAccountIdGroupedResult.md#shift)
- [slice](parsers.BlockchainAccountIdGroupedResult.md#slice)
- [some](parsers.BlockchainAccountIdGroupedResult.md#some)
- [sort](parsers.BlockchainAccountIdGroupedResult.md#sort)
- [splice](parsers.BlockchainAccountIdGroupedResult.md#splice)
- [toLocaleString](parsers.BlockchainAccountIdGroupedResult.md#tolocalestring)
- [toString](parsers.BlockchainAccountIdGroupedResult.md#tostring)
- [unshift](parsers.BlockchainAccountIdGroupedResult.md#unshift)
- [values](parsers.BlockchainAccountIdGroupedResult.md#values)

## Properties

### groups

• **groups**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accountAddress` | `string` |
| `blockchainType` | `string` |
| `chainId` | `string` |

#### Overrides

RegExpExecArray.groups

#### Defined in

[src/parsers/index.ts:42](https://github.com/windingtree/org.id-sdk/blob/6904194/packages/utils/src/parsers/index.ts#L42)

___

### index

• **index**: `number`

#### Inherited from

RegExpExecArray.index

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:935

___

### input

• **input**: `string`

#### Inherited from

RegExpExecArray.input

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:936

___

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

RegExpExecArray.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1273

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`string`\>

Iterator

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

RegExpExecArray.\_\_@iterator@80

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [unscopables]

▸ **[unscopables]**(): `Object`

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `copyWithin` | `boolean` |
| `entries` | `boolean` |
| `fill` | `boolean` |
| `find` | `boolean` |
| `findIndex` | `boolean` |
| `keys` | `boolean` |
| `values` | `boolean` |

#### Inherited from

RegExpExecArray.\_\_@unscopables@82

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### at

▸ **at**(`index`): `undefined` \| `string`

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| `string`

#### Inherited from

RegExpExecArray.at

#### Defined in

node_modules/@types/node/globals.d.ts:86

___

### concat

▸ **concat**(...`items`): `string`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<`string`\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`string`[]

#### Inherited from

RegExpExecArray.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1297

▸ **concat**(...`items`): `string`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | (`string` \| `ConcatArray`<`string`\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`string`[]

#### Inherited from

RegExpExecArray.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1303

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`BlockchainAccountIdGroupedResult`](parsers.BlockchainAccountIdGroupedResult.md)

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`BlockchainAccountIdGroupedResult`](parsers.BlockchainAccountIdGroupedResult.md)

#### Inherited from

RegExpExecArray.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, `string`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, `string`]\>

#### Inherited from

RegExpExecArray.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

RegExpExecArray.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1380

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

RegExpExecArray.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1389

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`BlockchainAccountIdGroupedResult`](parsers.BlockchainAccountIdGroupedResult.md)

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`BlockchainAccountIdGroupedResult`](parsers.BlockchainAccountIdGroupedResult.md)

#### Inherited from

RegExpExecArray.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

RegExpExecArray.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1416

▸ **filter**(`predicate`, `thisArg?`): `string`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`string`[]

#### Inherited from

RegExpExecArray.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1422

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `obj`: `string`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

RegExpExecArray.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `obj`: `string`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| `string`

#### Inherited from

RegExpExecArray.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `obj`: `string`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

RegExpExecArray.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### flat

▸ **flat**<`A`, `D`\>(`depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<`A`, `D`\>[]

#### Inherited from

RegExpExecArray.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

RegExpExecArray.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

RegExpExecArray.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1404

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `string` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

RegExpExecArray.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `string` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

RegExpExecArray.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1365

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

RegExpExecArray.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1308

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

RegExpExecArray.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `string` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

RegExpExecArray.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1371

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

RegExpExecArray.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1410

___

### pop

▸ **pop**(): `undefined` \| `string`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `string`

#### Inherited from

RegExpExecArray.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1286

___

### push

▸ **push**(...`items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `string`[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

RegExpExecArray.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1291

___

### reduce

▸ **reduce**(`callbackfn`): `string`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`string`

#### Inherited from

RegExpExecArray.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1428

▸ **reduce**(`callbackfn`, `initialValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string` |
| `initialValue` | `string` |

#### Returns

`string`

#### Inherited from

RegExpExecArray.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1429

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

RegExpExecArray.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1435

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `string`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`string`

#### Inherited from

RegExpExecArray.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1441

▸ **reduceRight**(`callbackfn`, `initialValue`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `string`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `string` |
| `initialValue` | `string` |

#### Returns

`string`

#### Inherited from

RegExpExecArray.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1442

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `string`, `currentIndex`: `number`, `array`: `string`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

RegExpExecArray.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1448

___

### reverse

▸ **reverse**(): `string`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`string`[]

#### Inherited from

RegExpExecArray.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1313

___

### shift

▸ **shift**(): `undefined` \| `string`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `string`

#### Inherited from

RegExpExecArray.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1318

___

### slice

▸ **slice**(`start?`, `end?`): `string`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`string`[]

#### Inherited from

RegExpExecArray.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1328

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `string`, `index`: `number`, `array`: `string`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

RegExpExecArray.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1398

___

### sort

▸ **sort**(`compareFn?`): [`BlockchainAccountIdGroupedResult`](parsers.BlockchainAccountIdGroupedResult.md)

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `string`, `b`: `string`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`BlockchainAccountIdGroupedResult`](parsers.BlockchainAccountIdGroupedResult.md)

#### Inherited from

RegExpExecArray.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1339

___

### splice

▸ **splice**(`start`, `deleteCount?`): `string`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`string`[]

An array containing the elements that were deleted.

#### Inherited from

RegExpExecArray.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1346

▸ **splice**(`start`, `deleteCount`, ...`items`): `string`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `string`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`string`[]

An array containing the elements that were deleted.

#### Inherited from

RegExpExecArray.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1354

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

RegExpExecArray.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1281

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

RegExpExecArray.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1277

___

### unshift

▸ **unshift**(...`items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `string`[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

RegExpExecArray.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1359

___

### values

▸ **values**(): `IterableIterator`<`string`\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

RegExpExecArray.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:75
