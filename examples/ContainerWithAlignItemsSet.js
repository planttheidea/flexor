import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';

import {FlexContainer, FlexItem} from '../src';

class ContainerWithAlignItemsSet extends PureComponent {
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
        <h2>Container with align-items set</h2>

        <h4>row with items aligned center</h4>

        <FlexContainer
          alignItems="center"
          className="container"
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
            sizeTo="50"
          >
            50px width child
          </FlexItem>
        </FlexContainer>

        <h4>column with items aligned center</h4>

        <FlexContainer
          alignItems="center"
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

        <h4>row with items aligned flex-start</h4>

        <FlexContainer
          alignItems="start"
          className="container"
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
            50px width child
          </FlexItem>
        </FlexContainer>

        <h4>column with items aligned flex-start</h4>

        <FlexContainer
          alignItems="start"
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

        <h4>row with items aligned flex-end</h4>

        <FlexContainer
          alignItems="end"
          className="container"
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
            50px width child
          </FlexItem>
        </FlexContainer>

        <h4>column with items aligned flex-end</h4>

        <FlexContainer
          alignItems="end"
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

export default ContainerWithAlignItemsSet;
