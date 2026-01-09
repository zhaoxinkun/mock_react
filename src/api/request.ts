import http from './http'

export const login = (data: object) => http.post('/user/login', data)
