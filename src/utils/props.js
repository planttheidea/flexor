/**
 * @constant {Object} PROPS_TO_SKIP
 */
export const PROPS_TO_SKIP = {
  children: true,
  element: true
};

export const getInternalPropTypes = (propTypes) => {
  return Object.keys(propTypes).reduce((props, prop) => {
    props[prop] = true;

    return props;
  }, {});
};

export const getRemainingProps = (props, propTypes) => {
  return Object.keys(props).reduce((remainingProps, prop) => {
    if (propTypes[prop]) {
      return remainingProps;
    }

    remainingProps[prop] = props[prop];

    return remainingProps;
  }, {});
};

export const getSplitProps = (props, propTypes) => {
  return Object.keys(props).reduce((splitProps, prop) => {
    if (PROPS_TO_SKIP[prop]) {
      return splitProps;
    }

    const subObject = propTypes[prop] ? splitProps.internal : splitProps.remaining;

    subObject[prop] = props[prop];

    return splitProps;
  }, {
    internal: {},
    remaining: {}
  });
};
