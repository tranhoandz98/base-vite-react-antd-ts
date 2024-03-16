import { Card, Typography } from 'antd'
import { useTranslation } from 'react-i18next'

export default function Blog() {
  const { t } = useTranslation()

  return (
    <>
      <Typography.Title level={3}>Blog</Typography.Title>

      <Card className='min-h-[500px] h-[50vh]'></Card>
    </>
  )
}