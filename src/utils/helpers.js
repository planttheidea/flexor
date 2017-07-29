/**
 * @function fastReduce
 *
 * @description
 * reduce the array to the value based on return from fn calls
 *
 * @param {Array<*>} array the array to reduce
 * @param {function(*, number): *} fn the fn to return the reduced value
 * @param {*} initialValue the initial value of the reduction
 * @returns {*} the reduced value
 */
export const fastReduce = (array, fn, initialValue) => {
  let value = initialValue,
      index = -1;

  while (++index < array.length) {
    value = fn(value, array[index]);
  }

  return value;
};

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
  return fastReduce(
    sizes,
    (map, size) => {
      return {
        ...map,
        [getMappedSizePrefixedProperty(prefix, size)]: {
          [property]: size
        }
      };
    },
    {}
  );
};

/**
 * @function getMappedStyles
 *
 * @description
 * get the mapped styles based on the values passed
 *
 * @param {string} property the CSS property to assign th values to
 * @param {Object} object the object of key => value pairs to assign to the property
 * @returns {Object} the mapped styles
 */
export const getMappedStyles = (property, object) => {
  return fastReduce(
    Object.keys(object),
    (map, key) => {
      return {
        ...map,
        [key]: {
          [property]: object[key]
        }
      };
    },
    {}
  );
};

/**
 * @function merge
 *
 * @description
 * merge the properties from source into target
 *
 * @param {Object} target the target object
 * @param {Object} source the source object to merge into target
 * @returns {Object} the target with the source merged in
 */
export const merge = (target, source) => {
  for (let key in source) {
    target[key] = source[key];
  }

  return target;
};
