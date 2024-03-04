import ThemeDropdown from '@/components/ThemeDropdown'
import defaultSettings from '@/config/defaultSettings'
import { ThemeContext } from '@/context/theme.context'
import { NavThemeProps } from '@/types/theme.type'
import { LogoutOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import type { MenuDataItem } from '@ant-design/pro-components'
import { ProLayout } from '@ant-design/pro-components'
import { ConfigProvider, Dropdown, Input } from 'antd'
import { useContext, useEffect, useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import LangDropdown from '@/components/LangDropdown'
import { ChromeFilled, CrownFilled, FileOutlined, HomeOutlined, TabletOutlined, TagOutlined } from '@ant-design/icons'
import { routerMain } from '@/constants/routerMain'
import { useTranslation } from 'react-i18next'
import { locales } from '@/i18n/i18n'

const filterByMenuData = (data: MenuDataItem[], keyWord: string): MenuDataItem[] =>
  data
    .map((item) => {
      if (item.name?.includes(keyWord)) {
        return { ...item }
      }
      const children = filterByMenuData(item.children || [], keyWord)
      if (children.length > 0) {
        return { ...item, children }
      }
      return undefined
    })
    .filter((item) => item) as MenuDataItem[]

// const loopMenuItem = (menus: any[]): MenuDataItem[] =>
//   menus.map(({ icon, routes, ...item }) => ({
//     ...item,
//     children: routes && loopMenuItem(routes)
//   }))

export default function MainLayout() {
  const { t } = useTranslation()
  const { i18n } = useTranslation()
  const currentLanguage = locales[i18n.language as keyof typeof locales]

  const actionRef = useRef<{
    reload: () => void
  }>()

  const { themeBase } = useContext(ThemeContext)
  const [keyWord, setKeyWord] = useState('')
  const [pathname, setPathname] = useState('/')
  const defaultMenu = [
    {
      path: routerMain.DASHBROAD,
      name: t('menu.dashboard'),
      icon: <HomeOutlined />
    },
    {
      path: routerMain.BLOG,
      name: t('menu.blog'),
      icon: <FileOutlined />
    },
    {
      path: routerMain.ADMIN,
      name: 'Management page',
      icon: <TabletOutlined />,
      access: 'canAdmin',
      component: './Admin',
      local: 'managementPage',
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
      name: 'Component',
      icon: <TagOutlined />,
      path: routerMain.COMPONENT,
      routes: [
        {
          path: `${routerMain.COMPONENT}/form`,
          name: 'Form',
          icon: <CrownFilled />,
          component: './Welcome'
        },
        {
          path: `${routerMain.COMPONENT}/modal`,
          name: 'modal',
          icon: <CrownFilled />,
          component: './Welcome'
        },
        {
          path: `${routerMain.COMPONENT}/skeleton`,
          name: 'skeleton',
          subName: 'sekekekeke',
          icon: <CrownFilled />,
          component: './Welcome'
        }
      ]
    },
    {
      name: 'List',
      icon: <TagOutlined />,
      path: routerMain.LIST,
      routes: [
        {
          path: '/list/form',
          name: 'List 1.1',
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [menuData, setMenuData] = useState<any[]>([])

  useEffect(() => {
    waitTime()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage])

  const waitTime = (time: number = 100) => {
    setTimeout(() => {
      setMenuData(defaultMenu)
    }, time)
  }

  if (typeof document === 'undefined') {
    return <div />
  }

  return (
    <div>
      <ConfigProvider
        getTargetContainer={() => {
          return document.getElementById('test-pro-layout') || document.body
        }}
      >
        <ProLayout
          {...defaultSettings}
          layout='mix'
          navTheme={themeBase as NavThemeProps}
          prefixCls='my-prefix'
          actionRef={actionRef}
          bgLayoutImgList={[
            {
              src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
              left: 85,
              bottom: 100,
              height: '303px'
            },
            {
              src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
              bottom: -68,
              right: -45,
              height: '303px'
            },
            {
              src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
              bottom: 0,
              left: 0,
              width: '331px'
            }
          ]}
          // {...defaultProps}
          location={{
            pathname
          }}
          token={{
            header: {
              colorBgMenuItemSelected: 'rgba(0,0,0,0.04)'
            }
          }}
          menu={{
            collapsedShowGroupTitle: true
          }}
          avatarProps={{
            src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
            size: 'small',
            // title: '',
            render: (_, dom) => {
              return (
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: 'user',
                        label: 'Admin'
                      },
                      {
                        type: 'divider'
                      },
                      {
                        key: 'profile',
                        icon: <UserOutlined />,
                        label: 'Profile'
                      },
                      {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: 'Logout'
                      }
                    ]
                  }}
                >
                  {dom}
                </Dropdown>
              )
            }
          }}
          actionsRender={() => {
            // if (props.isMobile) return []
            // if (typeof window === 'undefined') return []
            return [<LangDropdown />, <ThemeDropdown />]
          }}
          headerTitleRender={(logo, title, _) => {
            const defaultDom = (
              <a>
                {logo}
                {title}
              </a>
            )
            if (typeof window === 'undefined') return defaultDom
            if (document.body.clientWidth < 1400) {
              return defaultDom
            }
            if (_.isMobile) return defaultDom
            return <>{defaultDom}</>
          }}
          menuFooterRender={(props) => {
            if (props?.collapsed) return undefined
            return (
              <div
                style={{
                  textAlign: 'center',
                  paddingBlockStart: 12
                }}
              >
                <div>© 2024 Made with love</div>
                <div>by tranhoandz98</div>
              </div>
            )
          }}
          menuItemRender={(item, dom) => {
            return (
              <div
                onClick={() => {
                  setPathname(item.path || '/')
                }}
              >
                <Link to={item.path as string}>{dom}</Link>
              </div>
            )
          }}
          menuExtraRender={({ collapsed }) =>
            !collapsed && (
              <>
                <Input
                  style={{
                    borderRadius: 4,
                    backgroundColor: 'rgba(0,0,0,0.03)'
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)'
                      }}
                    />
                  }
                  placeholder='Search'
                  variant='borderless'
                  onPressEnter={(e) => {
                    setKeyWord((e.target as HTMLInputElement).value)
                  }}
                />
              </>
            )
          }
          menuDataRender={() => menuData}
          postMenuData={(menus) => filterByMenuData(menus || [], keyWord)}
        >
          <Outlet></Outlet>
        </ProLayout>
      </ConfigProvider>
    </div>
  )
}
