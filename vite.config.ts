import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/turistka-kh.cz/',
  plugins: [react(), tailwindcss()],
});
