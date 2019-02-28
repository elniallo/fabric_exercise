[fabric_exercise](../README.md) > ["addProject"](../modules/_addproject_.md) > [AddProject](../classes/_addproject_.addproject.md)

# Class: AddProject

Adds a project to the ledger to allow for future donations

## Hierarchy

 `Contract`

**↳ AddProject**

## Index

### Constructors

* [constructor](_addproject_.addproject.md#constructor)

### Methods

* [afterTransaction](_addproject_.addproject.md#aftertransaction)
* [beforeTransaction](_addproject_.addproject.md#beforetransaction)
* [createContext](_addproject_.addproject.md#createcontext)
* [getName](_addproject_.addproject.md#getname)
* [unknownTransaction](_addproject_.addproject.md#unknowntransaction)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new AddProject**(name?: *`string`*): [AddProject](_addproject_.addproject.md)

*Inherited from Contract.__constructor*

*Defined in /Users/niall/development/fabric_exercise/node_modules/fabric-contract-api/types/index.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` name | `string` |

**Returns:** [AddProject](_addproject_.addproject.md)

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

