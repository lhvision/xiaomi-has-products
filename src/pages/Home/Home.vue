<template>
  <div class="home-wrap">
    <div class="banner-nav">
      <div class="nav-container">
        <!-- 左侧列表 -->
        <ul class="nav-list">
          <li
            class="nav-item"
            v-for="(shop, index) in shops"
            :key="index"
            @mouseenter="isShow=!isShow"
            @mouseleave="isShow=!isShow"
          >
            <span>
              <a
                data-src="/goodsbycategory?firstId=446&amp;secondId=446&amp;title=%E6%9C%89%E5%93%81%E6%8E%A8%E8%8D%90"
              >{{shop.name_start}}</a>
            </span>
            <span>
              <span>/</span>
              <a
                data-src="/goodsbycategory?firstId=115&amp;secondId=115&amp;title=%E5%AE%B6%E7%94%A8%E7%94%B5%E5%99%A8"
              >{{shop.name_end}}</a>
            </span>
          </li>
        </ul>
        <!-- 鼠标悬浮到左侧列表某一项遍历出来的列表 -->
        <div
          class="nav-detail"
          v-show="isShow"
          v-for="(shop, index) in shops"
          :key="index"
          @mouseenter="isShow=!isShow"
          @mouseleave="isShow=!isShow"
        >
          <div class="cate-detail-group">
            <p class="title">{{shop.name_start}}</p>
            <ul class="cate-detail-list">
              <li
                v-for="(list, index) in shop.shop_list"
                @click="goto"
                :key="index"
                class="m-tag-a"
                data-src="/goodsbycategory?firstId=93&amp;secondId=854&amp;title=%E6%96%B0%E5%93%81%E6%8E%A8%E8%8D%90"
              >
                <img
                  :src="list.image"
                  data-src="https://img.youpin.mi-img.com/miio_album_pics/7333159d15082bdf4295c88962a1cb94.png?w=480&amp;h=480"
                  alt="新品推荐"
                />
                <span>{{list.name}}</span>
              </li>
            </ul>
          </div>
          <div class="cate-detail-group">
            <p class="title">{{shop.name_end}}</p>
            <ul class="cate-detail-list">
              <li
                v-for="(list, index) in shop.shop_list"
                :key="index"
                class="m-tag-a"
                data-src="/goodsbycategory?firstId=93&amp;secondId=854&amp;title=%E6%96%B0%E5%93%81%E6%8E%A8%E8%8D%90"
              >
                <img
                  :src="list.image"
                  data-src="https://img.youpin.mi-img.com/miio_album_pics/7333159d15082bdf4295c88962a1cb94.png?w=480&amp;h=480"
                  alt="新品推荐"
                />
                <span>{{list.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 轮播图 -->
      <div class="banner-box">
        <div class="m-banner">
          <div class="m-ban-con">
            <div class="swiper-container swiper-container-horizontal">
              <div
                class="swiper-wrapper"
                style="transform: translate3d(-2577px, 0px, 0px); transition-duration: 0ms;"
              >
                <a
                  v-for="(img, index) in bgImg"
                  :key="index"
                  rel="noopener noreferrer"
                  class="swiper-slide swipe-item m-tag-a cur"
                  data-swiper-slide-index="0"
                  style="width: 859px;"
                >
                  <img alt :src="img" />
                </a>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-hero-wrap section">
      <div class="container" style="border-bottom-color: rgb(231, 231, 231);">
        <ul class="p-hreo-nav clearfix">
          <li
            class="m-tag-a"
            data-target="_blank"
            data-src="https://m.youpin.mi.com/w/newproduct?_rt=weex&amp;pageid=1605"
          >
            <div>
              <div
                class="m-product-image-container undefined"
                data-src="https://img.youpin.mi-img.com/jianyu/3fc26de3e9c91dba0b470ae0dfd668d1.png?w=126&amp;h=126"
                style="width: 130px; height: 120px;"
              >
                <div
                  class="img-container"
                  style="padding: 25px 25px 15px; width: 80px; height: 80px;"
                >
                  <img
                    src="https://img.youpin.mi-img.com/jianyu/3fc26de3e9c91dba0b470ae0dfd668d1.png?w=126&amp;h=126"
                    data-src="https://img.youpin.mi-img.com/jianyu/3fc26de3e9c91dba0b470ae0dfd668d1.png?w=126&amp;h=126"
                    alt="每日新品"
                    style="width: 80px; height: 80px;"
                  />
                </div>
              </div>
            </div>
            <p class="title" style="color: rgb(102, 102, 102);">每日新品</p>
          </li>
          <li
            class="m-tag-a"
            data-target="_blank"
            data-src="https://m.youpin.mi.com/w/crowdfunding?_rt=weex&amp;pageid=5"
          >
            <div>
              <div
                class="m-product-image-container undefined"
                data-src="https://img.youpin.mi-img.com/jianyu/0301aee7e1d9d33c8b6db6481c0aea74.png?w=126&amp;h=126"
                style="width: 130px; height: 120px;"
              >
                <div
                  class="img-container"
                  style="padding: 25px 25px 15px; width: 80px; height: 80px;"
                >
                  <img
                    src="https://img.youpin.mi-img.com/jianyu/0301aee7e1d9d33c8b6db6481c0aea74.png?w=126&amp;h=126"
                    data-src="https://img.youpin.mi-img.com/jianyu/0301aee7e1d9d33c8b6db6481c0aea74.png?w=126&amp;h=126"
                    alt="小米众筹"
                    style="width: 80px; height: 80px;"
                  />
                </div>
              </div>
            </div>
            <p class="title" style="color: rgb(102, 102, 102);">小米众筹</p>
          </li>
          <li
            class="m-tag-a"
            data-target="_blank"
            data-src="https://m.youpin.mi.com/w/secbuy?_rt=weex&amp;activity_id=5"
          >
            <div>
              <div
                class="m-product-image-container undefined"
                data-src="https://img.youpin.mi-img.com/jianyu/994c5e95f79a7874a73e6935832bb0e4.png?w=126&amp;h=126"
                style="width: 130px; height: 120px;"
              >
                <div
                  class="img-container"
                  style="padding: 25px 25px 15px; width: 80px; height: 80px;"
                >
                  <img
                    src="https://img.youpin.mi-img.com/jianyu/994c5e95f79a7874a73e6935832bb0e4.png?w=126&amp;h=126"
                    data-src="https://img.youpin.mi-img.com/jianyu/994c5e95f79a7874a73e6935832bb0e4.png?w=126&amp;h=126"
                    alt="限时抢购"
                    style="width: 80px; height: 80px;"
                  />
                </div>
              </div>
            </div>
            <p class="title" style="color: rgb(102, 102, 102);">限时抢购</p>
          </li>
          <li
            class="m-tag-a"
            data-target="_blank"
            data-src="https://m.youpin.mi.com/w/wactivity?_rt=weex&amp;pageid=33"
          >
            <div>
              <div
                class="m-product-image-container undefined"
                data-src="https://img.youpin.mi-img.com/jianyu/e3a7c62f0546d492017e09e3e5d5e3ea.png?w=126&amp;h=126"
                style="width: 130px; height: 120px;"
              >
                <div
                  class="img-container"
                  style="padding: 25px 25px 15px; width: 80px; height: 80px;"
                >
                  <img
                    src="https://img.youpin.mi-img.com/jianyu/e3a7c62f0546d492017e09e3e5d5e3ea.png?w=126&amp;h=126"
                    data-src="https://img.youpin.mi-img.com/jianyu/e3a7c62f0546d492017e09e3e5d5e3ea.png?w=126&amp;h=126"
                    alt="热销榜单"
                    style="width: 80px; height: 80px;"
                  />
                </div>
              </div>
            </div>
            <p class="title" style="color: rgb(102, 102, 102);">热销榜单</p>
          </li>
          <li
            class="m-tag-a no-mr"
            data-target="_blank"
            data-src="https://m.youpin.mi.com/w/ttwotab?_rt=weex&amp;pageid=1408"
          >
            <div>
              <div
                class="m-product-image-container undefined"
                data-src="https://img.youpin.mi-img.com/jianyu/f232f1640b3bb2b47e32d82da35d5a04.png?w=126&amp;h=126"
                style="width: 130px; height: 120px;"
              >
                <div
                  class="img-container"
                  style="padding: 25px 25px 15px; width: 80px; height: 80px;"
                >
                  <img
                    src="https://img.youpin.mi-img.com/jianyu/f232f1640b3bb2b47e32d82da35d5a04.png?w=126&amp;h=126"
                    data-src="https://img.youpin.mi-img.com/jianyu/f232f1640b3bb2b47e32d82da35d5a04.png?w=126&amp;h=126"
                    alt="小米自营"
                    style="width: 80px; height: 80px;"
                  />
                </div>
              </div>
            </div>
            <p class="title" style="color: rgb(102, 102, 102);">小米自营</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="h-section h-crowdfounding">
      <div class="container clearfix">
        <div class="h-sec-top clearfix">
          <h2 class="h-subTit">
            小米有品众筹
            <span>永远好奇 永远年轻</span>
          </h2>
        </div>
        <div class="m-sec-main mt1">
          <div
            class="home-good-item m-tag-a item-pos0 home-good-item-big no-ml"
            data-src="/detail?gid=117260"
            data-target="_blank"
          >
            <div class="item-inner" style="background-color: rgb(249, 243, 233);">
              <img
                class="pro-img"
                src="https://img.youpin.mi-img.com/shopmain/a2ab2dff1d0732e55ef96e58c3fe9ed6.png?w=800&amp;h=800"
                data-src="https://img.youpin.mi-img.com/shopmain/a2ab2dff1d0732e55ef96e58c3fe9ed6.png?w=800&amp;h=800"
                alt
                style="margin-top: 0px;"
              />
              <div class="pro-text">
                <p class="pro-info" title="Future-O龙头花洒">Future-O龙头花洒</p>
                <p class="pro-desc" title="“浴”见未来的你，我们拥有更多可能">“浴”见未来的你，我们拥有更多...</p>
                <p class="pro-price">
                  <span class="tag">&yen;</span>
                  <span>399</span>
                  <span class="pro-flag">起</span>
                </p>
              </div>
            </div>
            <div class="m-progress-wrap-con">
              <div class="m-bar-con">
                <div class="m-bar" style="width: 280%;"></div>
              </div>
              <div class="m-progress-info clearfix">
                <div class="fl m-suppory">
                  <span class="sup-num">1402</span>人支持
                </div>
                <span class="progress-tag-con fl">
                  <span
                    class="common-tag common-tag-text"
                    style="background-color: rgb(254, 207, 0);"
                  >热</span>
                </span>
                <div class="fr m-persent">
                  <div>
                    <span class="m-num">280</span>
                    <span class="m-num-flag">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="home-good-item m-tag-a item-pos1"
            data-src="/detail?gid=116791"
            data-target="_blank"
          >
            <div class="item-inner" style="background-color: rgb(248, 248, 248);">
              <img
                class="pro-img"
                src="https://img.youpin.mi-img.com/shopmain/802353ad1b09d1bdc0abb028de3f969a.png?w=800&amp;h=800"
                data-src="https://img.youpin.mi-img.com/shopmain/802353ad1b09d1bdc0abb028de3f969a.png?w=800&amp;h=800"
                alt
                style="margin-top: 0px;"
              />
              <div class="pro-text">
                <p class="pro-info" title="平仄故宫国潮茶礼">平仄故宫国潮茶礼</p>
                <p class="pro-price">
                  <span class="tag">&yen;</span>
                  <span>79</span>
                  <span class="pro-flag">起</span>
                </p>
              </div>
            </div>
            <div class="m-progress-wrap-con">
              <div class="m-bar-con">
                <div class="m-bar" style="width: 837%;"></div>
              </div>
              <div class="m-progress-info m-progress-info-small clearfix">
                <div class="fl m-suppory">
                  <span class="sup-num">4187</span>人支持
                </div>
                <span class="progress-tag-con fl">
                  <span
                    class="common-tag common-tag-text"
                    style="background-color: rgb(246, 39, 0);"
                  >爆</span>
                </span>
                <div class="fr m-persent">
                  <div>
                    <span class="m-num">837</span>
                    <span class="m-num-flag">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="home-good-item m-tag-a item-pos2"
            data-src="/detail?gid=116827"
            data-target="_blank"
          >
            <div class="item-inner" style="background-color: rgb(248, 248, 248);">
              <img
                class="pro-img"
                src="https://img.youpin.mi-img.com/shopmain/c1704c4e01bd47edb32e48adacd488b8.png?w=800&amp;h=800"
                data-src="https://img.youpin.mi-img.com/shopmain/c1704c4e01bd47edb32e48adacd488b8.png?w=800&amp;h=800"
                alt
                style="margin-top: 0px;"
              />
              <div class="pro-text">
                <p class="pro-info" title="离子嫩肤美容仪">离子嫩肤美容仪</p>
                <p class="pro-price">
                  <span class="tag">&yen;</span>
                  <span>179</span>
                </p>
              </div>
            </div>
            <div class="m-progress-wrap-con">
              <div class="m-bar-con">
                <div class="m-bar" style="width: 712%;"></div>
              </div>
              <div class="m-progress-info m-progress-info-small clearfix">
                <div class="fl m-suppory">
                  <span class="sup-num">7126</span>人支持
                </div>
                <span class="progress-tag-con fl">
                  <span
                    class="common-tag common-tag-text"
                    style="background-color: rgb(246, 39, 0);"
                  >爆</span>
                </span>
                <div class="fr m-persent">
                  <div>
                    <span class="m-num">712</span>
                    <span class="m-num-flag">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="h-section h-new-sec">
      <div class="container clearfix">
        <div class="h-sec-top clearfix">
          <h2 class="h-subTit">
            每日新品
            <span>每天10点 惊喜不断</span>
          </h2>
        </div>
        <div class="m-sec-main mt1">
          <div class="swiper-container-slidesPerGroup swiper-container-horizontal">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide swiper-slide-active"
                style="width: 266.25px; margin-right: 5px;"
              >
                <div
                  class="m-goods-item-container new-item-container first pro-item-sec margin-left-0"
                  data-src="/detail?gid=116833"
                  data-target="_blank"
                >
                  <div class="small-item-img">
                    <div class="m-placeholder" style="width: 266px; height: 266px;"></div>
                  </div>
                  <div class="m-goods-common-box">
                    <p class="pro-info" title="彩色金银纪念币">彩色金银纪念币</p>
                    <p class="pro-desc" title="央行发行/传统生肖造型/吉祥寓意/礼赠佳品">央行发行/传统生肖造型/吉祥寓...</p>
                    <p class="pro-price">
                      <span class="pro-unit">&yen;</span>
                      <span class="m-num">2888</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-next -next-hover"></div>
            <div class="swiper-button-prev -forward-hover swiper-button-disabled"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-section h-new-sec">
      <div class="container clearfix">
        <div class="h-sec-top clearfix">
          <h2 class="h-subTit">
            每日新品
            <span>每天10点 惊喜不断</span>
          </h2>
        </div>
        <div class="m-sec-main mt1">
          <div class="swiper-container-slidesPerGroup swiper-container-horizontal">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide swiper-slide-active"
                style="width: 266.25px; margin-right: 5px;"
              >
                <div
                  class="m-goods-item-container new-item-container first pro-item-sec margin-left-0"
                  data-src="/detail?gid=116833"
                  data-target="_blank"
                >
                  <div class="small-item-img">
                    <div class="m-placeholder" style="width: 266px; height: 266px;"></div>
                  </div>
                  <div class="m-goods-common-box">
                    <p class="pro-info" title="彩色金银纪念币">彩色金银纪念币</p>
                    <p class="pro-desc" title="央行发行/传统生肖造型/吉祥寓意/礼赠佳品">央行发行/传统生肖造型/吉祥寓...</p>
                    <p class="pro-price">
                      <span class="pro-unit">&yen;</span>
                      <span class="m-num">2888</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-button-next -next-hover"></div>
            <div class="swiper-button-prev -forward-hover swiper-button-disabled"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-section h-category-sec sec31">
      <div class="container">
        <div class="h-sec-top clearfix">
          <h2 class="h-subTit">
            专属推荐
            <span></span>
          </h2>
        </div>
        <div class="m-product-list clearfix">
          <div
            class="m-goods-item-container first pro-item-category"
            data-src="/detail?gid=107956"
            data-target="_blank"
          >
            <div class="category-img-container">
              <div class="product-img">
                <div
                  class="m-product-image-container undefined"
                  style="width: 264px; height: 198px;"
                >
                  <div
                    v-for="(shops,index) in shops.shop_recommend"
                    :key="(index)"
                    class="img-container"
                    style="padding: 45px 70px 28px; width: 124px; height: 125px;"
                  >
                    <!--shop_img-->
                    <img
                      src="https://img.youpin.mi-img.com/800_pic/6510380452e0fd5e070ef63edfc6dcef.png@base@tag=imgScale&F=webp"
                      alt="小米巨能写中性笔 10支装"
                      style="height: 125px; width: 125px; margin-left: -0.5px;"
                    />
                  </div>
                </div>
              </div>
              <!-- shop_introduce -->
              <p class="pro-desc">一支顶4支，超长顺滑书写</p>
            </div>
            <div class="category-box">
              <!-- shop_name -->
              <p class="pro-info" title="小米巨能写中性笔 10支装">小米巨能写中性笔 10支...</p>
              <!-- shop_price -->
              <p class="pro-price">
                <span class="pro-unit">&yen;</span>
                <span class="m-num">9.99</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 样式文件
import "./home.css";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
// 引入vuex
import { mapState } from "vuex";
export default {
  name: "Home",
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    goto () {
      this.$router.replace("/details");
    }
  },
  // 页面加载之后
  mounted () {
    // 获取商品数据
    this.$store.dispatch('getShops')
    // 轮播图
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      })
    })
    new Swiper(".swiper-container-slidesPerGroup", {
      autoplay: true,
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  },
  computed: {
    // 测试数据用的vuex成功搭建
    ...mapState({
      shops: state => state.shop.shops,
      bgImg: state => state.shop.bgImg
    })
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped></style>
