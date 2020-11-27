<template>
  <div>
    <!-- 面包屑 -->
    <elb></elb>
    <!--添加按钮 -->
    <el-button type="primary" size="mini" @click="isadd">添加</el-button>
    <!-- 表格渲染 -->
    <listt @edit='edit'></listt>
    <!-- 弹窗表单 -->
    <addd ref="dialog"  @del="del" :addInfo='addInfo'></addd>
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
        isShow: false,
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
    isadd() {
      this.addInfo.isShow = true;
    },
    del(e) {
      this.addInfo.isShow = e;
    },
    // 
      edit(e){
      //e是表格传递的id
      // console.log(e,'eeeediidididi')
      //这个事件一触发，就知道是编辑了，就要修改弹框状态
      //打开弹框
      this.addInfo.isShow=true 
      //告诉弹框你是一个编辑
      this.addInfo.isAdd =false
      //获取弹框的函数
      // console.log(this.$refs.dialog)
      this.$refs.dialog.look(e)
    }
  },
}; 
</script>

<style lang="" scoped>
</style>