import { defineConfig } from "rollup";
import { swc } from "rollup-plugin-swc3";
import UnpluginIsolatedDecl from "unplugin-isolated-decl/rolldown";
import typescript from "@rollup/plugin-typescript";

export default defineConfig([
  {
    input: "src/index.ts",
    output: {
      dir: "dist/swc",
      format: "esm",
    },
    plugins: [UnpluginIsolatedDecl({ transformer: "swc" }), swc({})],
    external: ["react"],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist/ts",
      format: "esm",
    },
    plugins: [typescript()],
    external: ["react"],
  },
]);
