const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './static/index.js',
  output: {
    path: path.join(__dirname, 'static/public'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loaders: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}
