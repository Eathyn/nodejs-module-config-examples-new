module.exports = {
  entry: '../src/index.js',
  experiments: {
    outputModule: true,
  },
  mode: 'none',
  output: {
    chunkFormat: 'module',
    clean: true,
    iife: false,
    library: {
      type: 'module',
    },
    module: true,
    filename: '[name].mjs',
  },
  target: 'node',
}