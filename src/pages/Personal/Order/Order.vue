<template>
  <div class="right">
    <div class="nav">
      <div class="nav-left">
        <p class="goods">待收货(0)</p>
        <p>待付款(0)</p>
        <p>己收货</p>
        <p>退款订单</p>
        <p>全部订单</p>
      </div>
      <div class="navbar-right">
        <p>
          <i><img src="../images/cl-icon.svg" alt=""/></i>回收站
        </p>
      </div>
    </div>
    <div class="chart">
      <img src="../images/no-order.png" />
      <p>没有相应订单数据</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Order"
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.right
  height 700px
  background-color white
  width 900px
  float left
  margin-left 10px
  .nav
    height 40px
    border-bottom 1px solid #dddddd
    width 850px
    margin-left 40px
    line-height 40px
    p
      float left
      font-size 16px
      margin-right 20px
    .goods
      color #aa836f
      width 72px
      height 40px
      border-bottom 1px solid #aa836f
    .navbar-right
      float right
      width 100px
      height 40px
      line-height 40px
      margin-right -200px
      p
        font-size 16px
        img
          width 20px
          height 20px
          margin-bottom -4px
          margin-right 5px
  .chart
    width 810px
    height 300px
    line-height 60px
    align-content center
    overflow hidden
    text-align center
    img
      width 200px
      height 200px
.blank
  width 100%
  height 76px
  background-color #dddddd
.footer
  overflow hidden
  height 136px
  margin-left 170px
  .logo
    width 123px
    margin-right 250px
    float left
    margin-top 50px
  .font
    font-size 12px
    float left
    margin-top 50px
    line-height 22px
    .Public
      img
        width 12px
        height 12px
  .jinx
    float left
    margin-top 40px
</style>
