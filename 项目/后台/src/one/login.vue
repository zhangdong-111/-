<template>
  <div>
    <!-- 
        el-form 属性 model 表单数据对象 rules 表单验证规则 
        el-input clearable可清空    show-password 是否显示密码 
    --> 
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-width="100px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="loginForm.password"
          show-password
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //表单输入参
      loginForm: {
        username: "",
        password: ""
      },
      //规则验证
      rules: {
        //用户名验证
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 15, message: "长度在 2 到 15 个字符", trigger: "blur" }
        ],
        //密码验证
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //登录
    login(formName) {
      //validate 验证
      this.$refs[formName].validate(valid => {
        if (valid) {
          //登录逻辑
           if (
            this.loginForm.username == "admin" &&
            this.loginForm.password == "123456"
          ) {
            this.$message.success("登录成功");
            this.$router.push("/index");
          } else {
            this.$message.error("用户名或者密码不正确");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.el-form
  width 400px
  height 200px
  margin 0 auto
</style>
