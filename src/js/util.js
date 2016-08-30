import _ from 'lodash';

/* eslint import/prefer-default-export: 0 */
export const keysToCamelCase = (obj, keys = null) => {
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
};
