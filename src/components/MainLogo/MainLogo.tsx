import defaultSettings from '@/config/defaultSettings'
import { routerMain } from '@/constants/routerMain'
import { ThemeContext } from '@/context/theme.context'
import { Flex } from 'antd'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function MainLogo() {
  const { collapsed } = useContext(ThemeContext)

  return (
    <Link to={routerMain.HOME}>
      <Flex
        align='center'
        gap={'small'}
        style={{
          padding: defaultSettings.layout === 'sidebar' ? '6px 24px' : '0'
        }}
      >
        <img
          width='auto'
          height={22}
          src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
          alt='logo'
        />
        {defaultSettings.layout === 'sidebar' ? (
          <>
            {collapsed ? (
              <></>
            ) : (
              <>
                <h1>Ant Design Pro</h1>
              </>
            )}
          </>
        ) : (
          <>
            <h1>Ant Design Pro</h1>
          </>
        )}
      </Flex>
    </Link>
  )
}
