#### Promise
    Promise.then().catch()//resolve(result)->then(function(result){}),reject(result)->catch(function(result){})函数传入的参数就是then，reject中匿名函数的参数
    Promise.all([p1,p2])//获得包含所有结果的数组,并行
    Promise.race([p1,p2])//获取先返回的结果,串行
#### ajax
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('Microsoft.XMLHTTP');//低版本IE
    }
    request.onreadystatechange = function(){
        if(request.readyState === 4){//请求完成
            if(request.status === 200){//成功响应
                return true
            }else{//失败
                return false
            }
        }else{
        //HTTP请求还在继续
        }
    }
    request.open('GET',url);//默认情况下，JavaScript在发送AJAX请求时，URL的域名必须和当前页面完全一致。（可以通过JSONP调用外域下的js文件传递JSON实现）
    request.send();
#### CORS
    跨域请求服务器Access-Control-Allow-Origin中有没有本域域名Origin
    引用外域资源必须判断CORS(除CSS,JavaScript),
    发送一个OPTIONS请求，服务器响应的Access-Control-Allow-Methods含有浏览器发送请求的Method,浏览器才会继续发送ajax
#### DOM
    document.querySelector();
    document.querySelectorAll();
    parent.appendchild();//插入DOM
    parent.removeChild();//删除DOM
    parent.insertBefore(a,b);//将a插入到b之前
#### class继承：
    //定义Student
    class Student {
        constructor(name) {
            this.name = name;
        }
        hello() {
            alert('Hello, ' + this.name + '!');
        }
    }
    //继承
    class PrimaryStudent extends Student {
        constructor(name, grade) {
            super(name); // 记得用super调用父类的构造方法!
            this.grade = grade;
        }
        myGrade() {
            alert('I am at grade ' + this.grade);
        }
    }
#### 原形继承
    function inherits(Child, Parent) {
        var F = function () {};
        F.prototype = Parent.prototype;
        Child.prototype = new F();
        Child.prototype.constructor = Child;
    }
#### JSON
    JSON.parse('{"Name":"小明"}',arr());//Object{Name:'小明'}
    将JSON格式的字符串转换为js对象
    arr()用于转换解析出的属性
    为对象添加toJSOn:function(){
        return 'Name':this.name;
    }
    var xiaoming = {
        name:'小明',
        age:14,
        toJSON:function(){
            return{
                'Name':this.name
            };
        }
    }
    JSON.stringify(xiaoming);//{'Name':小明}
    JSON.stringify(对象,Array指定属性||函数处理每个键值,)
#### 正则表达式
    正则表达式还可以指定i标志，表示忽略大小写，m标志，表示执行多行匹配。
    当我们指定g标志后，每次运行exec()，正则表达式本身会更新lastIndex属性，表示上次匹配到的最后索引。
    ()分组，使用exec()   re.exec('19:05:30'); // ['19:05:30', '19', '05', '30']
    默认是贪婪匹配，也就是匹配尽可能多的字符。加个?就可以让\d+采用非贪婪匹配。
    ^表示行的开头，^\d表示必须以数字开头。
    $表示行的结束，\d$表示必须以数字结束。
    在正则表达式中，如果直接给出字符，就是精确匹配。用\d可以匹配一个数字，\w可以匹配一个字母或数字
    用*表示任意个字符（包括0个），用+表示至少一个字符，用?表示0个或1个字符，用{n}表示n个字符，用{n,m}表示n-m个字符：
#### generator:
    function()* foo(x){yield ;yield ;...;return ;}
    可以用for(x of...)取出yield的值x
#### 箭头函数：
    (参数)=>{return}
#### 高阶函数
    Arry.map(function(x){})处理数组中每一个元素，对x进行相同的处理。
    Arry.reduce(function(x,y){})依次处理数组中的两个元素
    Arry.filter(function(x){})过滤元素，保留返回值为true的元素。
    Arry.sort(function(x,y){})以自定义方式对数组中元素进行排序，正序：x>y 1,x<y -1,x=y 0
#### 捕获this
    apply(x,y) x:指定this代表的对象 y:参数数组([a,b,c...])
    var count = 0;
    var oldParseInt = parseInt; // 保存原函数
    window.parseInt = function () {
        count += 1;
        return oldParseInt.apply(null, arguments); // 调用原函数
    };
#### for ... of循环遍历
    for(let i of arr){}
#### array,set,map
    array:(元素, 索引, 本身) 
    set:(元素, 本身) 
    map:(值, 键, 本身) 
    a.forEach(function (element, index, array) {
        // element: 指向当前元素的值
        // index: 指向当前索引
        // array: 指向Array对象本身
        alert(element);
    });
