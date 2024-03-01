import { routerMain } from '@/constants/routerMain'
import MainLayout from '@/layouts/MainLayout'
import RegisterLayout from '@/layouts/RegisterLayout'
import Blog from '@/pages/Blog'
import Page404 from '@/pages/Errors/Page404'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import { useRoutes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import RejectedRoute from './RejectedRoute'

export default function useRouterElements() {
  const routeElements = useRoutes([
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
          path: '',
          element: <MainLayout />,
          children: [
            {
              path: routerMain.BLOG,
              element: <Blog />
            },
            {
              path: routerMain.DASHBROAD,
              element: <Home />
            },
            {
              path: routerMain.ADMIN,
              element: <Blog />,
              children: [
                {
                  path: routerMain.ADMIN_SUB,
                  element: <Blog />
                }
              ]
            },
            {
              path: routerMain.LIST,
              element: <Blog />,
              children: [
                {
                  path: routerMain.LIST_SUB,
                  element: <Blog />
                },
                {
                  path: routerMain.LIST_SUB_SUB,
                  element: <Blog />
                }
              ]
            },
            {
              path: routerMain.HOME,
              index: true,
              element: <Home />
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <Page404 />
    }
  ])

  return routeElements
}
