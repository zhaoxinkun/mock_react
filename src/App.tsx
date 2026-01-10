// import { RouterProvider } from 'react-router-dom'
// import router from './router'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import GlobalLoading from '@/components/GlobalLoading'
import { useEffect, useState } from 'react'
import { registerLoading, unregisterLoading } from '@/utils/loading'
// antd的主题
import { ConfigProvider } from 'antd'

function App() {
  // return <RouterProvider router={router} />

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    registerLoading(setLoading)
    //这里是组件销毁的时候的清理函数
    return () => unregisterLoading(setLoading)
  }, [])

  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b'
          }
        }}
      >
        <Router></Router>
      </ConfigProvider>

      <GlobalLoading visible={loading} />
    </BrowserRouter>
  )
}

export default App
