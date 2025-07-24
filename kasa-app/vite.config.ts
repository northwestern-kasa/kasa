import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Serve the root 'public' directory as the public folder
  publicDir: 'public',
  plugins: [react()],
  // Base public path when served (e.g. GitHub Pages repo name)
  base: '/kasa-app/',
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
