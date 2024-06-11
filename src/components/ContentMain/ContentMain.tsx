import { themeGlobal } from '@/constants/themeGlobal'
import { Layout } from 'antd'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function ContentMain({ children }: Props) {
  const { Content } = Layout

  const style = {
    // margin: `${themeGlobal.heightHeader}px 0 0 0`,
    padding: '30px'
  }

  return <Content style={style}>{children}</Content>
}
