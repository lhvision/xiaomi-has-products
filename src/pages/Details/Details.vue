<template>
  <div class="detail">
    <div class="warp">
      <!--  商品详情头部组件   -->
      <ShopHearder />
      <!-- 商品详情 -->
      <Ratings />
    </div>
  </div>
</template>
<script>
import ShopHearder from '../../components/ShopHearder/ShopHearder.vue'
import Ratings from '../../pages/Details/Ratings/Ratings.vue'
export default {
  name: 'Details',
  // 注册组件 , 要用什么组件就需要注册
  components: {
    ShopHearder,
    Ratings
  }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
.detail
  min-height 285px
  padding-top 60px
  padding-bottom 100px
  boder-top 1px solid #e7e7e7
  .warp
    width 1080px
    margin 0 auto
    /* 商品详情中头部菜单 */
    .details-container
      height 495px
      .product-box
        margin-right 46px
        width 465px
        height 374px
        .max-product
          width 372px
          height 372px
          background-color #f4f4f4
          border 1px solid #ececec
          position relative
          img
            width 100%
            height 100%
        .min-product
          width 85px
          height 374px
          .thumb-pic
            width 83px
            height 83px
            margin-bottom 11px
            border-width 1px
            border-style solid
            background-color #f4f4f4
            transition border 0.5s cubic-bezier(0, 1, 0.5, 1)
            img
              width 100%
              height 100%
    .product-menu
      width 561px
      height 495px
      overflow hidden
      /* 商品详情介绍页 */
      .name
        margin-bottom 4px
        .good-name
          vertical-align middle
          line-height 26px
          font-size 20px
          color #333
          float left
      .staticWords
        color #c00000
        margin-right 3px
        font-size 12px
      .text
        font-size 12px
        color #999
      .hyperlinkWords
        cursor pointer
        text-decoration underline
      // 售价
      .card
        width 561px
        margin-top 12px
        padding-bottom 28px
        height 37px
        overflow hidden
        vertical-align bottom
        line-height 40px
        font-size 30px
        .price-line
          margin-top 12px
          height 37px
          overflow hidden
          line-height 40px
          h5
            font-size 12px
            margin-right 10px
            width 48px
            margin-left 8px
          .price
            width 483px
            color #c00000
            .monet
              font-size 14px
              vertical-align 0
              margin-right 5px
        .price-serve
          margin-bottom 12px
          line-height 24px
          font-size 24px
      // 开始配送
      .address-line
        overflow hidden
        padding 0 10px 26px
        font-size 12px
        .sku-title
          line-height 14px
          float left
          font-weight 400
          margin-right 10px
      .container
        font-size 14px
        line-height 14px
        font-weight 400
        .locations
          margin 0 27px 27px 10px
          color #575757
          .title
            float left
            font-size 12px
            font-weight 400
            line-height 32px
      .size-line
        margin-bottom 14px
        padding 0 10px
        .sku-title
          margin-right 10px
          width 48px
        .size-container
        .sku-title
          float left
          font-size 12px
          font-weight 400
          line-height 32px
          vertical-align bottom
        .size-container
          margin-bottom -14px
          float left
          width 473px
          overflow hidden
          .tag-item-offSaled
            border 1px dashed #d6d6d6
            float left
            margin-right 14px
            -webkit-box-sizing border-box
            box-sizing border-box
            padding 4px 20px
            color #333
            line-height 22px
            font-size 14px
            margin-bottom 14px
            transition all 0.5s cubic-bezier(0, 1, 0.5, 1)
            text-align left
            user-select none
          .tag-item-onSaled
            border 1px solid #d6d6d6
            float left
            margin-right 14px
            -webkit-box-sizing border-box
            box-sizing border-box
            padding 4px 20px
            color #333
            line-height 22px
            font-size 14px
            margin-bottom 14px
            transition all 0.5s cubic-bezier(0, 1, 0.5, 1)
            text-align left
            user-select none
      /* 商品数量添加 */
      .count-line
        overflow hidden
        margin-bottom 40px
        .count-title
          float left
          width 48px
          line-height 32px
          margin-left 10px
          margin-right 10px
          font-size 12px
          font-weight 400
        .add-btn, .minus-btn
          float left
          width 34px
          height 30px
          border 1px solid #d6d6d6
          line-height 28px
          text-align center
          color #d6d6d6
        .minus-btn-active
          float left
          width 34px
          height 30px
          border 1px solid #d6d6d6
          line-height 28px
          text-align center
        .count-input
          float left
          width 60px
          height 30px
          padding 0
          border 1px solid #d6d6d6
          border-left-width 0
          border-right-width 0
          text-align center
          font-weight 700
          font-size 14px
          color #333
          outline none
      /* 购物车样式 */
      .btn-shop
        display flex
        .btn-shop-container
          background #845f3f
          .addshop
            color #fff
            background-color #845f3f
            border-color #845f3f
            min-width 167px
            height 52px
            line-height 50px
            font-size 20px
            display inline-block
            border-radius 2px
            text-align center
            box-sizing border-box
            padding 0 6px
            transition all 0.5s cubic-bezier(0, 1, 0.5, 1)
          .addshop:hover
            background-color #d1bfa6
        .btn-service-container
          background #fff
          .service
            float left
            width 50px
            height 50px
            margin-left 18px
            border 1px solid #ccc
            border-radius 2px
            color #999
            text-align center
            font-size 12px
            transition all 0.5s cubic-bezier(0, 1, 0.5, 1)
            i
              margin-top 10px
              font-size 20px
          .service:hover
            background-color #845f3f
            color #fff
  /*  商品详情 */
  .shop-details
    .shop-detailsTab
      width 774px
      height 42px
    /* 详情介绍左侧区 */
    .shop-detailsLeft
      width 774px
      float left;
      /* 详情介绍选项卡 */
      .shop-detailsTab
        width 774px
        background-color #e7e7e7
        .info-nav
          height 13px
          padding 16px 0 13px
          .info-nav-item
            float left
            height 13px
            border-right-width 1px
            border-right-style solid
            line-height 13px
            font-size 13px
            text-align center
          .info-nav-item:hover
            color #845f3f
            cursor pointer
    .shop-detailsRight
      width 262px
      height 1000px
      float right
      .flagship
        padding-bottom 13px;
        margin-bottom 17px;
        border-bottom 1px solid #e7e7e7
        .icon-container
          img
            width 30px
            height 30px
            float left
            margin-right 10px
        .icon-container
          line-height 30px
          font-size 14px
          color #333
          h6
            overflow hidden
            line-height 14px
            font-weight 400
            text-overflow ellipsis
            white-space nowrap
            font-size 14px
          p
            margin-top 4px
            overflow hidden
            line-height 12px
            font-size 12px
            -o-text-overflow ellipsis
            text-overflow ellipsis
            white-space nowrap
      .recommend-title
        text-align center
        color #333
        font-size 16px
        font-weight 400
        height 42px
        line-height 42px
        margin-bottom 17px
        .special-line
          margin 0 12px
          display inline-block
          width 16px
          border-top 1px solid #333
          height 21px
          vertical-align bottom
        .special-line
          margin 0 12px
          display inline-block
          width 16px
          border-top 1px solid #333
          height 21px
          vertical-align bottom
      .best-product
        border 1px solid #f4f4f4
        margin-bottom 5px
        transition all 0.4s
        overflow hidden

        .image-container
          width 260px
          height 197px
          text-align center
          background-color #fff
        p
          margin-bottom 10px
          width 230px
          height 38px
          line-height 38px
          color #845f3f
        h4, h5
          height 24px
          line-height 20px
          color #c33300
          text-align center
          background-color #f4f4f4
        h5
          font-weight 400
          height 30px
          line-height 34px
          color #333
        h5, p
          overflow hidden
          padding 0 15px
          -o-text-overflow ellipsis
          text-overflow ellipsis
          white-space nowrap
          font-size 16px
          text-align center
      .best-product:hover
        cursor pointer
        box-shadow 0 2px 12px rgba(0, 0, 0, 0.1)
        transform translate3d(0, -2px, 0)
</style>
