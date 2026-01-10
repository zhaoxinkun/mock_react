import resso from 'resso'
import type { User } from '@/types/api'

const store = resso({
  token: '',
  userInfo: {
    userEmail: '',
    userName: '',
    userId: 0
  },
  updateUserInfo(userInfo: User.UserItem) {
    store.userInfo = userInfo
    console.log('updateUserInfo', userInfo)
  }
})

export default store

// 使用zustand
import { create } from 'zustand'

const useStore = create<{
  token: string
  userInfo: {
    userEmail: string
    userName: string
    userId: number
  }
  updateUserInfo(userInfo: User.UserItem): void
  updateToken(token: string): void
}>(set => ({
  token: '',
  userInfo: {
    userEmail: '',
    userName: '',
    userId: 0
  },
  updateUserInfo(userInfo: User.UserItem) {
    set({ userInfo })
  },
  updateToken(token: string) {
    set({ token })
  }
}))

export { useStore }
