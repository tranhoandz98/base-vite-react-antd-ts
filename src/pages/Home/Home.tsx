import { PageContainer, ProCard } from '@ant-design/pro-components'
import { Button } from 'antd'

export default function Home() {
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
        subTitle='simple description'
      >
        <ProCard
          style={{
            height: '80vh',
            minHeight: 800
          }}
        >
          Home
        </ProCard>
      </PageContainer>
    </div>
  )
}
