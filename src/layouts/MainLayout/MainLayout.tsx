// import { Layout } from 'antd'
// import React from 'react'
// import HeaderC from '~/components/HeaderC'
// import SideNav from '~/components/SideNav/SideNav'

// type MyComponentProps = {
//   children: React.ReactNode
//   //...các props khác
// }

// const MainLayout: React.FC<MyComponentProps> = ({ children }) => {
//   const { Content, Footer } = Layout

//   return (
//     <Layout style={{ minHeight: '100vh' }}>
//       <HeaderC />
//       <Layout>
//         <SideNav />
//         <Layout>
//           <Content style={{ margin: '0 16px' }}>{children}</Content>
//           <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
//         </Layout>
//       </Layout>
//     </Layout>
//   )
// }

// export default MainLayout

type MainLayoutProps = {
  children: React.ReactNode
  //...các props khác
}

import React from 'react';
import ProLayout, { ProLayoutProps } from '@ant-design/pro-layout';
import defaultSettings from '~/config/defaultSettings';

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <ProLayout
      {...defaultSettings}
      layout="mix"
      navTheme="light"
      footerRender={() => <FooterContent />}
      rightContentRender={() => <RightContent />}
      // pageTitleRender={(props) => <PageTitle {...props} />}
      // postMenuData={(props) => menuDataRender(props)}
      // menuItemRender={(props) => menuItemRender(props)}
    >
      {children}
    </ProLayout>
  );
};

// Footer Content
const FooterContent: React.FC = () => (
  <div>
    This is custom footer content.
  </div>
);

// Right Content (include Avatar)
const RightContent: React.FC = () => (
  <div>
    This is custom right content (including Avatar)
  </div>
);

// Page Title Render
const PageTitle: React.FC<ProLayoutProps & { pageTitle: string; }> = (props) => (
  <div>
    Custom Page Title: {props.pageTitle}
  </div>
);

// Menu Data Render
const menuDataRender: React.FC<ProLayoutProps> = (props) => (
  // Menu rendering logic here
  <div>
    menuDataRender
  </div>
)

// Menu Item Render
const menuItemRender: React.FC<ProLayoutProps> = (props) => (
  // Menu item rendering logic here
  <div>
    menuItemRender
  </div>
)

export default MainLayout;