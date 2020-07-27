* 数组

```js
let numberArr1:number[] = [1,2,3,4]
let numberArr2:Array<number> = [1,2,3,4]
interface NumberArray {
 [index:number]: number
}
let numberArr3: NumberArray = [1,2,3,4]
```

* 只读属性

```js
interface Point {
  readonly x:number;
  readonly y:number;
}
```

* 接口

```js
interface TireInfo{
    type: string,
    car_tire_pressure: number,
    isFront?: boolean //可选属性
}

tire_info: Array<TireInfo> //对象数组
```

* 泛型

```js
function Hello<T>(arg:T):T{
    return arg
}
Hello<string>('Hello String')
Hello<Number>(1)
```