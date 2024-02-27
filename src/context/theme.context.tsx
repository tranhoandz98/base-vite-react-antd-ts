import { MenuTheme } from 'antd'
import React, { createContext, useState } from 'react'

interface ThemeContextInterface {
  themeBase: MenuTheme
  setThemeBase: React.Dispatch<React.SetStateAction<MenuTheme>>
}

const initialThemeContext: ThemeContextInterface = {
  themeBase: 'light',
  setThemeBase: () => null
}

export const ThemeContext = createContext(initialThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // setState
  const [themeBase, setThemeBase] = useState<MenuTheme>(initialThemeContext.themeBase)

  return <ThemeContext.Provider value={{ themeBase, setThemeBase }}>{children}</ThemeContext.Provider>
}
