import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        Admin: './Admin.html',
        basket: './basket.html',
        singin: './sing in.html',
      }
    }
  }
})
