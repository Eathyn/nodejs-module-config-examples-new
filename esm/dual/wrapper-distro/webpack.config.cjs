module.exports = {
  mode: 'none',
  entry: '../../src/index.js',
  output: {
    clean: {
      keep: 'wrapper.js',
    },
    filename: '[name].cjs',
    library: {
      type: 'commonjs',
    },
    iife: false,
  },
  target: 'node',
}