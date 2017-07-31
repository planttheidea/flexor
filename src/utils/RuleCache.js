// helpers
import {fastReduce} from './helpers';

// options
import {getOptions} from './options';

/**
 * @class RuleCache
 *
 * @classdesc
 * cache all rules and manage their assignment to the style tag
 */
export default class RuleCache {
  constructor() {
    this.cache = {};
    this.index = 0;
    this.tag = null;
  }

  /**
   * @function _addRuleDebug
   *
   * @memberof RuleCache
   * @instance
   *
   * @description
   * add rules in a way that the styles can be debugged easily, or modified via devtools
   *
   * @param {string} key the key to assign the rule to
   * @param {string} css the css rule
   */
  _addRuleDebug(key, css) {
    const prettyCss = fastReduce(
      css.split(';'),
      (allRules, rule) => {
        return rule ? `${allRules}\n  ${rule.replace(':', ': ')};` : allRules;
      },
      ''
    );

    this.tag.textContent = `${this.tag.textContent}\n\n[${key}] {${prettyCss}\n}`.trim();
  }

  /**
   * @function _addRuleStandard
   *
   * @memberof RuleCache
   * @instance
   *
   * @description
   * add rules in the default, fast way
   *
   * @param {string} key the key to assign the rule to
   * @param {string} css the css rule
   */
  _addRuleStandard(key, css) {
    this.tag.sheet.insertRule(`[${key}]{${css}}`, this.index);
  }

  /**
   * @function add
   *
   * @memberof RuleCache
   * @instance
   *
   * @description
   * add the rule to the stylesheet
   *
   * @param {string} key the key to assign the rule to
   * @param {string} css the css rule
   */
  add(key, css) {
    const options = getOptions();

    if (options.debug) {
      this._addRuleDebug(key, css);
    } else {
      this._addRuleStandard(key, css);
    }

    this.cache[key] = true;
    this.index++;
  }

  /**
   * @function assignTag
   *
   * @memberof RuleCache
   * @instance
   *
   * @description
   * assign the tag to the instance and append it to the document head
   */
  assignTag() {
    const tag = (this.tag = document.createElement('style'));

    this.tag.appendChild(document.createTextNode(''));
    this.tag.id = 'flexor-styles';

    document.head.appendChild(tag);
  }

  /**
   * @function has
   *
   * @memberof RuleCache
   * @instance
   *
   * @description
   * does the cache contain the key passed
   *
   * @param {string} key the key to test for existence in cache
   * @returns {boolean} does the key exist in cache
   */
  has(key) {
    return !!this.cache[key];
  }
}
