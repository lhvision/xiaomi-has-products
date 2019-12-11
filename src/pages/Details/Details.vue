<template>
  <div class="detail">
    <div class="warp">
      <!--  商品详情头部组件   -->
      <ShopHearder />
      <!-- 商品详情右侧列表 -->
      <detailsRighList />
      <div class="shop-detailsTab">
        <!-- 选项卡ul -->
        <ul class="info-nav clearfix">
          <li
            style="border-right-color: rgb(204, 204, 204); width: 128px;"
            class="info-nav-item"
          >
            <router-link to="/details/info">商品详情</router-link>
          </li>
          <li
            style="border-right-color: rgb(204, 204, 204); width: 128px;"
            class="info-nav-item"
          >
            <router-link to="/details/ratings">评价</router-link>
          </li>
          <li
            style="border-right-color: transparent; width: 128px;"
            class="info-nav-item"
          >
            <router-link to="/details/parameter">商品参数</router-link>
          </li>
        </ul>
        <div class="nav-arr-container">
          <div class="nav-arr" style="left: 0px; width: 128px;"></div>
        </div>
      </div>

      <!-- 商品详情 -->
      <router-view />
    </div>
  </div>
</template>
<script>
// 引入组件
import ShopHearder from '../../components/ShopHearder/ShopHearder.vue'
import detailsRighList from '../../pages/Details/detailsRighList/detailsRighList.vue'

export default {
  name: 'Details',
  // 注册组件 , 要用什么组件就需要注册
  components: {
    ShopHearder,
    detailsRighList
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
          text-align center
          a
            font-size 13px
            color #333
          a:hover
            color #845f3f
            cursor pointer
</style>