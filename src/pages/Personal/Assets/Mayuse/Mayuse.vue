<template>
  <div class="app">
    <ul v-if="cdkeyObject">
    <!--1元优惠卷-->
      <li>
        <div class="heade">
          <p class="heade-1">{{cdkeyObject.cdkeyNum}}<span>&nbsp;元</span></p>
          <p class="free">{{cdkeyObject.disCountName}}</p>
          <div class="circular"></div>
          <div class="circular-r"></div>
        </div>
        <div class="top">
          <p>{{cdkeyObject.maxUseTime}}<span></span></p>
          <p>{{cdkeyObject.useScopde}}</p>
        </div>
        <div class="coupon-b"><img src="./images/red-v.png" alt=""></div>
      </li>
    </ul> 
  </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
  name:"Mayuse",
  data () {
    return {
<<<<<<< HEAD
      cdkeyObject:''
    }
  },
  methods: {
  },
  mounted () {
    PubSub.subscribe("cdkeyObject",(msg,data) => {
      console.log("data",data)
      this.cdkeyObject = data
    })
    // console.log("this.cdkeyObject",this.cdkeyObject) 并不能马上更新this.cdkeyObject
=======
      cdkeyObject: {}
    }
  },
  mounted () {
    PubSub.subscribe("cdkeyObject",(msg,data) => {
      this.cdkeyObject = data
    })
>>>>>>> 6255a952fc0b893b135fb1caa986d61af9b17990
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.app
  width 900px
  height 700px
  ul
    width 802px
    height 420px
    margin 0 auto
    justify-content:space-between
    display flex
    flex-wrap:wrap 
    // 1元优优惠卷
    li
      width 396px
      height 200px
      background #cecece
      position relative
      float left
      //margin-right 10px
      .heade
        width 396px
        height 76px
        
        border-bottom 1px dashed #fff
        .heade-1
          font-size 50px
          color #fff
          position absolute
          top 15px
          left 15px
          span
            font-size 15px
            color #fff
            margin 10px 0 15px 
        .free
          font-size 16px
          color #fff
          position absolute
          top 20px
          left 190px
        .circular
          width 10px
          height 10px 
          border-radius 0 100px 100px 0
          background #fff
          position absolute
          top 72px
        .circular-r
          width 10px
          height 10px 
          border-radius 100px 0 0 100px
          background #fff
          position absolute
          top 72px
          right 0px
      .top
        margin-top 10px
        line-height 20px
        font-size 12px
        p
          margin-left 10px
          color #fff
          span
            font-size 12px
            margin-left 30px
            color black
      .coupon-b
        width 396px
        height 22px
        img 
          width 396px
          height 22px
          position absolute
          bottom 0px
          left 0px       
</style>