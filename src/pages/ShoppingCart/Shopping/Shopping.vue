<template>
  <div class="shopping">
    <div class="shopping-title">
      <router-link to="/home">首页</router-link>
      >
      <router-link to="/shoppingCart">购物车</router-link>
    </div>
    <ShopOper />
    <div class="discount" :class="{disnone:totalprice>100}">
      <div class="triangle"></div>
      <div class="discount-content">
        <div>
          <span @click="discountMoney">满赠 </span>
          <span> 满599元赠指定加湿器 </span>
          <span> 凑单></span>
        </div>
      </div>
    </div>
    <!--                结算-->
    <Settlement :totalprice="totalprice"/>
    <router-view/>
  </div>
</template>

<script>
// 引入组件
import Settlement from './Settlement/Settlement'
import ShopOper from './ShopOper/ShopOper'
import { mapState } from 'vuex'
export default {
  name: 'Shopping',
  components: {
    Settlement,
    ShopOper,
  },
  computed:{
    ...mapState({
      shoppingCartList : state => state.shoppingCart.shoppingCartList
    }),
    // eslint-disable-next-line vue/return-in-computed-property
    totalprice(){
      // return this.shoppingCartList.reduce((pre,item)=>pre+item.count*item.price ,0)
      return this.shoppingCartList.filter(item=>{
        return item.status
      }).reduce((pre,cur)=>pre+cur.count*cur.price ,0)
    }
  },
  methods:{
    discountMoney(){
    }
  },
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.shopping
  &::before
    content ''
    position absolute
    top 0
    left -1000px
    width 500vw
    height 1px
    z-index 10
    background-color #eee
    position relative
  .shopping-title
    height 77px
    line-height 77px
  .discount
    height 50px
    background-color red
    margin 30px 0 0 30px
    line-height 50px
    &:disnone
      display none 
</style>
