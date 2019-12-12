<template>
  <div>
    <ul class="check-title"
        v-for="(item,index) in shoppingCartList"
        :key="index">
      <li><input type="checkbox" @click="handleCheck(item)"></li>
      <li class="check">
        <img :src="item.img"
             alt="">
      </li>
      <li class="shop-info">{{item.info}}</li>
      <li class="shop-price">{{item.price}}</li>
      <li class="shop-count">
        <div>
          <span>-</span>
          <span>{{item.count}}</span>
          <span>+</span>
        </div>
        </li>
      <li class="shop-money">{{item.price}}</li>
      <li class="shop-cop">
        <i class="el-icon-close" @click="detelCommodity(index)"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "ShoppingList",
  computed:{
    ...mapState({
      shoppingCartList : state => state.shoppingCart.shoppingCartList
    }),
  },
  methods:{
    detelCommodity(index){
      this.shoppingCartList.splice(index,1)
    },
    handleCheck(itemData){
      itemData.status=!itemData.status
      this.$store.commit('UPDATE_LIST',{
        id:itemData.id,
        status:itemData.status,
      })
    }
  },
  mounted(){
    this.result=this.shoppingCartList.reduce((pre,item)=>pre+item.count*item.price ,0)
    console.log(this.result)
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
.check-title
  font-size 14px
  display flex
  justify-content space-between
  height 88px
  padding-top 27px
  padding-bottom 27px
  line-height 88px
  li
    text-align center
    color red
  li:first-child
    width 18px
    margin 0 20px 0 7px
  .check
    width 130px
    img
      width 100px
      height 100px
  .shop-info
    width 325px
  .shop-price
    width 205px
  .shop-count
    width 210px
    div
      height 50px
      display flex
  .shop-money
    width 130px
  .shop-cop
    width 30px
    i
      cursor pointer
</style>