import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The admin reads lesson titles from the student site's data, so Vite may read one level up.
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { fs: { allow: ['..'] } },
});
