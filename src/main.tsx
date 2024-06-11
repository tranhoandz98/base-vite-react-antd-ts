import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/scss/layouts.scss'
import './i18n/i18n.ts'
import WrapApp from './WrapApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WrapApp />
  </React.StrictMode>
)
