import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { compression } from "vite-plugin-compression2";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "brotliCompress" }),
  ],
  build: {
    target: "es2019",
    sourcemap: false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          gsap: ["gsap", "gsap/ScrollTrigger"],
          vendor: ["react", "react-dom", "react-helmet-async"],
        },
      },
    },
  },
});
