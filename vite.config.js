import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-qr/",
  plugins: [react(),],
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  }
});
