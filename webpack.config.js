const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, 'src', 'app.js'),
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.bs.js', '.js'],
  },
};
