module.exports = {
  mode: 'none',
  entry: '../../src/index.js',
  output: {
    filename: '[name].cjs',
    clean: true,
    iife: false,
    library: {
      type: 'commonjs-static',
    },
  },
  target: 'node',
}