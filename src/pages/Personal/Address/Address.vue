<template>
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
</template>
<script>
export default {
  name: "Address"
};
</script>
<style scoped lang="stylus">
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
    width 123px
    margin-left 80px
    float left
    margin-top 40px
</style>
