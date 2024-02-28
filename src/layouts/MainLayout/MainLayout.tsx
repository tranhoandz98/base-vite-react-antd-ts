type MainLayoutProps = {
  children: React.ReactNode
  //...các props khác
}

import React, { useContext } from 'react'
import ProLayout, { ProLayoutProps } from '@ant-design/pro-layout'
import defaultSettings from '@/config/defaultSettings'
import HeaderRight from '@/components/HeaderRight'
import { ThemeContext } from '@/context/theme.context'

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { themeBase } = useContext(ThemeContext)

  return (
    <ProLayout
      {...defaultSettings}
      layout='mix'
      navTheme={themeBase}
      footerRender={() => <FooterContent />}
      rightContentRender={() => <HeaderRight />}
      // pageTitleRender={(props) => <PageTitle {...props} />}
      // postMenuData={(props) => menuDataRender(props)}
      // menuItemRender={(props) => menuItemRender(props)}
    >
      {children}
    </ProLayout>
  )
}

// Footer Content
const FooterContent: React.FC = () => (
  <div className='px-3 h-[56px] flex items-center justify-end'>This is custom footer content.</div>
)
const HeaderContent: React.FC = () => <div>This is custom header content.</div>

// Right Content (include Avatar)
const RightContent: React.FC = () => <div>This is custom right content (including Avatar)</div>

// Page Title Render
const PageTitle: React.FC<ProLayoutProps & { pageTitle: string }> = (props) => (
  <div>Custom Page Title: {props.pageTitle}</div>
)

// Menu Data Render
const menuDataRender: React.FC<ProLayoutProps> = (props) => (
  // Menu rendering logic here
  <div>menuDataRender</div>
)

// Menu Item Render
const menuItemRender: React.FC<ProLayoutProps> = (props) => (
  // Menu item rendering logic here
  <div>menuItemRender</div>
)

export default MainLayout
