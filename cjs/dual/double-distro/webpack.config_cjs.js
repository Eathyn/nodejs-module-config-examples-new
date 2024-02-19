const path = require('path')

module.exports = {
  mode: 'none',

  entry: '../../src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].cjs',
    clean: {
      keep: 'main.mjs',
    },
    library: {
      type: 'commonjs',
    },
    iife: false,
  },

  target: 'node',
}