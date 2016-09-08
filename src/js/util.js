import isPlainObject from 'lodash/isPlainObject';
import camelCase from 'lodash/camelCase';

export function keysToCamelCase(obj, keys = null) {
  const clone = {};
  const objKeys = Array.isArray(keys) ? keys : (() => {
    if (isPlainObject(keys)) {
      return Object.keys(keys).map((key) => keys[key]);
    }

    return Object.keys(obj);
  })();

  objKeys.forEach((key) => {
    const value = obj[key];
    clone[camelCase(key)] = isPlainObject(value) ? keysToCamelCase(value) : value;
  });

  return clone;
}

export function getImagePath(path) {
  /* eslint-disable global-require */
  return require(`__img/${path}`);
  /* eslint-enable global-require */
}
