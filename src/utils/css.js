// external dependencies
import moize from 'moize';
import hyphenateStyleName from 'fbjs/lib/hyphenateStyleName';
import prefixAll from 'inline-style-prefixer/static';

// cache
import RuleCache from './RuleCache';

// utils
import {fastReduce, merge} from './helpers';

const getPrefixedStyleName = moize(hyphenateStyleName);
const prefixStyle = moize.serialize(prefixAll);

export const ruleCache = new RuleCache();

/**
 * @function getCleanCssValue
 *
 * @description
 * apply the basis 'px' value if flex-basis and not zero
 *
 * @param {string} key the key of the css value
 * @param {number|string} value the value for the css property
 * @returns {number|string} the value with px applied as suffix if flex-basis
 */
export const getCleanCssValue = (key, value) => {
  return /flex-basis/.test(key) && +value > 0 ? `${value}px` : value;
};

/**
 * @function getCssString
 *
 * @description
 * get the css as a key:value; string
 *
 * @param {string} key the key of the css entry
 * @param {number|string} value the value of the css entry
 * @returns {string} the key:value; string
 */
export const getCssString = (key, value) => {
  return `${key}:${getCleanCssValue(key, value)};`;
};

/**
 * @function getHash
 *
 * @description
 * based on string passed, get the integer hash value through bitwise operation (based on spinoff of dbj2)
 *
 * @param {string} string the string to hash
 * @returns {number} the numerical hash value
 */
export const getHash = moize((string) => {
  let hashValue = 5381,
      index = -1;

  while (++index < string.length) {
    hashValue = (hashValue << 5) + hashValue + string.charCodeAt(index);
  }

  return hashValue >>> 0;
});

/**
 * @function getOrderedCssString
 *
 * @description
 * get the css string ordered based on whether the key is a vendor prefixed property or not
 *
 * @param {string} key the key to test if a vendor prefix
 * @param {string} existingCss the existing css string
 * @param {string} newCss the new css string to add
 * @returns {string} the combined css string
 */
export const getOrderedCssString = (key, existingCss, newCss) => {
  return key[0] === '-' ? `${newCss}${existingCss}` : `${existingCss}${newCss}`;
};

/**
 * @function getMergedStyle
 *
 * @description
 * get the styles merged into a single object
 *
 * @param {Array<Object>} styles the array of styles to merge
 * @returns {Object} the merged styles
 */
export const getMergedStyle = (styles) => {
  return fastReduce(styles, merge, {});
};

/**
 * @function getStyleAsCssString
 *
 * @description
 * get the style object as a css string
 *
 * @param {Object} style the style object to process
 * @returns {string} the style object as a compiled css string
 */
export const getStyleAsCssString = moize((style) => {
  return fastReduce(
    Object.keys(style),
    (css, key) => {
      const hyphenatedKey = getPrefixedStyleName(key);
      const cssString = !Array.isArray(style[key])
        ? getCssString(hyphenatedKey, style[key])
        : fastReduce(
          style[key],
          (css, prefixedValue) => {
            return getOrderedCssString(hyphenatedKey, css, getCssString(hyphenatedKey, prefixedValue));
          },
          ''
        );

      return getOrderedCssString(hyphenatedKey, css, cssString);
    },
    ''
  );
});

/**
 * @function createCssRule
 *
 * @description
 * based on the array of styles passed, create a css rule and return a selector
 * to apply the style with
 *
 * @param {Array<Object>} styles the array of styles to create the rule from
 * @returns {Object} the selector object to apply to the flex elements
 */
export const createCssRule = (styles) => {
  const cssString = getStyleAsCssString(prefixStyle(getMergedStyle(styles)));
  const uniqueKey = `data-flexor-${getHash(cssString)}`;

  if (!ruleCache.tag && typeof window !== 'undefined') {
    ruleCache.assignTag();
  }

  if (ruleCache.tag && !ruleCache.has(uniqueKey)) {
    ruleCache.add(uniqueKey, cssString);
  }

  return {
    [uniqueKey]: ''
  };
};
