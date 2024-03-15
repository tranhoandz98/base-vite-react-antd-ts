import { NavThemeDropdownProps, NavThemeProps } from '@/types/theme.type'
import { getThemeFromLS, setThemeToLs } from '@/utils/utils'
import React, { createContext, useState } from 'react'

interface ThemeContextInterface {
  themeBase: NavThemeDropdownProps
  setThemeBase: React.Dispatch<React.SetStateAction<NavThemeDropdownProps>>
  skinBase: NavThemeProps
}

const initialThemeContext: ThemeContextInterface = {
  themeBase: getThemeFromLS(),
  setThemeBase: () => null,
  skinBase: getThemeFromLS()
}

export const ThemeContext = createContext(initialThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // setState
  const [themeBase, setThemeBase] = useState<NavThemeDropdownProps>(initialThemeContext.themeBase)
  const [skinBase, setSkinBase] = useState<NavThemeProps>(initialThemeContext.skinBase)

  const rawSetTheme = (rawTheme: NavThemeDropdownProps) => {
    let theme = rawTheme
    if (rawTheme === 'system') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'dark'
      } else {
        theme = 'light'
      }
    }

    setThemeToLs(theme)
    setSkinBase(theme as NavThemeProps)
    localStorage.setItem('color-theme', theme)
  }

  React.useEffect(() => {
    rawSetTheme(themeBase)
  }, [themeBase])

  return <ThemeContext.Provider value={{ themeBase, setThemeBase, skinBase }}>{children}</ThemeContext.Provider>
}
