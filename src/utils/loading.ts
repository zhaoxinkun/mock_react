// utils/loading.ts
/**
 * 全局loading状态管理
 * @param fn 回调函数
 * @returns 回调函数
 *
 */

let setLoading: ((v: boolean) => void) | null = null

let count: number = 0

export const registerLoading = (fn: (v: boolean) => void) => {
  setLoading = fn
  fn(count > 0)
}

export const unregisterLoading = (fn: (v: boolean) => void) => {
  if (setLoading === fn) setLoading = null
}

export const showLoading = () => {
  if (count < 0 || Number.isNaN(count)) count = 0
  if (count === 0) setLoading?.(true)
  count++
}

export const hideLoading = () => {
  if (count > 0) count--
  else count = 0
  if (count === 0) setLoading?.(false)
}
