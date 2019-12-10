<template>
  <div>
    <Head />
    <router-view />
    <FooterGuide />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import Head from './components/Head/Head.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    FooterGuide,
    Head
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
