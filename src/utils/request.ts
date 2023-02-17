import axios from "axios"

const request = axios.create({
  baseURL: ""
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // 一般在这里设置token
  console.log("config", config)
  return config
}, function (err) {
  return Promise.reject(err)
})

request.interceptors.response.use(function (config) { return config }, function (err) { return Promise.reject(err) })

export default request
