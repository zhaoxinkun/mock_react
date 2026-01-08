import { createBrowserRouter, Navigate } from 'react-router-dom'
import Login from '@/views/login.tsx'
import NotFound from '@/views/404.tsx'
import Forbidden from '@/views/403.jsx'

const router = [
  {
    path: '/',
    element: <div>Welcome </div>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to='/404'></Navigate>
  },
  {
    path: '/404',
    element: <NotFound />
  },
  {
    path: '/403',
    element: <Forbidden />
  }
]

export default createBrowserRouter(router)
