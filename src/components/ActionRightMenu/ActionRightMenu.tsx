import { Flex, Space } from 'antd'
import AvatarDropdown from '../AvatarDropdown'
import LangDropdown from '../LangDropdown'
import ThemeDropdown from '../ThemeDropdown'
import defaultSettings from '@/config/defaultSettings'
import { ThemeContext } from '@/context/theme.context'
import { useContext } from 'react'

export default function ActionRightMenu() {
  const { collapsed } = useContext(ThemeContext)

  return (
    <>
      {defaultSettings.layout === 'sidebar' ? (
        <>
          <Flex
            vertical={collapsed}
            justify={collapsed ? 'center' : 'normal'}
            align='center'
            gap={'small'}
            style={{
              padding: collapsed ? '6px 18px ' : '6px 24px'
            }}
          >
            <div style={{ marginRight: 'auto' }}>
              <AvatarDropdown />
            </div>
            <LangDropdown />
            <ThemeDropdown />
          </Flex>
        </>
      ) : (
        <>
          <Space>
            <LangDropdown />
            <ThemeDropdown />
            <AvatarDropdown />
          </Space>
        </>
      )}
    </>
  )
}
