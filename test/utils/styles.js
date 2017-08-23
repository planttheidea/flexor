// test
import test from 'ava';
import sinon from 'sinon';

// src
import * as styles from 'src/utils/styles';
import * as containerStyleConstants from 'src/styles/container';
import * as flexbugsStyleConstants from 'src/styles/flexbugs';
import * as css from 'src/utils/css';
import * as helpers from 'src/utils/helpers';
import * as itemStyleConstants from 'src/styles/item';

test('if createGetDynamicStyle will create a method that gets the property that exists on the map when positive', (t) => {
  const prefix = 'FOO';
  const value = 1;
  const mapValue = 'bar';
  const prop = 'baz';
  const map = {
    [helpers.getMappedSizePrefixedProperty(prefix, value)]: mapValue
  };

  const getDynamicStyle = styles.createGetDynamicStyle(map, prefix, prop);

  t.is(typeof getDynamicStyle, 'function');

  const props = {
    [prop]: value
  };

  const result = getDynamicStyle(props);

  t.is(result, mapValue);
});

test('if createGetDynamicStyle will create a method that gets the property that exists on the map when negative', (t) => {
  const prefix = 'FOO';
  const value = -1;
  const mapValue = 'bar';
  const prop = 'baz';
  const map = {
    [helpers.getMappedSizePrefixedProperty(prefix, value)]: mapValue
  };

  const getDynamicStyle = styles.createGetDynamicStyle(map, prefix, prop);

  t.is(typeof getDynamicStyle, 'function');

  const props = {
    [prop]: value
  };

  const result = getDynamicStyle(props);

  t.is(result, mapValue);
});

test('if createGetDynamicStyle will create a method that gets the default prop when a value is present', (t) => {
  const prefix = 'FOO';
  const value = -1;
  const mapValue = 'bar';
  const prop = 'baz';
  const defaultProp = 'quz';
  const map = {
    [defaultProp]: mapValue
  };

  const getDynamicStyle = styles.createGetDynamicStyle(map, prefix, prop, defaultProp);

  t.is(typeof getDynamicStyle, 'function');

  const props = {
    [prop]: value
  };

  const result = getDynamicStyle(props);

  t.is(result, mapValue);
});

test('if createGetDynamicStyle returns undefined when the prop does not exst on props and there is no defaultProp', (t) => {
  const map = {};
  const prefix = 'FOO';
  const prop = 'bar';

  const getDynamicStyle = styles.createGetDynamicStyle(map, prefix, prop);

  t.is(typeof getDynamicStyle, 'function');

  const props = {
    bar: 1
  };

  const result = getDynamicStyle(props);

  t.is(result, undefined);
});

test('if createGetDynamicStyle returns undefined when the prop does not exist on props', (t) => {
  const map = {};
  const prefix = 'FOO';
  const prop = 'bar';
  const defaultProp = 'baz';

  const getDynamicStyle = styles.createGetDynamicStyle(map, prefix, prop, defaultProp);

  t.is(typeof getDynamicStyle, 'function');

  const props = {};

  const result = getDynamicStyle(props);

  t.is(result, undefined);
});

test('if createMapOrPassedStyle creates a method that returns immediately if props does not contain the property', (t) => {
  const prop = 'foo';
  const map = {};

  const getMapOrPassedStyle = styles.createMapOrPassedStyle(map, prop);

  t.is(typeof getMapOrPassedStyle, 'function');

  const props = {};

  const result = getMapOrPassedStyle(props);

  t.is(result, undefined);
});

test('if createMapOrPassedStyle creates a method that returns the value in map if the prop value exists as a property in the map', (t) => {
  const prop = 'foo';
  const value = 'bar';
  const map = {
    [value]: {
      baz: 'baz'
    }
  };

  const getMapOrPassedStyle = styles.createMapOrPassedStyle(map, prop);

  t.is(typeof getMapOrPassedStyle, 'function');

  const props = {
    [prop]: value
  };

  const result = getMapOrPassedStyle(props);

  t.is(result, map[value]);
});

test('if createMapOrPassedStyle creates a method that returns the value directly assign in map if the prop value does not exist as a property in the map', (t) => {
  const prop = 'foo';
  const value = 'bar';
  const map = {};

  const getMapOrPassedStyle = styles.createMapOrPassedStyle(map, prop);

  t.is(typeof getMapOrPassedStyle, 'function');

  const props = {
    [prop]: value
  };

  const result = getMapOrPassedStyle(props);

  t.deepEqual(result, {
    [prop]: value
  });
});

