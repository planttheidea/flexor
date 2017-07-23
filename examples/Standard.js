import PropTypes from 'prop-types';
import React, {
  PureComponent
} from 'react';

import {
  FlexContainer,
  FlexItem
} from '../src';

class Standard extends PureComponent {
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
        <h2>Standard</h2>

        <h4>row</h4>

        <FlexContainer className="container">
          <FlexItem className="child">
            First child
          </FlexItem>

          <FlexItem className="child">
            Second child
          </FlexItem>
        </FlexContainer>

        <h4>column</h4>

        <FlexContainer
          className="container column-container"
          column
        >
          <FlexItem className="child">
            First child
          </FlexItem>

          <FlexItem className="child">
            Second child
          </FlexItem>
        </FlexContainer>

        <h4>row reversed</h4>

        <FlexContainer
          className="container"
          rowReverse
        >
          <FlexItem className="child">
            First child
          </FlexItem>

          <FlexItem className="child">
            Second child
          </FlexItem>
        </FlexContainer>

        <h4>column reversed</h4>

        <FlexContainer
          className="container column-container"
          columnReverse
        >
          <FlexItem className="child">
            First child
          </FlexItem>

          <FlexItem className="child">
            Second child
          </FlexItem>
        </FlexContainer>

        <div>
          <h4>inline row (not aligned)</h4>

          <FlexContainer
            className="container container-inline"
            inline
          >
            <FlexItem className="child">
              First item
            </FlexItem>

            <FlexItem className="child">
              Second item
            </FlexItem>
          </FlexContainer>

          <FlexContainer
            className="container container-inline"
            inline
          >
            <FlexItem className="child">
              <h4>Headline first item</h4>
            </FlexItem>

            <FlexItem className="child">
              <h4>Headline second item</h4>
            </FlexItem>
          </FlexContainer>
        </div>

        <div>
          <h4>inline column (with align set to top)</h4>

          <FlexContainer
            className="container container-inline"
            column
            inline
            inlineAlign="top"
          >
            <FlexItem className="child">
              First item
            </FlexItem>

            <FlexItem className="child">
              Second item
            </FlexItem>
          </FlexContainer>

          <FlexContainer
            className="container container-inline"
            column
            inline
            inlineAlign="top"
          >
            <FlexItem className="child">
              <h4>Headline first item</h4>
            </FlexItem>

            <FlexItem className="child">
              <h4>Headline second item</h4>
            </FlexItem>
          </FlexContainer>
        </div>
      </div>
    );
  }
}

export default Standard;
