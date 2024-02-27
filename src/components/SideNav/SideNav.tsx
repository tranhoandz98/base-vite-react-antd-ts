import { Layout } from 'antd'
import MenuNav from '../MenuNav'
import { useContext, useState } from 'react'
import { ThemeContext } from '~/context/theme.context'
const { Sider } = Layout

export default function SideNav() {
  const [collapsed, setCollapsed] = useState(false)
  const { themeBase } = useContext(ThemeContext)

  return (
    <>
      <Sider
        breakpoint='lg'
        // collapsedWidth="0"
        collapsible
        theme={themeBase}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        // style={{
        //   overflow: 'auto',
        //   height: '100vh',
        //   position: 'fixed',
        //   left: 0,
        //   top: 64,
        //   bottom: 0
        // }}
      >
        <div className='demo-logo-vertical' />
        <MenuNav />
      </Sider>
    </>
  )
}
