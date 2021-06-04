[@windingtree/org.id-auth](../README.md) / [vc](../modules/vc.md) / VCTypedHolderReference

# Interface: VCTypedHolderReference

[vc](../modules/vc.md).VCTypedHolderReference

This type of the holder definition can be used when a credential issued to a holder who is not the (only) subject of the credential, who has no relationship with the subject of the credential, but who has a relationship with the issuer

## Indexable

▪ [k: `string`]: `unknown`

This type of the holder definition can be used when a credential issued to a holder who is not the (only) subject of the credential, who has no relationship with the subject of the credential, but who has a relationship with the issuer

## Table of contents

### Properties

- [id](vc.vctypedholderreference.md#id)
- [type](vc.vctypedholderreference.md#type)

## Properties

### id

• **id**: `string`

The DID subject is denoted by the id property. The DID subject is the entity that the DID document (ORG.JSON) is about. That is, it is the entity identified by the DID and described in the DID document.

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:294

___

### type

• **type**: `string`

A type of activity during which the issuer permits to own the credential

#### Defined in

node_modules/@windingtree/org.json-schema/dist/index.d.ts:290
