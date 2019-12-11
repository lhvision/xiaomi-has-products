<template>
  <div>
    <Header v-show="!$route.meta.isShowFooter"/>
    <router-view />
    <FooterGuide />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import Header from './components/Header/Header.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    FooterGuide,
    Header
  },
  computed: {
    // 测试数据用的vuex成功搭建
    ...mapState({
      shops: state => state.shop.shops,
      details: state => state.shop.details
    })
  },
  mounted () {
    this.$store.dispatch('getShops')
    this.$store.dispatch('getDetails')
    this.$store.dispatch('autoLogin')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus"></style>
