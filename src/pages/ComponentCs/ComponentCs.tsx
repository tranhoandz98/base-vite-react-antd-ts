import { PageContainer, ProCard } from '@ant-design/pro-components'
import DemoForm from './components/DemoForm'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { routerMain } from '@/constants/routerMain'
import Datatable from './components/Datatable'

export default function ComponentCs() {
  const { sub } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div>
      <PageContainer
        title={t('menu.component')}
        subTitle='simple description'
        tabList={[
          {
            tab: 'table',
            key: 'table',
            children: (
              <ProCard>
                <Datatable />
              </ProCard>
            )
          },
          {
            tab: 'form',
            key: 'form',
            children: (
              <ProCard>
                <DemoForm />
              </ProCard>
            )
          },
          {
            tab: 'modal',
            key: 'modal'
          },
          {
            tab: 'skeleton',
            key: 'skeleton'
          }
        ]}
        tabActiveKey={sub}
        onTabChange={(key) => navigate(`${routerMain.COMPONENT}/${key}`)}
        footer={
          [
            // <Button key='3'>重置</Button>,
            // <Button key='2' type='primary'>
            //   提交
            // </Button>
          ]
        }
      >
        {/* <ProCard></ProCard> */}
      </PageContainer>
    </div>
  )
}
