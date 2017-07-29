// test
import test from 'ava';

// src
import * as props from 'src/utils/props';

test('if getSplitProps will split the props into internal and remaining based on internalPropTypes', (t) => {
  const propsPassed = {
    foo: 'bar',
    bar: 'baz',
    baz: 'quz'
  };
  const internalProps = {
    bar: true
  };

  const result = props.getSplitProps(propsPassed, internalProps);

  t.deepEqual(result, {
    internal: {
      bar: propsPassed.bar
    },
    remaining: {
      foo: propsPassed.foo,
      baz: propsPassed.baz
    }
  });
});
