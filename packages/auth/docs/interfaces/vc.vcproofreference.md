[@windingtree/org.id-auth](../README.md) / [vc](../modules/vc.md) / VCProofReference

# Interface: VCProofReference

[vc](../modules/vc.md).VCProofReference

Digital proof that makes the credential tamper-evident

## Indexable

▪ [k: `string`]: `unknown`

Digital proof that makes the credential tamper-evident

## Table of contents

### Properties

- [created](vc.vcproofreference.md#created)
- [jws](vc.vcproofreference.md#jws)
- [proofPurpose](vc.vcproofreference.md#proofpurpose)
- [type](vc.vcproofreference.md#type)
- [verificationMethod](vc.vcproofreference.md#verificationmethod)

## Properties

### created

• **created**: `string`

When proof was created

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:313

___

### jws

• **jws**: `string`

The digital signature value

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:325

___

### proofPurpose

• **proofPurpose**: `string`

Purpose of the proof

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:317

___

### type

• **type**: ``"JsonWebKey2020"`` \| ``"EcdsaSecp256k1VerificationKey2019"`` \| ``"Ed25519VerificationKey2018"`` \| ``"RsaVerificationKey2018"`` \| ``"X25519KeyAgreementKey2019"``

The cryptographic signature suite that was used to generate the signature

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:304

___

### verificationMethod

• **verificationMethod**: `string`

The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:321
