import { themeGlobal } from '@/constants/themeGlobal'
import { ThemeContext } from '@/context/theme.context'
import { NavThemeProps } from '@/types/theme.type'

import { Button, FloatButton, Layout, theme } from 'antd'
import { useContext, useState } from 'react'
import MainMenu from '../MainMenu'
import defaultSettings from '@/config/defaultSettings'
import MainLogo from '../MainLogo/MainLogo'
import ActionRightMenu from '../ActionRightMenu'
import { LeftCircleOutlined, LeftOutlined, RightCircleOutlined, RightOutlined } from '@ant-design/icons'

export default function SideBar() {
  const { Sider } = Layout

  const { token } = theme.useToken()
  const { skinBase, collapsed, setCollapsed } = useContext(ThemeContext)

  const onClickCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div
      style={{
        marginRight: ` ${!collapsed ? themeGlobal.sideBarWidth : themeGlobal.sideBarIconWidth}px`,
        transition: 'all 0.2s ease 0s'
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: themeGlobal.heightHeader + 16,
          zIndex: '200',
          left: collapsed ? themeGlobal.sideBarIconWidth - 12 : themeGlobal.sideBarWidth - 12,
          transition: 'all 0.2s ease 0s'
        }}
      >
        <Button
          shape='circle'
          size='small'
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          icon={
            !collapsed ? (
              <svg
                style={{ transition: 'transform 0.3s', transform: 'rotate(90deg)' }}
                width='1em'
                height='1em'
                viewBox='0 0 12 12'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z'></path>
              </svg>
            ) : (
              <svg
                style={{ transition: 'transform 0.3s', transform: 'rotate(-90deg)' }}
                width='1em'
                height='1em'
                viewBox='0 0 12 12'
                fill='currentColor'
                aria-hidden='true'
              >
                <path d='M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z' />
              </svg>
            )
          }
          onClick={onClickCollapsed}
        />
      </div>
      <Sider
        style={{
          boxShadow: `${token.boxShadowTertiary}`,
          overflow: 'auto',
          height: defaultSettings.layout === 'sidebar' ? '100vh' : '100vh',
          position: 'fixed',
          left: 0,
          top: defaultSettings.layout === 'sidebar' ? 0 : themeGlobal.heightHeader,
          bottom: 0,
          background: `${token.colorBgContainer}`
        }}
        // collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={themeGlobal.sideBarWidth}
        theme={skinBase as NavThemeProps}
        breakpoint='lg'
        collapsedWidth={themeGlobal.sideBarIconWidth}
      >
        {defaultSettings.layout === 'sidebar' && <MainLogo />}
        <MainMenu />
        {defaultSettings.layout === 'sidebar' && (
          <div
            style={{
              position: 'fixed',
              width: collapsed ? themeGlobal.sideBarIconWidth : themeGlobal.sideBarWidth,
              bottom: 0,
              borderTop: `1px solid ${token.colorBorder}`
            }}
          >
            <ActionRightMenu />
          </div>
        )}
      </Sider>
    </div>
  )
}
