import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "/src/styles/mixins.scss" as *;
          @use "/src/styles/variables.scss" as *;
        `,
      },
    },
  },
})
