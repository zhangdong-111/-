<template>
  <div>
    <div class="page">
      <header class="headcon">
          <router-link to="/list">
          <img src="../../assets/img/arrowLeft (2).jpg" alt="tp"
        />
          </router-link>
        <p>商品详情</p>
        <div class="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div class="banner">
        <img src="../../assets/img/picDetail_1.jpg" alt="tp" />
        <img src="../../assets/img/picDetail_2.jpg" alt="tp" />
      </div>
      <div class="news">
        <div class="inner">
          <p class="p1">娅芝贵妇素颜霜 贵妇膏神仙膏补水保湿懒人霜遮瑕珍珠膏</p>
          <p class="p1 p2">
            &yen;123.00 <span>(此价格不与套装优惠同时享受)</span>
          </p>
        </div>
      </div>
      <div class="main">
        <div class="fir clearfix">
          <div class="zuo fl clearfix">
            <p class="p1">促销：</p>
            <p class="p2"><a href="javascript:;">满减</a></p>
            <p class="p3">满件9折；3件8折</p>
          </div>
          <div class="you fr">
            <a href="#">
              <img src="../../assets/img/arrow.jpg" alt="tp" />
            </a>
          </div>
        </div>
        <div class="sce clearfix">
          <div class="zuo fl">
            <p>购买数量</p>
          </div>
          <div class="you fr">
            <div>
              <a href="javascript:;" class="a1">一</a>
            </div>
            <div>
              <form action="#">
                <input type="text" placeholder="1" />
              </form>
            </div>
            <div>
              <a href="javascript:;" class="a2">十</a>
            </div>
          </div>
        </div>
        <div class="three clearfix">
          <div class="zuo fl">
            <p class="p1">商品属性</p>
            <div>
              <div><p class="p2">规格</p></div>
              <div class="d1">
                <a href="javascript:;" class="a1">30g</a>
              </div>
              <div class="d2">
                <a href="javascript:;" class="a2">5g</a>
              </div>
            </div>
          </div>
          <div class="you fr">
            <a href="javascript:;">
              <img src="../../assets/img/arrow.jpg" alt="tp" />
            </a>
          </div>
        </div>
      </div>
      <div class="present">
        <p>商品详情</p>
        <img src="../../assets/img/picDetail_3.jpg" alt="" />
        <img src="../../assets/img/picDetail_4 .jpg" alt="" />
        <img src="../../assets/img/picDetail_5.jpg" alt="" />
        <img src="../../assets/img/picDetail_6.jpg" alt="" />
        <img src="../../assets/img/picDetail_7.jpg" alt="" />
      </div>
      <div class="evaluate">
        <div class="inner">
          <p class="p1">商品评价</p>
          <p class="p2">1235668fg</p>
          <p class="p3">效果很好，物流到位，下次继续来</p>
          <div>
            <img src="../../assets/img/picDetail_8.jpg" alt="" class="im1" />
            <img src="../../assets/img/picDetail_9.jpg" alt="" class="im2" />
            <img src="../../assets/img/picDetail_10.jpg" alt="" />
          </div>
          <p class="p4">2020-01-13</p>
        </div>
      </div>
      <div class="comment clearfix">
        <div class="inner">
          <p class="fl">共<span>1000</span>+条评论</p>
          <p class="fr"><a href="#">查看更多></a></p>
        </div>
      </div>
         <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button @click="goCart" type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    </div>
  </div>
</template>

<script>
import { getGoodsInfo,getCartAdd } from "../../util/axios";
import {Toast} from 'vant'
export default {
  data() {
    return {
       goodsInfo: "",
      value: 1,
      specsAttr: []
    }
  },
  mounted() {
    this.getInfo();
  },
   methods: {
    //封装获取详情事件
    getInfo() {
      getGoodsInfo({
        id: this.$route.query.id
      }).then(res => {
        if (res.code == 200) {
          this.goodsInfo = res.list[0];
          this.specsAttr = this.goodsInfo.specsattr
            ? this.goodsInfo.specsattr.split(",")
            : [];
          console.log(this.goodsInfo, "hahah");
        }
      });
    },
    //封装加入购物车事件
    goCart(){
      if(sessionStorage.getItem('userInfo')){
        //已登录 调取加入购物车接口，并跳转到购物车列表
        getCartAdd({
          uid: JSON.parse(sessionStorage.getItem('userInfo')).uid,
          goodsid:this.goodsInfo.id,
          num:this.value
        }).then(res=>{
          Toast.success(res.msg)
          this.$router.push({
            path:'/car',
            query:{
              id:JSON.parse(sessionStorage.getItem('userInfo')).uid
            }
          })
        })
      }else{
        Toast.fail('当前为登录，请先登录')
        this.$router.push('/login')
      }
    }
  }
};
</script>

<style lang="" scoped>
@import "../../assets/css/datails.css";
/*  */
</style>