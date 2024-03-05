import LangDropdown from '@/components/LangDropdown'
import ThemeDropdown from '@/components/ThemeDropdown'
import defaultSettings from '@/config/defaultSettings'
import { routerMain } from '@/constants/routerMain'
import { ThemeContext } from '@/context/theme.context'
import { locales } from '@/i18n/i18n'
import { NavThemeProps } from '@/types/theme.type'
import {
  ChromeFilled,
  CrownFilled,
  FileOutlined,
  HomeOutlined,
  LogoutOutlined,
  SearchOutlined,
  TagOutlined,
  UserOutlined
} from '@ant-design/icons'
import type { MenuDataItem } from '@ant-design/pro-components'
import { ProLayout } from '@ant-design/pro-components'
import { ConfigProvider, Dropdown, Input } from 'antd'
import { useContext, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet } from 'react-router-dom'

const filterByMenuData = (data: MenuDataItem[], keyWord: string): MenuDataItem[] => {
  return data
    .map((item) => {
      if (item.name?.toLowerCase().includes(keyWord.toLowerCase())) {
        return { ...item }
      }
      const children = filterByMenuData(item.children || [], keyWord)
      if (children.length > 0) {
        return { ...item, children }
      }
      return undefined
    })
    .filter((item) => item) as MenuDataItem[]
}
// const loopMenuItem = (menus: any[]): MenuDataItem[] =>
//   menus.map(({ icon, routes, ...item }) => ({
//     ...item,
//     children: routes && loopMenuItem(routes)
//   }))

export default function MainLayout() {
  const { i18n, t } = useTranslation('')
  const currentLanguage = locales[i18n.language as keyof typeof locales]
  const actionRef = useRef<{
    reload: () => void
  }>()

  const defaultMenu = [
    {
      path: routerMain.DASHBOARD,
      name: t('menu.dashboard'),
      icon: <HomeOutlined />
    },
    {
      path: routerMain.BLOG,
      name: t('menu.blog'),
      icon: <FileOutlined />
    },
    {
      name: t('menu.component'),
      icon: <TagOutlined />,
      path: routerMain.COMPONENT,
      routes: [
        {
          path: `${routerMain.COMPONENT}/form`,
          name: t('menu.form'),
          icon: <CrownFilled />
        },
        {
          path: `${routerMain.COMPONENT}/table`,
          name: t('menu.table'),
          icon: <CrownFilled />
        },
        {
          path: `${routerMain.COMPONENT}/modal`,
          name: t('menu.modal'),
          icon: <CrownFilled />
        },
        {
          path: `${routerMain.COMPONENT}/skeleton`,
          name: t('menu.skeleton'),
          icon: <CrownFilled />
        }
      ]
    },
    {
      name: 'Menu 1',
      icon: <TagOutlined />,
      routes: [
        {
          name: 'Menu 1.1',
          icon: <CrownFilled />,
          routes: [
            {
              name: 'Menu 1.1.1',
              icon: <CrownFilled />
            },
            {
              name: 'Menu 1.1.2',
              icon: <CrownFilled />
            },
            {
              name: 'Menu 1.1.3',
              icon: <CrownFilled />
            }
          ]
        },
        {
          path: '/list/sub-page2',
          name: 'Secondary list page',
          icon: <CrownFilled />
        },
        {
          path: '/list/sub-page3',
          name: 'Level 3 list page',
          icon: <CrownFilled />
        }
      ]
    },
    {
      path: 'https://ant.design',
      name: 'Ant Design Official website external link',
      icon: <ChromeFilled />
    }
  ]

  const { themeBase } = useContext(ThemeContext)
  const [keyWord, setKeyWord] = useState('')
  const [pathname, setPathname] = useState('/')

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
          navTheme={themeBase as NavThemeProps}
          prefixCls='my-prefix'
          layout='mix'
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
                        label: t('menu.profile')
                      },
                      {
                        key: 'logout',
                        icon: <LogoutOutlined />,
                        label: t('menu.logout')
                      }
                    ]
                  }}
                >
                  {dom}
                </Dropdown>
              )
            }
          }}
          actionsRender={(props) => {
            // if (props.isMobile) return []
            // if (typeof window === 'undefined') return []
            return [<LangDropdown {...props} />, <ThemeDropdown />]
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
