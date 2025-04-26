import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // sets the warning limit to 1000kb
  },
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    host: true,
  },
})
