<template>
  <div>
    <div class="login_title">小米账号注册</div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
    >
      <el-form-item prop="username">
        <el-input
          placeholder="请输入注册的用户名"
          v-model="ruleForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="ruleForm.pass"
        ></el-input>
      </el-form-item>
      <el-form-item  prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          placeholder="确认密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          style="width:100%"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    // 验证用户名
    let username = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      // 输入框_防抖函数
      const userNameRgp = /^[a-zA-Z][a-zA-Z0-9]{3,10}$/;
      setTimeout(() => {
        if (!userNameRgp.test(value)) {
          // 清空输入框
          this.ruleForm.username = "";
          callback(new Error("用户名由3到10位字母或者数字组成"));
        } else {
          callback()
        }
      }, 1000)
    }

    // 验证密码
    let pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback()
      }
    }

    // 验证两次的密码是否一致
    let checkPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
            // 清空输入框
          this.ruleForm.checkPass = this.ruleForm.pass = ""
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      // 是否是登录
      // isLogin: true,
      ruleForm: {
        pass: "",
        username: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: pass, trigger: "blur" }],
        username: [{ validator: username, trigger: "blur" }],
        checkPass: [{ validator: checkPass, trigger: "blur" }]
      }
    };
  },
  methods: {
   // 注册
    submitForm(formName) {
      const { pass, username } = this.ruleForm;
      this.$refs[formName].validate( valid => {
          // 注册
          if (valid) {
            console.log(pass, username);
          } else {
            this.$message("提交错误");
            return false;
          }
      })
    }
  }
};
</script>
<style scopde lang="stylus" rel="stylesheet/stylus">
.login_title
  padding 22px 0
  font-size 30px
  padding 50px 0 22px
  text-align center
.demo-ruleForm
  width 356px
  height 369px
  .el-input__inner
    height 48px
    padding 13px 16px 13px 14px
  .el-button
    background-color #ff6700
    height 48px
</style>
