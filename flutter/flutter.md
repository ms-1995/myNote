- ListView中嵌套ListView时，内层ListView要设置属性shrinkWrap=true

- 单子 Widget 布局：Container、Padding 与 Center

- 多子 Widget 布局：Row、Column 与 Expanded

    1. mainAxisAlignment: MainAxisAlignment.start 水平对齐方式
    2. crossAxisAlignment: CrossAxisAlignment.center 竖直对齐方式
    3. mainAxisSize: MainAxisSize.min 设定主轴方向容器长度

- 层叠 Widget 布局：Stack 与 Positioned

    1. Stack 提供了层叠布局的容器，而 Positioned 则提供了设置子 Widget 位置的能力
    ```dart
    Stack(
       children: <Widget>[
           Container(),
           Positioned(),
           Positioned()
       ] 
    )
     ```