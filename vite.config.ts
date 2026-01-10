import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '127.0.0.1',
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'http://180.76.125.105:4000',
        changeOrigin: true,
        secure: false
        // rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react()]
})
