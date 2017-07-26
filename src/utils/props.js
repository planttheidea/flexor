/**
 * @constant {Object} PROPS_TO_SKIP
 */
export const PROPS_TO_SKIP = {
  children: true,
  element: true
};

/**
 * @function getSplitProps
 *
 * @description
 * get the props passed split into internal and remaining
 *
 * @param {Object} props the props passed
 * @param {Object} internalPropTypes the object of propTypes to compare to
 * @returns {{internal: Object, remaining: Object}} the split prop types
 */
export const getSplitProps = (props, internalPropTypes) => {
  return Object.keys(props).reduce(
    (splitProps, prop) => {
      if (PROPS_TO_SKIP[prop]) {
        return splitProps;
      }

      const subObject = internalPropTypes[prop] ? splitProps.internal : splitProps.remaining;

      subObject[prop] = props[prop];

      return splitProps;
    },
    {
      internal: {},
      remaining: {}
    }
  );
};
