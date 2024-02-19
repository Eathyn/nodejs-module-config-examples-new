module.exports = {
  mode: 'none',

  entry: '../../src/index.js',

  output: {
    clean: {
      keep: 'wrapper.mjs',
    },
    library: {
      type: 'commonjs',
    },
    iife: false,
  },

  target: 'node',
}