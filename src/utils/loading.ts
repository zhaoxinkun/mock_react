// utils/loading.ts
let setLoading: ((v: boolean) => void) | null = null

let count: number = 0

export const registerLoading = (fn: (v: boolean) => void) => {
  setLoading = fn
}

export const showLoading = () => {
  if (count === 0) setLoading?.(true)
  count++
}

export const hideLoading = () => {
  count--
  if (count <= 0) setLoading?.(false)
}
