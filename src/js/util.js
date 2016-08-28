import _ from 'lodash';

export const keysToCamelCase = (obj, keys = null) => {
  const clone = {};
  let objKeys;

  if (Array.isArray(keys)) {
    objKeys = keys;
  } else if (_.isPlainObject(keys)) {
    objKeys = Object.keys(keys).map((key) => {
      return keys[key];
    });
  } else {
    objKeys = Object.keys(obj);
  }

  objKeys.forEach((key) => {
    const value = obj[key];
    clone[_.camelCase(key)] = _.isPlainObject(value) ? keysToCamelCase(value) : value;
  });

  return clone;
};
