- 在 Flutter 的世界里，包括应用、视图、视图控制器、布局等在内的概念，都建立在 Widget 之上，Flutter 的核心设计思想便是一切皆 Widget。

- 在Dart语言中使用下划线前缀标识符，会强制其变成私有的。

- Stateless widgets 是不可变的, Stateful widgets 持有的状态可能在widget生命周期中发生变化. 实现一个 stateful widget 至少需要两个类:

    1. 一个 StatefulWidget类
    2. 一个 State类。 StatefulWidget类本身是不变的，但是 State类在widget生命周期中始终存在

- Widget 是组件视觉效果的封装，是 UI 界面的载体，因此我们还需要为它提供一个方法，来告诉 Flutter 框架如何构建 UI 界面，这个方法就是 build。

- Widget 需要依据数据才能完成构建，而对于 StatefulWidget 来说，其依赖的数据在 Widget 生命周期中可能会频繁地发生变化。由 State 创建 Widget，以数据驱动视图更新，而不是直接操作 UI 更新视觉属性，代码表达可以更精炼，逻辑也可以更清晰。

-  Widget Scaffold，是 Material 库中提供的页面布局结构，它包含 AppBar、Body，以及 FloatingActionButton

- 状态的更改一定要配合使用 setState。如果不调用 setState，Flutter 框架也不会感知到状态的变化，因此界面上也不会有任何改变

### Dart

- Dart 是类型安全的语言，并且所有类型都是对象类型，都继承自顶层类型 Object，因此一切变量的值都是类的实例（即对象），甚至数字、布尔值、函数和 null 也都是继承自 Object 的对象。

- const，表示变量在编译期间即能确定的值。final，用它定义的变量可以在运行时确定值，而一旦确定后就不可再变。

- 值得一提的是，Dart 中并没有 public、protected、private 这些关键字，我们只要在声明变量与方法时，在前面加上“_”即可作为 private 方法使用。如果不加“_”，则默认为 public。不过，“_”的限制范围并不是类访问级别的，而是库访问级别。

- 继承父类意味着，子类由父类派生，会自动获取父类的成员变量和方法实现，子类可以根据需要覆写构造函数及父类方法；
- 接口实现则意味着，子类获取到的仅仅是接口的成员变量符号和方法符号，需要重新实现成员变量，以及方法的声明和初始化，否则编译器会报错。
#### 运算符
- ?. 运算符：假设 Point 类有 printInfo() 方法，p 是 Point 的一个可能为 null 的实例。那么，p 调用成员方法的安全代码，可以简化为 p?.printInfo() ，表示 p 为 null 的时候跳过，避免抛出异常。
- ??= 运算符：如果 a 为 null，则给 a 赋值 value，否则跳过。这种用默认值兜底的赋值语句在 Dart 中我们可以用 a ??= value 表示。
- ?? 运算符：如果 a 不为 null，返回 a 的值，否则返回 b。在 Java 或者 C++ 中，我们需要通过三元表达式 (a != null)? a : b 来实现这种情况。而在 Dart 中，这类代码可以简化为 a ?? b。