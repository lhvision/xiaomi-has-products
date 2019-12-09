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
export default {
  name: 'App',
  components: {
    FooterGuide,
    Head
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
