import { NavThemeDropdownProps, NavThemeProps } from '@/types/theme.type'
import { getThemeFromLS, setThemeToLs } from '@/utils/utils'
import React, { createContext, useState } from 'react'

interface ThemeContextInterface {
  themeBase: NavThemeDropdownProps
  setThemeBase: React.Dispatch<React.SetStateAction<NavThemeDropdownProps>>
  skinBase: NavThemeProps
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

const initialThemeContext: ThemeContextInterface = {
  themeBase: getThemeFromLS(),
  setThemeBase: () => null,
  skinBase: getThemeFromLS(),
  collapsed: false,
  setCollapsed: () => null
}

export const ThemeContext = createContext(initialThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // setState
  const [themeBase, setThemeBase] = useState<NavThemeDropdownProps>(initialThemeContext.themeBase)
  const [skinBase, setSkinBase] = useState<NavThemeProps>(initialThemeContext.skinBase)
  const [collapsed, setCollapsed] = useState(initialThemeContext.collapsed)

  const rawSetTheme = (rawTheme: NavThemeDropdownProps) => {
    const root = window.document.documentElement

    let theme = rawTheme
    if (rawTheme === 'system') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark'
      } else {
        theme = 'light'
      }
    }

    const isDark = theme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(theme)

    setThemeToLs(theme)
    setSkinBase(theme as NavThemeProps)
    localStorage.setItem('color-theme', theme)
  }

  React.useEffect(() => {
    rawSetTheme(themeBase)
  }, [themeBase])

  return (
    <ThemeContext.Provider value={{ themeBase, setThemeBase, skinBase, collapsed, setCollapsed }}>
      {children}
    </ThemeContext.Provider>
  )
}
