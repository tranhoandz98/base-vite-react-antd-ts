import { NavThemeProps } from '@/types/theme.type'
import React, { createContext, useState } from 'react'

interface ThemeContextInterface {
  themeBase: NavThemeProps
  setThemeBase: React.Dispatch<React.SetStateAction<NavThemeProps>>
}

const initialThemeContext: ThemeContextInterface = {
  themeBase: 'light',
  setThemeBase: () => null
}

export const ThemeContext = createContext(initialThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // setState
  const [themeBase, setThemeBase] = useState<NavThemeProps>(initialThemeContext.themeBase)

  const rawSetTheme = (rawTheme: string) => {
    const root = window.document.documentElement
    const isDark = rawTheme === 'realDark'
    const twDark = rawTheme === 'realDark' ? 'dark' : rawTheme

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(twDark)

    localStorage.setItem('color-theme', twDark)
  }

  React.useEffect(() => {
    rawSetTheme(themeBase)
  }, [themeBase])

  return <ThemeContext.Provider value={{ themeBase, setThemeBase }}>{children}</ThemeContext.Provider>
}
