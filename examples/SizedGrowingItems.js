import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {FlexContainer, FlexItem} from '../src';

class SizedGrowingItems extends PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render() {
    const {id} = this.props;

    return (
      <div
        className="section-container"
        id={id}
      >
        <h2>Sized and growing items</h2>

        <h4>row</h4>

        <FlexContainer className="container">
          <FlexItem
            className="child"
            sizeTo="content"
          >
            Sized-to-fit child
          </FlexItem>

          <FlexItem className="child">Growing child</FlexItem>

          <FlexItem
            className="child"
            sizeTo={50}
          >
            50px width child
          </FlexItem>
        </FlexContainer>

        <h4>column</h4>

        <FlexContainer
          className="container column-container"
          column
        >
          <FlexItem
            className="child"
            sizeTo="content"
          >
            Sized-to-fit child
          </FlexItem>

          <FlexItem className="child">Growing child</FlexItem>

          <FlexItem
            className="child"
            sizeTo={50}
          >
            50px height child
          </FlexItem>
        </FlexContainer>
      </div>
    );
  }
}

export default SizedGrowingItems;
