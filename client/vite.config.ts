import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['zod'], // Ensure Zod is pre-bundled
	},
	server: {
		proxy: {
			"/unifont-15.1.05.otf": "http://unifoundry.com/pub/unifont/unifont-15.1.05/font-builds"
		}
	}
});
