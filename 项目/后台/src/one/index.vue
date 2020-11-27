<template>
  <div>
    <el-container>
      <el-header>头部导航</el-header>
      <el-container>
        <el-aside width="200px">
          <vnav></vnav>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vnav from "../components/nav";
export default {
  data() {
    return {
      
    }
  },
  components:{
    vnav
  }
};
</script>

<style lang="stylus" scoped>
@import '../stylus/index.styl';

.el-header {
  background: $onecolor;
}

.el-container {
  min-height: 600px;
}
</style> 