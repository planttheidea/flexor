// test
import test from 'ava';
import sinon from 'sinon';

// src
import * as css from 'src/utils/css';
import * as options from 'src/utils/options';

test('if getCleanCssValue will return the value passed if flex-basis is not part of the key', (t) => {
  const key = 'foo';
  const value = 'bar';

  const result = css.getCleanCssValue(key, value);

  t.is(result, value);
});

test('if getCleanCssValue will return the value passed if the parsed numerical value is not greater than 0', (t) => {
  const key = 'flex-basis';
  const value = 'bar';

  const result = css.getCleanCssValue(key, value);

  t.is(result, value);
});

test('if getCleanCssValue will return the value passed with px suffix if the key is flex-basis and the parsed numerical value is greater than 0', (t) => {
  const key = 'flex-basis';
  const value = '50';

  const result = css.getCleanCssValue(key, value);

  t.is(result, `${value}px`);
});

test('if getCssString will combine the key and value into the correct css string', (t) => {
  const key = 'foo';
  const value = 'bar';

  const result = css.getCssString(key, value);

  t.is(result, `${key}:${value};`);
});

test('if getMergedStyle will merge the array of styles passed into a new object', (t) => {
  const firstStyle = {
    foo: 'bar'
  };
  const secondStyle = {
    bar: 'baz',
    baz: 'foo'
  };

  const mergedStyle = css.getMergedStyle([firstStyle, secondStyle]);

  t.deepEqual(mergedStyle, {
    ...firstStyle,
    ...secondStyle
  });

  t.not(mergedStyle, firstStyle);
  t.not(mergedStyle, secondStyle);
});

test('if getOrderedCssString will set the newCSs first if the key is a vendor prefix', (t) => {
  const key = '-foo';
  const existingCss = 'bar';
  const newCss = 'bar';

  const result = css.getOrderedCssString(key, existingCss, newCss);

  t.is(result, `${newCss}${existingCss}`);
});

test('if getOrderedCssString will set the newCSs last if the key is not a vendor prefix', (t) => {
  const key = 'foo';
  const existingCss = 'bar';
  const newCss = 'bar';

  const result = css.getOrderedCssString(key, existingCss, newCss);

  t.is(result, `${existingCss}${newCss}`);
});

test('if getPrefixedStyleName works correctly with standard camelCased properties', (t) => {
  const styleNames = ['boxSizing', 'display', 'borderTopLeftRadius'];

  const results = styleNames.map(css.getPrefixedStyleName);

  t.deepEqual(results, ['box-sizing', 'display', 'border-top-left-radius']);
});

test('if getPrefixedStyleName works correctly with vendor prefixed properties', (t) => {
  const styleNames = ['WebkitColumns', 'MozLinearGradient', 'msFlex'];

  const results = styleNames.map(css.getPrefixedStyleName);

  t.deepEqual(results, ['-webkit-columns', '-moz-linear-gradient', '-ms-flex']);
});

test('if getStyleAsCssString will convert the object to a css string when no values are arrays', (t) => {
  const style = {
    flexBasis: 'auto',
    flexGrow: 1,
    flexShrink: 1
  };

  const result = css.getStyleAsCssString(style);

  t.is(result, 'flex-basis:auto;flex-grow:1;flex-shrink:1;');
});

test('if getStyleAsCssString will convert the object to a css string when values are arrays', (t) => {
  const style = {
    display: ['-webkit-flex', 'flex'],
    flexDirection: 'row',
    flexWrap: 'nowrap'
  };

  const result = css.getStyleAsCssString(style);

  t.is(result, 'display:-webkit-flex;display:flex;flex-direction:row;flex-wrap:nowrap;');
});

test('if getHash will create a unique numerical hash based on the string passed', (t) => {
  const key = 'foo-bar-baz';
  const firstRun = css.getHash(key);

  t.regex(`${firstRun}`, /[0-9]/);

  for (let index = 0; index < 1000; index++) {
    t.is(css.getHash(key), firstRun);
  }
});

test.serial('if createCssRule will return an object with a unique data key', (t) => {
  const currentTag = css.ruleCache.tag;

  css.ruleCache.tag = {
    sheet: {
      insertRule: sinon.spy()
    }
  };

  const firstStyle = {
    foo: 'bar'
  };
  const secondStyle = {
    bar: 'baz',
    baz: 'foo'
  };

  const result = css.createCssRule([firstStyle, secondStyle]);

  css.ruleCache.tag = currentTag;

  const hash = css.getHash(css.getStyleAsCssString(css.getMergedStyle([firstStyle, secondStyle])));

  t.deepEqual(result, {
    [`data-flexor-${hash}`]: ''
  });
});

test.serial('if createCssRule will call RuleCache.assignTag() if there is no tag and window is not undefined', (t) => {
  const currentAssignTag = css.ruleCache.assignTag;
  const win = global.window;

  css.ruleCache.assignTag = sinon.spy();
  global.window = {};

  const firstStyle = {
    foo: 'bar'
  };
  const secondStyle = {
    bar: 'baz',
    baz: 'foo'
  };

  css.createCssRule([firstStyle, secondStyle]);

  t.true(css.ruleCache.assignTag.calledOnce);

  css.ruleCache.assignTag = currentAssignTag;
  global.window = win;
});

test.serial('if createCssRule will use a custom prefixer in options if it exists', (t) => {
  const currentAssignTag = css.ruleCache.assignTag;
  const win = global.window;

  css.ruleCache.assignTag = sinon.spy();

  global.window = {};

  const style = {
    foo: 'bar'
  };

  const prefix = sinon.stub().returnsArg(0);
  const currentOptions = options.getOptions();

  options.setOptions({
    prefix
  });

  css.createCssRule([style]);

  t.true(prefix.calledOnce);
  t.true(prefix.calledWith(style));

  css.ruleCache.assignTag = currentAssignTag;
  global.window = win;

  options.setOptions(currentOptions);
});
