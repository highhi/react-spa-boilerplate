import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import Config from 'webpack-config';
import path from 'path';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

const ENV = process.env.NODE_ENV;
const isProd = ENV === 'production';
const JS_FILE_NAME = isProd ? 'js/bundle-[hash].js' : 'js/bundle.js';
const CSS_FILE_NAME = isProd ? 'css/style-[hash].css' : 'css/style.css';
const IMG_FILE_NAME = isProd ? 'file?name=img/[name]-[hash].[ext]' : 'file?name=img/[name].[ext]';

export default new Config().merge({
  /*
  Setting for the postcss-js
  see: https://github.com/postcss/postcss-js/blob/9685aa0bc49ef0203db666bab78b6e4621378944/README.md#cannot-resolve-module-fs
  */
  node: {
    fs: 'empty'
  },

  resolve: {
    root: [ path.join(__dirname, '../src') ],
    extensions: ['', '.js', 'css'],
    alias: {
      __img: path.join(__dirname, '../src/img'),
      __components: path.join(__dirname, '../src/js/components'),
      __containers: path.join(__dirname, '../src/js/containers'),
      __actions: path.join(__dirname, '../src/js/actions'),
      __reducers: path.join(__dirname, '../src/js/reducers'),
      __store: path.join(__dirname, '../src/js/store'),
      __util: path.join(__dirname, '../src/js/util.js'),
      __config: path.join(__dirname, '../src/config'),
    }
  },

  entry: [
    path.join(__dirname, '../src/css/style.css'),
    path.join(__dirname, '../src/js/index.js')
  ],

  output: {
    path: path.join(__dirname, '../dist'),
    filename: JS_FILE_NAME,
    
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, '../src/js'),
      exclude: /node_modules/,
      loaders: ['babel']
    }, {
      test: /\.css$/,
      include: path.join(__dirname, '../src/css'),
      loader: ExtractTextPlugin.extract('style', 'css!postcss')
    }, {
      test: /\.(png|jpg)$/,
      include: path.join(__dirname, '../src/img'),
      loaders: [IMG_FILE_NAME]
    }, {
      test: /\.json$/,
      loader: "json-loader"
    }]
  },

  postcss: function () {
    return [precss, autoprefixer];
  },

  plugins: [
    new ExtractTextPlugin(CSS_FILE_NAME),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify(ENV) }
    }),
  ]
});
