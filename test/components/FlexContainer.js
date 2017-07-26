// test
import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// src
import FlexContainer from 'src/components/FlexContainer';

test('if FlexContainer renders correctly with default props', (t) => {
  const wrapper = shallow(<FlexContainer>hello</FlexContainer>);

  t.snapshot(toJson(wrapper));
});

test('if FlexContainer renders correctly with additional props', (t) => {
  const wrapper = shallow(
    <FlexContainer
      className="foo"
      column
    >
      hello
    </FlexContainer>
  );

  t.snapshot(toJson(wrapper));
});
