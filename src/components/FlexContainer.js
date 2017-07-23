// external dependencies
import moize from 'moize';
import PropTypes from 'prop-types';
import React, {
  PureComponent
} from 'react';

// utils
import {
  getSplitProps
} from '../utils/props';
import {
  getContainerStyles
} from '../utils/styles';

const INTERNAL_PROPS = {
  alignContent: true,
  alignItems: true,
  column: true,
  columnReverse: true,
  direction: true,
  justifyContent: true,
  inline: true,
  inlineAlign: true,
  row: true,
  rowReverse: true,
  wrap: true
};

const getCachedContainerStyles = moize.react(getContainerStyles);

class FlexContainer extends PureComponent {
  static propTypes = {
    alignContent: PropTypes.string,
    alignItems: PropTypes.string,
    children: PropTypes.node,
    column: PropTypes.bool,
    columnReverse: PropTypes.bool,
    direction: PropTypes.string,
    element: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),
    justifyContent: PropTypes.string,
    inline: PropTypes.bool,
    inlineAlign: PropTypes.string,
    row: PropTypes.bool,
    rowReverse: PropTypes.bool,
    wrap: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ])
  };

  static defaultProps = {
    element: 'div'
  };

  render() {
    const {
      children,
      element: Element
    } = this.props;

    const splitProps = getSplitProps(this.props, INTERNAL_PROPS);

    return (
      <Element
        {...getCachedContainerStyles(splitProps.internal)}
        {...splitProps.remaining}
      >
        {children}
      </Element>
    );
  }
}

export default FlexContainer;
