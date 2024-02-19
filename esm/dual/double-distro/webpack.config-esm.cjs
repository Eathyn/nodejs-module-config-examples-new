module.exports = {
  mode: 'none',
  entry: '../../src/index.js',
  output: {
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
  target: 'node',
  experiments: {
    outputModule: true,
  },
}