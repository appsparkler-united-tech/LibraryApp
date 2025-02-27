import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// Conditionally load the config based on whether Storybook is running
const isStorybook = process.env.STORYBOOK === 'true';

export default defineConfig({
  plugins: [
    react(),
    !isStorybook && tailwindcss(),
    !isStorybook && reactRouter(),
    !isStorybook && tsconfigPaths(),
  ].filter(Boolean), // This ensures the plugins are only included when needed
});
