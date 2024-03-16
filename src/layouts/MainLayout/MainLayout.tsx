import ContentMain from '@/components/ContentMain/ContentMain'
import FooterMain from '@/components/FooterMain'
import HeaderMain from '@/components/HeaderMain'
import SideBar from '@/components/SideBar'
import defaultSettings from '@/config/defaultSettings'
import { FloatButton, Layout } from 'antd'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  const LayoutC = {
    top: (
      <>
        <Layout>
          <HeaderMain />
          <ContentMain>
            <Outlet />
          </ContentMain>
          <FooterMain />
          <FloatButton.BackTop />
        </Layout>
      </>
    ),
    sidebar: (
      <>
        <Layout>
          <SideBar />
          <Layout>
            <ContentMain>
              <Outlet />
            </ContentMain>
            <FooterMain />
          </Layout>
          <FloatButton.BackTop />
        </Layout>
      </>
    ),
    mix: (
      <>
        <Layout>
          <HeaderMain />
          <Layout>
            <SideBar />
            <Layout>
              <ContentMain>
                <Outlet />
              </ContentMain>
            </Layout>
          </Layout>
          <FooterMain />
          <FloatButton.BackTop />
        </Layout>
      </>
    )
  }

  const genderLayout = LayoutC[defaultSettings.layout] || LayoutC.mix
  return genderLayout
}
