// 引入组件
import Details from '../pages/Details/Details.vue'
import Home from '../pages/Home/Home.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
// 个人中心
import Personal from '../pages/Personal/Personal.vue'
import Order from '../pages/Personal/Order/Order.vue'
import Assets from '../pages/Personal/Assets/Assets.vue'
import Collections from '../pages/Personal/Collections/Collections.vue'
import Address from '../pages/Personal/Address/Address.vue'
// 注册登录
import User from '../pages/User/User.vue'
import Login from '../pages/User/Login/Login.vue'
import Register from '../pages/User/Register/Register.vue'
// 测试
import test from '../pages/Personal/Order/test/test.vue'
import Paid from '../pages/Personal/Order/Paid/Paid.vue'
import Refund from '../pages/Personal/Order/Refund/Refund.vue'
import NoPaid from '../pages/Personal/Order/NoPaid/NoPaid.vue'
import Total from '../pages/Personal/Order/Total/Total.vue'
import Mayuse from '../pages/Personal/Assets/Mayuse/Mayuse.vue'
import Notmay from '../pages/Personal/Assets/Notmay/Notmay.vue'
// 暴露
export default [
  {
    path: '/details',
    component: Details
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/personal',
    component: Personal,
    children: [
      {
        path: '/personal/assets',
        component: Assets,
        name: '我的资产',
        children:[
          {
            path: '/personal/assets/mayuse',
            component: Mayuse,
            name: '我的资产'
          },
          {
            path: '/personal/assets/notmay',
            component: Notmay,
            name: '我的资产'
          },
          {
            path: '/personal/assets/',
            redirect: '/personal/assets/mayuse',
          }
        ]
      },
      {
        path: '/personal/order',
        component: Order,
        name: '我的订单',
        children: [
          {
            path: '/personal/order/test',
            component: test,
            name: '我的订单'
          },
          {
            path: '/personal/order/paid',
            component: Paid,
            name: '我的订单'
          },
          {
            path: '/personal/order/no-paid',
            component: NoPaid,
            name: '我的订单'
          },
          {
            path: '/personal/order/refund',
            component: Refund,
            name: '我的订单'
          },
          {
            path: '/personal/order/total',
            component: Total,
            name: '我的订单'
          },
          {
            path: '/personal/order',
            redirect: '/personal/order/test'
          }
        ]
      },
      {
        path: '/personal/collections',
        component: Collections,
        name: '我的收藏',
      },
      {
        path: '/personal/address',
        component: Address,
        name: '地址管理',
      },
      {
        path: '/personal',
        redirect: '/personal/order'
      }
    ]
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path:'/user/login',
        component: Login
      },
      {
        path: '/user/register',
        component: Register
      },
      {
        path: '/user',
        redirect: '/user/login'
      }
    ]
  }
]
