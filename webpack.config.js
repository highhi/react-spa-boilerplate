var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  cache: true,
  devtool: 'source-map',

  resolve: {
    root: [ path.join(__dirname, './src') ],
    extensions: ['', '.js', 'css', '.json'],
    alias: {
      img: path.join(__dirname, './src/img'),
      parts: path.join(__dirname, './src/js/compnents/parts'),
      modules: path.join(__dirname, './src/js/compnents/modules'),
      containers: path.join(__dirname, './src/js/containers'),
      actions: path.join(__dirname, './src/js/actions'),
      reducers: path.join(__dirname, './src/js/reducers'),
      store: path.join(__dirname, './src/js/store'),
      util: path.join(__dirname, './src/js/util.js'),
      config: path.join(__dirname, './src/config'),
    }
  },

  entry: [
    './src/css/style.css',
    './src/js/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src', 'js'),
      exclude: [/node_modules/, /\.json$/],
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-1', 'react-hmre']
      }
    }, {
      test: /\.css$/,
      include: path.join(__dirname, 'src', 'css'),
      loader: ExtractTextPlugin.extract('style', 'css!postcss')
    }, {
      test: /\.(png|jpg)$/,
      include: path.join(__dirname, 'src', 'img'),
      loaders: ['file?name=img/[name].[ext]']
    }]
  },

  postcss: function () {
    return [precss, autoprefixer];
  },

  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ]
};
