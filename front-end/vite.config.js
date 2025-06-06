import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8888,
    host: '0.0.0.0' // 绑定到所有接口
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})

