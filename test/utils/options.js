// test
import test from 'ava';

// src
import * as options from 'src/utils/options';

test.serial('if getOptions will retrieve the options in the closure', (t) => {
  const opts = options.getOptions();

  t.is(typeof opts, 'object');
  t.deepEqual(Object.keys(opts), ['debug', 'prefix']);
  t.false(opts.debug);
  t.is(typeof opts.prefix, 'function');
});

test.serial('if setOptions will assign the options passed to the options in the closure', (t) => {
  const originalOpts = options.getOptions();

  const newOptions = {
    debug: true
  };

  options.setOptions(newOptions);

  const updatedOptions = options.getOptions();

  t.deepEqual(updatedOptions, {
    ...originalOpts,
    debug: true
  });

  options.setOptions(originalOpts);
});

test.serial('if setOptions will not assign keys that do not already exist on the global options', (t) => {
  const originalOpts = options.getOptions();

  const newOptions = {
    foo: 'bar'
  };

  options.setOptions(newOptions);

  const updatedOptions = options.getOptions();

  t.deepEqual(updatedOptions, originalOpts);

  options.setOptions(originalOpts);
});

test.serial('if setOptions will do nothing but not fail when nothing is passed', (t) => {
  const originalOpts = options.getOptions();

  options.setOptions();

  const updatedOptions = options.getOptions();

  t.deepEqual(updatedOptions, originalOpts);

  options.setOptions(originalOpts);
});
