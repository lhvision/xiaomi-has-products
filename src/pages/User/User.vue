<template>
 <div class="login_page">
    <section class="form" >
      <img class="logo" src="./images/login.png" />
      <router-view/>
    </section>
  </div>
</template>
<script>
export default {
  name: 'User'
}
</script>
<style scopde lang="stylus" rel="stylusheet/stylus">
.login_page
  width 100%
  height 100%
  background-color #F5F5F5
  display flex
  justify-content center
  flex-wrap wrap
  .form
    width 854px
    height 720px
    background-color #fff
    display flex
    align-items center
    flex-direction column
    .logo
      padding-top 50px
</style>

