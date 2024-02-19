const path = require('path')

module.exports = {
  mode: 'none',

  entry: '../../src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].mjs',
    chunkFormat: 'module',
    clean: {
      keep: 'main.cjs',
    },
    iife: false,
    library: {
      type: 'module',
    },
    module: true,
  },

  experiments: {
    outputModule: true,
  },

  target: 'node',
}