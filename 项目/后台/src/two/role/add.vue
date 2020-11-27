<template>
  <div>
    <el-dialog
      :title="addInfo.isAdd ? '添加角色' : '修改角色'"
      :visible.sync="addInfo.isShow"
      :before-close="cancel"
      center
    >
      <el-form :model="form" :rules="rules">
        <el-form-item
          prop="rolename"
          label="角色名称:"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限:" :label-width="formLabelWidth">
          <el-tree
            :data="menuList"
            default-expand-all
            node-key="id"
            ref="tree"
            :props="{
              children: 'children',
              label: 'title',
            }"
            show-checkbox
          >
          </el-tree>
        </el-form-item>
        <el-form-item label="状态:" :label-width="formLabelWidth">
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
        <el-button @click="cancel">取 消</el-button>
        <el-button v-if="addInfo.isAdd" @click="add" type="primary"
          >添 加</el-button
        >
        <el-button @click="update" v-else type="primary">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template> 

<script>
//引入封装好的接口
import { getRoleAdd, getRoleInfo, getRoleEdit } from "../../util/axios";
//引入辅助性函数
import { mapActions, mapGetters } from "vuex";
// 引入封装好的二级路由
import { indexRoutes } from "../../router";
export default {
  data() {
    return {
      form: {
        rolename: "",
        menus: "",
        status: 1,
      },

      //上级菜单
      // options: [
      //   {
      //     value: "选项1",
      //     label: "系统管理",
      //   },
      //   {
      //     value: "选项2",
      //     label: "商城管理",
      //   },
      // ],
      rules: {
        rolename: [
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
  mounted() {
    if (this.menuList.length == 0) {
      this.getMenuList();
    }
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
      getRoleList: "role/getRoleAction",
    }),
    //取消事件，关闭弹框，修改父组件数据
    cancel() {
      this.$emit("cancel", false);
      // 重置
      this.rest();
    },
    // 查看一条事件
    look(id) {
      //调取查看接口
      getRoleInfo({ id })
      .then((res) => {
        console.log(res, "获取一条数据");
        if (res.data.code == 200) {
          this.form = res.data.list;
          //setCheckedKeys 	通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性
          this.form.menus = this.$refs.tree.setCheckedKeys(
            JSON.parse(this.form.menus)
          );
          this.form.id = id;
        }
      }); 
    },
    //添加事件
    add() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      //调取添加接口
      getRoleAdd(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.getRoleList();
          this.cancel();
        } else {
          this.$message.error(res.data.msg);
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
      //编辑确定事件
    update() {
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      //调取添加接口
      getRoleEdit(this.form).then((res) => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg);
          this.getRoleList();
          this.cancel();
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
  },
};
</script>

<style lang="" scoped></style>
