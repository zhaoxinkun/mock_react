import { useEffect, useState } from 'react'
import { registerLoading, unregisterLoading } from '@/utils/loading'

export function useGlobalLoading() {
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    // 注册
    registerLoading(setLoading)

    return () => {
      // 注销
      unregisterLoading(setLoading)
    }
  }, [])

  return loading
}
