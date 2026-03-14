import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/three")) {
            return "three-vendor";
          }

          if (id.includes("node_modules/@react-three/fiber")) {
            return "r3f-fiber";
          }

          if (id.includes("node_modules/@react-three/drei")) {
            return "r3f-drei";
          }

          if (id.includes("node_modules/@react-three/rapier")) {
            return "r3f-rapier";
          }

          if (id.includes("node_modules/@react-three/postprocessing")) {
            return "r3f-postprocessing";
          }

          if (id.includes("node_modules/postprocessing")) {
            return "postprocessing-vendor";
          }

          if (
            id.includes("node_modules/@dimforge") ||
            id.includes("node_modules/maath") ||
            id.includes("node_modules/camera-controls") ||
            id.includes("node_modules/motion")
          ) {
            return "r3f-vendor";
          }

          if (id.includes("node_modules/gsap") || id.includes("gsap-trial")) {
            return "gsap-vendor";
          }
        },
      },
    },
  },
});
