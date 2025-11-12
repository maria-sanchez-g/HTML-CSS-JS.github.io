// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

//I had to change my proxy because the frontend and backend because backend runs on: http://localhost:3000 and frontnd on: http://localhost:5173.
//That coused me an issue
//This is called the Same-Origin Policy.
//Browsers block requests between different origins unless the backend explicitly allows it using CORS headers.
//Your backend was not sending those CORS headers, so the browser blocked the request → Network Error.
// Why this works
// The browser never sees port 3000 anymore.
// It only talks to 5173 (the same origin).
// Vite silently forwards the request to backend 3000 behind the scenes.
// That removes the need for CORS on the backend