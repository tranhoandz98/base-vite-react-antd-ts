import { NavThemeDropdownProps } from '@/types/theme.type'

export const setThemeToLs = (theme: NavThemeDropdownProps) => {
  return localStorage.setItem('color-theme', theme)
}

export const getThemeFromLS = () => {
  return (localStorage.getItem('color-theme') || 'light') as NavThemeDropdownProps
}
