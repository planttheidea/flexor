// utils
import {getMappedStyles} from '../utils/helpers';

/**
 * @constant {Object} DISPLAY_MAP
 */
export const DISPLAY_MAP = getMappedStyles('display', {
  default: 'flex',
  inline: 'inline-flex'
});

/**
 * @constant {Object} DIRECTION_MAP
 */
export const DIRECTION_MAP = getMappedStyles('flexDirection', {
  column: 'column',
  columnReverse: 'column-reverse',
  row: 'row',
  rowReverse: 'row-reverse'
});

/**
 * @constant {Object} WRAP_MAP
 */
export const WRAP_MAP = getMappedStyles('flexWrap', {
  nowrap: 'nowrap',
  wrap: 'wrap',
  wrapReverse: 'wrap-reverse'
});

/**
 * @constant {Object} JUSTIFY_CONTENT_MAP
 */
export const JUSTIFY_CONTENT_MAP = getMappedStyles('justifyContent', {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
});

/**
 * @constant {Object} INLINE_ALIGN_MAP
 */
export const INLINE_ALIGN_MAP = getMappedStyles('verticalAlign', {
  baseline: 'baseline',
  bottom: 'bottom',
  center: 'center',
  top: 'top'
});

/**
 * @constant {Object} ALIGN_ITEMS_MAP
 */
export const ALIGN_CONTENT_MAP = getMappedStyles('alignContent', {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
});

/**
 * @constant {Object} ALIGN_ITEMS_MAP
 */
export const ALIGN_ITEMS_MAP = getMappedStyles('alignItems', {
  baseline: 'baseline',
  center: 'center',
  end: 'flex-end',
  start: 'flex-start',
  stretch: 'stretch'
});

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
