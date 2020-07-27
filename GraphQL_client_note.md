# GraphQL 类库对比

## Apollo

一个强大的 JavaScript GraphQL 客户端，设计用于与 React、React Native、Angular 2 或者原生 JavaScript 一同工作。

#### 1.安装依赖包

`npm install --save vue-apollo graphql apollo-boost`

#### 2.引用 apollo

```ts
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
```

#### 3.创建 ApolloClient 实例和 PROVIDER

```ts
// 与 API 的 HTTP 连接
const httpLink = new HttpLink({
  // 需要使用的绝对路径
  uri: "http://localhost:8080/graphql"
});
// 缓存实现
const cache = new InMemoryCache();
// 创建 apollo 客户端
const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});
// Provider 保存了可以在接下来被所有子组件使用的 Apollo 客户端实例。
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});
```

#### 4.安装插件到 Vue

```ts
Vue.use(VueApollo);
```

#### 5.根实例引用

```ts
new Vue({
  el: "#app",
  // 像 vue-router 或 vuex 一样注入 apolloProvider
  apolloProvider,
  render: h => h(App)
});
```

#### 6.使用

在应用程序中安装了 vue-apollo 之后，所有组件都可以通过 apollo 这一特殊选项来使用 Apollo。

```ts
import gql from "graphql-tag"; // 用来把 string 转化成 GraphQL 的 AST
// 1.编译成 AST 可以在编译时检确保 query 的合法性 (比如查询了不存在的字段)
// 2.可以按照特定条件对多个 query 进行合并，多个请求合并为同一个请求
// 3.可以按照客户端缓存对某些字段进行过滤 (skip)，避免冗余查询
export default {
  data() {
    return {
      info: {},
      id: 10000
    };
  },
  apollo: {
    info: {
      query() {
        return gql`{
          Viewer(id: "${this.id}"){
            name
            sex
          }
        }`;
      }
    }
  }
};
```

## graphql-request

一个简单灵活的 JavaScript GraphQL 客户端，可以运行于所有的 JavaScript 环境。

#### 1.安装依赖包

`npm install graphql-request`

#### 2.用法

```ts
// 引入graphql-request
import { request, GraphQLClient  } from "graphql-request";

const query = `
  query getViewer($id: Int!) {
    Viewer(id: $id) {
      name
      sex
    }
  }
`
const variables = {
  id: 10000,
}

// 使用静态函数运行GraphQL查询/变更
request('http://localhost:8080/graphql', query, variables).then(data =>console.log(data))

// 或者创建一个GraphQL客户端实例发送请求
const client = new GraphQLClient('http://localhost:8080/graphql', { headers: {} })
client.request(query, variables).then(data => console.log(data))
```

## lokka

#### 1.安装依赖包

`npm install lokka lokka-transport-http`

#### 用法

```ts
import { Lokka } from "lokka";
import { Transport } from "lokka-transport-http";

const client = new Lokka({
  transport: new Transport('http://localhost:8080/graphql')
});

const query = `
  query getViewer($id: Int!) {
    Viewer(id: $id) {
      name
      sex
    }
  }
`
const variables = {
  id: 10000
}

client.query(query, variables).then(data => console.log(data))

```

## 对比

- Apollo: 
  > 1. 增量可用，你可以在已有的 JavaScript 应用中，对于某一部分 UI 使用 GraphQL。
  > 2. 通用兼容，Apollo 可以接受各种不同构建运行的 GraphQL 服务器，以及任何 GraphQL schema。
  > 3. 方便监查和理解，你可以使用很好开发工具来确切地了解应用中发生的事情。
  > 4. 专为交互式应用程序而设计，因此用户操作后可以立刻看到 UI 改变。
  > 5. 社区驱动

- graphql-request: 更轻量级的 GraphQL 客户端。支持浏览器，Node.js，React Native。没有内置缓存，也没有前端框架的集成，尽可能减少了包的大小和 API 的数量。适合小型脚本或者程序。

- Lokka: 简单的 GraphQL 客户端。支持浏览器，Node.js，React Native。具有基本的查询缓存