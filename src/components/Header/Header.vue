<template>
  <div class="header" >
    <ul class="header-content">
      <li @mouseenter="blockUser(user.name)" @mouseleave="blockUser(user.name)">
        <div class="user">
          <div v-show="!user.name" class="user_auto">
            <router-link class="go" to="/user/login">登录</router-link>
            <router-link to="/user/register">注册</router-link>
          </div>
          <div v-show="user.name">{{user.name}}</div>
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
            <el-button type="text" @click="deleteUser">退出登录</el-button>
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
// 引入vuex
import { mapState } from 'vuex'
export default {
  name: "Header",
  data () {
    return {
      isShow: false
    }
  },
  // 计算属性
  computed: {
    ...mapState({
      user: state => state.user.user
    })
  },
  // 方法
  methods: {
    // 退出操作 vuex中user中
    deleteUser () {
      this.$confirm('此操作将退出账户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '退出成功!'
        });
        // 退出操作的代码
        this.$store.dispatch('resetLogin')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    },
    // 用户名显示隐藏
    blockUser (user) {
       if (!user) {
        this.isShow = false
       } else {
        this.isShow = !this.isShow
       }
    }
  }
}
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
        width 80px
        .user_auto
          .go
            margin-right 10px
      .nav-cont
        z-index 100
        position relative
        background-color #fff
        transition all 1s linerar 3s
        a
          color #000
          &:hover
            color red
</style>
