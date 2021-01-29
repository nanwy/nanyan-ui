import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import typescript from 'rollup-plugin-typescript2'
// console.log('typescript: ', typescript);
import dartSass from 'sass';
import {
  terser
} from "rollup-plugin-terser"

export default {
  input: 'src/lib/index.ts',
  output: {
    file: 'lib/index.esm.js',
    format: 'es',
    // plugins: [terser()]
  },
  plugins: [
    // terser(),
    typescript({
      tsconfigOverride: {
        'include': [
          'packages/**/*',
          'typings/vue-shim.d.ts',
        ],
        'exclude': [
          'node_modules',
          'packages/**/__tests__/*',
        ],
      },
      abortOnError: false,
    }),
    vue({
      target: 'browser',
      css: false,
      exposeFilename: false,
    }),

  ],
}