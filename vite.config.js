import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
  const isProjectPage = repositoryName && !repositoryName.endsWith('.github.io')

  return {
    plugins: [react()],
    base: mode === 'github-pages' && isProjectPage ? `/${repositoryName}/` : '/',
  }
})
