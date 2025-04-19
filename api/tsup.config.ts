import { defineConfig } from "tsup";

// dev config
// export default defineConfig({
//   entry: ["src/server.ts"], // Entry point of your backend server
//   outDir: "dist", // Output directory
//   format: ["cjs", "esm"], // Output formats
//   splitting: true, // Disable code splitting for backend
//   sourcemap: true, // Generate source maps for debugging
//   clean: true, // Clean output directory before build
//   dts: true, // Generate TypeScript declaration files
//   minify: false, // Minify output for optimized performance
//   shims: true, // Add shims for Node.js APIs
//   external: ["express", "dotenv", "axios"], // Mark external dependencies
// });

// prod config
export default defineConfig({
  entry: ["src/server.ts"], // Main server entry
  outDir: "dist", // Output folder
  format: ["cjs"], // Stick to CJS for backend unless ESM-only
  splitting: false, // Disable code splitting for Node.js
  sourcemap: false, // Disable in production (or make it optional)
  clean: true, // Clean build folder before build
  dts: true, // Emit types
  minify: true, // Minify for smaller, faster output
  shims: false, // Only enable if needed (ex: for `import.meta`)
  external: ["express", "dotenv", "axios"], // Externalize deps
  target: "node18", // Explicit Node version for better output
  platform: "node", // Platform-aware optimizations
});
