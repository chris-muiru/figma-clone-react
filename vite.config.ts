import react from "@vitejs/plugin-react-swc"
import path from "path"
import { defineConfig } from "vite"
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	// resolve: {},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@modules": path.resolve(__dirname, "./src/modules"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@routes": path.resolve(__dirname, "./src/routes"),
		},
	},
})
