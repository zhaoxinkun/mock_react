import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    // 配置文件的作用范围
    files: ['**/*.{ts,tsx}'],

    // 继承的配置
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite
    ],
    // 语言选项
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    rules: {
      'no-unused-vars': 'error', // 禁止定义未使用的变量
      'no-debugger': 'error', // 禁止使用debugger
      'no-var': 'error' // 要求使用 let 或 const 而不是 var
    }
  }
])
