<template>
  <!--  商品详情头部   -->
  <div class="details-container clearfix">
    <!--    左边大图    -->
    <div class="product-box fl clearfix">
      <div class="max-product fl">
        <img
          src="https://img.youpin.mi-img.com/goods/b26fdd5b0d790a8cedf81dcecd40fb6d.jpg?_s=ks3"
        />
      </div>
      <!-- 左边大图右侧小圆 -->
      <div class="min-product fr">
        <div class="thumb-pic" style="border-color: rgb(132, 95, 63);">
          <img
            src="https://img.youpin.mi-img.com/goods/b26fdd5b0d790a8cedf81dcecd40fb6d.jpg@base@tag=imgScale&amp;h=166&amp;w=166"
          />
        </div>
        <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">
          <img
            src="https://img.youpin.mi-img.com/goods/7cf54836013dea56d93cffd706d51108.jpg@base@tag=imgScale&h=166&w=166"
          />
        </div>
        <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">
          <img
            src="https://img.youpin.mi-img.com/goods/da83d76447583acab424616b89c29ebc.jpg@base@tag=imgScale&h=166&w=166"
          />
        </div>
        <div class="thumb-pic" style="border-color: rgb(236, 236, 236);">
          <img
            src="https://img.youpin.mi-img.com/goods/fc2ef1cc831ac0e9bebab74be234ea20.jpg@base@tag=imgScale&h=166&w=166"
          />
        </div>
      </div>
    </div>
    <!-- 左边右侧小图 -->
    <div class="product-menu fl">
      <div class="name clearfix">
        <div class="good-name fl">米家迷你保温杯</div>
      </div>
      <span class="staticWords">有品居家12.12爆款直降1500元，限时抢购</span>
      <span class="staticWords hyperlinkWords">点击进入家的会场&gt;&gt;</span>
      <span class="text"
        >小巧便携，保温锁冷，<br />
        轻量杯身，多彩四色</span
      >
      <!-- 商品价格 -->
      <div class="card">
        <div class="price-line clearfix">
          <h5 class="price-title fl">售价</h5>
          <div class="price">
            <span class="monet">¥</span>
            <span>49</span>
          </div>
        </div>
        <div class="price-serve"></div>
      </div>
      <!-- 商品类别 -->
      <div class="address-line">
        <h5 class="sku-title">配送区域</h5>
        <div class="address">
          <div>
            <span>北京 北京市 海淀区</span>
            <span>&nbsp;</span>
            <a>修改</a>
          </div>
        </div>
      </div>
      <!-- 颜色规格 -->
      <div style="overflow: hidden; padding: 0px 0px 12px;">
        <div class="size-line clearfix">
          <h5 class="sku-title">颜色</h5>
          <div class="size-container">
            <div class="tag-item-offSaled">
              黑色
            </div>
            <div class="tag-item-offSaled">
              白色
            </div>
            <div class="tag-item-onSaled">
              粉色
            </div>
            <div class="tag-item-onSaled">
              蓝色
            </div>
          </div>
        </div>
        <div class="size-line clearfix">
          <h5 class="sku-title">规格</h5>
          <div class="size-container">
            <div class="tag-item-onSaled">
              350ml
            </div>
          </div>
        </div>
      </div>
      <!-- 数量增减 -->
      <div class="count-line">
        <h5 class="sku-title count-title">数量</h5>
        <div class="count-container">
          <div>
            <div class="minus-btn">
              <i class="el-icon-minus"></i>
            </div>
            <input type="text" value="1" class="count-input" />
            <div class="minus-btn-active">
              <i class="el-icon-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- 购物车按钮  -->
      <div class="btn-shop">
        <div class="btn-shop-container">
          <a class="addshop" href="javascript:;">加入购物车</a>
        </div>
        <div class="btn-service-container">
          <p class="service">
            <i class="el-icon-star-off"></i><br />
            收藏
          </p>
        </div>
        <div class="btn-service-container">
          <p class="service">
            <i class="el-icon-s-check"></i><br />
            客服
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let name = 'ShopHearder'
export default {
  name: name
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
</style>
