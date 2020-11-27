<template>
    <div>
        <div class="page" id="man">
        <header class="headcon">
            <a href="#"><img src="../../assets/img/arrowLeft (2).jpg" alt="tp"></a>
            <p>确认订单</p>
            <div class="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
        <div class="main">
            <div class="con" v-for='(item,idx) in cont' :key="item.id">
                <div class="one">
                    <form action="#">
                        <div class="fux">
                            <input type="checkbox" v-model='item.chok'  @change='cheakOne'>
                        </div>
                    </form>
                </div>
                <div class="two clearfix" >
                    <div class="fl"><img :src='item.img' alt="tp"></div>
                    <div class="fl">
                        <p class="p1">{{item.name}}</p>
                        <p class="p2">{{item.specs}}</p>
                        <p class="p3">&yen;{{item.price}}</p>
                    </div>
                </div>
                <div class="three">
                    <div>
                        <a href="javascript:;" class="a1" @click='down(idx)'>一</a>
                    </div>
                    <div>
                        <form action="#">
                            <div class="neirong">{{item.num}}</div>
                        </form>
                    </div>
                    <div>
                        <a href="javascript:;" class="a2" @click='up(idx)'>十</a>
                    </div>
                </div>
                <div class="four">
                    <p @click='del(idx)'>删除</p>
                </div>
            </div>
        </div>
        <div class="bott">
            <div class="qian">
                <form action="#">
                    <input type="checkbox"  v-model='cheak' @change='cheakall'>
                </form>
            </div>
            <div class="zuo">
                <p>全选</p>
            </div>
            <div class="zho">
                <p class="p1">总计: <span>{{allprice}}</span></p>
                <p class="p2">不含运费，以优惠&yen;0.00</p>
            </div>
            <div class="you">
                <router-link  to="/order">去结算（{{all}}件）</router-link>
            
            </div>
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
             cheak:false,
           
             cont: [
                    {
                        img: require('../../assets/img/shopCart.jpg'),
                        name: '欧莱雅面霜',
                        specs: '规格：50g',
                        price: '123.00',
                        num:1,
                        chok:false
                    },
                    {
                        img: require('../../assets/img/shopCart.jpg'),
                        name: '欧莱雅面霜',
                        specs: '规格：50g',
                        price: '123.00',
                        num:1,
                        chok:false
                    },
                    {
                        img:require('../../assets/img/shopCart.jpg'),
                        name: '欧莱雅面霜',
                        specs: '规格：50g',
                        price: '123.00',
                        num:1,
                        chok:false
                    },
                ]
        }
    },
     computed:{
                allprice(){
                    let sum=0
                    this.cont.map((item) => {
                        sum += item.price * item.num;
                    });
                    return sum
                },
                // 总件数
                all(){
                    let un=0
                    this.cont.map((item)=>{
                        un += item.num;
                    })
                    return un
                },

            },
            methods:{
                // 全选
                cheakall(){
                    this.cont.map((item,idx)=>{
                        item.chok=this.cheak
                    })
                      
                },
                // 单选
                cheakOne(){
                    this.cheak = this.cont.every(item=>item.chok)
                },
                // 加数量
                up(idx){
                    this.cont[idx].num++
                },
                // 减数量
                down(idx){
                    if (this.cont[idx].num <= 1) {
                        alert('不能再减了')
                        return
                    }
                    this.cont[idx].num--
                },
                // 删除
                del(idx){
                    this.cont.splice(idx,1)
                }
            },
    components:{
        Navv
    }
}
</script>

<style lang="" scoped>
@import '../../assets/css/cart.css';
    /* .headcon{
           background-color: #f26b11;
    }
    .page{
        height: 607px;
    }
    .page .bott{
        bottom: 60px;
    } */
</style>