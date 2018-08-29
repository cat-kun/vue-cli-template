import axios from 'axios'
import { getToken } from './auth'

// 创建 axios 实例
const service = axios.create({
  // API的接口地址
  baseURL: process.env.BASE_API,
  // 超时时间
  // timeout: 5000
})

// 添加请求拦截器
service.interceptors.request.use( config => {
  // 在发送请求之前做些什么
  config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改

  return config
}, error => {
  console.log('err', error);
  // 对请求错误做些什么
  return Promise.reject(error);
})

// 添加响应拦截器
service.interceptors.response.use(response => {
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过xmlhttprequest来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  const res = response.data
  if( res.code != 0 ){
    // 请自行引入 message
    // this.$message.error(res.msg)
    // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //   // 请自行引入 MessageBox
    //   // import { Message, MessageBox } from 'element-ui'
    //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
    //     confirmButtonText: '重新登录',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     store.dispatch('FedLogOut').then(() => {
    //       location.reload() // 为了重新实例化vue-router对象 避免bug
    //     })
    //   })
    // }
    return Promise.reject('error')
  }else{
    return response.data
  }  
}, error => {
  // 对响应错误做点什么
  console.log(error)
  return Promise.reject(error);
})

export default service