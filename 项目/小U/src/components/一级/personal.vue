<template>
  <div>
    <div class="page">
      <header class="headcon">
        <a href="#"
          ><img src="../../assets/img/arrowLeft (2).jpg" alt="tp"
        /></a>
        <p>我的订单</p>
        <div class="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div class="portrait clearfix">
        <div class="zuo fl clearfix">
          <div class="tu fl">
            <img src="../../assets/img/mine.png" alt="tp" />
          </div>
          <div class="zi fl">
            <p class="p1">悠溯</p>
            <i>V1</i>
          </div>
        </div>
        <div class="you fr">
          <a href="#">每日签到</a>
        </div>
      </div>
      <div class="order">
        <div class="co1">
          <a href="#">
            <img src="../../assets/img/iconMine_1.jpg" alt="" />
            <p>全部订单</p>
          </a>
        </div>
        <div class="co2">
          <a href="#">
            <img src="../../assets/img/iconMine_2.jpg" alt="" />
            <p>待付款</p>
          </a>
        </div>
        <div class="co3">
          <a href="#">
            <img src="../../assets/img/iconMine_3.jpg" alt="" />
            <p>待收货</p>
          </a>
        </div>
      </div>
      <div class="main">
        <div class="con clearfix">
          <div class="zuo fl leafix">
            <div class="fl">
              <img src="../../assets/img/iconMine_4.jpg" alt="tp" />
            </div>
            <div class="fl"><p>地址管理</p></div>
          </div>
          <div class="you fr">
            <a href="#">
              <img src="../../assets/img/arrowRight.jpg" alt="tp" />
            </a>
          </div>
        </div>
        <div class="con clearfix">
          <div class="zuo fl leafix">
            <div class="fl">
              <img src="../../assets/img/iconMine_5.jpg" alt="tp" />
            </div>
            <div class="fl"><p>我的钱包</p></div>
          </div>
          <div class="you fr">
            <div class="fl"><p>200余额</p></div>
            <div class="fr">
              <a href="#">
                <img src="../../assets/img/arrowRight.jpg" alt="tp" />
              </a>
            </div>
          </div>
        </div>
        <div class="con clearfix">
          <div class="zuo fl leafix">
            <div class="fl">
              <img src="../../assets/img/iconMine_6.jpg" alt="tp" />
            </div>
            <div class="fl"><p>我的优惠券</p></div>
          </div>
          <div class="you fr">
            <a href="#">
              <img src="../../assets/img/arrowRight.jpg" alt="tp" />
            </a>
          </div>
        </div>
        <div class="con clearfix">
          <div class="zuo fl leafix">
            <div class="fl">
              <img src="../../assets/img/iconMine_7.jpg" alt="tp" />
            </div>
            <div class="fl"><p>我的二维码</p></div>
          </div>
          <div class="you fr">
            <a href="#">
              <img src="../../assets/img/arrowRight.jpg" alt="tp" />
            </a>
          </div>
        </div>
        <div class="con clearfix">
          <div class="zuo fl leafix">
            <div class="fl">
              <img src="../../assets/img/iconMine_8.jpg" alt="tp" />
            </div>
            <div class="fl"><p>我的优惠券</p></div>
          </div>
          <div class="you fr">
            <a href="#">
              <img src="../../assets/img/arrowRight.jpg" alt="tp" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <Navv></Navv>
  </div>
</template>

<script>

import Navv from "../../commn/nav";
export default {
  data() {
    return {};
  },
  components: {
    Navv,
  },
};
</script>
<style lang="" scoped>
@import "../../assets/css/personal.css";
</style>