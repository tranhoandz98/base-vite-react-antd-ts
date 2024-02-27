import { Flex, Layout, Switch } from 'antd'
import { createStyles } from 'antd-style'
import clsx from 'clsx'
import { useContext } from 'react'

import { ThemeContext } from '~/context/theme.context'

export default function HeaderC() {
  const { Header } = Layout

  const { themeBase, setThemeBase } = useContext(ThemeContext)

  const changeTheme = (value: boolean) => {
    setThemeBase(value ? 'light' : 'dark')
  }

  return (
    <>
      <Header>
        <Flex justify='space-between'>
          <div className=''>Logo</div>
          <Switch
            checked={themeBase === 'light'}
            onChange={changeTheme}
            checkedChildren='Light'
            unCheckedChildren='Dark'
          />
        </Flex>
      </Header>
    </>
  )
}
