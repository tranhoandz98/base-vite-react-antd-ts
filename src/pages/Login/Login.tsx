import { PageContainer, ProCard } from '@ant-design/pro-components'

export default function Login() {
  return (
    <div>
      <PageContainer
        header={{
          title: 'Login'
        }}
      >
        <ProCard direction='column' ghost gutter={[0, 16]}>
          <ProCard style={{ height: 200 }} />
        </ProCard>
      </PageContainer>
    </div>
  )
}
