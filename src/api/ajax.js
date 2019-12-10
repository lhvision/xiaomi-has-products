// 引入axios
import axios from 'axios'
// 引入qs---将对象数据库转UrlEncoding
import qs from 'qs'
import { Message } from 'element-ui';
// 添加请求拦截器
axios.interceptors.request.use(config => {
  const { method, data } = config
  // 判断,methods中是不是POST请求,并且data应该是一个对象-->urlEncoding形式
  if (method.toUpperCase() === "POST" && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})
// 响应拦截器
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  // 判断当前的错误信息是请求的还是响应
  if (!error.response) {
    // 请求的错误信息
    Message.error("请求错误"+ error)
  } else {
    // 响应的错误
    Message.error("响应错误"+ error)
  }
  // 中断当前的错误信息,继续的响应
  return new Promise(() => { })
})

// 暴露axios
export default axios
