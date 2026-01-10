// axios实例的封装
import axios from 'axios'
import type { ApiResponse } from '@/types/api'
import { message } from 'antd'
import { showLoading, hideLoading } from '@/utils/loading'
import storage from '@/utils/storage'

// 读取env的地址
console.log(import.meta.env.VITE_BASE_API)

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000,
  timeoutErrorMessage: '请求超时,请稍后重试',
  withCredentials: true,
  headers: {
    icode: '593F88CA4639E2DA'
  }
})

service.interceptors.request.use(
  config => {
    showLoading()
    const token = storage.get('token')
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
    }
    return {
      ...config
    }
  },
  error => {
    hideLoading()
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    hideLoading()
    const data: ApiResponse = response.data

    if (data.code === 500001) {
      message.error(data.msg)
      storage.remove('token')
      return Promise.reject(data)
    } else if (data.code !== 0) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return data.data
  },
  error => {
    hideLoading()
    const status = error.response?.status
    if (status === 403) {
      window.location.href = '/403'
    }
    return Promise.reject(error)
  }
)

export default service
