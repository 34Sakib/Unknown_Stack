import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public_assets',
  server: {
    watch: {
      ignored: ['**/public/work/**', '**/old_work_folder/**', '**/temp_backup/**', '**/dist/**']
    }
  }
})
