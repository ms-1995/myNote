### 多个判断条件时

* 范围查询

```js
    // 判断数据在1-5或20-30之间
    function judgeSome(num,...ranges) {
        return ranges.some(range => num>=range[0]&&num<=range[1])
    }
    judgeSome(2,[1,5],[20-30])
```
* 多个与条件

```js
    // 判断多个参数
    let obj = {
        'status=1&type=1':'判断1成立',
        'status=2&type=1':'判断2成立',
        'status=1&type=2':'判断3成立',
        'status=2&type=2':'判断4成立',
    }
    console.log(obj[`status=${status}&type=${type}`]) 
```

* 多个或条件
```js
    let city='广州'
let obj={
    '广州,佛山':'广东',
    '海口,三亚':'海南',
}
let keys=[]
for(let key in obj){
    keys=key.split(',')
    if(keys.includes(city)){
        console.log(obj[key])
        break
    }
}
```

### 页面加载

* 异步加载 async

* 延迟加载 defer

### 值的比较

* ndefined 和 null 在相等性检查 == 中不会进行任何的类型转换

* Object.is(value1, value2);相等性检查