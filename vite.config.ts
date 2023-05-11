import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { PORT } from './config/constant';
import { themeVariables } from './config/theme';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const VITE_ACCOUNT_URL = loadEnv(mode, process.cwd()).VITE_ACCOUNT_URL;
  return {
    plugins: [react()],

    // css
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
      },
    },
    // server
    server: {
      port: PORT,
      // proxy: {
      //   [VITE_ACCOUNT_URL]: {
      //     target: VITE_ACCOUNT_URL,
      //     changeOrigin: true,
      //   },
      // },
    },
    // alias
    resolve: {
      alias: [
        { find: /^~/, replacement: path.resolve(__dirname, './') },
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
        { find: '@c', replacement: path.resolve(__dirname, 'config') },
      ],
    },
  };
});
