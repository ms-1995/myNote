### javascript遍历方法

##### Object.key()

   * 返回一个数组，包含自身属性键值(不包括原型链)

##### Object.values()

    * 返回一个数组，包含自身属性值(不包括原型链)

##### Object.entries()

    * 返回一个数组，包含包含自身属性键值以及属性值的数组(不包含原型链)

```js
    let demo = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
    }
    Object.entries(demo) //[['key1','value1'],['key2','value2'],['key3','value3']]
    new Map(Object.entries(demo)) //[{key:'key1,value:'value1'},{key:'key2,value:'value2'},{key:'key3,value:'value3'}]
```

##### for...in, for...of遍历自身以及原型链

### 原型

##### Object.setPrototype(object, prototype) 设置对象原型