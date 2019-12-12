<template>
  <div>
    <Header v-show="!$route.meta.isShowFooter"/>
    <router-view />
    <Naver v-show="!$route.meta.isShowFooter"/>
    <FooterGuide />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import Header from './components/Header/Header.vue'
import Naver from './components/Naver/Naver.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    FooterGuide,
    Header,
    Naver
  },
  computed: {
    // 测试数据用的vuex成功搭建
    ...mapState({
      details: state => state.shop.details
    })
  },
  mounted () {
    this.$store.dispatch('getDetails')
    this.$store.dispatch('autoLogin')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
