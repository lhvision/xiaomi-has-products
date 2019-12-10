<template>
  <div class="container">
    <div class="m-no-login">
      <router-link class="go" to="/login">登录</router-link>
      <router-link to="/">注册</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Head'
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.container
  width 100%
  height 50px
  background-color #333
  display flex
  justify-content flex-end
  align-items: center
  .m-no-login
    margin-right 50px
    .go
      margin-right 10px
</style>
