import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your repo name
export default defineConfig({
  base: '/e-commerce-web-saas/',
  plugins: [react()],
})
