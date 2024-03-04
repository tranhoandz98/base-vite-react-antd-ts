import { NavThemeDropdownProps } from '@/types/theme.type'
import { getThemeFromLS, setThemeToLs } from '@/utils/utils'
import React, { createContext, useState } from 'react'

interface ThemeContextInterface {
  themeBase: NavThemeDropdownProps
  setThemeBase: React.Dispatch<React.SetStateAction<NavThemeDropdownProps>>
}

const initialThemeContext: ThemeContextInterface = {
  themeBase: getThemeFromLS(),
  setThemeBase: () => null
}

export const ThemeContext = createContext(initialThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // setState
  const [themeBase, setThemeBase] = useState<NavThemeDropdownProps>(initialThemeContext.themeBase)

  const rawSetTheme = (rawTheme: NavThemeDropdownProps) => {
    const root = window.document.documentElement

    let theme = rawTheme
    if (rawTheme === 'system') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme = 'realDark'
      } else {
        theme = 'light'
      }
    }
    const isDark = theme === 'realDark'
    const twClassDark = theme === 'realDark' ? 'dark' : theme

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(twClassDark)

    setThemeToLs(theme)
    localStorage.setItem('color-theme', theme)
  }

  React.useEffect(() => {
    rawSetTheme(themeBase)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeBase])

  return <ThemeContext.Provider value={{ themeBase, setThemeBase }}>{children}</ThemeContext.Provider>
}
