import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure the base path is correct for local development
  base: '/',
  // Removed 'root' property to rely on Vite's default project root detection.
});
