import { routerMain } from '@/constants/routerMain'
import MainLayout from '@/layouts/MainLayout'
import RegisterLayout from '@/layouts/RegisterLayout'
import { useRoutes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import RejectedRoute from './RejectedRoute'
import { Suspense, lazy } from 'react'
import ComponentCs from '@/pages/ComponentCs'
import SpinnerLoading from '@/components/SpinnerLoading'

export default function useRouterElements() {
  const Login = lazy(() => import('@/pages/Login'))
  const Dashboard = lazy(() => import('@/pages/Dashboard'))
  const Blog = lazy(() => import('@/pages/Blog'))
  const Page404 = lazy(() => import('@/pages/Errors/Page404'))

  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: routerMain.LOGIN,
          element: (
            <RegisterLayout>
              <Suspense>
                <Login />
              </Suspense>
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
              element: (
                <Suspense fallback={<SpinnerLoading />}>
                  <Blog />
                </Suspense>
              )
            },
            {
              path: routerMain.DASHBOARD,
              element: (
                <Suspense fallback={<SpinnerLoading />}>
                  <Dashboard />
                </Suspense>
              )
            },
            {
              path: routerMain.COMPONENT,
              children: [
                {
                  path: routerMain.COMPONENT_SUB,
                  element: (
                    <Suspense fallback={<SpinnerLoading />}>
                      <ComponentCs />
                    </Suspense>
                  )
                }
              ]
            },
            {
              path: routerMain.HOME,
              index: true,
              element: (
                <Suspense>
                  <Dashboard />
                </Suspense>
              )
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: (
        <Suspense>
          <Page404 />
        </Suspense>
      )
    }
  ])

  return routeElements
}
