import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import laravel from 'laravel-vite-plugin';
import postcss from 'postcss';
import postcssPresetEnv from 'postcss-preset-env';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            ssr: 'resources/js/ssr.jsx',
            refresh: true,
        }),
        react(),
        postcss({
            plugins: [
                autoprefixer(),
                postcssPresetEnv({
                    stage: 3,
                }),
            ],
            // Add a debug function to log the processed CSS
            processCss: (css, styleNode, { path }) => {
                console.log('Processed CSS for', path);
                console.log(css);
            },
        }),
    ],
    ...(process.env.NODE_ENV === 'development' && {
        server: {
            host: '0.0.0.0',
            port: 5173,
            strictPort: true,
            origin: `${process.env.DDEV_PRIMARY_URL.replace(/:\d+$/, '')}:5173`,
            cors: {
                origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(\.ddev\.site)(?::\d+)?$/,
            },
        },
    }),
});
