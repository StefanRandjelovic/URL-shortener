import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@images", replacement: "/src/images" },
      { find: "@styles", replacement: "/src/styles" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@jotai", replacement: "/src/jotai" },
    ],
  },
});
