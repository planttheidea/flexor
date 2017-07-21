import {
  speedy // eslint-disable-line
} from 'glamor';
import React, {
  PureComponent
} from 'react';

import {
  FlexContainer,
  FlexItem
} from '../src';

// examples
import ContainerWithAlignContentSet from '../examples/ContainerWithAlignContentSet';
import ContainerWithAlignItemsSet from '../examples/ContainerWithAlignItemsSet';
import ItemsThatAreContainers from '../examples/ItemsThatAreContainers';
import OrderedItems from '../examples/OrderedItems';
import SizedGrowingItems from '../examples/SizedGrowingItems';
import Standard from '../examples/Standard';

// speedy(true); // uncomment this to activate production speed (way faster)

const EXAMPLES = [
  {Component: Standard, name: 'Standard', id: 'standard'},
  {Component: SizedGrowingItems, name: 'Sized / growing items', id: 'sized-growing-items'},
  {Component: OrderedItems, name: 'Ordered items', id: 'ordered-items'},
  {Component: ContainerWithAlignItemsSet, name: 'Align items', id: 'align-items'},
  {Component: ContainerWithAlignContentSet, name: 'Align content', id: 'align-content'},
  {Component: ItemsThatAreContainers, name: 'Container items', id: 'container-items'}
];

class App extends PureComponent {
  render() {
    return (
      <FlexContainer
        className="app"
        column
      >
        <FlexItem
          alignItems="center"
          className="title"
          element={FlexContainer}
          justifyContent="center"
          sizeTo="content"
        >
          Flexor Examples
        </FlexItem>

        <FlexItem
          className="navigation"
          element={FlexContainer}
          sizeTo="content"
          wrap
        >
          {EXAMPLES.map(({name, id}) => {
            return (
              <FlexItem
                element="a"
                href={`#${id}`}
                key={`navigation-${id}`}
              >
                {name}
              </FlexItem>
            );
          })}
        </FlexItem>

        <FlexItem
          basis="0"
          className="contents"
          grow
        >
          {EXAMPLES.map(({Component, id}) => {
            return (
              <Component
                id={id}
                key={`component-${id}`}
              />
            );
          })}
        </FlexItem>
      </FlexContainer>
    );
  }
}

export default App;
