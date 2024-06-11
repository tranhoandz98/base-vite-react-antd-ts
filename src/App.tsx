import { ConfigProvider, theme } from 'antd'
import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AppContext } from './context/app.context'
import { ThemeContext } from './context/theme.context'
import { localesAntd } from './i18n/i18n'
import AppRouter from './routers/AppRouter'
import { LocalStorageEventTarget } from './utils/auth'
import defaultSettings from './config/defaultSettings'

const App: React.FC = () => {
  const { reset } = useContext(AppContext)

  const { i18n } = useTranslation()
  const currentLanguageAntd = localesAntd[i18n.language as keyof typeof localesAntd]
  const { skinBase } = useContext(ThemeContext)

  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: defaultSettings.colorPrimary
        },
        // cssVar: true,
        hashed: false,
        algorithm: skinBase === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
      }}
      locale={currentLanguageAntd}
    >
      <AppRouter />
    </ConfigProvider>
  )
}

export default App
