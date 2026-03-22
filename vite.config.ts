import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isShopify = mode === "shopify";
  return {
    plugins: [react()],
    publicDir: isShopify ? false : "./static",
    base: isShopify ? "{{ 'app' | asset_url | split: 'app' | first }}" : "./",
    build: isShopify
      ? {
          outDir: "shopify-theme/assets",
          emptyOutDir: false,
          rollupOptions: {
            input: "src/index.tsx",
            output: {
              entryFileNames: "app.js",
              chunkFileNames: "app-[name].js",
              assetFileNames: (info) => {
                if (info.name && info.name.endsWith(".css")) return "app.css";
                return "[name][extname]";
              },
            },
          },
        }
      : {},
    css: {
      postcss: {
        plugins: [tailwind()],
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  };
});
