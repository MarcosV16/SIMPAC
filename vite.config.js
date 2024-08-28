import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
<<<<<<< HEAD
import react from '@vitejs/plugin-react';
=======
>>>>>>> 61d65a011a90045c229ae69ee7a0a6f6ba7f8990

export default defineConfig({
    plugins: [
        laravel({
<<<<<<< HEAD
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
=======
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
>>>>>>> 61d65a011a90045c229ae69ee7a0a6f6ba7f8990
    ],
});
