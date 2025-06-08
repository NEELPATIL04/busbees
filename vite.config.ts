// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Add API proxy to handle API calls
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // Your API server
        changeOrigin: true,
        secure: false,
      }
    }
  },
  // If you're building for production
  build: {
    outDir: 'dist'
  }
});