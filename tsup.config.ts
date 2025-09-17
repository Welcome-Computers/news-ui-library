import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/hooks/*",
    "src/util/*",
  ],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react", "react-dom", "antd"],
  loader: {
    ".scss": "file"  // tell tsup to just treat scss as external files
  }
});
