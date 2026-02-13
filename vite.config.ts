import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Vite の設定
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
  const basePath =
    env.VITE_BASE_PATH ||
    (env.VITE_USE_REPO_BASE === 'true' && repoName ? `/${repoName}/` : '/');

  return {
    // GitHub Pages base path:
    // - custom domain: "/"
    // - repo path: set VITE_BASE_PATH or VITE_USE_REPO_BASE=true
    base: basePath,

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
