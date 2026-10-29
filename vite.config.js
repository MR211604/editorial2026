import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4321,
  },
  base: "/_editorial2026/", // <- ESTO SE PONE EN PRODUCCION
  // base: "/",
  plugins: [react(), tailwindcss()],
});
