// utils/loading.ts
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
  console.log('showLoading', count)
  if (count < 0 || Number.isNaN(count)) count = 0
  if (count === 0) setLoading?.(true)
  count++
}

export const hideLoading = () => {
  console.log('hideLoading', count)
  if (count > 0) count--
  else count = 0
  if (count === 0) setLoading?.(false)
}
