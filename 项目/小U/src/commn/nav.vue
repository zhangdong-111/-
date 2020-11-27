<template>
  <div>
    <fotter class="fotterbox">
      <router-link  to="/home">
        <img src="../assets/img/iconIndex2.jpg" alt="tp" />
        <p class="tt">首页</p>
      </router-link>

      <router-link  to="/car">
        <img src="../assets/img/iconCart.jpg" alt="tp" />
        <p>购物车</p>
      </router-link>
      
      <router-link to="/mine">
        <img src="../assets/img/iconMine.jpg" alt="tp" />
        <p>我的</p>
      </router-link>
    </fotter>
  </div>
</template>

<script>
export default {};
</script>

<style lang="" scopde>
.fotterbox {
  margin-top: 0.28rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  background-color: #fff;
  height: 1.17rem;
  border-top: 1px solid #d0d0d0;
  width: 100%;
  box-sizing: border-box;
}
.fotterbox > a {
  display: block;
  text-align: center;
}
.fotterbox > a > img {
  height: 0.53rem;
  width: auto;
}
.fotterbox > a > p {
  font: 0.18rem "微软雅黑";
  color: #7d7d7d;
}
.fotterbox > a > .tt {
  color: #ef6b16;
}
</style>