// 引入ajax
import ajax from './ajax'
// 定义一个常量,设置地址
const BASE = '/api'
// 登录接口
export const reqPwdLogin = (name, pwd) => ajax({
<<<<<<< HEAD
  methods: 'POST',
=======
  method: 'POST',
>>>>>>> 89943fb62cf4cda5b45d6f72c67d02023519a5cb
  url: BASE + `/login_pwd`,
  data: {
    name,
    pwd
  }
})
// 商品接口
export const reqShops = () => ajax(BASE + `/shops`)
<<<<<<< HEAD
=======
// 商品详情接口
export const reqDetails = () => ajax(BASE + `/details`)

// 自动登录
export const reqAutoLogin = () => ajax({
  method: 'GET',
  url: BASE + '/auto_login',
  headers: {
    needToken: true // 标识: 需要携带token
  }
})
>>>>>>> 89943fb62cf4cda5b45d6f72c67d02023519a5cb
