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
