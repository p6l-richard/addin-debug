import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true, port: 8082 },
  plugins: [mkcert(), react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src", "index.tsx"),
        taskpane: resolve(__dirname, "src", "taskpane.html"),
      },
    },
  },
});
