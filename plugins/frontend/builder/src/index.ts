/* eslint-disable quote-props */

import { build, mergeConfig, UserConfig } from 'vite'
import { existsSync, promises as fsp } from 'fs'
import vue from '@vitejs/plugin-vue'

export async function buildExtension(root: string, config: UserConfig = {}) {
  if (!existsSync(root + '/client')) return

  await build(mergeConfig({
    root,
    build: {
      outDir: 'dist',
      minify: 'esbuild',
      assetsDir: '',
      emptyOutDir: true,
      lib: {
        entry: root + '/client/index.ts',
        fileName: 'index',
        formats: ['es'],
      },
      rollupOptions: {
        external: [
          root + '/vue.js',
          root + '/vue-router.js',
          root + '/client.js',
        ],
        output: {
          format: 'iife',
        },
      },
    },
    plugins: [vue()],
    resolve: {
      alias: {
        'vue': root + '/vue.js',
        'vue-router': root + '/vue-router.js',
        '~/client': root + '/client.js',
      },
    },
  }, config))

  await fsp.rename(root + '/dist/index.es.js', root + '/dist/index.js')
}
