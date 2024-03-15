import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export default function SpinnerLoading() {
  return (
    <div>
      <Spin
        indicator={
          <LoadingOutlined style={{ fontSize: 20, position: 'fixed', right: '10px', top: '10px', zIndex: 101 }} />
        }
      />
    </div>
  )
}
