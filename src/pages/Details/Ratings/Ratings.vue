<template>
  <div class="main-body">
    <div style="">
      <div class="comment-no-data" style="margin-top: 20px;">
        <div class="m-exception  m-no-result">
          <div class="e-img"></div>
          <p class="e-info">暂无评论</p>
        </div>
      </div>
      <div style="height: 100px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ratings'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.main-body
  min-height 900px
  .comment-no-data
    position relative
    height 900px
  .m-exception
    text-align center
  .e-info
    margin-top 24px
    color #333
  .m-no-result
    width 774px
    .e-img
      background-image url('https://shop.io.mi-img.com/static/h5/static3/media/no_result.72acf161.png')
      width 153px
      height 132px
      background-repeat no-repeat
      background-origin center center
      background-size 100%
      margin 0 auto
</style>
