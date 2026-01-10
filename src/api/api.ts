/*
 * 这里是所有的请求
 *
 * */

import http from './http'

import type { login as LoginParams, User } from '@/types/api'

// 登陆
export const login = (params: LoginParams.Params) => http.post<string>(`/users/login`, params)

// 获取用户信息
export const getUserInfo = () => http.get<User.UserItem>(`/users/getUserInfo`)
