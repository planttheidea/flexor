import PropTypes from 'prop-types';
import React, {
  PureComponent
} from 'react';

import {
  FlexContainer,
  FlexItem
} from '../src';

class OrderedItems extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render() {
    const {
      id
    } = this.props;

    return (
      <div
        className="section-container"
        id={id}
      >
        <h2>Ordered items</h2>

        <h4>row</h4>

        <FlexContainer className="container">
          <FlexItem
            className="child"
            order={2}
            sizeTo="content"
          >
            Third child
          </FlexItem>

          <FlexItem className="child">
            First child
          </FlexItem>

          <FlexItem
            className="child"
            order={1}
            sizeTo={50}
          >
            Second child
          </FlexItem>
        </FlexContainer>

        <h4>column</h4>

        <FlexContainer
          className="container column-container"
          column
        >
          <FlexItem
            className="child"
            order={2}
            sizeTo="content"
          >
            Third child
          </FlexItem>

          <FlexItem className="child">
            First child
          </FlexItem>

          <FlexItem
            className="child"
            order={1}
            sizeTo={50}
          >
            Second child
          </FlexItem>
        </FlexContainer>
      </div>
    );
  }
}

export default OrderedItems;
