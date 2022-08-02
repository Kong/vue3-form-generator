import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    }
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue',
        },
      },
      external: ['vue']
    },
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'vue-form-generator',
      fileName: (format) => `${format}.js`
    },
  },
  plugins: [vue()]
})
