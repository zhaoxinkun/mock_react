// React 内容
import { useNavigate } from 'react-router-dom'

// 样式引入
import style from './login.module.less'
import { App, Button, Form, Input } from 'antd'

// login的接口以及类型定义
import { login } from '@/api/api'
import type { login as LoginParams } from '@/types/api'
import storage from '@/utils/storage'

// 状态管理
import store from '@/store'

export default function Login() {
  const navigete = useNavigate()

  const { message } = App.useApp() // ✅ v6 使用正解

  const onFinish = async (values: LoginParams.Params) => {
    const data = await login(values)
    console.log('🚀 ~ onFinish ~ data: ', data)
    // 把token 放入storage
    storage.set('token', data)
    // 更新store的token
    store.token = data
    message.success('登录成功')
    setTimeout(() => {
      navigete('/welcome')
    }, 3000)

    const params = new URLSearchParams(location.search)
    console.log('🚀 ~ onFinish ~ params: ', params)
    // setTimeout(() => {
    //   location.href = params.get('callback') || '/welcome'
    //   console.log('🚀 ~ onFinish ~ location.href: ', location.href)
    // })
  }
  return (
    <div className={style.login}>
      <div className={style.loginWrapper}>
        <div className='title'>系统登陆</div>
        <Form name='basic' initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
          <Form.Item
            label='用户账号'
            name='userName'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='用户密码'
            name='userPwd'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type='primary' htmlType='submit' block>
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
