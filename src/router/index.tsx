import { Navigate, useRoutes } from 'react-router-dom'
import Login from '@/views/login/login'
import NotFound from '@/views/404'
import Forbidden from '@/views/403'
import { layout as Layout } from '@/layout'
import Welcome from '@/views/Welcome'

const router = [
  {
    path: '/',
    element: <Navigate to='/welcome' />
  },
  {
    path: '/login',
    element: <Login />
  },

  {
    element: <Layout />,
    children: [
      {
        path: '/welcome',
        element: <Welcome />
      }
    ]
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
