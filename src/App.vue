<template>
  <div>
    <Header v-show="!$route.meta.isShowFooter"/>
    <router-view />
    <Naver/>
    <FooterGuide />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import Header from './components/Header/Header.vue'
import Naver from './components/Naver/Naver.vue'
import { mapState, mapGetters } from 'vuex'
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
      shops: state => state.shop.shops,
      sss: state => state.shop.sss
    })
  },
  mounted () {
    this.$store.dispatch('getShops')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
