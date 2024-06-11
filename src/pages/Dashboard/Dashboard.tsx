import { Card, Typography } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Dashboard() {
  const { t } = useTranslation()

  const { Title } = Typography
  return (
    <>
      <Title level={3}>Bảng điều khiển</Title>
      <Card className='min-h-[500px] h-[50vh]'>
        {t('menu.dashboard')}

        <p>long content</p>
        {
          // indicates very long content
          Array.from({ length: 100 }, (_, index) => (
            <React.Fragment key={index}>
              {index % 20 === 0 && index ? 'more' : '...'}
              <br />
            </React.Fragment>
          ))
        }
      </Card>
    </>
  )
}
