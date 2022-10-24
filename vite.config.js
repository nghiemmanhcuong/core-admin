import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import jsconfigPaths from 'vite-jsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		legacy({
			targets: ['defaults', 'not IE 11']
		}),
		jsconfigPaths()
	],
	server: {
		cors: true,
		proxy: {
			'/api': {
				target: 'https://drake.aspr.work',
				changeOrigin: true,
				// rewrite: path => path.replace(/^\/api/, ''),
				configure: (proxy, options) => {
					// proxy will be an instance of 'http-proxy'
				}
			}
		}
	}
})
