// utils
import {fastReduce} from './helpers';

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
export const getSplitProps = (props, internalPropTypes) =>
  fastReduce(
    Object.keys(props),
    (splitProps, prop) => {
      const subObject = internalPropTypes[prop] ? splitProps.internal : splitProps.remaining;

      subObject[prop] = props[prop];

      return splitProps;
    },
    {
      internal: {},
      remaining: {},
    }
  );
