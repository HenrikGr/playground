

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
