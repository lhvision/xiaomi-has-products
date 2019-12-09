// 引入Vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入路由
import router from './router'
// 引入store
import store from './store'
// 设置是否显示提示信息
Vue.config.productionTip = false
// 实例化对象
new Vue ({
  el: "#app",
  components: { App },
  template: '<App/>',
  router,
  store
})
