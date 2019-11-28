
import { flatten } from '../transform-objects'

/**
 * Function that group an array of objects by a property
 * @param objectArray
 * @param property
 * @returns {*}
 */
export function groupByProperty(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

/**
 * Function that group an array of objects by a property
 * It flattens the objects if they are nested
 * @param objectArray
 * @param property
 * @returns {*}
 */
export function groupByNestedProperty(objectArray, property) {
  return objectArray.reduce(function (acc, edge) {
    // flatten the nested object
    const flattenEdge = flatten(edge)
    const key = flattenEdge[property]

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push({...flattenEdge})

    return acc;
  }, {});
}
