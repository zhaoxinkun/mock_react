import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  publicDir: 'src',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    host: '127.0.0.1',
    port: 8080,
    open: true
  },
  plugins: [react()]
})
