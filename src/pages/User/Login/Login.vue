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
        <el-form-item prop="name">
          <el-input
            placeholder="邮箱/手机号码/小米ID"
            v-model="ruleForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            type="password"
            placeholder="密码"
            v-model="ruleForm.pwd"
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
import {  reqPwdLogin } from '../../../api'
import { async } from 'q';
export default {
  data() {
    let name = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      // 输入框_防抖函数
      const nameRgp = /^[a-zA-Z][a-zA-Z0-9]{3,10}$/;
      setTimeout(() => {
        if (!nameRgp.test(value)) {
          callback(new Error("用户名由3到10位字母或者数字组成"));
        } else {
          callback();
        }
      }, 1000);
    };
    let pwd = (rule, value, callback) => {
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
        pwd: "",
        name: ""
      },
      rules: {
        pwd: [{ validator: pwd, trigger: "blur" }],
        name: [{ validator: name, trigger: "blur" }]
      }
    };
  },
  methods: {
    // 登录
    async submitForm(formName) {
      const { pwd, name } = this.ruleForm;
      this.$refs[formName].validate( async valid => {
          // 登录
          // 表单验证成功
          if (valid) {
            console.log(pwd, name);
            // 调用用户名密码接口
            const result = await reqPwdLogin(111, 222)
            // 判断调用接口返回的状态码
            if ( result.code === 0 ) {
              // 登录成功
              const user = result.data
              // 保存信息
              this.$store.dispatch('addUser', user)
              // 跳转到主页
              this.$router.replace('/home')
            }
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