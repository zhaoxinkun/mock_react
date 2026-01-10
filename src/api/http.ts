import service from './axios'

const http = {
  // get请求
  // NOTE: axios types default to Promise<AxiosResponse<T>>; our response interceptor returns `T`,
  // so we set the 2nd generic param (R) to `T` to match the runtime behavior.
  get: <T>(url: string, params?: object) => service.get<T, T>(url, { params }),

  // post请求
  post: <T>(url: string, params?: object) => service.post<T, T>(url, params),

  // put请求
  put: <T>(url: string, data?: object) => service.put<T, T>(url, data),

  patch: <T>(url: string, data?: object) => service.patch<T, T>(url, data),

  // 删除请求
  delete: <T>(url: string, params?: object) => service.delete<T, T>(url, { params })
}

export default http
