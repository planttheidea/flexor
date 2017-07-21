// external dependencies
import {css} from 'glamor';

// styles
import {
  ALIGN_CONTENT_MAP,
  ALIGN_ITEMS_COLUMN_FIX,
  ALIGN_ITEMS_MAP,
  ALIGN_MAP,
  DEFAULT_CONTAINER,
  DIRECTION_MAP,
  DISPLAY_MAP,
  JUSTIFY_CONTENT_MAP,
  WRAP_MAP
} from '../styles/container';
import {
  ALIGN_SELF_MAP,
  DEFAULT_ITEM,
  GROW_MAP,
  ORDER_MAP,
  SHRINK_MAP
} from '../styles/item';

/**
 * @function createGetDynamicStyle
 *
 * @description
 * create a method that gets the dynamic style based on the value passed from props
 *
 * @param {Object} map the map of styles
 * @param {string} prefix the prefix of the key to retrieve
 * @param {prop} prop the prop retrieved from props
 * @param {string} [defaultProp] the default prop to use if standard prop is not found
 * @returns {function(Object): Object} the method to retrieve the style object
 */
export const createGetDynamicStyle = (map, prefix, prop, defaultProp) => {
  return (props) => {
    if (!props.hasOwnProperty(prop)) {
      return;
    }

    const value = props[prop];
    const prefixedProperty = `${prefix}_${value < 0 ? `NEGATIVE_${value}` : value}`;

    if (map.hasOwnProperty(prefixedProperty)) {
      return map[prefixedProperty];
    }

    if (defaultProp && value) {
      return map[defaultProp];
    }
  };
};

/**
 * @function getAlignContentStyle
 *
 * @description
 * get the align-content styles passed
 *
 * @param {string} alignContent the value passed for align-content
 * @returns {Object} the merged style object
 */
export const getAlignContentStyle = ({alignContent}) => {
  if (ALIGN_CONTENT_MAP.hasOwnProperty(alignContent)) {
    return ALIGN_CONTENT_MAP[alignContent];
  }

  if (alignContent) {
    return {
      alignContent
    };
  }
};

/**
 * @function getAlignItemsStyle
 *
 * @description
 * get the align-items styles passed
 *
 * @param {string} alignItems the value passed for align-items
 * @param {boolean} column is the item a column container
 * @returns {Object} the merged style object
 */
export const getAlignItemsStyle = ({alignItems, column}) => {
  if (ALIGN_ITEMS_MAP.hasOwnProperty(alignItems)) {
    return !column ? ALIGN_ITEMS_MAP[alignItems] : {
      ...ALIGN_ITEMS_MAP[alignItems],
      ...ALIGN_ITEMS_COLUMN_FIX
    };
  }

  if (alignItems) {
    const style = {
      alignItems
    };

    return !column ? style : {
      ...style,
      ...ALIGN_ITEMS_COLUMN_FIX
    };
  }
};

/**
 * @function getDirectionStyle
 *
 * @description
 * get the flex-direction styles passed
 *
 * @param {boolean} column should the flex-direction be column
 * @param {boolean} columnReverse should the flex-direction be column-reverse
 * @param {string} direction the flex-direction value
 * @param {boolean} rowReverse should the flex-direction be row-reverse
 * @returns {Object} the merged style object
 */
export const getDirectionStyle = ({column, columnReverse, direction, rowReverse}) => {
  if (DIRECTION_MAP.hasOwnProperty(direction)) {
    return DIRECTION_MAP[direction];
  }

  if (column) {
    return DIRECTION_MAP.column;
  }

  if (columnReverse) {
    return DIRECTION_MAP.columnReverse;
  }

  if (rowReverse) {
    return DIRECTION_MAP.rowReverse;
  }
};

/**
 * @function getJustifyContentStyle
 *
 * @description
 * get the justify-content styles passed
 *
 * @param {string} justifyContent the value passed for justify-content
 * @returns {Object} the merged style object
 */
export const getJustifyContentStyle = ({justifyContent}) => {
  if (JUSTIFY_CONTENT_MAP.hasOwnProperty(justifyContent)) {
    return JUSTIFY_CONTENT_MAP[justifyContent];
  }

  if (justifyContent) {
    return {
      justifyContent
    };
  }
};

/**
 * @function getWrapStyle
 *
 * @description
 * get the flex-wrap styles passed
 *
 * @param {boolean|string} wrap the flex-wrap value
 * @param {boolean} wrapReverse should the flex-wrap be wrap-reverse
 * @returns {Object} the merged style object
 */
export const getWrapStyle = ({wrap, wrapReverse}) => {
  if (WRAP_MAP.hasOwnProperty(wrap)) {
    return WRAP_MAP[wrap];
  }

  if (wrap) {
    return WRAP_MAP.wrap;
  }

  if (wrapReverse) {
    return WRAP_MAP.wrapReverse;
  }
};

/**
 * @function getAlignSelfStyle
 *
 * @description
 * get the align-self styles passed
 *]
 * @param {string} alignSelf the align-self value
 * @returns {Object} the merged style object
 */
