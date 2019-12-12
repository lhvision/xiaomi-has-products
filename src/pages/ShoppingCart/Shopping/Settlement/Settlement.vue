<template>
  <div class="settlement">
    <div>
      <ul class="settlement-left">
        <li><input type="checkbox"
                 @click="checkList" />全选 </li>
        <li>已选<span>{{checkListCount}}</span>件</li>
      </ul>
      <div class="settlement-right">
        <div>
          合计: <span>¥ {{totalprice}}</span>
        </div>
        <span :class="goSettlement>0">去结算</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Settlement',
  props: {
    totalprice: {
      required: true,
      type: Number,
      default: undefined
    },
  },
  data () {
    return {
      Checklist: false
    }
  },
  computed: {
    ...mapState({
      shoppingCartList: state => state.shoppingCart.shoppingCartList
    }),
    // 已勾选多少项
    checkListCount () {
      let checkList = this.shoppingCartList.filter((item) => {
        return item.status
      })
      return checkList.length
    }
  },
  methods: {
    checkList () {

    }
  },
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.settlement
  height 200px
  width 100%
  border-top 1px solid red
  margin-top 30px
  display flex
  justify-content space-between
  align-items center
  >div
    background-color #dddddd
    height 84px
    width 100%
    display flex
    justify-content space-between
    line-height 84px
    .settlement-left
      font-size 18px
      li
        float left
      li:nth-child
        margin 0 50px
    .settlement-right
      color white
      display flex
      div
        font-size 20px
        float left
        span
          color red
      .goSettlement
        width 130px
        text-align center
        background-color #6ac20b
        margin-left 35px
        cursor pointer
        &:hover
          background-color red
</style>