test('if createMapOrPassedStyle creates a method that returns undefined if no match is found or the value is falsy', (t) => {
  const prop = 'foo';
  const value = '';
  const map = {};

  const getMapOrPassedStyle = styles.createMapOrPassedStyle(map, prop);

  t.is(typeof getMapOrPassedStyle, 'function');

  const props = {
    [prop]: value
  };

  const result = getMapOrPassedStyle(props);

  t.is(result, undefined);
});

test('if getAlignContentStyle returns the value on ALIGN_CONTENT_MAP if it exists', (t) => {
  const props = {
    alignContent: 'start'
  };

  const result = styles.getAlignContentStyle(props);

  t.true(containerStyleConstants.ALIGN_CONTENT_MAP.hasOwnProperty(props.alignContent));
  t.is(result, containerStyleConstants.ALIGN_CONTENT_MAP.start);
});

test('if getAlignContentStyle returns the value passed as an object if it is truthy but not on ALIGN_CONTENT_MAP', (t) => {
  const props = {
    alignContent: 'foo'
  };

  const result = styles.getAlignContentStyle(props);

  t.false(containerStyleConstants.ALIGN_CONTENT_MAP.hasOwnProperty(props.alignContent));
  t.deepEqual(result, {
    alignContent: props.alignContent
  });
});

test('if getAlignContentStyle returns undefined if alignContent is falsy', (t) => {
  const props = {};

  const result = styles.getAlignContentStyle(props);

  t.is(result, undefined);
});

test('if getAlignItemsStyle returns the value on ALIGN_ITEMS_MAP if it exists', (t) => {
  const props = {
    alignItems: 'start'
  };

  const result = styles.getAlignItemsStyle(props);

  t.true(containerStyleConstants.ALIGN_ITEMS_MAP.hasOwnProperty(props.alignItems));
  t.is(result, containerStyleConstants.ALIGN_ITEMS_MAP.start);
});

test('if getAlignItemsStyle returns the value on ALIGN_ITEMS_MAP and the ALIGN_ITEMS_COLUMN_FIX if it exists and column is true', (t) => {
  const props = {
    alignItems: 'start',
    column: true
  };

  const result = styles.getAlignItemsStyle(props);

  t.true(containerStyleConstants.ALIGN_ITEMS_MAP.hasOwnProperty(props.alignItems));
  t.deepEqual(result, {
    ...containerStyleConstants.ALIGN_ITEMS_MAP.start,
    ...flexbugsStyleConstants.ALIGN_ITEMS_COLUMN_FIX
  });
});

test('if getAlignItemsStyle returns the value passed as an object if truthy but not on ALIGN_ITEMS_MAP', (t) => {
  const props = {
    alignItems: 'foo'
  };

  const result = styles.getAlignItemsStyle(props);

  t.false(containerStyleConstants.ALIGN_ITEMS_MAP.hasOwnProperty(props.alignItems));
  t.deepEqual(result, {
    alignItems: props.alignItems
  });
});

test('if getAlignItemsStyle returns the value passed as an object with the ALIGN_ITEMS_COLUMN_FIX if truthy but not on ALIGN_ITEMS_MAP and column is true', (t) => {
  const props = {
    alignItems: 'foo',
    column: true
  };

  const result = styles.getAlignItemsStyle(props);

  t.false(containerStyleConstants.ALIGN_ITEMS_MAP.hasOwnProperty(props.alignItems));
  t.deepEqual(result, {
    alignItems: props.alignItems,
    ...flexbugsStyleConstants.ALIGN_ITEMS_COLUMN_FIX
  });
});

test('if getAlignItemsStyle returns undefined if alignItems is falsy', (t) => {
  const props = {};

  const result = styles.getAlignItemsStyle(props);

  t.is(result, undefined);
});

test('if getDirectionStyle returns the property on DIRECTION_MAP if it exists', (t) => {
  const props = {
    direction: 'row'
  };

  const result = styles.getDirectionStyle(props);

  t.true(containerStyleConstants.DIRECTION_MAP.hasOwnProperty(props.direction));
  t.is(result, containerStyleConstants.DIRECTION_MAP.row);
});

