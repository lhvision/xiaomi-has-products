<template>
  <div class="right">
    <div class="collect">
      <p>我的收藏</p>
    </div>
    <div class="chart">
      <img src="../images/no-collection.png" alt />
      <p>没有相应订单数据</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Collections"
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
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
    margin-top 180px
    width 810px
    height 300px
    margin-left 50px
    line-height 60px
    align-content center
    overflow hidden
    text-align center
    img
      width 200px
      height 200px
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
