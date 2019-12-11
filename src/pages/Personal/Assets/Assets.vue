<template>
  <div class="right">
    <div class="coupon">
      <p>优惠卷</p>
    </div>
    <div class="exchange">
      <input class="inp" type="text" placeholder="请输入优惠码" />
      <div class="confirm">
        <p>确认兑换</p>
      </div>
    </div>
    <div class="exchange2">
      <a
          href="javascript:;"
          @click="goto('/personal/assets/mayuse')" 
        >
          <p  class="use" :class="{used1:$route.path==='/personal/assets/mayuse'}">可使用</p>
        </a>
      <a
          href="javascript:;"
          @click="goto('/personal/assets/notmay')"
        >
          <p class="use" :class="{used1:$route.path==='/personal/assets/notmay'}">不可使用</p>
        </a>
    </div>
    <router-view />
    <div class="chart">
      <img src="../images/no-coupon.png" alt />
      <p>您还没有任何优惠卷</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Assets",
   methods: {
    goto (path) {
      if (this.$router.path !== path) {
        this.$router.replace(path)
      }
    }
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
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
  ul
    width 173px
    height 236px
    display flex
    flex-direction column
    align-items center
    justify-content space-around
    span
      font-size 20px
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
    a
      .use
        color #000
        width 50px
        height 47px !important
        float left
        margin-right 30px
        text-align center
      .used1
        color #aa836f
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
.footer
  overflow hidden
  height 136px
  .logo
    width 123px
    margin-left 200px
    float left
    margin-top 50px
  .font
    margin-left 150px
    font-size 12px
    float left
    margin-top 35px
    .Public
      img
        width 12px
        height 12px
  .jinx
    width 123px
    margin-left 180px
    float left
    margin-top 40px
</style>
