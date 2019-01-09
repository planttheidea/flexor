// utils
import {
  getMappedSizeStyles,
  getMappedStyles,
} from '../utils/helpers';

/**
 * @constant {Array<number>} VALID_ORDER_SIZES
 */
export const VALID_ORDER_SIZES = [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @constant {Array<number>} VALID_GROW_SHRINK_SIZES
 */
export const VALID_GROW_SHRINK_SIZES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

/**
 * @constant {Object} ALIGN_SELF_MAP
 */
export const ALIGN_SELF_MAP = getMappedStyles('alignSelf', {
  auto: 'auto',
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch',
});

// grow values

/**
 * @constant {Object} GROW_MAP
 */
export const GROW_MAP = getMappedSizeStyles(VALID_GROW_SHRINK_SIZES, 'GROW', 'flexGrow');

// order values

/**
 * @constant {Object} ORDER_MAP
 */
export const ORDER_MAP = getMappedSizeStyles(VALID_ORDER_SIZES, 'ORDER', 'order');

// shrink values

/**
 * @constant {Object} SHRINK_MAP
 */
export const SHRINK_MAP = getMappedSizeStyles(VALID_GROW_SHRINK_SIZES, 'SHRINK', 'flexShrink');

// default item

/**
 * @constant {Object} DEFAULT_ITEM
 */
export const DEFAULT_ITEM = {
  ...GROW_MAP.GROW_1,
  ...SHRINK_MAP.SHRINK_1,
  boxSizing: 'border-box',
  flexBasis: '0%',
};
