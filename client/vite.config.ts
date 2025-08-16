import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = dirname(fileURLToPath(import.meta.url)); // client directory
const projectRoot = join(root, '..'); // flight-finder root

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        join(projectRoot, 'node_modules'),
        join(root, 'src'),
        join(root, 'components'),
        join(root, 'public'),
        join(projectRoot, 'node_modules/devextreme/dist/css/icons')
      ]
    }
  }
})
