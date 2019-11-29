/**
 * @prettier
 * @copyright (c) 2019 - present, HGC-AB
 * @licence This source code is licensed under the MIT license described and found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Flatten a nested object
 * @param obj
 * @returns {{}}
 */
export function flatten(obj) {
  return Object.keys(obj).reduce((acc, current) => {
    const key = `${current}`;
    const currentValue = obj[current];
    if (Array.isArray(currentValue) || Object(currentValue) === currentValue) {
      Object.assign(acc, flatten(currentValue));
    } else {
      acc[key] = currentValue;
    }
    return acc;
  }, {});
}
