import { PageContainer, ProCard } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

export default function Blog() {
  const { t } = useTranslation()

  return (
    <div>
      <PageContainer
        extra={[
          <Button key='3'>Test</Button>,
          <Button key='1' type='primary'>
            Add
          </Button>
        ]}
        title={t('menu.blog')}
        subTitle='simple description'
        footer={[
          <Button key='3'>Back</Button>,
          <Button key='2' type='primary'>
            Save
          </Button>
        ]}
      >
        <ProCard className='min-h-[500px] h-[50vh]'>{t('menu.blog')}</ProCard>
      </PageContainer>
    </div>
  )
}
