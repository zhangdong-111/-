<template>
    <div>
         <div class="page">
        <header class="headcon">
            <a href="#"><img src="../../assets/img/arrowLeft (2).jpg" alt="tp"></a>
           <p>确认订单</p>
            <div class="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
        <div class="address">
            <p>收货人：YouSu <span>10000000000</span></p>
            <p class="p1">收货地址：北京市海淀区隐泉路清林苑6号楼中公优就业总部<span class="sp1">3层</span></p>
            <a href="3"><img src="../../assets/img/arrowRight.jpg" alt="tp"></a>
        </div>
        <div class="main">
            <div class="top clearfix">
                <div class="zuo clearfix fl">
                    <div class="fl">
                        <img src="../../assets/img/未标题-1.png" alt="tp">
                    </div>
                    <div class="fl">
                        <p class="p1">雅诗兰黛护肤霜</p>
                        <p class="p2">规格：50g</p>
                    </div>
                </div>
                <div class="you fr">
                    <p>&yen;123.00</p>
                </div>
            </div>
            <div class="zhong clearfix">
                <div class="zuo fl">
                    <p>购买数量：</p>
                </div>
                <div class="you fr">
                    <div><a href="#">一</a></div>
                    <div>
                        <form action="#">
                            <input type="text" placeholder="1">
                        </form>
                    </div>
                    <div><a href="#">十</a></div>
                </div>
            </div>
            <div class="bot clearfix">
                <p class="fl">配送方式</p>
                <p class="fr">xx快递</p>
            </div>
        </div>
        <div class="discont">
            <div class="top clearfix">
                <p class="fl">优惠券</p>
                <p class="fr">无可用</p>
            </div>
            <div class="bot clearfix">
                <p class="fl">使用积分</p>
                <div class="fr">
                    <form action="#">
                        <input type="text" placeholder="输入积分" class="inp1">
                        <input type="submit" placeholder="使用" class="inp2">
                        <em>可用<span>50</span>积分</em>
                    </form>    
                </div>
            </div>
        </div>
        <div class="total">
            <div class="zuo">
                <p>商品金额</p>
                <p>运费</p>
                <p>优惠券</p>
                <p>会员优惠</p>
                <p>积分抵扣</p>
            </div>
            <div class="you">
                <p>&yen;123.00</p>
                <p>+&yen;0.00</p>
                <p>-&yen;0.00</p>
                <p>-&yen;0.00</p>
                <p>-&yen;0.00</p>
            </div>
        </div>
        <div class="confirm">
            <p>实付金额：<span>&yen;123.00</span></p>
            <form action="#">
               <div>
                <input type="submit" value="提交订单">
               </div>
            </form>
        </div>
    </div>
      <Navv></Navv>
    </div>
</template>

<script>

import Navv from '../../commn/nav'
export default {
    data() {
        return {
            
        }
    },
    components:{
        Navv
    }
}
</script>

<style lang="" scoped>
@import '../../assets/css/order.css';
</style>