test('if getDirectionStyle returns column style if column', (t) => {
  const props = {
    column: true
  };

  const result = styles.getDirectionStyle(props);

  t.is(result, containerStyleConstants.DIRECTION_MAP.column);
});

test('if getDirectionStyle returns columnReverse style if columnReverse', (t) => {
  const props = {
    columnReverse: true
  };

  const result = styles.getDirectionStyle(props);

  t.is(result, containerStyleConstants.DIRECTION_MAP.columnReverse);
});

test('if getDirectionStyle returns row style if row', (t) => {
  const props = {
    row: true
  };

  const result = styles.getDirectionStyle(props);

  t.is(result, containerStyleConstants.DIRECTION_MAP.row);
});

test('if getDirectionStyle returns rowReverse style if rowReverse', (t) => {
  const props = {
    rowReverse: true
  };

  const result = styles.getDirectionStyle(props);

  t.is(result, containerStyleConstants.DIRECTION_MAP.rowReverse);
});

test('if getDirectionStyle returns the value passed as an object if truthy but not on DIRECTION_MAP', (t) => {
  const props = {
    direction: 'foo'
  };

  const result = styles.getDirectionStyle(props);

  t.false(containerStyleConstants.DIRECTION_MAP.hasOwnProperty(props.direction));
  t.deepEqual(result, {
    flexDirection: props.direction
  });
});

test('if getDirectionStyle returns undefined if not matching any values', (t) => {
  const props = {};

  const result = styles.getDirectionStyle(props);

  t.is(result, undefined);
});

test('if getJustifyContentStyle returns the property on JUSTIFY_CONTENT_MAP if it exists', (t) => {
  const props = {
    justifyContent: 'around'
  };

  const result = styles.getJustifyContentStyle(props);

  t.true(containerStyleConstants.JUSTIFY_CONTENT_MAP.hasOwnProperty(props.justifyContent));
  t.is(result, containerStyleConstants.JUSTIFY_CONTENT_MAP.around);
});

test('if getJustifyContentStyle returns the value passed as an object if truthy but not on JUSTIFY_CONTENT_MAP', (t) => {
  const props = {
    justifyContent: 'foo'
  };

  const result = styles.getJustifyContentStyle(props);

  t.false(containerStyleConstants.JUSTIFY_CONTENT_MAP.hasOwnProperty(props.justifyContent));
  t.deepEqual(result, {
    justifyContent: props.justifyContent
  });
});

test('if getJustifyContentStyle returns undefined if justifyContent is falsy', (t) => {
  const props = {};

  const result = styles.getJustifyContentStyle(props);

  t.is(result, undefined);
});

test('if getWrapStyle returns the property on WRAP_MAP if it exists', (t) => {
  const props = {
    wrap: 'wrap'
  };

  const result = styles.getWrapStyle(props);

  t.true(containerStyleConstants.WRAP_MAP.hasOwnProperty(props.wrap));
  t.is(result, containerStyleConstants.WRAP_MAP.wrap);
});

test('if getWrapStyle returns the wrap style if wrap', (t) => {
  const props = {
    wrap: true
  };

  const result = styles.getWrapStyle(props);

  t.is(result, containerStyleConstants.WRAP_MAP.wrap);
});

test('if getWrapStyle returns the nowrap style if nowrap', (t) => {
  const props = {
    nowrap: true
  };

  const result = styles.getWrapStyle(props);

  t.is(result, containerStyleConstants.WRAP_MAP.nowrap);
});

test('if getWrapStyle returns the wrapReverse style if wrapReverse', (t) => {
  const props = {
    wrapReverse: true
  };

  const result = styles.getWrapStyle(props);

  t.is(result, containerStyleConstants.WRAP_MAP.wrapReverse);
});

test('if getWrapStyle returns the value passed as an object if wrap is truthy but not in WRAP_MAP', (t) => {
  const props = {
    wrap: 'foo'
  };

  const result = styles.getWrapStyle(props);

  t.false(containerStyleConstants.WRAP_MAP.hasOwnProperty(props.wrap));
  t.deepEqual(result, {
    flexWrap: props.wrap
  });
});

test('if getWrapStyle returns undefined if no wrap properties match', (t) => {
  const props = {};

  const result = styles.getWrapStyle(props);

  t.is(result, undefined);
});

