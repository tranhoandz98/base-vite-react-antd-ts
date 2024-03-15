import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ErrorBoundary from 'antd/es/alert/ErrorBoundary'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppProvider } from './context/app.context'
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
                <App />
            </ThemeProvider>
          </AppProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default WrapApp
