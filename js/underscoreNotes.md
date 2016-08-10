### underscore(可对Array与Object进行操作)_.：
#### 集合类（Array和Object）
    map(进行相同操作)/filter(返回满足条件的)
    every(所有满足条件true)/some(至少有一个元素)
    max(返回最大值,只作用于value)/min(返回最小值)
    groupBy：_.groupBy(arr,function(x){
        if() return  'A';
        else if() return 'B';
    });//结果{A:[],B:[]}
    shuffle(随机打乱元素顺序)/sample(随机选择一个或多个元素)
#### Array
    first/last(取第一个和最后一个元素)
    flatten(将多层嵌套数组转换为一维数组)
    zip/unzip //将多个相互对应的数组合并成一个多维数组，将一个多维数组拆分同类型在一分组的数组
    object //将多个相互对应的数组合并成一个Object
    range(a,b,c) //a:开始 b:结束 c:步长 快速生成序列
#### 高阶函数
    var a = _.bind(b,c) //将c对象直接绑定在a()的this指针上
    partial()//创建偏函数,固定原函数的一个或多个参数形成新函数，用_为参数站位
    memoize()//函数中建立的匿名函数返回的结果自动缓存
    once()//保证函数只调用一次
    delay(alert,t)//alert:函数 t:延迟执行时间ms
#### Object
    keys/allKeys //返回object自身的key，返回object自身的key和原形继承的key
    values //返回object自身的值
    mapObject(,)//对obj每个值都进行处理
    invert //将key-value交换
    extend //将多个object合并到第一个object,相同key时后面的value覆盖前面的value
    extendOwn //忽略原形链继承的属性
    clone //复制一个object对象，浅复制
    isEqual //对两个object进行深度复制，内容完全相同返回true
#### 链式调用
    chain()//链式调用,每一步返回都是包装对象,最后需要用value()获取最终结果
