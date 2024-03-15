import { routerMain } from '@/constants/routerMain'
import { CrownFilled, FileOutlined, HomeOutlined, TagOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import React, { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import MenuItemType from './types/menu.type'

const MainMenu: React.FC = () => {
  const { t } = useTranslation('')

  // get current location
  const location = useLocation()

  const menuData: MenuItemType[] = [
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
      children: [
        {
          path: `${routerMain.COMPONENT}/form`,
          label: t('menu.form')
        },
        {
          path: `${routerMain.COMPONENT}/table`,
          label: t('menu.table')
        },
        {
          path: `${routerMain.COMPONENT}/modal`,
          label: t('menu.modal')
        },
        {
          path: `${routerMain.COMPONENT}/skeleton`,
          label: t('menu.skeleton')
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
    }
    //...
  ]

  const [selectedKeys, setSelectedKeys] = useState([location.pathname])

  // define default open keys
  let defaultOpenKeys: string[] = []
  if (location.pathname.includes('component')) {
    defaultOpenKeys = [routerMain.COMPONENT]
  }

  const [openKeys, setOpenKeys] = useState(defaultOpenKeys)

  // handle select menu
  const handleSelect = ({ key }: { key: string }) => {
    setSelectedKeys([key])
    if (key.includes('component')) openKeys.push(key)
    setOpenKeys(openKeys)
  }

  function renderItem(item: MenuItemType): ReactNode {
    const label = item.path ? <Link to={item.path}>{item.label}</Link> : item.label
    const keyMenu = item.path || item.label
 
    if (item.children) {
      // if (item.path) {
      //   return (
      //     <Menu.SubMenu key={keyMenu} icon={item.icon} title={label}>
      //       {item.children.map(renderItem)}
      //     </Menu.SubMenu>
      //   )
      // } else {
      //   return (
      //     <Menu.ItemGroup key={keyMenu} title={label}>
      //       {item.children.map(renderItem)}
      //     </Menu.ItemGroup> 
      //   )
      // }
      return (
        <Menu.SubMenu key={keyMenu} icon={item.icon} title={label}>
          {item.children.map(renderItem)}
        </Menu.SubMenu>
      )
    }

    return (
      <Menu.Item key={keyMenu} icon={item.icon}>
        {label}
      </Menu.Item>
    )
  }

  // và bạn có thể sử dụng nó như sau:

  return (
    <Menu
      mode='inline'
      selectedKeys={selectedKeys}
      defaultSelectedKeys={selectedKeys}
      openKeys={openKeys}
      defaultOpenKeys={openKeys}
      onSelect={handleSelect}
      onOpenChange={setOpenKeys}
    >
      {menuData.map((i) => renderItem(i))}
    </Menu>
  )
}

export default MainMenu
