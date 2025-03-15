import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'node_modules'),
    },
  },
  build: {
    terserOptions: {
      compress: {
        pure_getters: true,
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
    },
    outDir: 'build',
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
  },
});
