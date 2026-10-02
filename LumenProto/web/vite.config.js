import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: '.',
  base: './', // CRITICAL for itch.io relative path loading in iframe
  publicDir: '../assets', // Serve the assets directory directly
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
