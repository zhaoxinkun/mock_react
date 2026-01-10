// api接口类型定义

// 响应拦截器的类型
// 响应拦截器的类型
export interface Result<T = any> {
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

export interface PageParams {
  pageNum: number
  pageSize?: number
}

// 用户管理
export namespace User {
  export interface Params extends PageParams {
    userId?: number
    userName?: string
    state?: number
  }

  export interface SearchParams {
    userId?: number
    userName?: string
    state?: number
  }

  export interface UserItem {
    _id: string
    userId: number
    userName: string
    userEmail: string
    deptId: string
    state: number
    mobile: string
    job: string
    role: number
    roleList: string
    createId: number
    deptName: string
    userImg: string
  }

  export interface CreateParams {
    userName: string
    userEmail: string
    mobile?: number
    deptId: string
    job?: string
    state?: number
    roleList: string[]
    userImg: string
  }

  export interface EditParams extends CreateParams {
    userId: number
  }
}
