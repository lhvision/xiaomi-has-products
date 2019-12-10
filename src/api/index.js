// 引入ajax
import ajax from './ajax'
// 登录接口
export const reqPwdLogin = () => ajax('/user/login')
// 商品接口
export const reqShop = () => ajax('/shop')