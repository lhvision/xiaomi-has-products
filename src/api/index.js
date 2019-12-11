// 引入ajax
import ajax from './ajax'
// 定义一个常量,设置地址
const BASE = '/api'
// 登录接口
export const reqPwdLogin = (name, pwd) => ajax({
  methods: 'POST',
  url: BASE + `/login_pwd`,
  data: {
    name,
    pwd
  }
})
// 商品接口
export const reqShops = () => ajax(BASE + `/shops`)
