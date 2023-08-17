import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
import EsLint from 'vite-plugin-linter';
import packageJson from './package.json';
const { EsLinter, linterPlugin } = EsLint;
// https://vitejs.dev/config/
export default defineConfig(configEnv => {
  return {
    build: {
      lib: {
        entry: 'src/index.tsx',
        name: 'react-thermostat',
        formats: ['es', 'umd'],
        fileName: (format) => `react-thermostat.${format}.js`,
      },
      rollupOptions: {
        external:[
          ...Object.keys(packageJson.peerDependencies),
          'react/jsx-runtime',
          'react-is',
        ],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@emotion/styled': '@emotion/styled',
            '@emotion/react': '@emotion/react',
            'react/jsx-runtime': 'react/jsx-runtime',
            '@use-gesture/react': '@use-gesture/react'
          }
        }
      },
      minify: true,
    },
    plugins: [
      react({
        jsxImportSource: '@emotion/react',
        babel: {
          plugins: ['@emotion/babel-plugin'],
        },
      }),
      linterPlugin({
        include: ['./src}/**/*.{ts,tsx}'],
        linters: [new EsLinter({ configEnv })],
      }),
    ],
  }
});
