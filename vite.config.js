/** @type {import('vite').UserConfig} */
import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': 'src/styles',
        },
      },
    }),
    pug({
      root: './src',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
};
