import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

// The sources keep their .js names, so JSX is read from .js files too.
const jsxInJs = /src\/.*\.jsx?$/

export default defineConfig({
	plugins: [
		react({include: /\.(js|jsx)$/}),
		// builds src/service-worker.js to /service-worker.js, the address visitors' browsers already have installed
		VitePWA({
			strategies: 'injectManifest',
			srcDir: 'src',
			filename: 'service-worker.js',
			injectRegister: false, // src/serviceWorkerRegistration.js registers it
			manifest: false, // public/favicon/manifest.json stays the manifest
			injectManifest: {
				rollupFormat: 'iife', // registered as a classic script, as before
				globPatterns: ['index.html', 'assets/**/*.{js,mjs,css,png,jpg,jpeg,gif,svg,woff,woff2,ttf,otf}'],
				maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
			},
		}),
	],
	esbuild: {loader: 'jsx', include: jsxInJs, exclude: []},
	optimizeDeps: {esbuildOptions: {loader: {'.js': 'jsx'}}},
	// the host publishes build/
	build: {outDir: 'build'},
	test: {environment: 'jsdom', globals: true, setupFiles: './src/setupTests.js'},
})
