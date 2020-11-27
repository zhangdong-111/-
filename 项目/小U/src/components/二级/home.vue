<template>
  <div>
    <div class="page">
      <header class="headcon">
        <a href="#"><img src="../../assets/img/logo.jpg" alt="logo" /></a>
        <input type="search" placeholder="寻找商品" class="search" />
        <div class="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <nav class="navbar">
        <ul class="clearfix">
          <li class="cur"><a href="#">推荐</a></li>
          <li><a href="#">女装</a></li>
          <li><a href="#">鞋包</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">母婴儿童</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">美食</a></li>
        </ul>
        <p class="arrow"></p>
      </nav>
      <div class="banner">
        <!-- <a href="#"><img src="../../assets/img/banner.jpg" alt="tp" /></a> -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in bannerList" :key="item.id">
            <img :src="$imgUrl + item.img" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <ul class="item">
        <li>
          <a href="#">
            <img src="../../assets/img/indexicon1.jpg" alt="tp" />
            <p>限时抢购</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/indexicon2.jpg" alt="tp" />
            <p>积分商城</p>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="../../assets/img/indexicon3.jpg" alt="tp" />
            <p>联系我们</p>
          </a>
        </li>
        <li>
          <router-link to="/prolist">
            <img src="../../assets/img/indexicon4.jpg" alt="tp" />
            <p>商品列表</p>
          </router-link>
        </li>
      </ul>
      <div class="litime">
        <div class="seckill">
          <p class="p1">限时秒杀</p>
          <img class="pho" src="../../assets/img/timer.jpg" alt="" />
          <p class="p2">每天零点场 好货秒不停</p>
          <div class="clearfix">
            <span>02</span>
            <span>16</span>
            <span>45</span>
            <div class="miao fl">
              <p>秒杀</p>
            </div>
          </div>
          <div class="yij">
            <img src="../../assets/img/shop_5.jpg" alt="tp" />
            <p>&yen;14.8</p>
          </div>
        </div>
        <div class="brand">
          <div class="top clearfix">
            <div class="left fl">
              <p class="p1">品牌上新</p>
              <p class="p2">每日9点 抢大牌</p>
              <img src="../../assets/img/brand.jpg" alt="tp" />
            </div>
            <div class="right fr">
              <img src="../../assets/img/shop_1.jpg" alt="tp" />
            </div>
          </div>
          <div class="bott">
            <div class="left">
              <p class="p1">每日十件</p>
              <p class="p2">只为你选好货</p>
              <img src="../../assets/img/indexship2.jpg" alt="tp" />
            </div>
            <div class="right">
              <p class="p1">拼啊</p>
              <p class="p2">超级好价拼团</p>
              <img src="../../assets/img/shop_3.jpg" alt="tp" />
            </div>
          </div>
        </div>
      </div>
      <div class="bann">
        <a href="#">
          <img src="../../assets/img/bar.jpg" alt="tp" />
        </a>
      </div>
      <div class="goods" id="coont">
        <ul class="optipon clearfix">
          <van-tabs type="card">
            <van-tab title="热门推荐">
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              />
            </van-tab>
            <van-tab title="发现好货">
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              />
            </van-tab>
            <van-tab title="只看专场">
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              />
            </van-tab>
            <van-tab title="只看商品">
              <van-card
                num="2"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
              />
            </van-tab>
          </van-tabs>
        </ul>
        <div class="shop clearfix" v-for="item in neir" :key="item.id">
          <div class="zuo fl">
            <img :src="item.img" alt="tp" />
          </div>
          <div class="you fl">
            <p class="txt1">{{ item.name }}</p>
            <p class="txt2">&yen;{{ item.price }}</p>
            <p class="txt3">{{ item.sold }}</p>
            <a href="#">{{ item.rush }}</a>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <Navv></Navv>
  </div>
</template>

<script>
import { getBanner, getIndexGoods } from "../../util/axios";
import Navv from "../../commn/nav";

export default {
  data() {
    return {
      newsList: [],
      bannerList: [],
      hotsList: [],
      goodsList: [],
    };
  },
  components: {
    Navv,
  },
  mounted() {
    //组件加载获取轮播图接口
    this.getBannerList();
    //组件加载获取商品信息
    this.getIndexGoodsList();
  },
  methods: {
    //封装一个获取banner函数
    getBannerList() {
      getBanner().then((res) => {
        console.log(res, "响应");
        if (res.code == 200) {
          this.bannerList = res.list;
        }
      });
    },
    // 封装获取商品信息
    getIndexGoodsList() {
      getIndexGoods().then((res) => {
        if (res.code == 200) {
          this.newsList = res.list[0].content;
          this.hotsList = res.list[1].content;
          this.goodsList = res.list[2].content;
        }
        console.log(res, "商品信息");
      });
    },
  },
};
</script>
<style lang="" scoped>
@import "../../assets/css/index.css";
.img {
  width: 100%;
  /* 200px */
  height: 3rem;
}
.gridTitle {
  font-size: 14px;
}
</style>