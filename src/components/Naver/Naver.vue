<template>
  <div class="nav">
    <ul>
      <li @mouseenter="isHover1 = true" @mouseleave="isHover1 = false">
        <i :class="isHover1 ? 'relation_action' : 'relation'"></i>
        <span v-if="isHover1" class="font_action">联系客服</span>
        <span v-else>联系客服</span>
        <div v-if="isHover1" class="nav_container" style="width:200px">
          <p class="triangle"></p>
          <div>
            小米有品平台问题，建议反馈，
            商户和物流问题投诉等请拨打
            小米有品客服热线
            <p class="phone">400-100-1199</p>
            <p class="workTime">(周一至周日 8：00-18：00)</p>
          </div>
          <div>
            小米/米家自营品牌，手机电视智能
            硬件商品或订单发货/退款售后问题
            请拨打小米自营客服热线
            <p class="phone">400-100-5678</p>
            <p class="workTime">(周一至周日 8：00-18：00)</p>
          </div>
        </div>
      </li>
      <li @mouseenter="isHover2 = true" @mouseleave="isHover2 = false">
        <i :class="isHover2 ? 'download_action' : 'download'"></i>
        <span v-if="isHover2" class="font_action">下载APP</span>
        <span v-else>下载APP</span>
        <div v-if="isHover2" class="nav_container">
          <p class="triangle"></p>
          <img src="./images/ewm.png" width="200" >
          <p>天下第一秀,陈秀儿</p>
        </div>
      </li>
      <li @mouseenter="isHover3 = true" @mouseleave="isHover3 = false">
        <i :class="isHover3 ? 'new_person_action' : 'new_person'"></i>
        <span v-if="isHover3" class="font_action">新人有礼</span>
        <span v-else>新人有礼</span>
         <div v-if="isHover3" class="nav_container">
          <p class="triangle"></p>
          <img src="./images/gift.png" width="200"/>
        </div>
      </li>
      <li @mouseenter="isHover4 = true" @mouseleave="isHover4 = false">
        <i :class="isHover4 ? 'focus_action' : 'focus'"></i>
        <span v-if="isHover4" class="font_action">关注微信</span>
        <span v-else>关注微信</span>
         <div v-if="isHover4" class="nav_container">
          <p class="triangle"></p>
          <img src="./images/ewm.png" width="200">
        </div>
      </li>
      <li @mouseenter="isHover5 = true" @mouseleave="isHover5 = false" style="border:0px">
        <i :class="isHover5 ? 'goback_action' : 'goback'"></i>
        <span v-if="!isHover5">回到顶部</span>
        <a href="#toAddress">
          <span v-if="isHover5" class="font_action">回到顶部</span>
        </a>
      </li>
    </ul>
    <!-- <ul>
      <li 
        v-for="( item,index ) in hoverArray" 
        :key="index" 
        @mouseenter="currentIndex(index)" 
        @mouseleave="currentIndex(index)"
      ></li>
    </ul> -->
  </div>
</template>
<script>
export default {
  name: "Naver",
  data() {
    return {
      isHover1: false,
      isHover2: false,
      isHover3: false,
      isHover4: false,
      isHover5: false
      // hoverArrayStyle: []
    };
  },
  methods: {
    // currentIndex (index) {
    //   if(this.hoverArrayStyle[index]){
    //     this.hoverArraStyle[index] = !this.hoverArraStyle[index]
    //   } else {
    //     this.hoverArraStyle[index] = true
    //   }
    // }
  }
};
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
    position relative
    i
      width 30px
      height 30px
      display block
      margin-bottom 5px
    .relation
      background url('./images/icons.png') no-repeat 0px -1629px
    .relation_action
      background url('./images/icons.png') no-repeat 0px -1594px
    .download
      background url('./images/icons.png') no-repeat 0px -1254px
    .download_action
      background url('./images/icons.png') no-repeat 0px -1220px
    .new_person
      background url('./images/icons.png') no-repeat 0px -779px
    .new_person_action
      background url('./images/icons.png') no-repeat 0px -744px
    .focus
      background url('./images/icons.png') no-repeat 0px -980px
    .focus_action
      background url('./images/icons.png') no-repeat -5px -2190px
    .goback
      background url('./images/icons.png') no-repeat 0px -1288px
    .goback_action
      background url('./images/icons.png') no-repeat 0px -1322px
    .font_action
      color #845F3F
    .nav_container
      position absolute
      top 0px
      left -218px
      background-color #fff
      padding 5px
      box-shadow inset 1px 1px 1px 1px #e7e7e7
      .triangle
        width 0px
        height 0px
        border 7px solid transparent
        border-left-color #fff
        position absolute
        right -13px
        top 20px
      div
        margin 20px 0px
        .phone
          font-size 28px
          margin 15px 0px 3px 0px
          color #845F3F
</style>
