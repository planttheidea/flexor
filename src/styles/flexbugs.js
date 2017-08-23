/**
 * @constant {Object} ALIGN_ITEMS_COLUMN_FIX
 */
export const ALIGN_ITEMS_COLUMN_FIX = {
  maxWidth: '100%'
};

/**
 * @constant {Object} PREVENT_COLUMN_ITEM_OVERFLOW
 */
export const PREVENT_COLUMN_ITEM_OVERFLOW = {
  'data-flexor-container-column] > [data-flexor-item': {
    minHeight: 0
  },
  'data-flexor-container-column-reverse] > [data-flexor-item': {
    minHeight: 0
  }
};

/**
 * @constant {Object} PREVENT_ROW_ITEM_OVERFLOW
 */
export const PREVENT_ROW_ITEM_OVERFLOW = {
  'data-flexor-container-row] > [data-flexor-item': {
    minWidth: 0
  },
  'data-flexor-container-row-reverse] > [data-flexor-item': {
    minWidth: 0
  }
};

/**
 * @constant {Array<Object>} FLEXBUG_STYLES
 */
export const FLEXBUG_STYLES = {
  ...PREVENT_COLUMN_ITEM_OVERFLOW,
  ...PREVENT_ROW_ITEM_OVERFLOW
};
