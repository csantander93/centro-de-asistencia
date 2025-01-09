import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/centro-de-asistencias/', // El nombre exacto de tu repositorio
  resolve: {
    alias: {
      '@components': '/src/components',
    }
  }
})
