import { defineConfig } from 'vite';
import litcss from 'vite-plugin-lit-css';
import path from 'path';

export default defineConfig({
  plugins: [
    litcss({
      include: '**/*.scss', 
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@scss': path.resolve(__dirname, './src/scss'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        }
    }
  }
});
