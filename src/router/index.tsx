import { Navigate, useRoutes } from 'react-router-dom'
import Login from '@/views/login'
import NotFound from '@/views/404'
import Forbidden from '@/views/403'

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

// export default createBrowserRouter(router)

export default function Router() {
  return useRoutes(router)
}
