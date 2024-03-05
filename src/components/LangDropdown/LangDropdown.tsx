import { locales } from '@/i18n/i18n'
import { ProLayoutProps } from '@ant-design/pro-components'
import { Button, Dropdown } from 'antd'
import Flags from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next'

interface ItemProps {
  key: string
  icon: JSX.Element
  label: JSX.Element
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (e: any) => void
}

export default function LangDropdown(props: ProLayoutProps) {
  const { i18n } = useTranslation()
  const keyLocale = i18n.language as keyof typeof locales
  const currentLanguage = locales[keyLocale]

  const { collapsed, layout } = props

  const items: ItemProps[] = [
    {
      key: 'vi',
      icon: <Flags.VN width='1rem' />,
      label: <span>Tiếng Việt</span>,
      onClick: (e) => {
        changeLanguage(e.key)
      }
    },
    {
      key: 'en',
      icon: <Flags.US width='1rem' />,
      label: <span>English</span>,
      onClick: (e) => {
        changeLanguage(e.key)
      }
    }
  ]

  const dataDropdown = items.find((itemT) => itemT?.key === keyLocale) as ItemProps

  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng)
  }

  return (
    <Dropdown className='border-transparent' menu={{ items, selectedKeys: [currentLanguage] }} placement='bottomRight'>
      <Button type='text' icon={dataDropdown?.icon}>
        {layout === 'side' ? <>{!collapsed && currentLanguage}</> : <>{currentLanguage}</>}
      </Button>
    </Dropdown>
  )
}
