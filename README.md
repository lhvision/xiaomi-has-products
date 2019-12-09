# 小米有品

### 技术栈
`前端`

```
|-- 编程语言
|   |-- html
|   |-- js
|   |-- css
|   |-- stylus
|-- 开发工具
|   |-- VSCode
|-- 开发框架
|   |-- vue + element ui
|-- 包管理工具
|   |-- npm
|   |-- cnpm
|-- 打包工具
|   |-- webpack
```

### 构建vue项目
```
// 安装node.js，内含npm，Node.js官网：https://nodejs.org/en/ 。

// 设置npm镜像cnpm命令行工具
npm install -g cnpm --registry=https://registry.npm.taobao.org 

// 全局安装 vue-cli3.0+ 
cnpm install -g @vue-cli

// 先创建并进入vue项目目录
// 创建vue-cli脚手架项目
vue create xiaomi-has-products

// 初始化项目
npm i
// 运行项目
npm run serve

// 打包项目
npm run build

// 运行打包
serve dist

```
### vue-cli项目结构大纲
```
|-- public                        //存放静态资源 入口html
|  |-- css                         // 存放样式重置reset.css
|-- src                           // 源码目录
|  |-- api目录                      // 放ajax相关操作的代码文件:index.js(相关的接口),ajax.js(封装的axios,拦截器)
|  |-- common目录                   // stylus的混合文件.styl
|  |-- components目录               // 普通的组件的目录
|  |  |-- FooterGuide目录             // 公共底部组件
|  |  |-- Head目录                    // 公共头部组件
|  |-- filter目录                   // 放过滤器的相关代码---日期格式化的文件
|  |-- mock目录                     // .json文件及mock.js文件(拦截ajax请求,随机生成数据)
|  |-- pages目录                    // 路由的组件
|  |  |-- Home目录                    // 首页组件
|  |  |-- Details目录                 // 商品详情组件
|  |  |-- Order目录                   // 订单组件
|  |  |-- Profile目录                 // 个人中心组件
|  |  |-- ShoppingCart目录                // 购物车组件
|  |-- router目录                   // 路由器及路由的配置
|  |-- store目录                    // vuex的状态管理
|  |  |-- modules模块目录              // 存放vuex模块化
|  |-- App.vue                      // 页面入口文件
|  |-- main.js                      // 程序入口文件，加载各种公共组件
|-- babel.config                     // ES6语法编译配置
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
|-- vue.config.js                    // 脚手架3中使用脚手架2实例代码配置,跨域配置 3使用的是vue.runtime.js 运行时编译
2使用的是vue.esm.js 直接进行编译

```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
