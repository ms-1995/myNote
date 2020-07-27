# Symbol类型

- 根据规范，对象的属性键只能为字符串或者Symbol类型。"Symbol" 值表示唯一的标识符。

```js
let id  = Symbol("id") // 添加描述，作为标签识别变量
```

- Symbol 保证是唯一的。即使我们创建了许多具有相同描述的 Symbol，它们的值也是不同。描述只是一个标签，不影响任何东西。

```js
let id1 = Symbol("id")
let id2 = Symbol("id")
id1 === id2 // false 
```
- 需要被打印时无法隐式转换成字符串，需要手动调用`toString()`将其转换，或者获取`description`属性
- 由于值是唯一的特点，同一对象在不同脚本中设置相同Symbol类型键值名时不会产生冲突。
- 隐藏符号属性： Symbol属性不参与`for...in`循环，`Object.keys()` 也会将其忽略。但是`Object.assign`会同时赋值字符串和Symbol属性。

- 当我们想要名字相同的Symbol具有相同的实体时，这里可以使用全局注册表来创建并访问它们。它可以确保每次访问相同的Symbol属性时，返回的都是同一个实体。注册表内的 Symbol 被称为 全局 Symbol。

```js
let id1 = Symbol.for("id")
let id2 = Symbol.for("id")
id1 === id2 // true
```

- Symbol.keyFor 通过全局Symbol获取name。如果Symbol不是全局的，它将无法找到并返回undefind。

```js
let id1 = Symbol.for("test1")
let id2 = Symbol("test2")

Symbol.keyFor(id1) // test1
Symbol.keyFor(id2) // undefined
```

## 系统Symbol

1. `Symbol.iterator` : 返回一个对象默认的迭代器。被 `for...of` 使用。
2. `Symbol.asyncIterator` : 返回一个对象默认的异步迭代器。被 `for await of` 使用。
3. `Symbol.match` : 用于对字符串进行匹配的方法，也用于确定一个对象是否可以作为正则表达式使用。被 `String.prototype.match()` 使用。
4. `Symbol.replace` : 替换匹配字符串的子串。被 `String.prototype.replace()` 使用。
5. `Symbol.search` : 返回一个字符串中与正则表达式相匹配的索引的方法。被`String.prototype.search()` 使用。
6. `Symbol.split` : 在匹配正则表达式的索引处拆分一个字符串。被 `String.prototype.split()` 使用。

## 使用场景

- Symbol 属性不会出现在 `for..in` 中，也不会被直接访问。所以我们可以使用Symbol属性将一些东西隐藏在我们需要的对象中。

- JavaScript 使用了许多系统 Symbol，这些 Symbol 可以作为 `Symbol.*` 访问。我们可以使用它们来改变一些内置行为。

从技术上说，Symbol 不是 100% 隐藏的。有一个内置方法 `Object.getOwnPropertySymbols(obj)` 允许我们获取所有的 Symbol。还有一个名为 `Reflect.ownKeys(obj)` 的方法可以返回一个对象的 所有 键，包括 Symbol。
