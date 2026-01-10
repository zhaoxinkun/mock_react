// import { RouterProvider } from 'react-router-dom'
// import router from './router'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import GlobalLoading from '@/components/GlobalLoading'
import { App as AntdApp } from 'antd'
// antd的主题
import { ConfigProvider } from 'antd'
import { useGlobalLoading } from '@/hooks/useGlobalLoading'

function App() {
  // return <RouterProvider router={router} />

  // const [loading, setLoading] = useState(false)
  //
  // useEffect(() => {
  //   registerLoading(setLoading)
  //   //这里是组件销毁的时候的清理函数
  //   return () => unregisterLoading(setLoading)
  // }, [])

  const loading = useGlobalLoading()

  return (
    <AntdApp>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#FFCC00'
            }
          }}
        >
          <Router></Router>
        </ConfigProvider>

        <GlobalLoading visible={loading} />
      </BrowserRouter>
    </AntdApp>
  )
}

export default App
