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
          <div class="collect">
            <p>我的收藏</p>
          </div>
          <div class="chart">
            <div class="plus">
              <p class="plus-j">+</p>
              <p>新添加地址</p>
            </div>
            
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
        .collect
          height 40px
          border-bottom 1px solid #dddddd
          width 830px
          margin-left 50px 
          line-height 40px
          margin-top 20px
          color #aa836f
          font-size 20px
        .chart
          width 200px
          height 200px
          border 1px solid #dddddd
          margin-top 10px
          display flex
          flex-direction column
          align-items center
          justify-content space-around
          &:hover
            border 1px solid #aa836f
            color #aa836f
          .plus
            width 80px
            height 90px
            line-height 30px
            color #dddddd
            &:hover
              color #aa836f
            .plus-j
              font-size 50px 
  .blank
    width 100%
    height 76px
    background-color #dddddd
  .footer
    overflow hidden
    height 136px
    margin-left 198px
    .logo
      width 123px
      margin-right 305px
      float left
      margin-top  50px
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
      width 123px
      margin-left 80px
      float left
      margin-top  40px  

</style>
