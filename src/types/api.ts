// api接口类型定义

// 响应拦截器的类型
// 响应拦截器的类型
export interface ApiResponse<T = any> {
  code: number
  data: T
  msg: string
}

// 命名全局空间 --login
export namespace login {
  export interface Params {
    userName: string
    userPwd: string
  }
}
