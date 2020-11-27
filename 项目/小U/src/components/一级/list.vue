<template>
  <div>
    <div class="page">
      <header class="headcon">
        <a href="#"><img src="../../assets/img/arrowLeft.jpg" alt="tp" /></a>
        <a href="#"><img src="../../assets/img/logo.jpg" alt="tp" /></a>
        <div class="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div class="main">
        <div class="search">
          <div>
            <img src="../../assets/img/search.jpg" alt="tp" />
            <form action="#">
              <input type="text" placeholder="搜索商品" />
            </form>
          </div>
        </div>
        <div class="con">
          <div class="inner clearfix">
             <van-list>
      <van-card
      @click='goDetail(item.id)'
        v-for="item in goodsList"
        :key="item.id"
        desc="这个商品是爆款"
        :price="item.price.toFixed(2)"
        :title="item.goodsname"
        :thumb="
          item.img
            ? $imgUrl + item.img
            : 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605690430066&di=6b40da2d29ed89625f77cf2d525a943f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F11%2F20140911211243_3rT4u.jpeg'
        "
      />
    </van-list>
            <!-- <div class="clearfix cl1">
              <div class="zuo fl">
                <img src="../../assets/img/pic.jpg" alt="tp" />
              </div>
              <div class="you fl">
                <p class="p1">滋源修护滋养洗发香乳 520ml*2</p>
                <p class="p2">&yen;123.00</p>
                <p class="p3">3625条评论</p>
              </div>
            </div>
            <div class="clearfix">
              <div class="zuo fl">
                <img src="../../assets/img/pic.jpg" alt="tp" />
              </div>
              <div class="you fl">
                <p class="p1">滋源修护滋养洗发香乳 520ml*2</p>
                <p class="p2">&yen;123.00</p>
                <p class="p3">3625条评论</p>
              </div>
            </div>
            <div class="clearfix">
              <div class="zuo fl">
                <img src="../../assets/img/pic.jpg" alt="tp" />
              </div>
              <div class="you fl">
                <p class="p1">滋源修护滋养洗发香乳 520ml*2</p>
                <p class="p2">&yen;123.00</p>
                <p class="p3">3625条评论</p>
              </div>
            </div>
            <div class="clearfix">
              <div class="zuo fl">
                <img src="../../assets/img/pic.jpg" alt="tp" />
              </div>
              <div class="you fl">
                <p class="p1">滋源修护滋养洗发香乳 520ml*2</p>
                <p class="p2">&yen;123.00</p>
                <p class="p3">3625条评论</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <Navv></Navv>
  </div>
</template>

<script>
import { getGoods } from "../../util/axios";
import Navv from "../../commn/nav";
export default {
  data() {
    return {
      goodsList: []
    };
  },
  components: {
    Navv,
  },
  mounted() {
    //组件一加载就调取商品列表接口
    this.getGoodsList();
  },
  methods: {
      //封装获取商品列表接口
    getGoodsList() {
      getGoods({
        fid: this.$route.query.id
      }).then(res => {
        console.log(res, "商品列表");
        if ((res.code = 200)) {
          this.goodsList = res.list;
        }
      });
    },
    //封装一个跳转详情事件
    goDetail(id){
        this.$router.push({
            path:'/datails',
            query:{
                id
            }
        })
    }
  }
};
</script>

<style lang="" scoped>
@import '../../assets/css/list.css';

/*  */
</style>