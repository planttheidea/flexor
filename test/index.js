// test
import test from 'ava';

// src
import * as index from 'src/index';
import FlexContainer from 'src/components/FlexContainer';
import FlexItem from 'src/components/FlexItem';

test('if index has a named export for FlexContainer', (t) => {
  t.true(index.hasOwnProperty('FlexContainer'));

  t.is(index.FlexContainer, FlexContainer);
});

test('if index has a named export for FlexItem', (t) => {
  t.true(index.hasOwnProperty('FlexItem'));

  t.is(index.FlexItem, FlexItem);
});
