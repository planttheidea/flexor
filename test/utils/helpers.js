// test
import test from 'ava';

// src
import * as helpers from 'src/utils/helpers';

test('if getMappedSizePrefixedProperty returns the correct prefixed property if the size is positive', (t) => {
  const prefix = 'FOO';
  const size = 1;

  const result = helpers.getMappedSizePrefixedProperty(prefix, size);

  t.is(result, `${prefix}_${size}`);
});

test('if getMappedSizePrefixedProperty returns the correct prefixed property if the size is positive', (t) => {
  const prefix = 'FOO';
  const size = -1;

  const result = helpers.getMappedSizePrefixedProperty(prefix, size);

  t.is(result, `${prefix}_NEGATIVE_${-1 * size}`);
});

test('if getMappedSizeStyles creates the right object for non-negative styles', (t) => {
  const sizes = [0, 1, 2];
  const prefix = 'FOO';
  const property = 'bar';

  const result = helpers.getMappedSizeStyles(sizes, prefix, property);

  t.deepEqual(result, {
    [`${prefix}_0`]: {
      [property]: 0
    },
    [`${prefix}_1`]: {
      [property]: 1
    },
    [`${prefix}_2`]: {
      [property]: 2
    }
  });
});

test('if getMappedSizeStyles creates the right object for negative styles', (t) => {
  const sizes = [-3, -2, -1];
  const prefix = 'FOO';
  const property = 'bar';

  const result = helpers.getMappedSizeStyles(sizes, prefix, property);

  t.deepEqual(result, {
    [`${prefix}_NEGATIVE_1`]: {
      [property]: -1
    },
    [`${prefix}_NEGATIVE_2`]: {
      [property]: -2
    },
    [`${prefix}_NEGATIVE_3`]: {
      [property]: -3
    }
  });
});

test('if getMappedStyles creates the right object for the key', (t) => {
  const object = {
    foo: 'FOO',
    bar: 'BAR',
    baz: 'BAZ'
  };
  const property = 'quz';

  const result = helpers.getMappedStyles(object, property);

  t.deepEqual(result, {
    foo: {
      quz: 'FOO'
    },
    bar: {
      quz: 'BAR'
    },
    baz: {
      quz: 'BAZ'
    }
  });
});
