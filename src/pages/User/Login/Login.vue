<template>
  <div>
      <div class="login_title">小米账号登录</div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            placeholder="邮箱/手机号码/小米ID"
            v-model="ruleForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input
            type="password"
            placeholder="密码"
            v-model="ruleForm.pass"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            style="width:100%"
            >提交</el-button
          >
          <footer>
            <span class="register" @click.prevent="goRegister">
              立即注册
            </span>
          </footer>
        </el-form-item>
      </el-form>
  </div>
</template>
<script>
import { reqPwdLogin, reqShop } from '../../../api'
export default {
  data() {
    let username = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      // 输入框_防抖函数
      const userNameRgp = /^[a-zA-Z][a-zA-Z0-9]{3,10}$/;
      setTimeout(() => {
        if (!userNameRgp.test(value)) {
          callback(new Error("用户名由3到10位字母或者数字组成"));
        } else {
          callback();
        }
      }, 1000);
    };
    let pass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      // 是否是登录
      // isLogin: true,
      ruleForm: {
        pass: "",
        username: ""
      },
      rules: {
        pass: [{ validator: pass, trigger: "blur" }],
        username: [{ validator: username, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 登录
    submitForm(formName) {
      const { pass, username } = this.ruleForm;
      this.$refs[formName].validate( valid => {
          // 登录
          // 表单验证成功
          if (valid) {
            console.log(pass, username);
            this.$router.replace('/home')
            // const userdata = await login()
            // console.log(userdata)
          } else {
            this.$message("提交错误");
            return false;
          }
      })
    },
    goRegister() {
     this.$router.push('/user/register')
    }
  },
  async mounted () {
    const result = await reqPwdLogin()
    const result2 = await reqShop()
    console.log(result)
    console.log(result2)
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
  footer
    display flex
    justify-content flex-end
    font-size 14px
    color #ff6700
</style>