import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider } from 'antd'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppProvider } from './context/app.context'
import { ThemeProvider } from './context/theme.context'
import viVNIntl from 'antd/lib/locale/vi_VN'

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
                  cssVar: true,
                  hashed: false
                }}
                locale={viVNIntl}
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
