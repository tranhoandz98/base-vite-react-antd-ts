import { ConfigProvider } from 'antd'
import vi_VN from 'antd/locale/vi_VN'
import React from 'react'
import App from './App'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProvider } from './context/app.context'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from './context/theme.context'

const WrapApp: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } }
  })
  return (
    <ErrorBoundary>
      <BrowserRouter basename='/'>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <ThemeProvider>
              <ConfigProvider
                theme={{
                  token: {},
                  cssVar: true
                }}
                locale={vi_VN}
              >
                <App />
              </ConfigProvider>
            </ThemeProvider>
          </AppProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default WrapApp
