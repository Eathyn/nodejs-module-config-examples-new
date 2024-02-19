module.exports = {
  mode: 'none',
  entry: '../../src/index.js',
  output: {
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