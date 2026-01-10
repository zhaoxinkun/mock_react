import { Layout, Watermark } from 'antd'

import NavHeader from '@/layout/NavHeader'
import NavFooter from '@/layout/NavFooter'
import SideMenu from '@/layout/SideMenu'
import { Outlet } from 'react-router-dom'
import style from './index.module.less'
import { useEffect } from 'react'
import { getUserInfo } from '@/api/api'

export function layout() {
  const { Content, Sider } = Layout

  // 这里发送用户数据请求.可以优化
  useEffect(() => {
    getUserInfoAsync()
  }, [])

  const getUserInfoAsync = async () => {
    const res = await getUserInfo()
    console.log('🚀 ~ getUserInfoAsync ~ res: ', res)
  }

  return (
    <Watermark content='Ant Design'>
      <Layout>
        <Sider collapsible>
          <SideMenu />
        </Sider>

        <Layout>
          {/*头部*/}
          <NavHeader />

          <Content className={style.content}>
            <div className={style.wrapper}>
              <Outlet></Outlet>
            </div>
          </Content>

          {/*底部*/}
          {/*<Footer style={{ padding: 0, background: colorBgContainer }}>*/}
          <NavFooter />
          {/*</Footer>*/}
        </Layout>
      </Layout>
    </Watermark>
  )
}
