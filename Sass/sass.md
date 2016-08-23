#### Compass

    Compass由SASS的核心团队成员Chris Eppstein创建，是一个非常丰富的样式框架，包括大量定义好的mixin，函数，以及对SASS的扩展。

#### Compass安装

    gem install compass //安装compass
    compass -v //显示compass版本
    compass create xxx //创建compass文件 xxx
    compass watch //实时编译sass文件
    compass compile //编译当前Sass文件
    compass interactive //进入console模式
    compass install compass/ellipsis //安装ellipsis.xml文件

## Sass
    sass-convert xxx.scss xxx.scss //转换格式scss<=>sass

### @import

    @import在Sass中在编译为CSS时将代码合并到一个CSS中，可以放在Sass文件中任意位置。
    @import "compass/reset"; //Normalize 统一各浏览器默认格式

#### 使用原生import的方法：

    @import在原生CSS中的弊端：放在代码最前面，对性能不利。
     1、后面跟的文件名以.css结尾。
     2、后面跟的是以http://开头的字符串。
     3、后面跟的是一个url()函数。
     4、后面带有media queries。

#### 既定规则：

    1、没有文件后缀名时，自动添加.scss或.sass后缀。
    2、同一目录下，局部文件与非局部文件不能重名。(_xxx为局部文件)。
    3、@import "aaa","bbb";

#### 注释：

    //编译成的CSS文件中不显示
    /**/编译后的文件显示注释

#### 元素嵌套

    a {&:hover {color: blue;}}=>a:hover{color: blue;} //&父类选择器
    a {:hover {color: blue;}}=>a (*)hover{color: blue;}

#### 属性嵌套

    font: {family: ;size: ;} == font-family: ;font-size: ;

#### 变量操作

    1、直接操作变量，即变量表达式。
    2、通过函数。

#### 函数 [Sass自带函数库](http://sass-lang.com/documentation/Sass/Script/Functions.html)

    1.functions 与代码块无关的函数，多为Sass的内置函数，也可以使用@function声明函数。
    2.mixin 可重用代码块
        @include    以复制拷贝存在
        @extend     以组合声明存在

#### mixin

    使用@mixin name(params) {}定义。
    一般放在@import之后，代码顶部或单独抽离出文件。
    使用@include name();调用，不调用时不生成CSS内容。
    不建议直接作为.class使用(不符合语义化)。
    @mixin col ($width: 50%) { //设置默认width值
        width: $width;
    }
    @include col(25%); => width: 25%;
    @include col(); => width: 50%; //不传递参数时可以省略括号

    @extend .class  //继承类的属性 将继承选择器插入到被继承选择器所有出现的地方
    不可以继承选择器序列(@extend .a .b;)

    使用%构建只用来继承的选择器，转换后不会显示在CSS中。

#### 运算符

    变量表达式支持基本的+,-,*,/以及抹除操作。//height: (500px / 2);数值计算可以带单位。
    数值类型还支持>=,<=,>,<。
    所有变量支持==,!=,()修改优先级。

#### hsl颜色模式

    IE6,7,8下使用CSS3的hsl会失效，而Sass会转换为16进制的颜色值。
    h：色调    //0-360
    s：饱和度   //0-100%
    l：亮度    //0-100%
    color: hsl( 270, 100%, 50%);

#### @media

    1.可以内嵌在CSS规则中，生成CSS时才会被提到最高层。
    2.避免了重复书写选择器或打乱样式表流程。

    width > 1200px .col-lg-     width > 992px .col-md-
    width > 768px .col-sm-      width < 768px .col-xs-

    @mixin col-sm ($width :50%) {
        @media (min-width: 768px) {//尺寸大于768px时，占宽50%
            width: $width;
            float: left;
        }
    }

#### 样式嵌套的副作用

    渲染时从右向左渲染，使用嵌套会降低效率。
    增加样式权重，制造了样式位置的依赖。
    @at-root:    
    .main-sec {
        font-family: $main-sec-ff;
        @at-root {          //生成CSS样式不包含嵌套
            .main-sec-headline {font: {family: $headline-ff;size: 16px;}}
            .main-sec-detail {font-size: 12px;}
        }   }
    =>.main-sec {font-family: Arial, Verdana, Helvetica, sans-serif;}
      .main-sec-headline {font-family: Braggadocio, Arial, Verdana, Helvetica, sans-serif;font-size: 16px;}
      .main-sec-detail {font-size: 12px;}

#### 参数校验

    @if,@else,@each,@for,@while......
    #{$width} //引用Sass中的width的值。

    @mixin col-sm ($width :50%) {
        @if type-of($width) != number {@error "$width必须是一个数值类型，你输入的width是：#{$width}."} //type-of()获取属性值的类型
        @if not unitless($width) {@if unit($width) != "%" {@error "$width必须是一个百分值，你输入的width是：#{$width}.";} //unitless()属性值是否跟有单位(true,false);unit() 获取属性值的单位
        }@else {@warn "$width应该是一个百分值，你输入的width是：#{$width}.";$width: (percentage($width) / 100);} //将属性值转换为百分制
        @media (min-width: 768px) {width: $width;float: left;}
    }

