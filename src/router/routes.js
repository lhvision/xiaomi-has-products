// 引入组件
import Details from '../pages/Details/Details.vue'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import User from '../pages/User/User.vue'
import Login from '../pages/User/Login/Login.vue'
import Register from '../pages/User/Register/Register.vue'
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
    path: '/profile',
    component: Profile
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
