import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const config = defineConfig({
	plugins: [sveltekit()],
	define: {
		'process.env': {}
	}
});

export default config;
