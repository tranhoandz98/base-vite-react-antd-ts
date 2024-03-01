import { ChromeFilled, CrownFilled, FileOutlined, HomeOutlined, TabletOutlined, TagOutlined } from '@ant-design/icons'

export default {
  route: {
    path: '/',
    routes: [
      {
        path: '/dashbroad',
        name: 'Dashbroad',
        icon: <HomeOutlined />
      },
      {
        path: '/blog',
        name: 'Blog',
        icon: <FileOutlined />
      },
      {
        path: '/admin',
        name: 'Management page',
        icon: <TabletOutlined />,
        access: 'canAdmin',
        component: './Admin',
        routes: [
          {
            path: '/admin/sub-page1',
            name: 'First level page',
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            component: './Welcome'
          },
          {
            path: '/admin/sub-page2',
            name: 'secondary page',
            icon: <CrownFilled />,
            component: './Welcome'
          },
          {
            path: '/admin/sub-page3',
            name: 'Third level page',
            icon: <CrownFilled />,
            component: './Welcome'
          }
        ]
      },
      {
        name: 'List',
        icon: <TagOutlined />,
        path: '/list',
        component: './ListTableList',
        routes: [
          {
            path: '/list/sub-page',
            name: 'List page',
            icon: <CrownFilled />,
            routes: [
              {
                path: 'sub-sub-page1',
                name: 'First level list page',
                icon: <CrownFilled />,
                component: './Welcome'
              },
              {
                path: 'sub-sub-page2',
                name: 'First and second level list pages',
                icon: <CrownFilled />,
                component: './Welcome'
              },
              {
                path: 'sub-sub-page3',
                name: 'First and third level list pages',
                icon: <CrownFilled />,
                component: './Welcome'
              }
            ]
          },
          {
            path: '/list/sub-page2',
            name: 'Secondary list page',
            icon: <CrownFilled />,
            component: './Welcome'
          },
          {
            path: '/list/sub-page3',
            name: 'Level 3 list page',
            icon: <CrownFilled />,
            component: './Welcome'
          }
        ]
      },
      {
        path: 'https://ant.design',
        name: 'Ant Design Official website external link',
        icon: <ChromeFilled />
      }
    ]
  },
  location: {
    pathname: '/'
  },
  appList: [
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
      title: 'Ant Design',
      desc: 'The most famous UI design language in Hangzhou',
      url: 'https://ant.design'
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
      title: 'AntV',
      desc: 'Ant Group’s new generation data visualization solution',
      url: 'https://antv.vision/',
      target: '_blank'
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
      title: 'Pro Components',
      desc: 'Professional-grade UI component library',
      url: 'https://procomponents.ant.design/'
    },
    {
      icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      title: 'umi',
      desc: 'Plug-in enterprise-level front-end application framework.',
      url: 'https://umijs.org/zh-CN/docs'
    },

    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
      title: 'qiankun',
      desc: 'Probably the most complete micro front-end solution you have ever seen🧐',
      url: 'https://qiankun.umijs.org/'
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
      title: 'Yuque',
      desc: 'Knowledge creation and sharing tools',
      url: 'https://www.yuque.com/'
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
      title: 'Kitchen ',
      desc: 'Sketch Toolset',
      url: 'https://kitchen.alipay.com/'
    },
    {
      icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
      title: 'dumi',
      desc: 'Documentation tool for component development scenarios',
      url: 'https://d.umijs.org/zh-CN'
    }
  ]
}
