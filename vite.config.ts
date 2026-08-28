import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Served from https://<user>.github.io/portfolio/ in production (GitHub Pages
// project site), so assets need the "/portfolio/" base. Dev stays at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
}))
