import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  assetsInclude: [
    '**/*.JPG',
    '**/*.JPEG',
    '**/*.PNG',
    '**/*.SVG',
    '**/*.svg',
    '**/*.WEBP',
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    assetsInlineLimit: 0,
  },
})
