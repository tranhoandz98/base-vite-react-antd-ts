import { ProCard } from '@ant-design/pro-components'
import { Typography } from 'antd'
import { useTranslation } from 'react-i18next'

export default function Blog() {
  const { t } = useTranslation()

  return (
    <>
      <Typography.Title level={3}>Bảng điều khiển</Typography.Title>

      <ProCard className='min-h-[500px] h-[50vh]'></ProCard>
    </>
  )
}
