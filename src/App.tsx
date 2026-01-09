// import { RouterProvider } from 'react-router-dom'
// import router from './router'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import GlobalLoading from '@/components/GlobalLoading'
import { useEffect, useState } from 'react'
import { registerLoading } from '@/utils/loading'

function App() {
  // return <RouterProvider router={router} />

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    registerLoading(setLoading)
  }, [])

  return (
    <BrowserRouter>
      <Router></Router>
      <GlobalLoading visible={loading} />
    </BrowserRouter>
  )
}

export default App
