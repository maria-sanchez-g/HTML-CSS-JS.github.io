import axios from "axios";

// Point to your backend
const api = axios.create({
  baseURL: "/api",//This allows Vite’s proxy to forward requests automatically to your backend, whether it is running on port 3000, 5050, or in production later.
  headers: { "Content-Type": "application/json" },
});

export default api;
