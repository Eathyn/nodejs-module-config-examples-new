module.exports = {
  mode: 'none',
  entry: '../src/index.js',
  output: {
    chunkFormat: 'module',
    clean: true,
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