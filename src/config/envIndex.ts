// 这里判断环境决定使用那个配置,在请求时根据环境使用不同的配置

type EnvType = 'development' | 'stag' | 'production'
let env: EnvType = 'development'

if (import.meta.env.NODE_ENV === 'production') {
  env = 'production'
} else if (import.meta.env.NODE_ENV === 'stag') {
  env = 'stag'
} else {
  env = 'development'
}

const config = {
  development: {
    baseURL: '',
    uploadApi: '',
    mock: false,
    cdn: ''
  },
  stag: {
    baseURL: '',
    uploadApi: '',
    mock: false
  },
  production: {
    baseURL: '',
    uploadApi: '',
    mock: false
  }
}

export default {
  env,
  ...config[env]
}
