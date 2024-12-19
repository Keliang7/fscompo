import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { path } from "path";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ArcoResolver()],
    }),
    Components({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "Fscompo",
      fileName: format => `fscompo.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },

  resolve: {
    extensions: [
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".less",
      ".css",
    ],
    // 路径映射
    alias: [
      {
        find: /\@\//,
        replacement: resolve(__dirname, "../src"),
      },
      {
        find: "assets",
        replacement: resolve(__dirname, "../src/assets"),
      },
      {
        find: "vue",
        replacement: "vue/dist/vue.esm-bundler.js", // compile template
      },
    ],
  },
});
