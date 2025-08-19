import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const branch = process.env.BRANCH_NAME || 'main'

const repoName =
  branch === 'main'
    ? 'e-commerce-web-saas'
    : `e-commerce-web-saas/${branch}`
// Replace with your repo name
export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
})
