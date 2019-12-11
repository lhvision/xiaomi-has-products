var express = require('express');
// 引入jsonwebtoken
var jwt = require('jsonwebtoken')
var router = express.Router();
const md5 = require('blueimp-md5')
const UserModel = require('../models/UserModel')
const _filter = { 'pwd': 0, '__v': 0 } // 查询时过滤掉
const sms_util = require('../util/sms_util')
const users = {}
const ajax = require('../api/ajax')
var svgCaptcha = require('svg-captcha')
const createToken = require('../token/createToken')
const checkToken = require('../token/checkToken')

/*
密码登陆
 */
router.post('/login_pwd', (req, res) => {
  const name = req.body.name
  const pwd = md5(req.body.pwd)
  console.log('/login_pwd', name, pwd, req.session)

  // // 可以对用户名/密码格式进行检查, 如果非法, 返回提示信息
  // if (name !== req.session.name) {
  //   return res.send({ code: 1, msg: '用户名不存在' })
  // }
  console.log(name)
  UserModel.findOne({ name })
    .then((user) => {
      if (user) {
        if (user.pwd !== pwd) {
          res.send({ code: 1, msg: '用户名或密码不正确!' })
        } else {
          // req.session.userid = user._id
          // const token = tokenUtil.generateToken(name)
          // req.session.token = token
          res.send({ code: 0, data: { _id: user._id, name: user.name, token:createToken(user._id)} })
        }
        return new Promise(() => {
        }) // 返回一个不调用resolve()/reject()的promise对象
      } else {
        return UserModel.create({ name, pwd })
      }
    })
    .then((user) => {
     // req.session.userid = user._id
      const data = { _id: user._id, name: user.name ,token:createToken(user._id)}
      // 3.2. 返回数据(新的user)
      res.send({ code: 0, data })
    })
    .catch(error => {
      console.error('/login_pwd', error)
    })
})

// 注册用户
router.post('/register')
/*
根据sesion中的userid, 查询对应的user
 */
// 根据请求携带的token查询对应的user
router.get('/auto_login', (req, res) => {
  // 获取请求头中的token
  const token=req.headers['authorization']
  // 如果请求头中没有token,直接返回token
  if(!token){
    return req.send({code:1,msg:'请先登录'})
  }
  // 解码token,如果失败或者过了有效期返回401
  const decoded=jwt.decode(token,'secret')
  if(!decoded||decoded.exp<Date.now()/1000){
    res.status(401)
    return res.json({message:'token过期,请重庆登录'})
  }
   // 根据解码出的用户id,查询得到对应的user,返回给客户端
   const userId=decoded.id
   UserModel.findOne({_id:userId},_filter)
   .then(user=>{
     res.send({code:0,data:user})
   })
})
router.get('/userinfo', function (req, res) {
  // 取出userid
  const userid = req.session.userid
  // 查询
  UserModel.findOne({ _id: userid }, _filter)
    .then(user => {
      // 如果没有, 返回错误提示
      if (!user) {
        // 清除浏览器保存的userid的cookie
        delete req.session.userid

        res.send({ code: 1, msg: '请先登陆' })
      } else {
        // 如果有, 返回user
        res.send({ code: 0, data: user })
      }
    })
})


// router.get('/logout', function (req, res) {
//   // 清除浏览器保存的userid的cookie
//   delete req.session.userid
//   // 返回数据
//   res.send({ code: 0 })

/*
获取商铺列表
 */
//router.get('/shops',checkToken,function(req,res){
router.get('/shops', async (req, res) => {
// const latitude = req.query.latitude
// const longitude = req.query.longitude

  await setTimeout(async () => {
    const data = await require('../data/shops.json')
    res.send({ code: 0, data })
  }, 300)
})
// 获取商品详情
router.get('/details', async (req, res) => {
  await setTimeout(async () => {
    const data = await require('../data/data.json')
    res.send({ code: 0, data })
  }, 300)
})


router.get('/search_shops', function (req, res) {
  const { geohash, keyword } = req.query
  ajax('http://cangdu.org:8001/v4/restaurants', {
    'extras[]': 'restaurant_activity',
    geohash,
    keyword,
    type: 'search'
  }).then(data => {
    res.send({ code: 0, data })
  })
})

module.exports = router;