test('if getAlignSelfStyle returns the property on ALIGN_SELF_MAP if it exists', (t) => {
  const props = {
    alignSelf: 'start'
  };

  const result = styles.getAlignSelfStyle(props);

  t.true(itemStyleConstants.ALIGN_SELF_MAP.hasOwnProperty(props.alignSelf));
  t.is(result, itemStyleConstants.ALIGN_SELF_MAP.start);
});

test('if getAlignSelfStyle returns the value passed as an object if truthy', (t) => {
  const props = {
    alignSelf: 'foo'
  };

  const result = styles.getAlignSelfStyle(props);

  t.false(itemStyleConstants.ALIGN_SELF_MAP.hasOwnProperty(props.alignSelf));
  t.deepEqual(result, {
    alignSelf: props.alignSelf
  });
});

test('if getAlignSelfStyle returns undefined if the value is falsy', (t) => {
  const props = {};

  const result = styles.getAlignSelfStyle(props);

  t.is(result, undefined);
});

test('if getBasisStyle returns undefined if the basis prop does not exist on the props passed', (t) => {
  const props = {};

  const result = styles.getBasisStyle(props);

  t.is(result, undefined);
});

test('if getBasisStyle returns an object with flexBasis only if the basis is not zero', (t) => {
  const props = {
    basis: 'foo'
  };

  const result = styles.getBasisStyle(props);

  t.deepEqual(result, {
    flexBasis: props.basis
  });
});

test('if getBasisStyle returns an object with flexBasis, minHeight, and minWidth if basis is the number zero', (t) => {
  const props = {
    basis: 0
  };

  const result = styles.getBasisStyle(props);

  t.deepEqual(result, {
    flexBasis: props.basis,
    minHeight: 1,
    minWidth: 1
  });
});

test('if getBasisStyle returns an object with flexBasis, minHeight, and minWidth if basis is the string zero', (t) => {
  const props = {
    basis: '0'
  };

  const result = styles.getBasisStyle(props);

  t.deepEqual(result, {
    flexBasis: props.basis,
    minHeight: 1,
    minWidth: 1
  });
});

test('if getGrowStyle correctly uses createGetDynamicStyle for grow styles', (t) => {
  const props = {
    grow: 3
  };

  const result = styles.getGrowStyle(props);

  t.deepEqual(result, {
    flexGrow: 3
  });
});

test('if getOrderStyle correctly uses createGetDynamicStyle for positive order styles', (t) => {
  const props = {
    order: 2
  };

  const result = styles.getOrderStyle(props);

  t.deepEqual(result, {
    order: 2
  });
});

test('if getOrderStyle correctly uses createGetDynamicStyle for negative order styles', (t) => {
  const props = {
    order: -2
  };

  const result = styles.getOrderStyle(props);

  t.deepEqual(result, {
    order: -2
  });
});

test('if getShrinkStyle correctly uses createGetDynamicStyle for shrink styles', (t) => {
  const props = {
    shrink: 3
  };

  const result = styles.getShrinkStyle(props);

  t.deepEqual(result, {
    flexShrink: 3
  });
});

test('if getSizeToOverrideStyles returns the correct combination of basis, grow, and shrink when sizeTo is set to content', (t) => {
  const props = {
    sizeTo: 'content'
  };

  const result = styles.getSizeToOverrideStyles(props);

  const expectedOverrideProps = {
    basis: 'auto',
    grow: 0,
    shrink: 0
  };

  t.deepEqual(result, [
    styles.getBasisStyle(expectedOverrideProps),
    styles.getGrowStyle(expectedOverrideProps),
    styles.getShrinkStyle(expectedOverrideProps)
  ]);
});

test('if getSizeToOverrideStyles returns the correct combination of basis, grow, and shrink when sizeTo is set to an explicit value', (t) => {
  const props = {
    sizeTo: 123
  };

  const result = styles.getSizeToOverrideStyles(props);

  const expectedOverrideProps = {
    basis: props.sizeTo,
    grow: 0,
    shrink: 0
  };

  t.deepEqual(result, [
    styles.getBasisStyle(expectedOverrideProps),
    styles.getGrowStyle(expectedOverrideProps),
    styles.getShrinkStyle(expectedOverrideProps)
  ]);
});

test('if getStartingStyles returns only the defaultStyle if isContainer is false', (t) => {
  const props = {
    inlineAlign: 'center',
    inline: false
  };
  const defaultStyle = {
    foo: 'bar'
  };
  const isContainer = false;

  const result = styles.getStartingStyles(props, defaultStyle, isContainer);

  t.deepEqual(result, [defaultStyle]);
});

