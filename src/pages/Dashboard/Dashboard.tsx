import { PageContainer, ProCard } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

export default function Dashboard() {
  const { t } = useTranslation()

  return (
    <div>
      <PageContainer
        token={{}}
        extra={[
          <Button key='3'>Test</Button>,
          <Button key='1' type='primary'>
            Add
          </Button>
        ]}
        title={t('menu.dashboard')}
        subTitle='simple description'
      >
        <ProCard className='min-h-[500px] h-[50vh]'>{t('menu.dashboard')}</ProCard>
      </PageContainer>
    </div>
  )
}
