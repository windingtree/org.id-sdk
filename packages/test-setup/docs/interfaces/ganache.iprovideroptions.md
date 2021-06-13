[@windingtree/org.id-test-helpers](../README.md) / [Ganache](../modules/ganache.md) / IProviderOptions

# Interface: IProviderOptions

[Ganache](../modules/ganache.md).IProviderOptions

## Hierarchy

- **IProviderOptions**

  ↳ [IServerOptions](ganache.iserveroptions.md)

## Table of contents

### Properties

- [account\_keys\_path](ganache.iprovideroptions.md#account_keys_path)
- [accounts](ganache.iprovideroptions.md#accounts)
- [allowUnlimitedContractSize](ganache.iprovideroptions.md#allowunlimitedcontractsize)
- [blockTime](ganache.iprovideroptions.md#blocktime)
- [db\_path](ganache.iprovideroptions.md#db_path)
- [debug](ganache.iprovideroptions.md#debug)
- [default\_balance\_ether](ganache.iprovideroptions.md#default_balance_ether)
- [fork](ganache.iprovideroptions.md#fork)
- [forkCacheSize](ganache.iprovideroptions.md#forkcachesize)
- [fork\_block\_number](ganache.iprovideroptions.md#fork_block_number)
- [gasLimit](ganache.iprovideroptions.md#gaslimit)
- [gasPrice](ganache.iprovideroptions.md#gasprice)
- [hardfork](ganache.iprovideroptions.md#hardfork)
- [hd\_path](ganache.iprovideroptions.md#hd_path)
- [locked](ganache.iprovideroptions.md#locked)
- [logger](ganache.iprovideroptions.md#logger)
- [mnemonic](ganache.iprovideroptions.md#mnemonic)
- [networkId](ganache.iprovideroptions.md#networkid)
- [network\_id](ganache.iprovideroptions.md#network_id)
- [port](ganache.iprovideroptions.md#port)
- [seed](ganache.iprovideroptions.md#seed)
- [time](ganache.iprovideroptions.md#time)
- [total\_accounts](ganache.iprovideroptions.md#total_accounts)
- [unlocked\_accounts](ganache.iprovideroptions.md#unlocked_accounts)
- [verbose](ganache.iprovideroptions.md#verbose)
- [vmErrorsOnRPCResponse](ganache.iprovideroptions.md#vmerrorsonrpcresponse)
- [ws](ganache.iprovideroptions.md#ws)

## Properties

### account\_keys\_path

• `Optional` **account\_keys\_path**: `string`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:19

___

### accounts

• `Optional` **accounts**: `object`[]

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:20

___

### allowUnlimitedContractSize

• `Optional` **allowUnlimitedContractSize**: `boolean`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:21

___

### blockTime

• `Optional` **blockTime**: `number`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:22

___

### db\_path

• `Optional` **db\_path**: `string`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:23

___

### debug

• `Optional` **debug**: `boolean`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:24

___

### default\_balance\_ether

• `Optional` **default\_balance\_ether**: `number`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:25

___

### fork

• `Optional` **fork**: `string` \| `object`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:26

___

### forkCacheSize

• `Optional` **forkCacheSize**: `number`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:28

___

### fork\_block\_number

• `Optional` **fork\_block\_number**: `string` \| `number`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:27

___

### gasLimit

• `Optional` **gasLimit**: `string` \| `number`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:29

___

### gasPrice

• `Optional` **gasPrice**: `string`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:30

___

### hardfork

• `Optional` **hardfork**: ``"byzantium"`` \| ``"constantinople"`` \| ``"petersburg"`` \| ``"istanbul"`` \| ``"muirGlacier"``

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:31

___

### hd\_path

• `Optional` **hd\_path**: `string`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:32

___

### locked

• `Optional` **locked**: `boolean`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:33

___

### logger

• `Optional` **logger**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `log` | (`msg`: `string`) => `void` |

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:34

___

### mnemonic

• `Optional` **mnemonic**: `string`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:37

___

### networkId

• `Optional` **networkId**: `number`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:39

___

### network\_id

• `Optional` **network\_id**: `number`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:38

___

### port

• `Optional` **port**: `number`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:40

___

### seed

• `Optional` **seed**: `any`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:41

___

### time

• `Optional` **time**: `Date`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:42

___

### total\_accounts

• `Optional` **total\_accounts**: `number`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:43

___

### unlocked\_accounts

• `Optional` **unlocked\_accounts**: `string`[]

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:44

___

### verbose

• `Optional` **verbose**: `boolean`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:45

___

### vmErrorsOnRPCResponse

• `Optional` **vmErrorsOnRPCResponse**: `boolean`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:46

___

### ws

• `Optional` **ws**: `boolean`

#### Defined in

test-helpers/node_modules/ganache-core/typings/index.d.ts:47
