// external dependencies
import moize from 'moize';
import prefixAll from 'inline-style-prefixer/static';

let options = {
  debug: false,
  fixFlexbugs: true,
  prefix: moize.serialize(prefixAll),
};

/**
 * @function getOptions
 *
 * @description
 * get the global options
 *
 * @returns {Object} the global options
 */
export const getOptions = () => options;

/**
 * @function setOptions
 *
 * @description
 * set the global options for flexor
 *
 * @param {Object} [newOptions={}] the new options to apply globally
 */
export const setOptions = (newOptions = {}) => {
  for (let key in newOptions) {
    if (options.hasOwnProperty(key)) {
      options[key] = newOptions[key];
    }
  }
};
