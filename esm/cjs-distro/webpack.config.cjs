module.exports = {
  mode: 'none',
  entry: '../src/index.js',
  output: {
    filename: '[name].cjs',
    clean: true,
    library: {
      type: 'commonjs',
    },
    iife: false,
  },
  target: 'node',
}