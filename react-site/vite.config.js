import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  base: '/aws-solution-architect-development-engineer/',
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
