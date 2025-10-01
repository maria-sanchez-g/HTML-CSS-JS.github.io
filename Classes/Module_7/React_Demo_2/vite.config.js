import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/weather': {
        target: 'https://goweather.herokuapp.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    logLevel: 'debug',
  }, 
})

// //When you run your React app locally (for example http://localhost:5173 with Vite), and try to fetch data from another domain (like https://goweather.herokuapp.com/weather/Auckland), the browser blocks it because the server did not allow your origin (localhost) via the Access-Control-Allow-Origin header.
// This is a CORS error.
// We added the proxy to fixed it