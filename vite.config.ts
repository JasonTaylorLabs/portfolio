import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// On GitHub Pages a project site is served from https://<user>.github.io/<repo>/,
// so production assets need a "/<repo>/" base. The deploy workflow passes the repo
// name via VITE_BASE; local dev and local builds stay at root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? process.env.VITE_BASE || '/' : '/',
  plugins: [react(), tailwindcss()],
}))