#### Sass输出格式

    config.rd中：
    output_style = :expanded //默认
    output_style = :nested //根据嵌套对应缩进
    output_style = :compact //将所有属性汇总到一行
    output_style = :compressed //压缩格式 在被注释内容前加!可以保留注释内容

#### Compass核心模块

    @import "compass/reset"和@import "compass/layout"必须单独引入。
    @import "compass"直接引入其他五大模块 CSS3,Helpers,Typography,Utilities,Brower Support。

#### 引入Normalize模块步骤

    1.在控制台输入gem install compass-noramlize安装noramlize插件。
    2.在config.rb文件顶部添加 require 'compass-noramlize'。
    3.使用@import "normalize";引入模块。

#### Noramlize的核心模块

    共有8个模块,通过@import "normalize-version"; @import "normalize/...";引入。
    1. base：统一HTML和BODY的字体。
    2. html5：统一html5中新增的元素。
    3. links：统一a标签的样式。
    4. typography：统一b、strong、h1、sub、sup等段落文本的样式。
    5. embeds：统一img、svg等标签的样式。
    6. groups：figure、pre、code等标签的样式。
    7. forms：统一form相关的button、input、textarea等标签的样式。
    8. tables：统一table相关的tr，td等标签的样式。

#### compass/import-once/activate用法

    设置@import引入相同模块时只引入一次。
    如果想多次引入可以在后面加入!,如@import "compass/reset!"

#### [Reset模块Mixin ](http://compass-style.org/reference/compass/reset/utilities/)

    内部共包含13个mixin,通过@import "copass/reset/utilities"; @include xxx;引入。
    1. global-reset         2. nested-reset      3. reset-box-model
    4. reset-font           5. reset-focus       6. reset-body
    7. reset-list-style     8. reset-table       9. reset-table-cell
    10. reset-quotation     11. reset-image-anchor-border      12. reset-html5
    13. reset-display($selector, $important) 

#### [Layout模块](http://compass-style.org/reference/compass/layout/) 

    内部包含3个mixin：
`1. `[grid-background](http://compass-style.org/reference/compass/layout/grid_background/)`：为元素添加定宽、定高或自适应宽高的格式背景。`

    $grid-background-column-color: rgba( 255, 0, 0, .25); //改变背景颜色
    @include grid-background();
`2. `[sticky-footer](http://compass-style.org/reference/compass/layout/sticky_footer/)`：使页脚部分始终处于最底部。`
 
    @include sticky-footer(footerHeight,"#root","#root_footer","#footer");
    HTML中#footer格式必须为如下：
    <div id="root">
        <div id="root_footer"></div>
    </div>
    <div id="footer">Footer content goes here</div>

`3. `[stretching](http://compass-style.org/reference/compass/layout/stretching/)`：将一个子元素拉伸填满整个父容器。` 

    @include stretch(top,right,bottom,left); 
    == @include stretch($offset-top: top, $offset-bottom: bottom, $offset-left: left, $offset-right: right);

#### [CSS3模块](http://compass-style.org/reference/compass/css3/)

    @import "compass/css3";
    @include box-shadow( 1px 1px 3px 2px #cfcecf);
    =>-moz-box-shadow: 1px 1px 3px 2px #cfcecf;
      -webkit-box-shadow: 1px 1px 3px 2px #cfcecf;
      box-shadow: 1px 1px 3px 2px #cfcecf;

#### [Brower Support模块](http://compass-style.org/reference/compass/support/)

    @import "compass/support";
    browers();返回浏览器内部的list
    $supported-browsers: chrome, firefox; //设置所支持的浏览器
    $brower-minimum-versions: ("ie": "8");//设置最低支持到ie8;

#### [Typography模块](http://compass-style.org/reference/compass/typography/)

    包含四个模块：
    1. Links：链接修饰模块
        @include hover-link(); //去除链接下划线样式
        @include link-colors(normalColor,hoverColor,activeColor,visitedColor,focusColor); //设置链接颜色
        @unstyled-link(); //抹平超链接样式
    2. Lists：列表模块
        @include no-bullets(); //去除所有li的list-style
        @inlcude no-bullet(); //去除某个li的list-style
        @include pretty-bullets(); //将list-style设置为自定义图片
        @inlcude inline-list(); //将list设为inline元素
        @include horizontal-list(padding,float); //设置list中li左浮动，实现导航条布局
        @include inline-block-list(padding); //将list设为inline-block元素
    3. Text：文本模块
        @include force-wrap(); //超出父容器宽度时强制换行
        @include nowrap(); //设置white-space为nowrap(不换行)
        @include ellipsis(); //超出父容器的文本部分用...表示
            适配低版本firefox办法：
            1.compass install compass/ellipsis //安装ellipsis.xml文件
            2.$use-mozilla-ellipsis-binding: true; //开启firefox对ellipsis能力的支持
        @include hide-text(); //隐藏文本
        @include squish-text(); //隐藏文本(通过设置字体大小颜色)
        @include replace-text("imgUrl"); //设置按钮背景图片
        @include replace-text-with-dimensions("localImgUrl"); //自动计算本地图片宽高并设置根据宽高设置背景图片
    4. Vertical Rhythm：垂直韵律模块