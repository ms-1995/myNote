# GraphQL学习笔记
GraphQL是一个用于API的查询语言，是一个使用基于类型系统来执行查询的服务端运行时。GraphQL并没有和任何特定数据库或者存储引擎绑定，而是依靠你现有的代码和数据支撑。这里查询语言所指的并不是常规意义上的类似 sql 语句的查询语言，而是一种用于前后端数据查询方式的规范。
- - -
## 特点
* 向API发出一个GraphQL请求就能准确获得想要的数据。
* 可以沿着资源间引用进一步查询，通过一次请求就可以获取当前所需的所有数据。
* GraphQL API基于类型和字段的方式组织，而非入口端点。
* API演进无需划分版本，服务端代码更简洁，更易维护。
- - -
## 环境搭建
#### 服务端（JavaScript）
1. Node.js环境 `npm install graphql`
```ts
var { graphql, buildSchema } = require('graphql');
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);
var root = { hello: () => 'Hello world!' };
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
}); 
```
2. 基于 Express webserver 服务器 `npm install express express-graphql graphql`
3. 来自于 Apollo 的一套 GraphQL server 包，可用于多种 Node.js HTTP 框架（Express，Connect，Hapi，Koa 等）。`npm install apollo-server-express express`
#### 客户端（JavaScript）
* Relay：Facebook 的框架，用于构建与 GraphQL 后端交流的 React 应用。
* Apollo Client：一个强大的 JavaScript GraphQL 客户端，设计用于与 React、React Native、Angular 2 或者原生 JavaScript 一同工作。
* graphql-request：一个简单灵活的 JavaScript GraphQL 客户端，可以运行于所有的 JavaScript 环境（浏览器，Node.js 和 React Native）—— 基本上是 fetch 的轻度封装。
* Lokka：一个简单的 JavaScript GraphQL 客户端，可以运行于所有的 JavaScript 环境 —— 浏览器，Node.js 和 React Native。
* nanogql：一个使用模板字符串的小型 GraphQL 客户端库。
* gq-loader：一个简单的 JavaScript GraphQL 客户端，通过 webpack 加载器让 *.gql 文件作为模块使用。
* AWS Amplify：使用云服务进行应用开发的 JavaScript 库，支持 GraphQL 后端和用于处理 GraphQL 数据的 React 组件。
* Grafoo：一个通用的 GraphQL 客户端，具有仅 1.6kb 的多框架的视图层集成。
* urql (github)：一个用于 React 的高度可定制且用途广泛的 GraphQL 客户端。
- - -
## GraphGL语法
一个GraphGL服务是通过定义类型和类型上的字段来创建的，然后给每个类型上的每个字段提供解析函数。一旦一个 GraphQL 服务运行起来（通常在 web 服务的一个 URL 上），它就能接收 GraphQL 查询，并验证和执行。接收到的查询首先会被检查确保它只引用了已定义的类型和字段，然后运行指定的解析函数来生成结果。
```ts
// 定义类型
type Query {
  viewer: User
}
type User {
  id: ID
  name: string
}
// 定义解析函数
function Query_viewer(request) { // 请求接口获取user信息
  return request.auth.user
}
function User_name(user) { // 获得user的name属性
  return user.getName();
}
// 查询访客的姓名
{
  viewer {
    name
  }
}
```
### 查询与变更
* 查询与结果拥有几乎一样的结构。查询请求字段是对象类型时，可以对这个对象的字段进行次级选择，一次请求遍历查询相关对象及其字段，无需多次往返请求。
```graphql
{
  viewer {
    name
    # 通过一次查询，获取到访客的姓名和含有姓名性别的朋友数组
    friends {
      name
      sex
    }
  }
}
```
* 服务端可以根据需要设置查询时传递**参数**，每一个字段和嵌套对象都能有自己的一组参数。GraphQL服务器可以声明一套定制类型用于序列化传输格式。GraphQL对象类型上的每一个字段都可能有零个或者多个参数。
```graphql
{
  # 查询指定id的访客
  viewer(id: "1000") {
    name
  }
}
```
#### 别名
当需要用不同参数查询相同字段时，相同字段会存在冲突，需要给其中一个另取一个**别名**。
```graphql
{
  viewer(id: "1000") {
    name
  }
  otherViewer: viewer(id: "1001") {
    name
  }
}
```
#### 片段
GraphQL中包含了称作**片段**的可复用单元。片段的概念经常用于将复杂的应用数据需求分割成小块，特别是你要将大量不同片段的 UI 组件组合成一个初始数据获取的时候。
```graphql
{
  viewer(id: "1000") {
    ...viewerInfo
  }
  otherViewer: viewer(id: "1001") {
    ...viewerInfo
  }
  fragment viewerInfo on Character {
    name
    sex
    friends {
      name
    }
  }
}
```
#### 操作名称
* 操作类型可以是query、mutation或subscription描述打算进行的操作，未声明操作类型时是查询的简写语法。
* 操作名称表示操作的意义和明确的名称。它仅在多个操作的文档中是必须的。
```graphql
query ViewerName {
  viewer {
    name
  }
}
```
#### 变量
在很多情况下，字段的参数可能是动态的。但是将这些动态参数直接传进查询字符串并不是好主意，因为这样我们的客户端就得动态地在运行时操作这些查询字符串了，再把它序列化成 GraphQL 专用的格式。其实，GraphQL 拥有一级方法将动态值提取到查询之外，然后作为分离的字典传进去。这些动态值即称为**变量**。
1. 使用 $variableName 替代查询中的静态值。
2. 声明 $variableName 为查询接受的变量之一。
3. 将 variableName: value 通过传输专用（通常是 JSON）的分离的变量字典中。
```graphql
# { "graphql": true, "variables": { "id": 1000 } }
query ViewerName($id: ID = "1000") {
  viewer(id: $id) {
    name
  }
}
```
* 变量定义其工作方式跟类型语言中函数的参数定义一样。
* 它以列出所有变量，变量前缀必须为 $，后跟其类型.所有声明的变量都必须是标量、枚举型或者输入对象类型。
* 根据传递变量的字段要求变量定义可以是可选的或者必要的。
* 可以通过在查询中的类型定义后面附带默认值的方式，将默认值赋给变量。当所有变量都有默认值的时候，可以不传变量直接调用查询。
#### 指令
一个指令可以附着在字段或者片段包含的字段上，然后以任何服务端期待的方式来改变查询的执行。GraphQL 的核心规范包含两个指令，其必须被任何规范兼容的 GraphQL 服务器实现所支持：
* `@include(if: Boolean)` 仅在参数为 true 时，包含此字段。
* `@skip(if: Boolean)` 如果参数为 true，跳过此字段。
```graphql
# { "graphql": true, "variables": { "id": 1000, "withName": true } }
query ViewerName($id: ID = "1000", $withName: Boolean!) {
  viewer(id: $id) {
    name @include(if: $withName)
  }
}
```
#### 变更
* 技术上而言，任何查询都可以被实现为导致数据写入。然而，建一个约定来规范任何导致写入的操作都应该显式通过变更（mutation）来发送。
* 如同查询一样，如果任何变更字段返回一个对象类型，你也能请求其嵌套字段。获取一个对象变更后的新状态也是十分有用的。
* 一个变更也能包含多个字段，一如查询。查询和变更之间名称之外的一个重要区别是：查询字段时，是并行执行，而变更字段时，是线性执行，一个接着一个。
```graphql
mutation ReviseViewerName($id: ID = "1000", $review: ReviewInput!) {
  viewer(id: $id, $review: $review) {
    name
  }
}
# 将id为1000的访客的姓名修改为newname
{
  "id": "1000",
  "review": {
    name: "newname"
  }
}
```
例中传递的review是一种可以作为参数传递的对象类型。在变更（mutation）中，有时候需要传递一整个对象作为新建对象。而输入对象看上去和常规对象一模一样，除了关键字是 input 而不是 type
#### 元字段
当无法区分获得数据类型时，GraphQL允许在查询的任何位置请求 __typename，一个元字段，以获得那个位置的对象类型名称。
```graphql
{
  search(text: "an") {
    __typename
    ... on Human {
      name
    }
    ... on Droid {
      name
    }
    ... on Starship {
      name
    }
  }
}
```