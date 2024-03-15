import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import React from 'react'

import { routerMain } from '@/constants/routerMain'
import { ChromeFilled, CrownFilled, FileOutlined, HomeOutlined, TagOutlined } from '@ant-design/icons'
import { Menu, type MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

export default function MainMenu() {
  const { t } = useTranslation('')

  const navigate = useNavigate()

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
    console.log('click ', e)
  }

  const items: MenuProps['items'] = [
    getItem(t('menu.dashboard'), routerMain.DASHBOARD, <HomeOutlined />),
    getItem(t('menu.blog'), routerMain.BLOG, <FileOutlined />),

    getItem( t('menu.component'), routerMain.COMPONENT, <TagOutlined />, [
      getItem(t('menu.form'), `${routerMain.COMPONENT}/form`, <CrownFilled />),
      getItem(t('menu.table'), `${routerMain.COMPONENT}/table`, <CrownFilled />),
      getItem(t('menu.modal'), `${routerMain.COMPONENT}/modal`, <CrownFilled />),
      getItem(t('menu.skeleton'), `${routerMain.COMPONENT}/skeleton`, <CrownFilled />)
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')])
    ]),

    { type: 'divider' },

    // getItem('Group', 'grp', null, [getItem('Option 13', '13'), getItem('Option 14', '14')], 'group')
  ]

  const defaultMenu = [
    {
      path: routerMain.DASHBOARD,
      label: t('menu.dashboard'),
      icon: <HomeOutlined />
    },
    {
      path: routerMain.BLOG,
      label: t('menu.blog'),
      icon: <FileOutlined />
    },
    {
      label: t('menu.component'),
      icon: <TagOutlined />,
      path: routerMain.COMPONENT,
      children: [
        {
          path: `${routerMain.COMPONENT}/form`,
          label: t('menu.form'),
          icon: <CrownFilled />
        },
        {
          path: `${routerMain.COMPONENT}/table`,
          label: t('menu.table'),
          icon: <CrownFilled />
        },
        {
          path: `${routerMain.COMPONENT}/modal`,
          label: t('menu.modal'),
          icon: <CrownFilled />
        },
        {
          path: `${routerMain.COMPONENT}/skeleton`,
          label: t('menu.skeleton'),
          icon: <CrownFilled />
        }
      ]
    },
    {
      label: 'Menu 1',
      icon: <TagOutlined />,
      children: [
        {
          label: 'Menu 1.1',
          icon: <CrownFilled />,
          children: [
            {
              label: 'Menu 1.1.1',
              icon: <CrownFilled />
            },
            {
              label: 'Menu 1.1.2',
              icon: <CrownFilled />
            },
            {
              label: 'Menu 1.1.3',
              icon: <CrownFilled />
            }
          ]
        },
        {
          path: '/list/sub-page2',
          label: 'Secondary list page',
          icon: <CrownFilled />
        },
        {
          path: '/list/sub-page3',
          label: 'Level 3 list page',
          icon: <CrownFilled />
        }
      ]
    },
    {
      path: 'https://ant.design',
      label: 'Ant Design Official website external link',
      icon: <ChromeFilled />
    }
  ]
  return <Menu onClick={onClick} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode='inline' items={items} />
}
