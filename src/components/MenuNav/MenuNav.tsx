import React, { useContext } from 'react'
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { type MenuProps, type MenuTheme } from 'antd'
import { ThemeContext } from '@/context/theme.context'
import { Menu, Switch } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Home', '1', <PieChartOutlined />),
  getItem('Blog', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [getItem('Tom', '3'), getItem('Bill', '4'), getItem('Alex', '5')]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />)
]

export default function MenuNav() {
  const { themeBase } = useContext(ThemeContext)

  return (
    <>
      <Menu theme={themeBase} defaultSelectedKeys={['4']} mode='inline' items={items} />
    </>
  )
}
