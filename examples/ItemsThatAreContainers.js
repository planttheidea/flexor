import PropTypes from 'prop-types';
import React, {
  PureComponent
} from 'react';

import {
  FlexContainer,
  FlexItem
} from '../src';

class ItemsThatAreContainers extends PureComponent {
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
        <h2>Items that are also containers</h2>

        <h4>row</h4>

        <FlexContainer className="container column-container">
          <FlexItem
            alignContent="center"
            alignItems="center"
            className="child"
            element={FlexContainer}
            justifyContent="center"
          >
            <FlexItem
              className="grandchild"
              sizeTo="content"
            >
              I am a centered flex item inside another flex item!
            </FlexItem>

            <FlexItem
              alignSelf="stretch"
              className="grandchild"
            >
              I am a flex item inside another flex item that has align-self set to stretch
            </FlexItem>
          </FlexItem>

          <FlexItem
            alignSelf="end"
            className="child"
          >
            I am a flex item that has align-self set to end
          </FlexItem>
        </FlexContainer>

        <h4>column</h4>

        <FlexContainer
          className="container column-container"
          column
        >
          <FlexItem
            alignContent="center"
            alignItems="center"
            className="child"
            element={FlexContainer}
            justifyContent="center"
          >
            <FlexItem
              className="grandchild"
              sizeTo="content"
            >
              I am a centered flex item inside another flex item!
            </FlexItem>

            <FlexItem
              alignSelf="end"
              className="grandchild"
            >
              I am a flex item inside another flex item that has align-self set to end
            </FlexItem>
          </FlexItem>

          <FlexItem
            alignSelf="end"
            className="child"
          >
            I am a flex item that has align-self set to end
          </FlexItem>
        </FlexContainer>
      </div>
    );
  }
}

export default ItemsThatAreContainers;
