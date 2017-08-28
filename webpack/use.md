#### 使用Webpack

* npm init 创建package.json文件
* npm install --save-dev webpack 本地安装Webpack依赖包
* 创建两个文件夹，一个存放原始数据，另一个存放供浏览器读取的文件（webpack打包的文件）
* 根目录下创建webpack.config.js文件，


        module.exports = {
        entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
        output: {
            path: __dirname + "/public",//打包后的文件存放的地方
            filename: "bundle.js"//打包后输出文件的文件名
        }
        }
        //__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。

* 修改package.json中的"scripts"添加"start":"webpack"
* npm start 执行webpack

#### 额外功能

* 生成Source Maps

    webpack打包时生成，可以使编译后的文件与源文件对应，便于调试。(只用于开发阶段)

        module.exports = {
            devtool: 'eval-source-map',
            entry:  __dirname + "/app/main.js",
            output: {
                path: __dirname + "/public",
                filename: "bundle.js"
            }
        }

    在配置文件中配置devtool:

    * source-map： 在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；

    * cheap-module-source-map： 在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；

    * eval-source-map： 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；

    * cheap-module-eval-source-map:    这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；

* 构建本地服务器

    浏览器监听代码修改，并自动刷新修改后的结果。

    安装`npm install --save-dev webpack-dev-server`作为项目依赖

    在配置文件中配置devServer:

    * contentBase 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）

    * port    设置默认监听端口，如果省略，默认为”8080“

    * inline  设置为true，当源文件改变时会自动刷新页面

    * historyApiFallback  在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html

    在package.json中的scripts对象中添加`"server": "webpack-dev-server --open"`

    在终端输入`npm run server`可以在本地8080端口查看

* Loaders

    通过不同的loader，调用外部脚本，对不同格式的文件进行处理。

    Loaders在modules关键字下的配置：

    * test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）

    * loader：loader的名称（必须）

    * include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；

    * query：为loaders提供额外的设置选项（可选）

* Bable

    模块化的包，核心功能位于`babel-core`npm包中，还可以安装其他拓展功能的包如`babel-preset-es2015`,`babel-preset-react`等
