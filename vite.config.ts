import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const resolvePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

const externalPackages = [/^react($|\/)/, /^react-dom($|\/)/, /^@mui\//, /^@emotion\//, /^dayjs($|\/)/];

export default defineConfig({
  plugins: [react(), dts({ entryRoot: "src", include: ["src"], tsconfigPath: "./tsconfig.json" })],
  resolve: {
    alias: {
      "@core": resolvePath("./src/core"),
      "@multiStepFormProvider": resolvePath("./src/multiStepFormProvider"),
      "@multiStepForm": resolvePath("./src/multiStepForm"),
      "@renderer": resolvePath("./src/renderer"),
      "@adapters": resolvePath("./src/adapters")
    }
  },
  build: {
    sourcemap: true,
    lib: {
      entry: { index: resolvePath("./src/lib/index.ts"), mui: resolvePath("./src/lib/mui/index.ts"), native: resolvePath("./src/lib/native/index.ts") },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format === "es" ? "js" : "cjs"}`
    },
    rollupOptions: {
      external: (id) => externalPackages.some((pattern) => pattern.test(id))
    }
  }
});
