// 引入Vue
import Vue from 'vue'
// 引入VueX
import Vuex from 'vuex'
// 引入4个对象
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
// 引入模块
import user from './modules/user'
import shop from './modules/shop'
import official from './modules/official'
// 声明使用
Vue.use(Vuex)
// 暴露对象
export default new Vuex.Store({
  state, // 总state
  mutations, // 总mutations
  actions, // 总actions
  getters, // 总getters
  modules: {
    user,
    shop,
    official
  }
})
