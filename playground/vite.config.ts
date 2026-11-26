import { fileURLToPath, URL } from "node:url";
import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import type { Plugin } from "vite";

const resolvePath = (path: string) => fileURLToPath(new URL(path, import.meta.url));

const packageName = "multi-step-form";

const watchLibraryBuild = (): Plugin => ({
  name: "watch-library-build",
  apply: "serve",
  configureServer: async () => {
    const watcher = await build({
      configFile: resolvePath("../vite.config.ts"),
      logLevel: "warn",
      build: { emptyOutDir: false, watch: {} }
    });
    if (!("on" in watcher)) return;
    await new Promise<void>((resolve) => {
      watcher.on("event", (event) => {
        if (event.code === "END" || event.code === "ERROR") resolve();
      });
    });
  }
});

export default defineConfig({
  root: resolvePath("."),
  plugins: [react(), watchLibraryBuild()],
  resolve: {
    alias: [
      { find: /^@playground\//, replacement: resolvePath("./") },
      { find: new RegExp(`^${packageName}/mui$`), replacement: resolvePath("../dist/mui.js") },
      { find: new RegExp(`^${packageName}/native$`), replacement: resolvePath("../dist/native.js") },
      { find: new RegExp(`^${packageName}/mantine$`), replacement: resolvePath("../dist/mantine.js") },
      { find: new RegExp(`^${packageName}/antd$`), replacement: resolvePath("../dist/antd.js") },
      { find: new RegExp(`^${packageName}/chakra$`), replacement: resolvePath("../dist/chakra.js") },
      { find: new RegExp(`^${packageName}/enchase$`), replacement: resolvePath("../dist/enchase.js") },
      { find: new RegExp(`^${packageName}$`), replacement: resolvePath("../dist/index.js") }
    ]
  },
  optimizeDeps: {
    exclude: [packageName]
  }
});
