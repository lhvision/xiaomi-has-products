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
// 暴露
export default [
  {
    path: '/details',
    component: Details,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    meta: {
      isShowFooter: true
    },
    children: [
      {
        path: '/personal/assets',
        component: Assets
      },
      {
        path: '/personal/order',
        component: Order
      },
      {
        path: '/personal/collections',
        component: Collections
      },
      {
        path: '/personal/address',
        component: Address
      },
      {
        path: '/personal',
        redirect: '/personal/order'
      }
    ]
  },
  {
    path: '/shoppingCart',
    component: ShoppingCart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/user',
    component: User,
    meta: {
      isShowFooter: true
    },
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
