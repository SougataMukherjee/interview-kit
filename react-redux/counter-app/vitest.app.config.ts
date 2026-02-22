// vitest.app.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    name: 'app',
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',

    include: ['src/**/*.spec.tsx'],

    exclude: [
      '**/*.stories.*',
      '**/*.mdx',
      '.storybook/**'
    ]
  }
})