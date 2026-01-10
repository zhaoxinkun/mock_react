import { MenuFoldOutlined } from '@ant-design/icons'
import { Breadcrumb, Dropdown, type MenuProps, Switch } from 'antd'
import style from './index.module.less'

const NavHeader = () => {
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

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: ' 1st menu item'
    },
    {
      key: '2',
      label: '  2nd menu item (disabled)'
    }
  ]

  return (
    <>
      <div className={style.navHeader}>
        <div className='left'>
          <MenuFoldOutlined />
          <Breadcrumb items={BreadcrumbItem} style={{ marginLeft: '10px' }} />
        </div>

        <div className='right'>
          <Switch checkedChildren='Dark' unCheckedChildren='Light' style={{ marginRight: 10 }} />

          <Dropdown menu={{ items }}>
            <span className={style.nickName}>haha</span>
          </Dropdown>
        </div>
      </div>
    </>
  )
}

export default NavHeader
