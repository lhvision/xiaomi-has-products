<template>
  <div class="main">
    <!--    头部-->
    <div class="header">
      <ul class="header-content">
        <li>小米账号...</li>
        |
        <li>帮助中心</li>
        |
        <li>下载APP</li>
        |
        <li>资质证照 / 协议规则</li>
      </ul>
    </div>
    <!--    搜索-->
    <div class="search">
      <div class="search-left">
        <span>限时抢购</span>
      </div>
      <div class="search-right">
        <div class="search-text">
          <i class="el-icon-search"
             @click="handleClick"
             v-show="isShow"></i>
          <span v-show="isShow"
                @click="handleClick">搜一搜</span>
          <input ref="inp"
                 class="input"
                 type="text"
                 v-model.trim="searchText">
        </div>
        <div>
          <i class="el-icon-shopping-cart-1"></i>
        </div>
      </div>
    </div>
    <!--        购物车-->
    <div class="shopping">
      <div class="shopping-title">
        <a href="">首页</a>
        >
        <a href="">购物车</a>
      </div>
      <ul class="check-title">
        <li><input type="checkbox"></li>
        <li class="check">全选</li>
        <li class="shop-info">商品信息</li>
        <li class="shop-price">单价</li>
        <li class="shop-count">数量</li>
        <li class="shop-money">金额</li>
        <li class="shop-cop">操作</li>
      </ul>
      <ul class="selected">
        <li><input type="checkbox" /></li>
        <li><span>有品精选</span></li>
        <li>
          <span class="exclamatory"></span>
          <span>已免运费</span>
        </li>
      </ul>
      <div class="shop-list">
        shopList
      </div>
      <div class="discount">
        <div class="triangle"></div>
        <div class="discount-content">
          <div>
            <span>满赠 </span>
            <span> 满599元赠指定加湿器 </span>
            <span> 凑单></span>
          </div>
        </div>
      </div>
      <!--                结算-->
      <div class="settlement">
        <div>
          <ul class="settlement-left">
            <li><input type="checkbox" /></li>
            <li>全选</li>
            <li>已选<span>1</span>件</li>
          </ul>
          <div class="settlement-right">
            <div>
              合计:$<span>99.00</span>
            </div>
            <span>去结算</span>
          </div>
        </div>
      </div>
    </div>
    <!--            底部-->
    <div class="footer">
      <div>
        <p>©xiaomiyoupin.com 苏B2-20180351 苏ICP备18025642号-1 logo苏公网安备 32010502010244号</p>
        <p>企业名称：有品信息科技有限公司 关于我们 入驻有品</p>
        <p>小米有品平台运营主体变更公告</p>
        <p>南京市建邺区白龙江东街8号3栋9层</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShoppingCart',
   data () {
    return {
      searchText: "",
      isShow: true
    }
  },
  watch: {
    searchText (newV) {
      if (newV) {
        return this.isShow = false
      }
      this.isShow = true
    }
  },
  methods: {
    handleClick () {
      this.$refs.inp.focus()
    }
  }
}
</script>
<style>
body {
  position: relative;
  z-index: -5;
}
</style>
<style lang="stylus" rel="stylesheet/stylus">
.main
  &::before
    content ''
    width 100vw
    height 48px
    background-color black
    position absolute
    z-index -2
    position relative
    z-index -1
    margin 0 auto
    width 1080px
  .header
      display flex
      flex-flow row-reverse
      background-color transparent
      color white
      height 48px
      line-height 48px
    .header-content
        display flex
      li
          margin 0 8px
  .search
      width 100%
      display flex
      justify-content space-between
      height 71px
      padding-top 20px
      box-sizing border-box
      margin-bottom 5px
      line-height 51px
      .search-left
        width 50%
        display flex
        img
          width 123px
          height 51px
        span
          display inline-block
          height 51px
          font-size 25px
          margin-left 130px
      .search-right
        display flex
        padding 10px 0
        box-sizing border-box
        line-height 31px
        font-size 18px
        div:last-child
          margin-left 15px
          &:hover
            color red
            cursor pointer
        .search-text
          position relative
          border-bottom 1px solid #aaa
          i
            position absolute
            top 7px
          span
            position absolute
            top 4px
            left 25px
            color #dddddd
          .input
            outline none
            border 0
    .shopping
      &::before
        content ''
        position absolute
        top 0
        left -1000px
        width 500vw
        height 1px
        z-index 10
        background-color #eee
        position relative
        .shopping-title
          height 77px
          line-height 77px
        .check-title
          font-size 14px
          background-color #dddddd
          display flex
          justify-content space-between
          height 40px
          line-height 40px
          li
            text-align center
          li:first-child
            width 18px
            margin 0 20px 0 7px
          .check
            width 130px
            text-align left
          .shop-info
            width 325px
          .shop-price
            width 205px
          .shop-count
            width 210px
          .shop-money
            width 130px
          .shop-cop
            width 30px
        .selected
          display flex
          height 85px
          line-height 85px
          background-color #999999
          font-size 14px
          li:nth-child(2)
            width 1180px
            margin-left 30px
          li:last-child
            width 76px
            margin-right 8px
            .exclamatory
              width 17px
              height 17p
        .shop-list
          padding-bottom 100px
        .discount
          position relative
          margin 30px 0 0 45px
          .triangle
            position absolute
            top -20px
            left 35px
            display block
            border-width 10px
            border-style dashed dashed solid
          .discount-content
            background-color #999999
            padding 30px 0 0 30px
            height 54px
            margin-bottom 30px
            span:first-child
              background-color red
              display inline-block
              width 34px
              height 20px
              text-align center
              font-size 12px
              line-height 20px
              color white
            span:last-child
              color #6ac20b
    .settlement
      height 200px
      border-top 1px solid red
      margin-top 30px
      line-height 200px
      div
        background-color #dddddd
        height 84px
        display flex
        justify-content space-between
        line-height 84px
        .settlement-left
          font-size 20px
          display flex
          width 168px
        .settlement-right
          width 460px
          color white
          display flex
          span:nth-child
            background-color #6ac20b
</style>
