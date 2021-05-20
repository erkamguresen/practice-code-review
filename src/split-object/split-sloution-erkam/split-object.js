/**
 * Splits an object into multiple objects with one key/value pair each.
 * The new objects are returned in an array.
 *
 * This function has no side-effects, the argument object is not modified
 *
 * @param {Object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 * @example
 *
 * splitObject({ a: 1, b: 2, c: 3 });
 * // -> [{ a: 1 }, { b: 2 }, { c: 3 }]
 *
 * @example
 *
 * splitObject({});
 * // -> []
 */
export const solutionName = (toSeparate = {}) => {
  const returnArray = [];

  for (const key in toSeparate) {
    if (Object.hasOwnProperty.call(toSeparate, key)) {
      returnArray.push({ key: toSeparate[key] });
    }
  }

  return returnArray;
};
