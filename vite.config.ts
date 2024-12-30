import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";
import { readdirSync, existsSync } from "fs";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const scriptsDir = resolve(__dirname, "public/scripts");

  const files = readdirSync(scriptsDir);
  const locales = files
    .filter(
      (file) =>
        file.startsWith("live-preview-") &&
        file.endsWith(".ts") &&
        file !== "live-preview-base.ts",
    )
    .map((file) => file.replace("live-preview-", "").replace(".ts", ""));

  const input: Record<string, string> = {};

  locales.forEach((locale) => {
    const filePath = resolve(scriptsDir, `live-preview-${locale}.ts`);
    if (existsSync(filePath)) {
      input[locale] = filePath;
    }
  });

  return {
    define: {
      "process.env": env,
    },
    publicDir: false,
    build: {
      rollupOptions: {
        input,
        output: {
          entryFileNames: "[name].mjs",
        },
      },
      outDir: scriptsDir,
      emptyOutDir: false,
    },
  };
});
