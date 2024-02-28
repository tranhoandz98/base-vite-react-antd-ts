import { ThemeContext } from '@/context/theme.context'
import { NavThemeProps } from '@/types/theme.type'
import { DesktopOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown } from 'antd'
import { useContext, useState } from 'react'
import type { MenuItemType } from 'rc-menu/lib/interface'

export default function ThemeDropdown() {
  const { setThemeBase } = useContext(ThemeContext)
  const items: MenuProps['items'] = [
    {
      key: '1',
      itemIcon: <SunOutlined />,
      label: <span>Light</span>,
      onClick: (e) => {
        changeTheme(e.key)
      }
    },
    {
      key: '2',
      itemIcon: <MoonOutlined />,
      label: <span>Dark</span>,
      onClick: (e) => {
        changeTheme(e.key)
      }
    },
    {
      key: '3',
      itemIcon: <DesktopOutlined />,
      label: <span>System</span>,
      onClick: (e) => {
        changeTheme(e.key)
      }
    }
  ]
  const [themeDropdown, setThemeDropdown] = useState<MenuItemType>(items[0])
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  const changeTheme = (value: string) => {
    let theme: NavThemeProps = 'light'
    const itemTheme = items.find((itemT) => itemT?.key === value)
    setThemeDropdown(itemTheme)
    switch (value) {
      case '1':
        theme = 'light'
        break
      case '2':
        theme = 'realDark'

        break
      case '3':
        if (userPrefersDark) {
          theme = 'realDark'
        } else {
          theme = 'light'
        }
        break
      default:
        break
    }
    setThemeBase(theme)
  }

  const defaultSelectedKeys = '1'

  return (
    <Dropdown menu={{ items, defaultSelectedKeys: [defaultSelectedKeys] }} placement='bottomRight' arrow>
      <Button>
        {themeDropdown?.label}
        {themeDropdown?.itemIcon}
      </Button>
    </Dropdown>
  )
}
