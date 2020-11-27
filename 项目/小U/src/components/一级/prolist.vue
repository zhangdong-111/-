<template>
  <div>
    <div class="page">
      <header class="headcon">
        <a href="#"
          ><img src="../../assets/img/arrowLeft (2).jpg" alt="tp"
        /></a>
        <p>商品分类</p>
        <div class="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div class="main clearfix">
        <div class="zuo fl">
       
          <van-sidebar v-model="activeKey" @change="onchange">
            <van-sidebar-item title="施华蔻" />
            <van-sidebar-item title="沙宣" />
            <van-sidebar-item title="欧莱雅" />
          </van-sidebar>
        </div>
        <van-grid :border="false" :column-num="3">
          <van-grid-item :to="'/list'" v-for="item in secondList" :key="item.id"> 
            <van-image :src="item.img ? $imgUrl+item.img:'https://img.yzcdn.cn/vant/apple-1.jpg'" />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <Navv></Navv>
  </div>
</template>

<script>
import { getCateTree } from "../../util/axios";
import Navv from "../../commn/nav";
export default {
  data() {
    return {
      secondList:[],
      firstList:[],
      activeKey: 0,
    };
  },
  mounted() {
    this.getCateTreeList();
  },
  methods: {
    onchange(e) {
      console.log(e);
      this.secondList=this.firstList[e].children
    },
    // 封装一个调取分类树的接口
    getCateTreeList() { 
      getCateTree().then(res=>{
        if(res.code==200){
          this.firstList=res.list
          this.secondList=res.list[this.activeKey].children
        }
      })
    },  
  },  

  components: {
    Navv,
  },
};
</script>

<style lang="" scoped>
@import "../../assets/css/prolist.css";
</style>