require('babel-core/register');
const Config = require('webpack-config').Config;
const ENV = process.env.NODE_ENV || 'development';

module.exports = new Config().extend(`config/webpack.${ENV}.config.js`);
