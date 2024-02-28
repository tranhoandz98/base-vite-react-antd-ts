import { routerMain } from '@/constants/routerMain'
import MainLayout from '@/layouts/MainLayout'
import Blog from '@/pages/Blog'
import Home from '@/pages/Home'
import ProtectedRoute from './ProtectedRoute'
import RejectedRoute from './RejectedRoute'
import Login from '@/pages/Login'
import RegisterLayout from '@/layouts/RegisterLayout'

export const routers = [
  {
    path: '',
    element: <RejectedRoute />,
    children: [
      {
        path: routerMain.LOGIN,
        element: (
          <RegisterLayout>
            <Login />
          </RegisterLayout>
        )
      }
    ]
  },
  {
    path: '',
    element: <ProtectedRoute />,
    children: [
      {
        path: routerMain.BLOG,
        element: (
          <MainLayout>
            <Blog />
          </MainLayout>
        )
      }
    ]
  },
  {
    path: routerMain.HOME,
    index: true,
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    )
  }
]
