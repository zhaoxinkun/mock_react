import service from './axios'

const http = {
  // get请求
  get: <T>(url: string, params?: object) => service.get<T>(url, { params }),

  // post请求
  post: <T>(url: string, params?: object) => service.post<T>(url, params),

  // put请求
  put: <T>(url: string, data?: object) => service.put<T>(url, data),

  patch: <T>(url: string, data?: object) => service.patch<T>(url, data),

  // 删除请求
  delete: <T>(url: string, params?: object) => service.delete<T>(url, { params })
}

export default http
