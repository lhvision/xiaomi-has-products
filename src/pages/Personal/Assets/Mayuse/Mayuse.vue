<template>
  <div>
    可使用
  </div>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
  name:"Mayuse",
  data () {
    return {
      cdkeyObject: {}
    }
  },
  mounted () {
    PubSub.subscribe("cdkeyObject",(msg,data) => {
      this.cdkeyObject = data
    })
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>