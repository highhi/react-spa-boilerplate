var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

new WebpackDevServer(webpack(config), {
  hot: true,
  publicPath: config.output.publicPath
}).listen(8000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:8000/');
});
