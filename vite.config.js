import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    ...(process.env.NODE_ENV === 'development' && {
        server: {
            host: '0.0.0.0',
            port: 5173,
            strictPort: true,
            origin: `${process.env.DDEV_PRIMARY_URL.replace(/:\d+$/, '')}:5173`,
            cors: {
                origin: /https?:\/\/([A-Za-z0-9\-.]+)?(\.ddev\.site)(?::\d+)?$/,
            },
        },
    }),
    plugins: [
        tailwindcss(),
        laravel({
            input: 'resources/js/app.tsx',
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
    ],
});
