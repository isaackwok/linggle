import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
/**
 * @type {import('vite').UserConfig}
 */
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  base: mode === 'development' ? '/' : '/linggle/'
}))
