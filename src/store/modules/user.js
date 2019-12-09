// 包含了多个状态数据,直接修改状态数据的方法的对象,间接修改状态数据的方法的对象,状态数据的计算属性的get操作的方法
import { RECEIVE_USER } from '../mutation-types'
const state= {
  user: {name: 1}
}

const mutations = {
  [RECEIVE_USER] (state, user) {
    state.user = user
  }
}

const actions = {

}

const getters = {

}
// 暴露出去
export default {
  state,
  mutations,
  actions,
  getters
}
