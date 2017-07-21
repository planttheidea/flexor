// utils
import {
  getMappedStyles
} from '../utils/helpers';

// display

/**
 * @constant {Object} DISPLAY_VALUES
 */
export const DISPLAY_VALUES = {
  default: 'flex',
  inline: 'inline-flex'
};

/**
 * @constant {Object} DISPLAY_MAP
 */
export const DISPLAY_MAP = getMappedStyles(DISPLAY_VALUES, 'display');

// custom directions

/**
 * @constant {Object} DIRECTION_VALUES
 */
export const DIRECTION_VALUES = {
  column: 'column',
  columnReverse: 'column-reverse',
  row: 'row',
  rowReverse: 'row-reverse'
};

/**
 * @constant {Object} DIRECTION_MAP
 */
export const DIRECTION_MAP = getMappedStyles(DIRECTION_VALUES, 'flexDirection');

// custom wraps

/**
 * @constant {Object} WRAP_VALUES
 */
export const WRAP_VALUES = {
  nowrap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse'
};

/**
 * @constant {Object} WRAP_MAP
 */
export const WRAP_MAP = getMappedStyles(WRAP_VALUES, 'flexWrap');

// custom content justifications

/**
 * @constant {Object} JUSTIFY_CONTENT_VALUES
 */
export const JUSTIFY_CONTENT_VALUES = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
};

/**
 * @constant {Object} JUSTIFY_CONTENT_MAP
 */
export const JUSTIFY_CONTENT_MAP = getMappedStyles(JUSTIFY_CONTENT_VALUES, 'justifyContent');

// custom align (only when inline-flex)

/**
 * @constant {Array<string>} ALIGN_VALUES
 */
export const ALIGN_VALUES = {
  baseline: 'baseline',
  bottom: 'bottom',
  center: 'center',
  top: 'top'
};

/**
 * @constant {Object} ALIGN_MAP
 */
export const ALIGN_MAP = getMappedStyles(ALIGN_VALUES, 'verticalAlign');

// custom align content

/**
 * @constant {Object} ALIGN_CONTENT_VALUES
 */
export const ALIGN_CONTENT_VALUES = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
};

/**
 * @constant {Object} ALIGN_ITEMS_MAP
 */
export const ALIGN_CONTENT_MAP = getMappedStyles(ALIGN_CONTENT_VALUES, 'alignContent');

// custom align items

/**
 * @constant {Object} ALIGN_ITEMS_VALUES
 */
export const ALIGN_ITEMS_VALUES = {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
};

/**
 * @constant {Object} ALIGN_ITEMS_MAP
 */
export const ALIGN_ITEMS_MAP = getMappedStyles(ALIGN_ITEMS_VALUES, 'alignItems');

/**
 * @constant {Object} ALIGN_ITEMS_COLUMN_FIX
 */
export const ALIGN_ITEMS_COLUMN_FIX = {
  maxWidth: '100%'
};

/**
 * @constant {Object} DEFAULT_CONTAINER
 */
export const DEFAULT_CONTAINER = {
  ...ALIGN_CONTENT_MAP.stretch,
  ...ALIGN_ITEMS_MAP.stretch,
  ...DISPLAY_MAP.default,
  ...DIRECTION_MAP.row,
  ...WRAP_MAP.nowrap,
  ...JUSTIFY_CONTENT_MAP.start,
  boxSizing: 'border-box'
};
