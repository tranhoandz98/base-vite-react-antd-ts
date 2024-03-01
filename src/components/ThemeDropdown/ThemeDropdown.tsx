import { ThemeContext } from '@/context/theme.context'
import { NavThemeProps } from '@/types/theme.type'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Button, Dropdown } from 'antd'
import { useContext, useState } from 'react'
import { VscColorMode } from 'react-icons/vsc'
interface ThemeItemProps {
  key: string
  icon: JSX.Element
  label: JSX.Element
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (e: any) => void
}

export default function ThemeDropdown() {
  const { setThemeBase, themeBase } = useContext(ThemeContext)
  const items: ThemeItemProps[] = [
    {
      key: 'light',
      icon: <SunOutlined />,
      label: <span>Light</span>,
      onClick: (e) => {
        changeTheme(e.key as NavThemeProps)
      }
    },
    {
      key: 'realDark',
      icon: <MoonOutlined />,
      label: <span>Dark</span>,
      onClick: (e) => {
        changeTheme(e.key as NavThemeProps)
      }
    },
    {
      key: 'system',
      icon: <VscColorMode />,
      label: <span>System</span>,
      onClick: (e) => {
        changeTheme(e.key as NavThemeProps)
      }
    }
  ]
  const [themeDropdown, setThemeDropdown] = useState<ThemeItemProps>(items[0])

  const changeTheme = (value: NavThemeProps) => {
    const itemTheme = items.find((itemT) => itemT?.key === value) as ThemeItemProps
    console.log('itemTheme: ', itemTheme)
    setThemeDropdown(itemTheme)
    setThemeBase(value)
  }

  return (
    <Dropdown className='border-transparent' menu={{ items, selectedKeys: [themeBase] }} placement='bottomRight'>
      <Button type='text' icon={themeDropdown.icon}></Button>
    </Dropdown>
  )
}
