[@windingtree/org.id-auth](../README.md) / [vc](../modules/vc.md) / VCProofReference

# Interface: VCProofReference

[vc](../modules/vc.md).VCProofReference

Digital proof that makes the credential tamper-evident

## Indexable

▪ [k: `string`]: `unknown`

## Table of contents

### Properties

- [created](vc.VCProofReference.md#created)
- [jws](vc.VCProofReference.md#jws)
- [proofPurpose](vc.VCProofReference.md#proofpurpose)
- [type](vc.VCProofReference.md#type)
- [verificationMethod](vc.VCProofReference.md#verificationmethod)

## Properties

### created

• **created**: `string`

When proof was created

#### Defined in

node_modules/@windingtree/org.json-schema/types/vc/index.d.ts:104

___

### jws

• **jws**: `string`

The digital signature value

#### Defined in

node_modules/@windingtree/org.json-schema/types/vc/index.d.ts:116

___

### proofPurpose

• **proofPurpose**: `string`

Purpose of the proof

#### Defined in

node_modules/@windingtree/org.json-schema/types/vc/index.d.ts:108

___

### type

• **type**: `CryptographicSignatureSuiteReference`

#### Defined in

node_modules/@windingtree/org.json-schema/types/vc/index.d.ts:100

___

### verificationMethod

• **verificationMethod**: `string`

The identifier of the public key that can verify the signature

#### Defined in

node_modules/@windingtree/org.json-schema/types/vc/index.d.ts:112
