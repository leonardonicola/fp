import { Options } from "tsup";

const env = process.env.NODE_ENV;

export const tsup: Options = {
  splitting: true,
  sourcemap: env === "production",
  clean: true, // rimraf dist
  dts: true, // generate d.ts
  shims: true, // add shims like __dirname and __filename for CJS
  format: ["esm", "cjs"],
  watch: env === "development",
  minify: env === "production",
  bundle: env === "production",
  skipNodeModulesBundle: true,
  entry: ["src/index.ts"],
  external: ["src/internal/**/*"], // don't bundle internal folder
};
