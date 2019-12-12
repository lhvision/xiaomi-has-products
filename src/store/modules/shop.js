// 包含了多个状态数据,直接修改状态数据的方法的对象,间接修改状态数据的方法的对象,状态数据的计算属性的get操作的方法
import { RECEIVE_SHOPS, RECEIVE_DETAILS , INCREASE_COMMODITY ,DECREASE_COMMODITY } from '../mutation-types'
import { reqShops, reqDetails } from '../../api'
const state= {
  // 商品信息
  shops: [],
  // 商品详情
  details: [],
  // 购物车数据
  shopCommodity: []
}

const mutations = {
  // 保存商品信息
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
  [RECEIVE_DETAILS] (state, details) {
    state.details = details
  },
  // 添加减少商品的操作
  [INCREASE_COMMODITY] (state, commodity) {
    state.commodity = commodity
  },
  [DECREASE_COMMODITY] (state, commodity) {
    state.commodity = commodity
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
  },
  // 获取商品详情
  async getDetails({ commit }) {
    const result = await reqDetails()
    // 判断是否成功
    if (result.code === 0) {
      const details = result.data
      commit(RECEIVE_DETAILS, details)
    }
  },
  // 添加商品操作
  setCommodity ({ commit }, {increase , commodity }) {
    if (increase) {
      commit(INCREASE_COMMODITY,commodity)
    } else {
      commit(DECREASE_COMMODITY,commodity)
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
