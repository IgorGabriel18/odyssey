import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            "~assets": path.resolve(__dirname, "./src/assets"),
            "~contexts": path.resolve(__dirname, "./src/contexts"),
            "~styles": path.resolve(__dirname, "./src/styles"),
            "~types": path.resolve(__dirname, "./src/types"),
            "~utils": path.resolve(__dirname, "./src/utils")
        }
    }
});
