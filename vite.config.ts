import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"simple-peer": "simple-peer/simplepeer.min.js",
		}
	}
});
