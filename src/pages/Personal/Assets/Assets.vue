<template>
  <div class="right">
    <div class="coupon">
      <p>优惠卷</p>
    </div>
    <div class="exchange">
<<<<<<< HEAD
      <input class="inp" type="text" placeholder="请输入优惠码" ref="ipt" />
=======
      <input class="inp" type="text" placeholder="请输入优惠码" ref="cdkeyInput" />
>>>>>>> 6255a952fc0b893b135fb1caa986d61af9b17990
      <div class="confirm">
        <p @click="doCdkey">确认兑换</p>
      </div>
    </div>
    <div class="exchange2">
      <a href="javascript:;" @click="goto('/personal/assets/mayuse')">
        <p
          class="use"
          :class="{ used1: $route.path === '/personal/assets/mayuse' }"
        >
          可使用
        </p>
      </a>
      <a href="javascript:;" @click="goto('/personal/assets/notmay')">
        <p
          class="use"
          :class="{ used1: $route.path === '/personal/assets/notmay' }"
        >
          不可使用
        </p>
      </a>
    </div>
    <router-view />
  </div>
</template>
<script>
<<<<<<< HEAD
import { mapState } from "vuex";
// 使用pubsub插件
import PubSub from "pubsub-js";
export default {
  name: "Assets",
  data() {
    return {
      cdkeyNum: 0,
      cdkeyObject: {}
    };
  },
  methods: {
    // 切换卷码子组件
    goto(path) {
=======
import { mapState } from 'vuex'
// 使用pubsub插件
import PubSub from 'pubsub-js'
export default {
  name: "Assets",
  data () {
    return {
      cdkeyNum: this.$ref.cdkeyInput.value,
      cdkeyObject: {}
    }
  },
   methods: {
     // 切换卷码子组件
    goto (path) {
>>>>>>> 6255a952fc0b893b135fb1caa986d61af9b17990
      if (this.$router.path !== path) {
        this.$router.replace(path)
      }
    },
<<<<<<< HEAD
    doCdkey() {
      this.cdkeyNum = this.$refs.ipt.value - 0;
      const cdkey = this.officialCdkey
      /*  cdkey.forEach(item => {
          console.log(item.cdkeyNum === this.cdkeyNum)
          // 数据类型有问题
         if(item.cdkeyNum === this.cdkeyNum) {
           this.cdkeyObject = item
           PubSub.publish("cdkeyObject",item)
           
         }
          return false        
      }) */
      for (let i = 0; i<cdkey.length; i++) {
        // 数据类型有问题
        if (cdkey[i].cdkeyNum === this.cdkeyNum) {
          this.cdkeyObject = cdkey[i]
          this.$message({
            message: "兑换成功",
            type: "success"
          })
          PubSub.publish("cdkeyObject",this.cdkeyObject)
          return false
        }
      }
      this.$message({
          message: "不合法的卷码",
          type: "warning"
      })
=======
    doCdkey () {
      const cdkey = this.officialCdkey.cdkey   
      cdkey.forEach(item => {
         if(item.cdkeyNum === this.cdkeyNum) {
           this.cdkeyObject = item
           PubSub.public("cdkeyObject",item)
         }
      })
     
>>>>>>> 6255a952fc0b893b135fb1caa986d61af9b17990
    }
  },
  computed: {
    ...mapState({
      user: state => state.user.user,
      // 获取所有的优惠卷的信息,因为优惠卷码是唯一的,故通过对比优惠价码,来确定优惠卷
      officialCdkey: state => state.official.cdkey
    })
  }
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
  .coupon
    margin-top 15px
    width 810px
    height 60px
    border-bottom 1px dashed #dddddd
    margin-left 50px
    line-height 60px
    overflow hidden
    p
      font-size 20px
      color #aa836f
  .exchange
    margin-top 30px
    .inp
      width 312px
      height 36px
      margin-left 50px
      float left
      border 1px solid black
    .confirm
      width 110px
      height 36px
      background #aa836f
      float left
      border-radius 5px
      margin-left 10px
      text-align center
      line-height 36px
      margin-bottom 30px
      p
        font-size 15px
        color #ffffff
  .exchange2
    margin-bottom 50px
    width 810px
    height 60px
    margin-left 50px
    line-height 60px
    overflow hidden
    border-top 1px dashed #dddddd
    a
      .use
        color #000
        width 50px
        height 47px !important
        float left
        margin-right 30px
        text-align center
      .used1
        color #aa836f
        border-bottom 3px solid #aa836f
  .chart
    margin-bottom 80px
    width 810px
    height 300px
    margin-left 50px
    line-height 60px
    align-content center
    overflow hidden
    text-align center
    .chart img
      width 200px
      height 200px
.blank
  width 100%
  height 76px
  background-color #dddddd
.footer
  overflow hidden
  height 136px
  .logo
    width 123px
    margin-left 200px
    float left
    margin-top 50px
  .font
    margin-left 150px
    font-size 12px
    float left
    margin-top 35px
    .Public
      img
        width 12px
        height 12px
  .jinx
    width 123px
    margin-left 180px
    float left
    margin-top 40px
</style>
