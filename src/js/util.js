import _ from 'lodash';
import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';

const prefixer = postcssJs.sync([autoprefixer]);

export function keysToCamelCase(obj, keys = null) {
  const clone = {};
  const objKeys = Array.isArray(keys) ? keys : (() => {
    if (_.isPlainObject(keys)) {
      return Object.keys(keys).map((key) => keys[key]);
    }

    return Object.keys(obj);
  })();

  objKeys.forEach((key) => {
    const value = obj[key];
    clone[_.camelCase(key)] = _.isPlainObject(value) ? keysToCamelCase(value) : value;
  });

  return clone;
}

export function getImagePath(path) {
  /* eslint-disable global-require */
  return require(`__img/${path}`);
  /* eslint-enable global-require */
}

export function getPrefixStyles(styles) {
  return prefixer(styles);
}
