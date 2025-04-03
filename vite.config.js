import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '~': path.resolve(__dirname, 'node_modules'),
    },
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        pure_getters: true,
      },
      mangle: true,
      format: {
        comments: false,
      },
    },
    outDir: 'build',
    minify: 'terser',
    sourcemap: false,
    chunkSizeWarningLimit: 2000,
  },
});
