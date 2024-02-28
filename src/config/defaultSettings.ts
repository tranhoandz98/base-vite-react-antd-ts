import { ProLayoutProps } from '@ant-design/pro-components'
// import logoReact from '@/assets/react.svg'
import logoVite from '@/assets/vite.svg'

/**
 * @name
 */
const defaultSettings: ProLayoutProps & {
  pwa?: boolean
  logo?: string
} = {
  navTheme: 'light',
  colorPrimary: '#1677FF',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: true,
  title: '',
  pwa: true,
  logo: logoVite,
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
  token: {
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  }
}

export default defaultSettings
