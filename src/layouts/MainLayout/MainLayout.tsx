import ContentMain from '@/components/ContentMain/ContentMain'
import FooterMain from '@/components/FooterMain'
import HeaderMain from '@/components/HeaderMain'
import SideBar from '@/components/SideBar'
import { themeGlobal } from '@/constants/themeGlobal'
import { Layout } from 'antd'
import clsx from 'clsx'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  // const useStyles = createStyles(({ token }) => {
  //   return {
  //     container: {
  //       background: `linear-gradient(#ffffff, #f5f5f5 28%);`,
  //       // pointerEvents: 'none',
  //       position: 'fixed',
  //       overflow: 'hidden',
  //       insetBlockStart: 0,
  //       insetInlineStart: 0,
  //       zIndex: 0,
  //       height: '100%',
  //       width: '100%'
  //     }
  //   }
  // })

  return (
    <Layout
      style={{
        background: `linear-gradient(#ffffff, #f5f5f5 28%);`
      }}
    >
      <HeaderMain />
      <Layout>
        <SideBar />
        <ContentMain>
          <Outlet />
        </ContentMain>
      </Layout>
      <FooterMain />
    </Layout>
  )
}
