<template>
  <div class="header">
    <ul class="header-content">
      <li @mouseenter="isShow=!isShow" @mouseleave="isShow=!isShow">
        <div class="user">
          <router-link class="go" to="/user/login">登录</router-link>
          <router-link to="/user/register">注册</router-link>
        </div>
        <ul class="nav-cont" v-show="isShow">
          <li>
            <router-link to="/personal/order">我的订单</router-link>
          </li>
          <li>
            <router-link to="/personal/assets">我的资产</router-link>
          </li>
          <li>
            <router-link to="/personal/collections">我的收藏</router-link>
          </li>
          <li>
            <router-link to="/personal/address">地址管理</router-link>
          </li>
          <li>
            <router-link to="/home" @click="deleteUser">退出登录</router-link>
          </li>
        </ul>
      </li>|
      <li>帮助中心</li>|
      <li>下载APP</li>|
      <li>资质证照 / 协议规则</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Header",
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    deleteUser () {
      
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
  display flex
  flex-flow row-reverse
  background-color #333
  color white
  height 48px
  line-height 48px
  justify-content space-around
  .header-content
    display flex
    width 1080px
    justify-content flex-end
    li
      margin 0 8px
      .user
        text-align center
        width 70px
      .nav-cont
        z-index 100
        position relative
        background-color #fff
        a
          color #000
          &:hover
            color red
</style>
