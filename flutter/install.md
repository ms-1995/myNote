# Flutter

### 准备

- 下载安装Flutter SDK

- 更新环境变量，将flutter\bin添加到Path中

- 安装Android Studio开发工具

- 设置中安装所需SDK，有的版本可能需要在SDK TOols中显示Obsolete Packages并安装Android SDK Tools

- 创建虚拟机或者连接真机调试

- 终端运行`flutter doctor` 诊断环境缺少的依赖

### 运行Flutter项目

#### Android Studio

- 安装flutter插件

- 左上角文件->创建flutter项目

- 右上角选择要执行的控制器并执行

#### VS Code

- 安装flutter插件

- CTRl+SHIFT+P -> Flutter: New Project 创建项目

- 右下角选择目标设备并按下F5或调用Debug>Start Debugging启动

### 使用外部包

- 编辑pubspec.yaml, 将要使用的外部包添加入依赖项列表

```
dependencies:
  flutter:
    sdk: flutter

  cupertino_icons: ^0.1.0
  english_words: ^3.1.0 // 加入依赖包
```

- CTRl+SHIFT+P -> Flutter: Get Packages 将依赖包安装到项目中

- 在文件中引入

```dart
import 'package:english_words/english_words.dart';
```
