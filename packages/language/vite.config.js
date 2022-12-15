import { defineConfig } from 'vite'
import tailwind from 'tailwindcss'
import vue from '@vitejs/plugin-vue'
import path, {resolve} from 'path'
 
export default defineConfig({
  base: '/base/',
  build: {
    target: 'es2018',
    outDir: '../../dist/language',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      }
    }
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`
    }
  },
  plugins: [
    vue(),
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwind(),
        // autoprefixer(),
      ]
    }
  },
  server: {
    port: 1998,
    // proxy 
  }
})