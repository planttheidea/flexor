import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {FlexContainer, FlexItem} from '../src';

class ContainerWithAlignContentSet extends PureComponent {
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
        <h2>Container with align-content set</h2>

        <h4>row with content center</h4>

        <FlexContainer
          alignContent="center"
          className="container align-content"
          wrap
        >
          <FlexItem
            className="child"
            sizeTo="75%"
          >
            75% width child
          </FlexItem>

          <FlexItem
            basis="50%"
            className="child"
          >
            Growing child
          </FlexItem>

          <FlexItem
            className="child"
            sizeTo={50}
          >
            50px width child
          </FlexItem>
        </FlexContainer>

        <h4>column with content center</h4>

        <FlexContainer
          alignContent="center"
          className="container column-container align-content"
          column
          wrap
        >
          <FlexItem
            className="child"
            sizeTo="75%"
          >
            75% height child
          </FlexItem>

          <FlexItem
            basis="50%"
            className="child"
          >
            Growing child
          </FlexItem>

          <FlexItem
            className="child"
            sizeTo={50}
          >
            50px height child
          </FlexItem>
        </FlexContainer>

        <h4>row with content flex-end</h4>

        <FlexContainer
          alignContent="end"
          className="container align-content"
          wrap
        >
          <FlexItem
            className="child"
            sizeTo="75%"
          >
            75% width child
          </FlexItem>

          <FlexItem
            basis="50%"
            className="child"
          >
            Growing child
          </FlexItem>

          <FlexItem
            className="child"
            sizeTo={50}
          >
            50px width child
          </FlexItem>
        </FlexContainer>

        <h4>column with content flex-end</h4>

        <FlexContainer
          alignContent="end"
          className="container column-container align-content"
          column
          wrap
        >
          <FlexItem
            className="child"
            sizeTo="75%"
          >
            75% height child
          </FlexItem>

          <FlexItem
            basis="50%"
            className="child"
          >
            Growing child
          </FlexItem>

          <FlexItem
            className="child"
            sizeTo={50}
          >
            50px height child
          </FlexItem>
        </FlexContainer>

        <h4>row with content flex-start</h4>

        <FlexContainer
          alignContent="start"
          className="container align-content"
          wrap
        >
          <FlexItem
            className="child"
            sizeTo="75%"
          >
            75% width child
          </FlexItem>

          <FlexItem
            basis="50%"
            className="child"
          >
            Growing child
          </FlexItem>

          <FlexItem
            className="child"
            sizeTo={50}
          >
            50px width child
          </FlexItem>
        </FlexContainer>

        <h4>column with content flex-start</h4>

        <FlexContainer
          alignContent="start"
          className="container column-container align-content"
          column
          wrap
        >
          <FlexItem
            className="child"
            sizeTo="75%"
          >
            75% height child
          </FlexItem>

          <FlexItem
            basis="50%"
            className="child"
          >
            Growing child
          </FlexItem>

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

export default ContainerWithAlignContentSet;
