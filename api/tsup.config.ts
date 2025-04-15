import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Entry point of your backend server
  outDir: "dist", // Output directory
  format: ["cjs", "esm"], // Output formats
  splitting: true, // Disable code splitting for backend
  sourcemap: true, // Generate source maps for debugging
  clean: true, // Clean output directory before build
  dts: true, // Generate TypeScript declaration files
  minify: false, // Minify output for optimized performance
  shims: true, // Add shims for Node.js APIs
  external: ["express", "dotenv", "axios"], // Mark external dependencies
});
