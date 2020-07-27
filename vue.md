### Vue对象

* `vue.$data`===data;

* `vue.$el`===document.getElementById('example');

* v-bind:href缩写:href,v-on:click缩写@click

* computed 计算属性拥有缓存适用于复杂的运算，methods:通过方法引入不能缓存

* `_.debounce(function(){},time)`限制操作频率，underscore库方法

* 函数实现

      var debounce = function(action,idle){
        var last;
        return function(){
          clearTimeout(last);
          var crx = this,args = arguments;
          last = setTimeout(function(){
            action.apply(crx,args);
          },idle);
        }
      }
* <div v-if=""></div><div v-else=""></div>
* <div v-if=""></div><div v-else-if=""></div><div v-else=""></div>
* if-else方式渲染的内容，input的内容在切换时不会更改内部值，如果不想保留，为input元素指定一个唯一的key
