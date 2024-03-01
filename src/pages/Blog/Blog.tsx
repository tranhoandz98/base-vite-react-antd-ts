import { PageContainer, ProCard } from '@ant-design/pro-components'
import { Button } from 'antd'

export default function Blog() {
  // const [num, setNum] = useState(10)

  return (
    <div>
      <PageContainer
        extra={[
          <Button key='3'>Test</Button>,
          <Button key='1' type='primary'>
            Add
          </Button>
        ]}
        subTitle='simple description'
        footer={[
          <Button key='3'>Back</Button>,
          <Button key='2' type='primary'>
            Save
          </Button>
        ]}
      >
        <ProCard
          style={{
            height: '80vh',
            minHeight: 800
          }}
        >
          blog
          <div />
        </ProCard>
      </PageContainer>
    </div>
  )
}
