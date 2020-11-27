<template>
  <div>
    <!-- 
      对话框属性
      visible	是否显示 Dialog，支持 .sync 修饰符
      center	是否对头部和底部采用居中布局
      formLabelWidth label的宽度
     -->
    <el-dialog
      :title="addInfo.isAdd?'添加菜单':'编辑菜单'"
      :visible.sync="addInfo.isShow"
      center
      :before-close="del"
    >
      <el-form :model="form" :rules="rules" ref="formDialog">
        <el-form-item
          prop="title"
          label="菜单名称"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="pid" label="上级菜单" :label-width="formLabelWidth">
          <el-select v-model="form.pid" placeholder="请选择" @change="change">
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option
              v-for="item in menuList"
              :key="item.id"
              :label="item.title"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单类型" :label-width="formLabelWidth">
          <el-radio v-model="form.type" :label="1" disabled>目录</el-radio>
          <el-radio v-model="form.type" :label="2" disabled>菜单</el-radio>
        </el-form-item>
        <el-form-item
          label="菜单图标"
          :label-width="formLabelWidth"
          v-if="form.type === 1"
        >
          <el-select v-model="form.icon" placeholder="请选择">
            <el-option
              v-for="item in iconList"
              :key="item"
              :label="item"
              :value="item"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单地址" :label-width="formLabelWidth" v-else>
          <el-select v-model="form.url" placeholder="请选择">
            <el-option
              v-for="item in indexRoutes"
              :key="item.path"
              :label="item.id"
              :value="item.path"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <!-- 可以使用active-color属性与inactive-color属性来设置开关的背景色。 -->

          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="del">取 消</el-button>
        <el-button v-if="addInfo.isAdd" @click="add('formDialog')" type="primary">添 加</el-button>
        <el-button v-else @click="add('formDialog')" type="primary">编 辑</el-button>
       
      </div> 
    </el-dialog> 
  </div>
</template> 

<script>
//引入封装好的接口
import { getMenuAdd ,getMenuInfo} from "../../util/axios";
//引入辅助性函数
import { mapActions, mapGetters } from "vuex";
// 引入封装好的二级路由
import { indexRoutes } from "../../router";
export default {
  data() {
    return {
      form: {
        title: "", //标题
        pid: 0, //上级分类编号 默认是0 是顶级
        icon: "", //图标
        type: 1, //类型1目录2菜单
        url: "", //菜单地址
        status: 1, //状态1正常2禁用
      },

      //上级菜单
      options: [
        {
          value: "选项1",
          label: "系统管理",
        },
        {
          value: "选项2",
          label: "商城管理",
        },
      ],
      rules: {
        title: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          {
            min: 2,
            max: 20,
            message: "长度在 2 到 20 个字符",
            trigger: "blur",
          },
        ],
        pid: [{ required: true, message: " 请选择上级菜单", trigger: "blur" }],
      },
      formLabelWidth: "120px",
      indexRoutes: indexRoutes,
      iconList: ["el-icon-s-tools", "el-icon-user-solid"],
    };
  },
  props: ["addInfo"],
  computed: {
    // 获取菜单列表的值
    ...mapGetters({
      menuList: "menu/getMenuList",
    }),
  },
  methods: {
    // 封装一个重置事件
    rest() {
      this.form = {
        title: "", //标题
        pid: 0, //上级分类编号 默认是0 是顶级
        icon: "", //图标
        type: 1, //类型1目录2菜单
        url: "", //菜单地址
        status: 1, //状态1正常2禁用
      };
    },
    ...mapActions({
      getMenuList: "menu/getMenuListAction",
    }),
    //取消事件，关闭弹框，修改父组件数据
    del() {
      this.$emit("del", false);
      this.rest();
    },
    // 查看一条事件
    look(id){
      getMenuInfo({id})
     
    },
    //添加事件
    add(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //添加 逻辑
          getMenuAdd(this.form).then((res) => {
            console.log(res, "添加响应");
            if (res.data.code == 200) {
              this.$message.success(res.data.msg);
              //关闭弹框
              this.del();
              //重新获取列表
              this.getMenuList();
            } else {
              this.$message.error(res.data.msg);
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 下拉菜单触发的时间
    change() {
      console.log(this.form.pid, "pid");
      if (this.form.pid == 0) {
        this.form.type = 1;
      } else {
        this.form.type = 2;
      }
    },
  },
};
</script>

<style lang="" scoped></style>
