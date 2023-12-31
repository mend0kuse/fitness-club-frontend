/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export default defineConfig({
	server: {
		open: true,
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
	plugins: [react(), tsconfigPaths(), checker({ typescript: true })],
});
