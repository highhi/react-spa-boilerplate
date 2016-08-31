import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('config/webpack.base.config.js').merge({
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
