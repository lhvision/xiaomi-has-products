// 包含了多个状态数据,直接修改状态数据的方法的对象,间接修改状态数据的方法的对象,状态数据的计算属性的get操作的方法
import { RECEIVE_SHOPS, RECEIVE_SSS } from '../mutation-types'
import { reqShops } from '../../api'
const state= {
  // 商品信息
  shops: [],
  sss: { x:1 }
}

const mutations = {
  // 保存商品信息
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
  [RECEIVE_SSS] (state, sss) {
    state.sss = sss
  }
}

const actions = {
  // 获取商品信息
  async getShops({ commit }) {
    const result = await reqShops()
    // 判断是否成功
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
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
