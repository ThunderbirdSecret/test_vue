
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import http from "https";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: '8080'
  },
  base: '/test_vue',
  plugins: [vue()],
})
