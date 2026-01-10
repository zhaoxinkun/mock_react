import { Menu } from 'antd'
import style from './index.module.less'

import { HomeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const SideMenu = () => {
  const navigate = useNavigate()

  const items = [
    {
      label: '首页',
      key: '1',
      icon: <HomeOutlined />
    },
    {
      label: '首页',
      key: '2',
      icon: <HomeOutlined />
    },
    {
      label: '首页',
      key: '3',
      icon: <HomeOutlined />,
      children: [
        {
          label: '首页',
          key: '4',
          icon: <HomeOutlined />
        }
      ]
    }
  ]
  return (
    <div className={style.navSide}>
      <div className={style.logo}>
        <img src='@/assets/img/logo.png' className={style.img} alt='logo' />
        <span onClick={() => navigate('/')}>Moockr</span>
      </div>
      <Menu mode='inline' theme='dark' items={items} defaultSelectedKeys={['1']} />
    </div>
  )
}

export default SideMenu
