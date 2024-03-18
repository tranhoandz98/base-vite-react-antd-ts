import defaultSettings from '@/config/defaultSettings'
import { ThemeContext } from '@/context/theme.context'
import { locales } from '@/i18n/i18n'
import { Button, Dropdown, Space } from 'antd'
import Flags from 'country-flag-icons/react/3x2'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
interface ItemProps {
  key: string
  icon: JSX.Element
  label: JSX.Element
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (e: any) => void
}

export default function LangDropdown() {
  const { i18n } = useTranslation()
  const keyLocale = i18n.language as keyof typeof locales
  const currentLanguage = locales[keyLocale]

  const { collapsed } = useContext(ThemeContext)

  const items: ItemProps[] = [
    {
      key: 'vi',
      icon: <Flags.VN width='1rem' />,
      label: <span>VI</span>,
      onClick: (e) => {
        changeLanguage(e.key)
      }
    },
    {
      key: 'en',
      icon: <Flags.US width='1rem' />,
      label: <span>EN</span>,
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
    <Dropdown menu={{ items, selectedKeys: [currentLanguage] }} placement='bottomRight'>
      {defaultSettings.layout === 'sidebar' ? (
        <div
          className={clsx({
            'ant-btn ant-btn-text ant-btn-icon-only ant-dropdown-trigger border-transparent': true
          })}
        >
          <span>{dataDropdown?.icon}</span>
        </div>
      ) : (
        <Button type='text' icon={dataDropdown?.icon}>
          <>{currentLanguage}</>
        </Button>
      )}
    </Dropdown>
  )
}
