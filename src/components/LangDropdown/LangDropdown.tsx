import { locales } from '@/i18n/i18n'
import { Button, Dropdown } from 'antd'
import Flags from 'country-flag-icons/react/3x2'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface ItemProps {
  key: string
  icon: JSX.Element
  label: JSX.Element
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick: (e: any) => void
}

export default function LangDropdown() {
  const { i18n } = useTranslation()
  const currentLanguage = locales[i18n.language as keyof typeof locales]

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
  const [dataDropdown, setDataDropdown] = useState<ItemProps>(items[0])

  const changeLanguage = (lng: 'en' | 'vi') => {
    i18n.changeLanguage(lng)
    const itemTheme = items.find((itemT) => itemT?.key === lng) as ItemProps
    setDataDropdown(itemTheme)
  }

  return (
    <Dropdown className='border-transparent' menu={{ items, selectedKeys: [currentLanguage] }} placement='bottomRight'>
      <Button type='text' icon={dataDropdown.icon}>
        {currentLanguage}
      </Button>
    </Dropdown>
  )
}
