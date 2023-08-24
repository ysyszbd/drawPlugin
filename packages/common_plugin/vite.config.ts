import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "commonIndex",
      fileName: "common_index",
      formats: ["es", "umd"],
      
    },
  },
  server: {
    port: 5176,
  },
});
