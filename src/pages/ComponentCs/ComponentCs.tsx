import { PageContainer, ProCard } from '@ant-design/pro-components'
import { Button } from 'antd'
import DemoForm from './components/DemoForm'
import { useParams } from 'react-router-dom'

export default function ComponentCs() {
  // const [num, setNum] = useState(10)
  const { sub } = useParams()
  console.log('sub: ', sub)

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
      >
        <ProCard>
          <DemoForm />
        </ProCard>
      </PageContainer>
    </div>
  )
}
