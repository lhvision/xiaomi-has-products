<template>
  <div class="search">
      <div class="search-left">
        <img src="../../../common/image/images/logo.d1484e61.png"
             alt=""
             @click="goHome"/>
        <span>限时抢购</span>
      </div>
      <div class="search-right">
        <div class="search-text">
          <i class="el-icon-search"
             @click="handleClick"
             v-show="isShow"></i>
          <span v-show="isShow"
                @click="handleClick">搜一搜</span>
          <input ref="inp"
                 class="input"
                 type="text"
                 v-model.trim="searchText"
                 />
        </div>
        <div>
          <i class="el-icon-shopping-cart-1" @click="goShoppingCart"></i>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Search",
  data () {
    return {
      searchText: "",
      isShow: true
    }
  },
  watch: {
    searchText (newV) {
      if (newV) {
        return this.isShow = false
      }
      this.isShow = true
    }
  },
  methods: {
    handleClick () {
      this.$refs.inp.focus()
    },
    goHome(){
      this.$router.push('/home')
    },
    goShoppingCart(){
      if (this.$router.path !== '/shoppingCart') {
        this.$router.push('/shoppingCart')
      }
      window.history.go()
    }
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.search
    width 100%
    display flex
    justify-content space-between
    height 71px
    padding-top 20px
    box-sizing border-box
    margin-bottom 5px
    line-height 51px
    .search-left
      width 50%
      display flex
      cursor pointer
      img
        width 123px
        height 51px
      span
        display inline-block
        height 51px
        font-size 25px
        margin-left 130px
    .search-right
      display flex
      padding 10px 0
      box-sizing border-box
      line-height 31px
      font-size 18px
      div:last-child
        margin-left 15px
        &:hover
          color red
          cursor pointer
      .search-text
        position relative
        border-bottom 1px solid #aaa
        i
          position absolute
          top 7px
        span
          position absolute
          top 4px
          left 25px
          color #dddddd
        .input
          outline none
          border 0
  
</style>
