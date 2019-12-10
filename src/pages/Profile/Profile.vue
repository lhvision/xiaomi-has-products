<template>
  <div class="app">
    <div class="con">
      <div class="header">
        <p>
          首页>个人中心>
          <span>我的资产</span>
        </p>
      </div>
      <div class="content">
        <div class="left">
          <div class="head">
            <img src="./images/no.png" alt />
            <p>2337877581</p>
          </div>
          <ul>
            <li>我的订单</li>
            <li>
              <span>.</span> 我的资产
            </li>
            <li>我的收藏</li>
            <li>地址管理</li>
          </ul>
        </div>
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
            <p class="use">可使用</p>
            <p class="used">不可使用</p>
          </div>
          <div class="chart">
            <img src="./images/no-coupon.png" alt />
            <p>您还没有任何优惠卷</p>
          </div>
        </div>
      </div>
    </div>
    <div class="blank"></div>
    <div class="footer">
      <img class="logo" src="./images/logo.png" alt />
      <div class="font">
        <p>
          ©xiaomiyoupin.com 苏B2-20180351 苏ICP备18025642号-1
          <i class="Public">
            <img src="./images/Police.png" alt />
          </i>苏公网安备 32010502010244号
        </p>
        <p>企业名称：有品信息科技有限公司 关于我们 入驻有品</p>
        <p>小米有品平台运营主体变更公告</p>
        <p>南京市建邺区白龙江东街8号3栋9层</p>
      </div>
      <img class="jinx" src="./images/jing.png" alt />
    </div>
  </div>
</template>
<script>
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
      p
        color black
        margin-left 200px
        span
          color #c0c0c0

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
  .footer
    overflow hidden
    height 136px
    .logo
      width 123px
      margin-left 200px
      float left
      margin-top  50px
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
      margin-top  40px  

</style>
