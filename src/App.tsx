import React from 'react'
import AppRouter from './routers/AppRouter'

const App: React.FC = () => {
  return (
    <div className='bg-background dark:bg-dark-background debug-screens transition-colors duration-700 ease-out'>
      <AppRouter />
    </div>
  )
}

export default App
