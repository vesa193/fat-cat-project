import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./setupTests.js'],
    },
    resolve: {
        alias: [{ find: '@', replacement: resolve(__dirname, './src') }],
    },
    server: {
        port: 3000,
    },
});
