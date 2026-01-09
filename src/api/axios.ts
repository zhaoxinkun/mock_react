// axios实例的封装
import axios from 'axios'
import { getToken, removeToken } from '@/utils/token'
import type { ApiResponse } from '@/types/api'
import { message } from 'antd'
import { showLoading, hideLoading } from '@/utils/loading'

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
  timeoutErrorMessage: '请求超时,请稍后重试',
  withCredentials: true
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    showLoading()
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return {
      ...config
    }
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    hideLoading()
    const data = response.data as ApiResponse<any>

    if (data.code === 500001) {
      message.error(data.msg)
      removeToken()
      location.href = '/login'
      return Promise.reject(data)
    } else if (data.code !== 0) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return data.data
  },
  error => {
    hideLoading()
    if (error.response.status === 403) {
      window.location.href = '/403'
    }
    return Promise.reject(error)
  }
)

export default service
