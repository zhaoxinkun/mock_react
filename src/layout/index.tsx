import { Layout, Watermark } from 'antd'

import NavHeader from '@/layout/NavHeader'
import NavFooter from '@/layout/NavFooter'
import SideMenu from '@/layout/SideMenu'
import { Outlet } from 'react-router-dom'
import style from './index.module.less'
import { useEffect } from 'react'
import { getUserInfo } from '@/api/api'
import store from '@/store'
import type { User } from '@/types/api'

export function layout() {
  const { Content, Sider } = Layout

  // 这里发送用户数据请求.可以优化为在登录后发送
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getUserInfoAsync()
  }, [])

  const getUserInfoAsync = async () => {
    // 拿到当前用户的数据
    const data: User.UserItem = await getUserInfo()

    console.log('🚀 ~ getUserInfoAsync ~ data: ', data)
    // 存放到store中用来供其他展示位读取
    store.updateUserInfo(data)
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
