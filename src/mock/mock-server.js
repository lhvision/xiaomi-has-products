// 引入moke
import Mock from 'mockjs'
// 引入xmyp_data数据
import data from './data.json'
// 拦截地址,产生数据
// 接口地址 /login 
Mock.mock('/user/login', {code: 0, data: data.user})
// 首页图片
Mock.mock('/shop', {code: 0, data: data.shop})
