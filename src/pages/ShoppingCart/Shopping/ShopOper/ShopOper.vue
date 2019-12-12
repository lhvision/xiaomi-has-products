<template>
  <div class="shoplist">
    <ul class="check-title">
      <li><input id="iii"
               type="checkbox">
      </li>
      <li class="check"
          >全选</li>
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
        <span @mouseenter="show" @mouseleave="hide">已免运费</span>
      </li>
      <li v-show="isShow">
        <span>小米自营商品单笔订单支付金额满150元（以实际付款金额为准，代金券等不含在内）起包邮。小米电视、小米体重秤等因商品特殊性不参与满150元包邮，另小米电视系列产品需要单独配送费，请参见具体商品产品详情页说明。</span>
      </li>
    </ul>
    <shopList />
  </div>
</template>

<script>
// 引入组件
import shopList from './ShopList'
export default {
  name: 'ShopOper',
  data () {
    return {
      isShow:false,
    }
  },
  computed:{
  },
  components: {
    shopList
  },
  methods:{
    show(){
      this.isShow = true
    },
    hide(){
      this.isShow = false 
    }
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.shoplist
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
      input
        border-radius 50px
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
    font-size 14px
    border-bottom 1px solid red
    position relative
    li:nth-child(2)
      width 1180px
      margin-left 30px
      cursor pointer
    li:nth-child(3)
      width 76px
      span:last-child
        cursor pointer
    li:last-child
      position absolute
      right 30px
      top 75px
      width 344px
      height 150px
      text-align center
      background-color width 
      line-height 20px
      z-index 10
      border 1px solid red
      display flex
      align-items center
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
</style>