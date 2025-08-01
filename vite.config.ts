import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/YonatanBest/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
})
