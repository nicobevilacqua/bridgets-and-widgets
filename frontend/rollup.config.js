import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

import tsConfig from './tsconfig.json';

export default {
	input: 'src/lib/widget.svelte',
	output: {
		format: 'iife',
		name: 'Widget',
		file: 'static/widget/index.js'
	},
	plugins: [
		svelte({
			extensions: ['.svelte'],
			emitCss: true // Let's store CSS in JS (no-depends), but you can emit it in separate *.css file too
		}),
		postcss({
			config: {
				path: './postcss.config.cjs'
			},
			minimize: true,
			modules: true,
			use: {
				sass: null,
				stylus: null,
				less: { javascriptEnabled: true }
			},
			extract: true,
			extensions: ['.css', '.postcss']
		}),
		typescript({
			compilerOptions: { lib: ['es5', 'es6', 'dom'], target: 'es5' },
			rootDir: './src'
		}),
		commonjs({ include: 'node_modules/**', extensions: ['.js', '.ts'] }),
		resolve({
			browser: true,
			dedupe: (importee) => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		terser()
	]
};
