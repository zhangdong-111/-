<template>
  <div>
    <elb></elb>
    <!-- 添加按钮 -->
    <el-button type="primary" size="mini" @click="isadd">添加</el-button>
    <!-- 列表 -->
    <listt @edit='edit'></listt>
    <!-- 弹窗 -->
    <addd  :addInfo='addInfo' ref="dialog" @cancel='cancel'></addd>
  </div> 
</template>

<script>
import elb from "../../components/bread";
import listt from "./list";
import addd from "./add";
export default {
  data() {
    return {
       addInfo: { 
        isShow: false, //弹窗打开还是关闭
        isAdd: true, 
      },
    };
  },
  components: {
    elb,
    listt,
    addd,
  }, 
  methods: {
    //   打开弹窗 
    isadd(){
        this.addInfo.isShow=true
        this.addInfo.isAdd = true;
    },
    cancel(){
        this.addInfo.isShow=false
    },
    edit(e){
      this.addInfo.isShow=true
      this.addInfo.isAdd=false
      this.$refs.dialog.look(e)
    }
  }, 
};
</script>

<style lang="" scoped>
.el-button {
  margin-bottom: 20px;
}
</style>