test('if getStartingStyles returns only the defaultStyle if inline is false', (t) => {
  const props = {
    inlineAlign: 'center',
    inline: false
  };
  const defaultStyle = {
    foo: 'bar'
  };
  const isContainer = true;

  const result = styles.getStartingStyles(props, defaultStyle, isContainer);

  t.deepEqual(result, [defaultStyle]);
});

test('if getStartingStyles returns the merged defaultStyle with inline and INLINE_ALIGN_MAP style if isContainer and inline are true', (t) => {
  const props = {
    inlineAlign: 'center',
    inline: true
  };
  const defaultStyle = {
    foo: 'bar'
  };
  const isContainer = true;

  const result = styles.getStartingStyles(props, defaultStyle, isContainer);

  t.deepEqual(result, [
    {
      ...defaultStyle,
      ...containerStyleConstants.DISPLAY_MAP.inline,
      ...containerStyleConstants.INLINE_ALIGN_MAP[props.inlineAlign]
    }
  ]);
});

test('if createGetCompleteStyles sends the correct styles array to css when sizeTo does not exist', (t) => {
  const defaultStyle = {
    foo: 'bar'
  };
  const fakeTransformReturn = {
    bar: 'baz'
  };
  const transforms = [sinon.stub().returns(fakeTransformReturn)];
  const isContainer = true;

  const getCompleteStyles = styles.createGetCompleteStyles(defaultStyle, transforms, isContainer);

  t.is(typeof getCompleteStyles, 'function');

  const props = {};

  const cssStub = sinon.stub(css, 'createCssRule');

  getCompleteStyles(props);

  t.true(transforms[0].calledOnce);
  t.true(transforms[0].calledWith(props));

  t.true(cssStub.calledOnce);

  const args = cssStub.args[0];

  t.is(args.length, 1);

  t.deepEqual(args[0], [defaultStyle, fakeTransformReturn]);

  cssStub.restore();
});

test('if createGetCompleteStyles sends the correct styles array to css when sizeTo exists', (t) => {
  const defaultStyle = {
    foo: 'bar'
  };
  const fakeTransformReturn = {
    bar: 'baz'
  };
  const transforms = [sinon.stub().returns(fakeTransformReturn)];
  const isContainer = true;

  const getCompleteStyles = styles.createGetCompleteStyles(defaultStyle, transforms, isContainer);

  t.is(typeof getCompleteStyles, 'function');

  const props = {
    sizeTo: 'content'
  };

  const cssStub = sinon.stub(css, 'createCssRule');

  getCompleteStyles(props);

  t.true(transforms[0].calledOnce);
  t.true(transforms[0].calledWith(props));

  t.true(cssStub.calledOnce);

  const args = cssStub.args[0];

  t.is(args.length, 1);

  t.deepEqual(args[0], [defaultStyle, fakeTransformReturn, ...styles.getSizeToOverrideStyles(props)]);

  cssStub.restore();
});

test('if getContainerStyles correctly uses createGetCompleteStyles for containers', (t) => {
  const props = {};

  const cssStub = sinon.spy(css, 'createCssRule');

  const result = styles.getContainerStyles(props);

  t.true(cssStub.calledOnce);

  const args = cssStub.args[0];

  t.is(args.length, 1);
  t.deepEqual(args[0], [containerStyleConstants.DEFAULT_CONTAINER]);

  cssStub.restore();

  t.truthy(result);
  t.is(typeof result, 'object');

  const keys = Object.keys(result);

  t.is(keys.length, 2);

  keys.forEach((key) => {
    t.true(/data-flexor-([0-9]|item|container)/.test(key));
  });
});

test('if getItemStyles correctly uses createGetCompleteStyles for items', (t) => {
  const props = {};

  const cssStub = sinon.spy(css, 'createCssRule');

  const result = styles.getItemStyles(props);

  t.true(cssStub.calledOnce);

  const args = cssStub.args[0];

  t.is(args.length, 1);
  t.deepEqual(args[0], [itemStyleConstants.DEFAULT_ITEM]);

  cssStub.restore();

  t.truthy(result);
  t.is(typeof result, 'object');

  const keys = Object.keys(result);

  t.is(keys.length, 2);

  keys.forEach((key) => {
    t.true(/data-flexor-([0-9]|item|container)/.test(key));
  });
});
