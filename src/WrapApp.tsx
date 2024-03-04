import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ConfigProvider } from 'antd'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppProvider } from './context/app.context'
import { ThemeProvider } from './context/theme.context'
import { useTranslation } from 'react-i18next'
import { localesAntd } from './i18n/i18n'

const WrapApp: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } }
  })

  const { i18n } = useTranslation()
  const currentLanguageAntd = localesAntd[i18n.language as keyof typeof localesAntd]

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
                locale={currentLanguageAntd}
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
