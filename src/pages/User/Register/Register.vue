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
      <el-form-item prop="name">
        <el-input
          placeholder="请输入注册的用户名"
          v-model="ruleForm.name"
        ></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input
          type="password"
          placeholder="请输入密码"
          v-model="ruleForm.pwd"
        ></el-input>
      </el-form-item>
      <el-form-item  prop="checkpwd">
        <el-input
          type="password"
          v-model="ruleForm.checkpwd"
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
// 引入接口
import { reqRegister } from '../../../api'
export default {
  data() {
    // 验证用户名
    let name = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      // 输入框_防抖函数
      const nameRgp = /^[a-zA-Z][a-zA-Z0-9]{3,10}$/;
      setTimeout(() => {
        if (!nameRgp.test(value)) {
          // 清空输入框
          this.ruleForm.name = "";
          callback(new Error("用户名由3到10位字母或者数字组成"));
        } else {
          callback()
        }
      }, 1000)
    }

    // 验证密码
    let pwd = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback()
      }
    }

    // 验证两次的密码是否一致
    let checkpwd = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pwd) {
            // 清空输入框
          this.ruleForm.checkpwd = this.ruleForm.pwd = ""
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      // 是否是登录
      // isLogin: true,
      ruleForm: {
        pwd: "",
        name: "",
        checkpwd: ""
      },
      rules: {
        pwd: [{ validator: pwd, trigger: "blur" }],
        name: [{ validator: name, trigger: "blur" }],
        checkpwd: [{ validator: checkpwd, trigger: "blur" }]
      }
    };
  },
  methods: {
   // 注册
    async submitForm(formName) {
      const { pwd, name } = this.ruleForm;
      this.$refs[formName].validate( async valid => {
          // 注册
          if (valid) {
            console.log(pwd, name);
            // 调用注册接口
            const result = await reqRegister(name, pwd)
            // 注册成功
            if (result.code === 0) {
               this.$alert('注册成功呐~W', '提示', {
                confirmButtonText: '去登录',
                callback: action => {
                  this.$message({
                    showClose: true,
                    message: `用户名: ${name}`,
                    type: 'success'
                  })
                  // 去登陆
                  this.$router.replace('/user/login')
                }
              })
            } else if ( result.code === 1 ) {
              this.$message({
                showClose: true,
                message: '账号已存在请重试~W',
                type: 'error'
              })
            }
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
