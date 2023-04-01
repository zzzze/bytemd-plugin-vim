import { defineConfig } from 'vite'
import { camelCase } from 'lodash-es'
import pkg from './package.json'
import typescript from '@rollup/plugin-typescript'
import terser from '@rollup/plugin-terser'

const externalDeps = Object.keys(pkg.peerDependencies ?? {})

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: camelCase(pkg.name),
      formats: ['es', 'cjs', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        ...externalDeps,
        'codemirror-ssr/keymap/vim',
      ],
    },
  },
  plugins: [
    terser(),
    typescript({
      declaration: true,
      include: './src/*.ts',
      outDir: 'dist',
    }),
  ],
})