export const getAlignSelfStyle = ({alignSelf}) => {
  if (ALIGN_SELF_MAP.hasOwnProperty(alignSelf)) {
    return ALIGN_SELF_MAP[alignSelf];
  }

  if (alignSelf) {
    return {
      alignSelf
    };
  }
};

/**
 * @function getBasisStyle
 *
 * @description
 * get the flex-basis styles passed
 *
 * @param {Object} props the props passed to the component
 * @param {number|string} props.basis the flex-basis value
 * @returns {Object} the merged style object
 */
export const getBasisStyle = (props) => {
  if (!props.hasOwnProperty('basis')) {
    return;
  }

  const {
    basis
  } = props;

  const basisObject = {
    flexBasis: basis
  };

  return basis !== 0 && basis !== '0' ? basisObject : {
    ...basisObject,
    minHeight: 1,
    minWidth: 1
  };
};

/**
 * @function getGrowStyle
 *
 * @description
 * get the flex-grow styles passed
 *
 * @param {boolean|number} grow the flex-grow value
 * @returns {Object} the merged style object
 */
export const getGrowStyle = createGetDynamicStyle(GROW_MAP, 'GROW', 'grow', 'GROW_1');

/**
 * @function getOrderStyle
 *
 * @description
 * get the order styles passed
 *
 * @param {boolean|number} order the order value
 * @returns {Object} the merged style object
 */
export const getOrderStyle = createGetDynamicStyle(ORDER_MAP, 'ORDER', 'order');

/**
 * @function getShrinkStyle
 *
 * @description
 * get the flex-shrink styles passed
 *\
 * @param {boolean|number} shrink the flex-shrink value
 * @returns {Object} the merged style object
 */
export const getShrinkStyle = createGetDynamicStyle(SHRINK_MAP, 'SHRINK', 'shrink', 'SHRINK_1');

/**
 * @function getSizeToOverrideStyles
 *
 * @description
 * get the override styles when sizeTo prop is specified
 *
 * @param {Object} props the props passed to the component
 * @returns {Array<Object>} the override styles to map
 */
export const getSizeToOverrideStyles = (props) => {
  const basis = getBasisStyle(props) || props.sizeTo === 'content' ? 'auto' : props.sizeTo;
  const overrideProps = {
    basis,
    grow: 0,
    shrink: 0
  };

  return [
    getBasisStyle(overrideProps),
    getGrowStyle(overrideProps),
    getShrinkStyle(overrideProps)
  ];
};

/**
 * @function getStartingStyles
 *
 * @description
 * get the starting styles for the component
 *
 * @param {Object} props the props passed to the component
 * @param {string} [props.align] the alignment of the container
 * @param {string} [props.inline] os the container inline-flex
 * @param {Object} defaultStyle the default style of the component type
 * @param {boolean} isContainer is the component a container component
 * @returns {Array<Object>} the starting styles of the component
 */
export const getStartingStyles = ({align, inline}, defaultStyle, isContainer) => {
  if (!isContainer || !inline) {
    return [defaultStyle];
  }

  return [
    {
      ...defaultStyle,
      ...DISPLAY_MAP.inline,
      ...ALIGN_MAP[align]
    }
  ];
};

/**
 * @function createGetCompleteStyles
 *
 * @description
 * create a method tha will transform the default style of the item to include
 * the custom styles requested
 *
 * @param {Object} defaultStyle the default style object
 * @param {Array<function>} transforms the transform functions to apply
 * @param {boolean} isContainer are the styles for the container
 * @returns {function(Object): Object} a function that receives the props and returns a merged style object
 */
export const createGetCompleteStyles = (defaultStyle, transforms, isContainer) => {
  return (props) => {
    const styles = transforms.reduce((styles, transform) => {
      const style = transform(props);

      return !style ? styles : [
        ...styles,
        style
      ];
    }, getStartingStyles(props, defaultStyle, isContainer));

    return !props.sizeTo ? styles : [
      ...styles,
      ...getSizeToOverrideStyles(props)
    ];
  };
};

/**
 * @function getStartingStyless
 *
 * @description
 * get the container styles based on the given props
 *
 * @param {Object} props the props passed to the component
 * @returns {Object} the merged style object
 */
export const getCompleteContainerStyles = createGetCompleteStyles(DEFAULT_CONTAINER, [
  getAlignContentStyle,
  getAlignItemsStyle,
  getDirectionStyle,
  getJustifyContentStyle,
  getWrapStyle
], true);

/**
 * @function getItemStyles
 *
 * @description
 * get the item styles based on the given props
 *
 * @param {Object} props the props passed to the component
 * @returns {Object} the merged style object
 */
export const getCompleteItemStyles = createGetCompleteStyles(DEFAULT_ITEM, [
  getAlignSelfStyle,
  getBasisStyle,
  getGrowStyle,
  getOrderStyle,
  getShrinkStyle
], false);

export const getContainerStyles = (props) => {
  return css(...getCompleteContainerStyles(props));
};

export const getItemStyles = (props) => {
  return css(...getCompleteItemStyles(props));
};
