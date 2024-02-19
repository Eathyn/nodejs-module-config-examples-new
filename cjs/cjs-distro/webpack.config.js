module.exports = {
  entry: '../src/index.js',
  mode: 'none',
  output: {
    clean: true,
    library: {
      type: 'commonjs',
    },
    iife: false,
  },
  target: 'node',
}