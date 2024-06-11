import { themeGlobal } from '@/constants/themeGlobal'
import { Layout, Space, theme } from 'antd'
import AvatarDropdown from '../AvatarDropdown'
import LangDropdown from '../LangDropdown'
import ThemeDropdown from '../ThemeDropdown'
import MainLogo from '../MainLogo/MainLogo'
import defaultSettings from '@/config/defaultSettings'
import MainMenu from '../MainMenu'
import ActionRightMenu from '../ActionRightMenu'

export default function HeaderMain() {
  const { Header } = Layout
  const { token } = theme.useToken()

  return (
    <Header
      style={{
        // borderBottom: `1px solid ${token.colorBorder}`,
        boxShadow: `${token.boxShadowTertiary}`,
        height: `${themeGlobal.heightHeader}px`,
        display: 'flex',
        // justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        width: '100%',
        top: 0,
        zIndex: 100,
        insetInlineEnd: 0,
        background: `${token.colorBgContainer}`,
        insetBlockStart: 0,
        padding: '0px 30px'
      }}
    >
      <MainLogo />
      {defaultSettings.layout === 'top' && <MainMenu mode='horizontal' />}
      <div style={{ marginLeft: 'auto' }}>
        <ActionRightMenu />
      </div>
    </Header>
  )
}
