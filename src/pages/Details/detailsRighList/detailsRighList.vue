<template>
  <!--  商品详情右侧列表  -->
  <div class="shop-detailsRight">
    <div class="flagship">
      <div class="icon-container">
        <img
          src="https://img.youpin.mi-img.com/youpinoper/shop_72bacf474dfad998341d995c6fcb9db1.jpg"
          height="100%"
        />
        <div class="title-container">
          <h6 title="小米自营产品">小米自营产品</h6>
          <p>为发烧而生</p>
        </div>
      </div>
    </div>
    <div>
      <h2 class="recommend-title">
        <span class="special-line"></span>相关推荐<span
        class="special-line"
      ></span>
      </h2>
      <div class="best-product">
        <div class="image-container">
          <div
            class="m-product-image-container undefined"
            style="width: 260px; height: 197px;"
            data-src="https://img.youpin.mi-img.com/shopmain/4b76c59cfe6cc97ad1bd5919d1b63b7b.png?w=800&amp;h=800"
          >
            <div
              class="img-container"
              style="padding: 22px 53px; width: 154px; height: 153px;"
            >
              <img
                src="https://img.youpin.mi-img.com/shopmain/4b76c59cfe6cc97ad1bd5919d1b63b7b.png?w=800&amp;h=800"
                data-src="https://img.youpin.mi-img.com/shopmain/4b76c59cfe6cc97ad1bd5919d1b63b7b.png?w=800&amp;h=800"
                alt="NONOO萌趣LINE FRIENDS酷卡保温杯"
                style="height: 154px; width: 154px; margin-top: -0.5px;"
              />
            </div>
          </div>
        </div>
        <p title="LINE FRIENDS联名款 长效保温 316不锈钢">
          LINE FRIENDS联名款 长效保温 316不锈钢
        </p>
        <h5>NONOO萌趣LINE FRIENDS酷卡保温杯</h5>
        <h4><span class="dollar">￥</span><span class="price">179</span></h4>
      </div>
      <div class="best-product">
        <div class="image-container">
          <div
            class="m-product-image-container undefined"
            style="width: 260px; height: 197px;"
            data-src="https://img.youpin.mi-img.com/shopmain/09851fadb554177683e345f21d6d919d.png?w=800&amp;h=800"
          >
            <div
              class="img-container"
              style="padding: 22px 53px; width: 154px; height: 153px;"
            >
              <img
                src="https://img.youpin.mi-img.com/shopmain/09851fadb554177683e345f21d6d919d.png?w=800&amp;h=800"
                data-src="https://img.youpin.mi-img.com/shopmain/09851fadb554177683e345f21d6d919d.png?w=800&amp;h=800"
                alt="NONOO Mr.轻量保温杯"
                style="height: 154px; width: 154px; margin-top: -0.5px;"
              />
            </div>
          </div>
        </div>
        <p title="旋薄杯身 轻量便携 商务男士">旋薄杯身 轻量便携 商务男士</p>
        <h5>NONOO Mr.轻量保温杯</h5>
        <h4><span class="dollar">￥</span><span class="price">149</span></h4>
      </div>
      <div class="best-product">
        <div class="image-container">
          <div
            class="m-product-image-container undefined"
            style="width: 260px; height: 197px;"
            data-src="https://img.youpin.mi-img.com/800_pic/1e0b795e7a8b4bc7a0b29042b26b135f.png"
          >
            <div
              class="img-container"
              style="padding: 22px 53px; width: 154px; height: 153px;"
            >
              <img
                src="https://img.youpin.mi-img.com/800_pic/1e0b795e7a8b4bc7a0b29042b26b135f.png"
                data-src="https://img.youpin.mi-img.com/800_pic/1e0b795e7a8b4bc7a0b29042b26b135f.png"
                alt="Fiu优雅不倒杯"
                style="height: 154px; width: 154px; margin-top: -0.5px;"
              />
            </div>
          </div>
        </div>
        <p title="创新魔力吸盘，告别意外洒水">创新魔力吸盘，告别意外洒水</p>
        <h5>Fiu优雅不倒杯</h5>
        <h4><span class="dollar">￥</span><span class="price">119</span></h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detailsRighList'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*详情页右侧列表*/
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