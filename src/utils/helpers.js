/**
 * @function getMappedSizePrefixedProperty
 *
 * @description
 * get the prefixed property based on prefix and size
 *
 * @param {string} prefix the prefix to always apply
 * @param {number} size the size for the property
 * @returns {string} the appropriate prefxed property
 */
export const getMappedSizePrefixedProperty = (prefix, size) => {
  return size < 0 ? `${prefix}_NEGATIVE_${Math.abs(size)}` : `${prefix}_${size}`;
};

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
      [getMappedSizePrefixedProperty(prefix, size)]: {
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
