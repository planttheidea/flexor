/**
 * @function getMappedSizeStyles
 *
 * @description
 * get the prefixed size-based styles based on the values passed
 *
 * @param {Array<number>} sizes the list of sizes to map
 * @param {string} prefix te prefix to apply to each key on the map
 * @param {string} property the CSS property to assign the size to
 * @returns {Object} the mapped size-based styles
 */
export const getMappedSizeStyles = (sizes, prefix, property) => {
  return sizes.reduce((map, size) => {
    return {
      ...map,
      [`${prefix}_${size < 0 ? `NEGATIVE_${size}` : size}`]: {
        [property]: size
      }
    };
  }, {});
};

/**
 * @function getMappedStyles
 *
 * @description
 * get the mapped styles based on the values passed
 *
 * @param {Object} object the object of key => value pairs to assign to the property
 * @param {string} property the CSS property to assign th values to
 * @returns {Object} the mapped styles
 */
export const getMappedStyles = (object, property) => {
  return Object.keys(object).reduce((map, key) => {
    return {
      ...map,
      [key]: {
        [property]: object[key]
      }
    };
  }, {});
};
