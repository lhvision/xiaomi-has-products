<template>
  <div>
    <div class="footer">
      <img class="logo" src="./images/logo.png" alt />
      <div class="font">
        <p>
          ©xiaomiyoupin.com 苏B2-20180351 苏ICP备18025642号-1
          <i class="Public">
            <img src="./images/Police.png" alt /> </i
          >苏公网安备 32010502010244号
        </p>
        <p>企业名称：有品信息科技有限公司 关于我们 入驻有品</p>
        <p>小米有品平台运营主体变更公告</p>
        <p>南京市建邺区白龙江东街8号3栋9层</p>
      </div>
      <img class="jinx" src="./images/jing.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterGuide"
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer
  overflow hidden
  height 136px
  margin-left 198px
  border-top 1px solid #ddd
  .logo
    width 123px
    margin-right 280px
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
