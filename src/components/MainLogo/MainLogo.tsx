import { routerMain } from '@/constants/routerMain'
import { Link } from 'react-router-dom'

export default function MainLogo() {
  return (
    <Link to={routerMain.HOME}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px'
        }}
      >
        <img
          width='auto'
          height={22}
          src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
          alt='logo'
        />
        <h1>Ant Design Pro</h1>
      </div>
    </Link>
  )
}
