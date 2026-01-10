import style from './login.module.less'
import { Button, Form, Input } from 'antd'

export default function Login() {
  const onFinish = (value: object) => {
    console.log(value)
  }
  return (
    <div className={style.login}>
      <div className={style.loginWrapper}>
        <div className='title'>系统登陆</div>
        <Form name='basic' initialValues={{ remember: true }} onFinish={onFinish} autoComplete='off'>
          <Form.Item
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
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
