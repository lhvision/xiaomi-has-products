# 小米有品

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

// 运行项目
npm run serve

// 打包项目
npm run build

// 运行打包
serve dist

```
### vue-cli项目结构大纲
```
|-- public                        // 
|-- .babelrc                         // ES6语法编译配置
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
