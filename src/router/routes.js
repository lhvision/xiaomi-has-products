// 引入组件
import Details from '../pages/Details/Details.vue'
import Home from '../pages/Home/Home.vue'
import Profile from '../pages/Profile/Profile.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Order from '../pages/Order/Order.vue'
import Flosh from '../pages/Profile/Flosh.vue'
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
  path: '/flosh',
  component: Flosh
},
  {
    path: '/shoppingCart',
    component: ShoppingCart
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/',
    redirect: '/home'
  }
]
