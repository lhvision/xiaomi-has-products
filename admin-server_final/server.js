/*
用的启动模块
1. 通过Koa启动服务器应
2. 通过mongoose连接数据库
  说明: 只有当连接上数据库后才去启动服务器
3. 使用中间件
 */
// koa 搭建 服务器
// 引入koa
const Koa = require('koa')
// 引入KoaRouter
const KoaRouter = require('koa-router')
// 引入mongoose
const mongoose = require('mongoose')
// 实例化Koa
const koa = new Koa()
// 实例化KoaRouter
const koaRouter = new KoaRouter()


// 使用koa的路由的相关的方法
koa
  .use(koaRouter.allowedMethods()) // 路由中所有的方法
  .use(koaRouter.routes()) // 所有的路由
// 通过mongoose连接数据库
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .then (() => {
    console.log('数据库连接成功~');
    // 只有当连接上数据库后才启动服务器
    koa.listen('5000', (err) => {
      if (!err) {
        console.log('服务器启动了')
        console.log('服务器的地址:http://localhost:5000')
      } else {
        console.log("错误信息"+ err)
      }
    })
  })
  .catch(error => {
    console.error('连接数据库失败', error)
  })
