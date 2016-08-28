var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

config.entry.push('webpack-dev-server/client?http://localhost:8000');
config.entry.push('webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

new WebpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath,
  contentBase: 'dist'
}).listen(8000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8000/');
});
