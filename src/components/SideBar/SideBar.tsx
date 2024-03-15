import { themeGlobal } from '@/constants/themeGlobal'
import { ThemeContext } from '@/context/theme.context'
import { NavThemeProps } from '@/types/theme.type'

import { Layout, theme } from 'antd'
import { useContext, useState } from 'react'
import MainMenu from '../MainMenu'

export default function SideBar() {
  const { Sider } = Layout

  const { token } = theme.useToken()
  const { skinBase } = useContext(ThemeContext)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div
      style={{
        marginRight: ` ${!collapsed ? themeGlobal.sideBarWidth : themeGlobal.sideBarIconWidth}px`,
        transition: 'all 0.2s ease 0s',
        // borderRight: `1px solid ${token.colorBorder}`,
        boxShadow: `${token.boxShadowTertiary}`,
        background: `${token.colorBgContainer}`,
        overflow: 'auto',
        height: '100vh',
        // position: 'fixed',
        // left: 0,
        top: 50,
        // bottom: 0
      }}
    >
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: themeGlobal.heightHeader,
          bottom: 0,
          background: `${token.colorBgContainer}`
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={themeGlobal.sideBarWidth}
        theme={skinBase as NavThemeProps}
        breakpoint='lg'
        collapsedWidth={themeGlobal.sideBarIconWidth}
      >
        <MainMenu />
      </Sider>
    </div>
  )
}
