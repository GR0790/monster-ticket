import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('contentful') || id.includes('@contentful')) return 'contentful';
            if (id.includes('react-helmet')) return 'helmet';
            return 'vendor';
          }
        },
      },
    },
  },
});
