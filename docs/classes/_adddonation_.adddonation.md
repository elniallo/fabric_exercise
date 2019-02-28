[fabric_exercise](../README.md) > ["addDonation"](../modules/_adddonation_.md) > [AddDonation](../classes/_adddonation_.adddonation.md)

# Class: AddDonation

## Hierarchy

 `Contract`

**↳ AddDonation**

## Index

### Constructors

* [constructor](_adddonation_.adddonation.md#constructor)

### Methods

* [afterTransaction](_adddonation_.adddonation.md#aftertransaction)
* [beforeTransaction](_adddonation_.adddonation.md#beforetransaction)
* [createContext](_adddonation_.adddonation.md#createcontext)
* [getName](_adddonation_.adddonation.md#getname)
* [unknownTransaction](_adddonation_.adddonation.md#unknowntransaction)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AddDonation**(name?: *`string`*): [AddDonation](_adddonation_.adddonation.md)

*Inherited from Contract.__constructor*

*Defined in /Users/niall/development/fabric_exercise/node_modules/fabric-contract-api/types/index.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `string` |

**Returns:** [AddDonation](_adddonation_.adddonation.md)

___

## Methods

<a id="aftertransaction"></a>

###  afterTransaction

▸ **afterTransaction**(ctx: *`Context`*, result: *`any`*): `Promise`<`void`>

*Inherited from Contract.afterTransaction*

*Defined in /Users/niall/development/fabric_exercise/node_modules/fabric-contract-api/types/index.d.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ctx | `Context` |
| result | `any` |

**Returns:** `Promise`<`void`>

___
<a id="beforetransaction"></a>

###  beforeTransaction

▸ **beforeTransaction**(ctx: *`Context`*): `Promise`<`void`>

*Inherited from Contract.beforeTransaction*

*Defined in /Users/niall/development/fabric_exercise/node_modules/fabric-contract-api/types/index.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ctx | `Context` |

**Returns:** `Promise`<`void`>

___
<a id="createcontext"></a>

###  createContext

▸ **createContext**(): `Context`

*Inherited from Contract.createContext*

*Defined in /Users/niall/development/fabric_exercise/node_modules/fabric-contract-api/types/index.d.ts:23*

**Returns:** `Context`

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Inherited from Contract.getName*

*Defined in /Users/niall/development/fabric_exercise/node_modules/fabric-contract-api/types/index.d.ts:24*

**Returns:** `string`

___
<a id="unknowntransaction"></a>

###  unknownTransaction

▸ **unknownTransaction**(ctx: *`Context`*): `Promise`<`void`>

*Inherited from Contract.unknownTransaction*

*Defined in /Users/niall/development/fabric_exercise/node_modules/fabric-contract-api/types/index.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ctx | `Context` |

**Returns:** `Promise`<`void`>

___

