<template>
  <div class="app">
    <div class="con">
      <div class="header">
        <p class="p2">
          <router-link to="/home" >首页</router-link>  
          >
          <router-link to="/personal">个人中心</router-link>
          >
          <router-link to="/personal/assets" style="color:#fff">{{$route.name}}</router-link>
        </p>
      </div>
      <div class="content">
        <div class="left">
          <div class="head">
            <img src="./images/no.png" alt />
            <p>{{user.name}}</p>
          </div>
          <div class="router_link">
            <router-link to="/personal/order" class="isShow:hovel" @mouseenter="isShow=ture" @mouseleave="isShow=false">我的订单</router-link>
            <router-link to="/personal/assets" class="hovel">我的资产</router-link>
            <router-link to="/personal/collections" class="hovel">我的收藏</router-link>
            <router-link to="/personal/address" :index=3>地址管理</router-link>
          </div>
        </div>
        <router-view />
      </div>
    </div>
    <div class="blank"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'Personal',
  computed:{
    ...mapState({
        user: state => state.user.user
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scopde>
.app
  width 100%
  .con
    background #dddddd
    margin 0 auto
    .header 
      height 76px
      background-color #dddddd
      font-size 16px
      line-height 76px
      .p2
        margin-left 120px
        a
          color #000
          font-size 13px
    .content 
      width 1183px
      margin 0 auto
      overflow hidden
      .left
        margin-left 30px
        width 173px
        background-color white
        height 700px
        float left
        .head
          width 173px
          height 173px
          border-bottom 1px solid #dddddd
          display flex
          flex-direction column
          align-items center
          justify-content center
          img
            width 80px
            height 80px
          p
            font-size 16px
            margin-top 8px        
        .router_link
          width 173px
          height 236px
          display flex
          flex-direction column
          align-items center
          justify-content space-around
          a
            color #000
            &:hover
              color red
  .blank
    width 100%
    height 76px
    background-color #dddddd
</style>
