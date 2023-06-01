/** @format */

import axios from 'axios'
import loading from '@/plugins/loading'

// 创建请求
const service = axios.create({
  baseURL: process.env.VUE_APP_API, //.env文件配置接口地址
  timeout: 40 * 1000, // 超时
})

// 请求前
service.interceptors.request.use(
  (config) => {
    // 打开loading
    loading.openLoading()
    // 默认参数
    let defalutParams = {
      userId: 'demo',
      version: 'v1',
    }
    // 默认请求头
    const headers = {
      token: '12345678',
    }
    config.params = Object.assign(defalutParams, config.params || {})
    config.headers = Object.assign(headers, config.headers || {})
    return config
  },
  (error) => {
    loading.closeLoading({ default: true })
    return Promise.reject(error)
  }
)

// 请求结果
service.interceptors.response.use(
  (response) => {
    //返回数据
    const res = response.data
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 请求结果
service.interceptors.response.use(
  (response) => {
    //返回数据
    loading.closeLoading({ default: true })
    const res = response.data
    return res
  },
  (error) => {
    loading.closeLoading({ default: true })
    return Promise.reject(error)
  }
)
