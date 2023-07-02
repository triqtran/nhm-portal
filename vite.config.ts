import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // static files
      cores: path.resolve(__dirname, './src/cores'),
      constants: path.resolve(__dirname, './src/constants'),
      utils: path.resolve(__dirname, './src/utils'),
      modules: path.resolve(__dirname, './src/modules'),
      store: path.resolve(__dirname, './src/store'),
      content: path.resolve(__dirname, './src/content'),
      hook: path.resolve(__dirname, './src/hook'),
      assets: path.resolve(__dirname, './src/assets'),
      types: path.resolve(__dirname, './src/types'),
      reduxStore: path.resolve(__dirname, './src/reduxStore'),
    },
  },
});
