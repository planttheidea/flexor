// test
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// src
import FlexItem from 'src/components/FlexItem';
import FlexContainer from 'src/components/FlexContainer';

test('if FlexItem renders correctly with default props', (t) => {
  const wrapper = shallow(<FlexItem>hello</FlexItem>);

  t.snapshot(toJson(wrapper));
});

test('if FlexItem renders correctly with additional props', (t) => {
  const wrapper = shallow(
    <FlexItem
      basis="0"
      className="foo"
    >
      hello
    </FlexItem>
  );

  t.snapshot(toJson(wrapper));
});

test('if FlexItem renders correctly with FlexContainer as the element', (t) => {
  const wrapper = shallow(<FlexItem element={FlexContainer}>hello</FlexItem>);

  t.snapshot(toJson(wrapper));
});
