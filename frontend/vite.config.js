import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import dotenv from 'dotenv';
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  appType: 'mpa',
  base: './',
  mode: process.env.MODE,
  define: {
    'process.env.BACKEND_URL': JSON.stringify(process.env.API_URL),
    'process.env.APP_NAME': JSON.stringify(process.env.APP_NAME),
    'process.env.APP_DESCRIPTION': JSON.stringify(process.env.APP_DESCRIPTION),
  },
  server: {
    strictPort: true,
    host: process.env.HOST,
    port: process.env.PORT,
    https: process.env.HTTPS === 'true',
    open: true,
    warmup: true,
    watch: {
      clearScreen: true,
      followSymlinks: true,
      skipInitialBuild: true,
    },
    fs: {
      strict: true,
      allow: ['src', 'public', 'node_modules/@prefresh/core', 'node_modules/@prefresh/utils'],
    },
    origin: process.env.FRONTEND_URL,
  },
  build: {
    minimize: true,
    cssMinify: true,
  },
});
