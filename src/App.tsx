import React, { useContext, useEffect } from 'react'
import AppRouter from './routers/AppRouter'
import { AppContext } from './context/app.context'
import { LocalStorageEventTarget } from './utils/auth'

const App: React.FC = () => {
  const { reset } = useContext(AppContext)
  useEffect(() => {
    LocalStorageEventTarget.addEventListener('clearLS', reset)
    return () => {
      LocalStorageEventTarget.removeEventListener('clearLS', reset)
    }
  }, [reset])
  return (
    <div className='bg-background dark:bg-dark-background debug-screens transition-colors duration-700 ease-out'>
      <AppRouter />
    </div>
  )
}

export default App
