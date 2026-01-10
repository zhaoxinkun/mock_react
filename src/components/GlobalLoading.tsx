// components/GlobalLoading.tsx
import { Spin } from 'antd'
import React from 'react'

// 全局加载组件
interface GlobalLoadingProps {
  visible: boolean
}

// 传一个布尔值 控制全局加载组件的显示
const GlobalLoading = ({ visible }: GlobalLoadingProps) => {
  if (!visible) return null

  return (
    <div style={maskStyle}>
      <Spin size='large'>加载中...</Spin>
    </div>
  )
}

// 全局加载组件的样式
const maskStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(255,255,255,0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999
}
export default GlobalLoading
