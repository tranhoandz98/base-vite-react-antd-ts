import { Avatar, Dropdown } from 'antd'

import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'

export default function AvatarDropdown() {
  const { t } = useTranslation('')

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
      placement='bottomRight'
    >
      <Avatar
        src='https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg'
        size={'small'}
      />
    </Dropdown>
  )
}
