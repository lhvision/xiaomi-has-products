// 包含了多个状态数据,直接修改状态数据的方法的对象,间接修改状态数据的方法的对象,状态数据的计算属性的get操作的方法
import { RECEIVE_USER, RECEIVE_TOKEN } from '../mutation-types'
const state= {
  // 用户信息
  user: {},
  // token信息
  token: localStorage.getItem('token_key')
}

const mutations = {
  // 更新用户信息
  [RECEIVE_USER] (state, user) {
    state.user = user
  },
  // 更新token信息
  [RECEIVE_TOKEN] (state, token) {
    state.token = token
  }
}

const actions = {
  // 保存用户信息到state
  addUser ( {commit}, user ) {
    // 取出token
    const token = user.token
    // 保存token
    commit(RECEIVE_TOKEN, token)
    // 保存token到localStorage中
    localStorage.setItem('token_key', token)
    // 移除信息中的token
    delete user.token
    // 保存用户信息
    commit(RECEIVE_USER, user)
  }
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
