import { MenuFoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Dropdown, type MenuProps, Switch } from 'antd'
import style from './index.module.less'
import store from '@/store'
import storage from '@/utils/storage'
import { useStore } from '@/store'

const NavHeader = () => {
  // 读取store
  const state = useStore()

  // 面包屑数据
  const BreadcrumbItem = [
    {
      title: 'Home'
    },
    {
      title: 'List'
    },
    {
      title: 'Profile'
    }
  ]

  // 下拉菜单数据
  const items: MenuProps['items'] = [
    {
      key: '1',
      // label: `用户邮箱: ${store.userInfo?.userEmail || 'userEmail'}`,
      label: `用户邮箱: ${state.userInfo?.userEmail || 'userEmail'}`
    },
    {
      key: '2',
      // label: `用户ID: ${store.userInfo?.userId || 'userId'}`,
      label: `用户ID: ${state.userInfo?.userId || 'userId'}`
    },
    {
      key: '3',
      label: '用户退出'
    }
  ]

  //获取下拉菜单点击事件,获取到key
  const onClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
    console.log(key)
    if (key === '3') {
      // 退出登录
      storage.remove('token')
      // 跳转登录页
      window.location.href = '/login'
    }
  }

  return (
    <>
      <div className={style.navHeader}>
        <div className='left'>
          <MenuFoldOutlined />
          <Breadcrumb items={BreadcrumbItem} style={{ marginLeft: '10px' }} />
        </div>

        <div className='right'>
          <Switch checkedChildren='Dark' unCheckedChildren='Light' style={{ marginRight: 10 }} />

          {/*这里的下拉菜单,我们需要获取菜单值,如果是退出,要发送请求的*/}
          <Dropdown menu={{ items, onClick }}>
            <span className={style.nickName}>{store.userInfo?.userName || 'userName'}</span>
          </Dropdown>
        </div>
      </div>
    </>
  )
}

export default NavHeader
