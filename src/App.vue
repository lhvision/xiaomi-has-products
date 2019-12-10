<template>
  <div>
    <Header />
    <router-view />
    <FooterGuide />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import Header from './components/Header/Header.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    FooterGuide,
    Header
  },
  computed: {
    // 测试数据用的vuex成功搭建
    ...mapState({
      user: state => state.user.user
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
