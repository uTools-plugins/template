import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'
import postcssPresetEnv from 'postcss-preset-env'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    open: false,
    port: 3000
  },
  base: './',
  build: {
    outDir: './src-utools/dist'
  },
  css: {
    postcss: {
      plugins: [postcssPresetEnv({ features: { 'cascade-layers': false } })]
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
