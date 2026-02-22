// vitest.storybook.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  test: {
    name: 'storybook',
    environment: 'jsdom',
    globals: true,

    setupFiles: '.storybook/vitest.setup.ts',

    // ONLY storybook tests
    include: [
     'src/stories/**/tests/**/*.test.@(ts|tsx)'
    ],

    // NEVER run app tests
    exclude: [
      'src/**/*.stories.@(ts|tsx)',
      'src/**/*.spec.@(ts|tsx)',
      'src/app/**',
      '.storybook/**'
    ],

    
  }
})