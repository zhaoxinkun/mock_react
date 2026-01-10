import { useCallback, useState } from 'react'

export function useRequestLoading<T>(requestFn: () => Promise<T>) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<any>(null)

  // 发送请求
  const run = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const res = await requestFn()
      setData(res)
    } catch (e) {
      setError(e)
    } finally {
      setIsLoading(false)
    }
  }, [requestFn])

  return {
    isLoading,
    data,
    error,
    run
  }
}
