const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './static/index.js',
    about: './static/components/about.js'
  },
  output: {
    path: path.join(__dirname, 'static/public'),
    filename: '[name].js'
  },
  resolve: {
      extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      loaders: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
             fallback: 'style-loader',
             use: 'css-loader',
           })
    }]
  },
  plugins: [
     new ExtractTextPlugin('[name].css'),
 ]
}
