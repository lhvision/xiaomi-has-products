<template>
  <div class="main">
    <!--    搜索-->
    <Search/>
    <!--        购物车-->
    <Shopping/>
  </div>
</template>
<script>
// 引入组件
import Search from './Search/Search'
import Shopping from './Shopping/Shopping'
export default {
  name: "app",
  // 注册组件
  components: {
    Search,
    Shopping
  },
}
</script>
<style>
body {
  position: relative;
  z-index: -5;
}
</style>
<style lang="stylus" scoped rel="stylesheet/stylus">
.main
  width 1080px
  margin 0 auto
  position relative
  z-index -1
</style>
