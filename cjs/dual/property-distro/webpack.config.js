const path = require('path')

module.exports = {
  mode: 'none',
  entry: path.resolve(__dirname, '../../src/index.js'),
  output: {
    clean: true,
    library: {
      type: 'commonjs2',
    },
    iife: false,
  },
  target: 'node',
}