import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import path from 'path';
import Config from 'webpack-config';

export default new Config().extend('config/webpack.base.config.js').merge({
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
