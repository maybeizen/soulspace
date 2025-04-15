import react from "@vitejs/plugin-react-swc";
import tailwind from "@tailwindcss/vite";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react(), tailwind()],
};
