// 这是最简单的loading

import { useCallback, useState } from 'react'

export function useLoading() {
  const [loading, setLoading] = useState<boolean>(false)

  const start = useCallback(() => {
    setLoading(true)
  }, [])

  const end = useCallback(() => {
    setLoading(false)
  }, [])

  return {
    loading,
    start,
    end
  }
}
