// 包含了多个状态数据,直接修改状态数据的方法的对象,间接修改状态数据的方法的对象,状态数据的计算属性的get操作的方法
import { RECEIVE_SHOPS, RECEIVE_DETAILS } from '../mutation-types'
import { reqShops, reqDetails } from '../../api'
const state= {
  // 商品信息
  shops: [],
  // 商品详情
  details: [],
  // 大图
  bgImg: [
    "https://img.youpin.mi-img.com/youpinoper/cbb6d51f7eea487dbf6a9562de130c60.jpg?id=&w=1080&h=450",
    "https://img.youpin.mi-img.com/youpinoper/7b51338a9676bf72daff57f731a868a0.jpg?id=&w=1080&h=450",
    "https://img.youpin.mi-img.com/youpinoper/a9ddbaf9114f03ac7493321a51bd63e7.jpg?id=&w=1080&h=450",
    "https://img.youpin.mi-img.com/youpinoper/b9d0b5044a4846be8718f9e2ca50a403.jpg?id=&w=1080&h=450",
    "https://img.youpin.mi-img.com/youpinoper/07ebd15bd5625c7f9670ae45a78d75d2.jpg?id=&w=1080&h=450"
  ]
}

const mutations = {
  // 保存商品信息
  [RECEIVE_SHOPS] (state, shops) {
    state.shops = shops
  },
  // 保存商品详情
  [RECEIVE_DETAILS] (state, details) {
    state.details = details
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
    console.log(result)
    // 判断是否成功
    if (result.code === 0) {
      const details = result.data
      commit(RECEIVE_DETAILS, details)
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
