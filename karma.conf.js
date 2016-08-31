const path = require('path');
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      './test/**/*.spec.js'
    ],

    plugins: [
      'karma-mocha',
      'karma-webpack',
      'karma-phantomjs-launcher'
    ],

    preprocessors: {
      './test/**/*.spec.js': ['webpack']
    },

    webpack: {
      devtool: 'inline-source-map',

      resolve: {
        root: [ path.join(__dirname, 'src') ],
        extensions: ['', '.js', 'css'],
        alias: {
          __img: path.join(__dirname, 'src/img'),
          __components: path.join(__dirname, 'src/js/components'),
          __containers: path.join(__dirname, 'src/js/containers'),
          __actions: path.join(__dirname, 'src/js/actions'),
          __reducers: path.join(__dirname, 'src/js/reducers'),
          __store: path.join(__dirname, 'src/js/store'),
          __util: path.join(__dirname, 'src/js/util.js'),
          __config: path.join(__dirname, 'src/config'),
        }
      },

      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            presets: ['react', 'es2015', 'stage-1'],
            plugins: ['babel-plugin-espower']
          }
        }, {
          test: /\.json$/,
          loader: 'json'
        }, {
          test: /\.(png|jpg)$/,
          include: path.join(__dirname, 'src/img'),
          loaders: ['file?name=img/[name].[ext]']
        },]
      },
      node: {
        fs: 'empty',
        console: false
      }
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
