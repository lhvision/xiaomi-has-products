<template>
  <div class="nav">
    <ul>      
      <li>
        <i class="relation"></i>
        <span>联系客服</span>
        <div></div>
      </li>
      <li>
        <i class="download"></i>
        <span>下载APP</span>
      </li>
      <li>
        <i class="new_person"></i>
        <span>新人有礼</span>
      </li>
      <li>
        <i  class="focus"></i>
        <span>关注微信</span>
      </li>
      <li>
        <i class="goback"></i>
        <span>回到顶部</span>
      </li>
    </ul>
    <ul>

    </ul>
  </div>
</template>
<script>
export default {
  name:'Naver',
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.nav
  position fixed
  top 180px
  right 10px 
  width 80px
  height 363px
  background-color #fff
  z-index 99
  border-radius 1%
  li
    width 80px
    height 70px
    text-align center
    border-bottom 1px solid #e7e7e7
    display flex
    justify-content center
    align-items center
    flex-direction column
    i
      width 30px
      height 30px
      display block
      margin-bottom 5px
    .relation
      background  url(./images/icons.png)  no-repeat 0px -1629px
    .download
      background  url(./images/icons.png)  no-repeat 0px -1254px
    .new_person
      background  url(./images/icons.png)  no-repeat 0px -779px
    .focus
      background  url(./images/icons.png)  no-repeat -5px -2190px
    .goback
      background  url(./images/icons.png)  no-repeat 0px -1288px
</style>
