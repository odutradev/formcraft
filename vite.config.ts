import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const resolvePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

const externalPackages = [/^react($|\/)/, /^react-dom($|\/)/, /^@mui\//, /^@emotion\//, /^dayjs($|\/)/];

export default defineConfig({
  plugins: [react(), dts({ entryRoot: ".", include: ["src", "lib"], tsconfigPath: "./tsconfig.json" })],
  resolve: {
    alias: {
      "@components": resolvePath("./src/components"),
      "@adapters": resolvePath("./src/adapters"),
      "@hooks": resolvePath("./src/hooks"),
      "@core": resolvePath("./src/core")
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: { index: resolvePath("./lib/index.ts"), mui: resolvePath("./lib/mui/index.ts"), native: resolvePath("./lib/native/index.ts") },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format === "es" ? "js" : "cjs"}`
    },
    rollupOptions: {
      external: (id) => externalPackages.some((pattern) => pattern.test(id))
    }
  }
});
