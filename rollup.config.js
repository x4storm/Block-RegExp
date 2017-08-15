import babel from 'rollup-plugin-babel'
import { version } from './package.json'

export default {
  entry: 'lib/breg.js',
  format: 'umd',
  moduleName: 'BlockRegExp',
  dest: 'dist/block-regexp.js',
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ],
  banner: `/* BlockRegExp version ${version} */`,
};
