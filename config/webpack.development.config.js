const webpack = require('webpack');
const Config = require('webpack-config').Config;

module.exports = new Config().extend('config/webpack.base.config.js').merge({
  cache: true,
  devtool: 'source-map',

  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/dev-server'
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
