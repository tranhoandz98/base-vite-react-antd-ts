import { routerMain } from '@/constants/routerMain'
import { Flex } from 'antd'
import { Link } from 'react-router-dom'

export default function MainLogo() {
  return (
    <Link to={routerMain.HOME}>
      <Flex align='center' gap={'small'}>
        <img
          width='auto'
          height={22}
          src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
          alt='logo'
        />
        <h1>Ant Design Pro</h1>
      </Flex>
    </Link>
  )
}
