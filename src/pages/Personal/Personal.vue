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
<style lang="stylus" rel="stylesheet/stylus">
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
      .right
        height 700px
        background-color white
        width 900px
        float left
        margin-left 10px
        .coupon
          margin-top 15px
          width 810px
          height 60px
          border-bottom 1px dashed #dddddd
          margin-left 50px
          line-height 60px
          overflow hidden
          p
            font-size 20px
            color #aa836f
        .exchange
          margin-top 30px
          .inp
            width 312px
            height 36px
            margin-left 50px
            float left
            border 1px solid black 
          .confirm
            width 110px
            height 36px
            background #aa836f 
            float left
            border-radius 5px
            margin-left 10px
            text-align center
            line-height 36px
            margin-bottom 30px
            p
              font-size 15px
              color #ffffff
          
        .exchange2
          margin-bottom 50px
          width 810px
          height 60px
          margin-left 50px
          line-height 60px
          overflow hidden
          border-top 1px dashed #dddddd
          .use
            width 50px
            height 30px
            float left
            margin-right 30px      
          .used
            width 70px
            height 50px
            float left
            border-bottom 3px solid #aa836f
        .chart
          margin-bottom 80px
          width 810px
          height 300px
          margin-left 50px
          line-height 60px
          align-content center
          overflow hidden
          text-align center
        
          .chart img
            width 200px
            height 200px
  .blank
    width 100%
    height 76px
    background-color #dddddd
</style>
