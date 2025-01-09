import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/centro-de-asistencias/' // Reemplaza con la ruta de tu repositorio
})