import { Space } from 'antd'
import AvatarDropdown from '../AvatarDropdown'
import LangDropdown from '../LangDropdown'
import ThemeDropdown from '../ThemeDropdown'
import defaultSettings from '@/config/defaultSettings'

export default function ActionRightMenu() {
  return (
    <Space
      direction={defaultSettings.layout === 'sidebar' ? 'vertical' : 'horizontal'}
      // direction='vertical'
    >
      <LangDropdown />
      <ThemeDropdown />
      <AvatarDropdown />
    </Space>
  )
}
