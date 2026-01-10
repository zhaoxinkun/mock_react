/**
 * token的封装
 * @param token token值
 * @returns token值
 */

const tokenKey = 'token'

export const getToken = () => {
  return localStorage.getItem(tokenKey)
}

export const setToken = (token: string) => {
  localStorage.setItem(tokenKey, token)
}

export const removeToken = () => {
  localStorage.removeItem(tokenKey)
}
