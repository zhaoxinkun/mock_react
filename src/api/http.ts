import service from './axios'

const http = {
  // get请求
  get: (url: string, params: unknown) => service.get(url, { params }),

  // post请求
  post: (url: string, params: unknown) => service.post(url, params),

  // put请求
  put: (url: string, data: object) => service.put(url, data),

  patch: (url: string, data: object) => service.patch(url, data),

  // 删除请求
  delete: (url: string, params: unknown) => service.delete(url, { params })
}

export default http
