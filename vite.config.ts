import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

function patchTanStackOptimizeDeps() {
  return {
    name: "patch-tanstack-optimize-deps",
    enforce: "post",
    config(config) {
      if (config.environments) {
        for (const envName of Object.keys(config.environments)) {
          const env = config.environments[envName];
          env.optimizeDeps = {
            ...(env.optimizeDeps ?? {}),
            exclude: [
              ...(env.optimizeDeps?.exclude ?? []),
              "@tanstack/start-server-core",
              "@tanstack/start-client-core",
              "@tanstack/start-plugin-core",
              "@tanstack/react-start",
              "@tanstack/react-router"
            ]
          };
        }
      }
      return config;
    }
  };
}

export default defineConfig(({ command }) => ({
  plugins: [tanstackStart(), patchTanStackOptimizeDeps(), react(), tsconfigPaths(), tailwindcss(), cloudflare()],
  optimizeDeps: {
    exclude: [
      "@tanstack/start-server-core",
      "@tanstack/start-client-core",
      "@tanstack/start-plugin-core",
      "@tanstack/react-start",
      "@tanstack/react-router"
    ]
  },
  server: {
    host: true,
    port: 4173,
  },
  build: {
    target: ["es2022"],
  },
}));
