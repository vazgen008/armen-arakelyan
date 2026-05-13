import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  // Add this line here to handle the .MOV file
  assetsInclude: ["**/*.MOV"], 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
