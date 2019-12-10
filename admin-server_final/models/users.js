/*
 用来创建Model对象
*/
const mongoose = require('mongoose');

// 创建Schema对象
const userScheam = new mongoose.Schema({
  // 约束条件
  'name': {
    type: String,
    unique: true, // 唯一的
    required: true // 必须的
  },
  'password': {
    type: String,
    required: true // 必须的
  }
});

// 创建Model对象
const Users = mongoose.model('users', userScheam);

// 暴露
module.exports = Users;
