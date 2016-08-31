const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const path = require('path');
const Config = require('webpack-config').Config;

module.exports = new Config().extend('config/webpack.base.config.js').merge({
  output: {
    path: path.join(__dirname, '../release'),
  },

  plugins: [
    new CleanWebpackPlugin(['release']),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ compressor: {
      warnings: false
    }}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/
    })
  ]
});
