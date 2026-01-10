// localStorage的封装

export default {
  set(key: string, value: string | object | null) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  get(key: string) {
    const value = localStorage.getItem(key)
    if (!value) return null
    try {
      return JSON.parse(value)
    } catch (value) {
      return value
    }
  },

  remove(key: string) {
    localStorage.removeItem(key)
  },

  clear() {
    localStorage.clear()
  }
}
