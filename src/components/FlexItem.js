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
  getItemStyles
} from '../utils/styles';

const INTERNAL_PROPS = {
  alignSelf: true,
  basis: true,
  grow: true,
  order: true,
  shrink: true,
  sizeTo: true
};

const getCachedItemStyles = moize.react(getItemStyles);

class FlexItem extends PureComponent {
  static propTypes = {
    alignSelf: PropTypes.string,
    basis: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    children: PropTypes.node,
    element: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),
    grow: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number
    ]),
    order: PropTypes.number,
    shrink: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number
    ]),
    sizeTo: PropTypes.oneOfType([
      PropTypes.number,
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
        {...getCachedItemStyles(splitProps.internal)}
        {...splitProps.remaining}
      >
        {children}
      </Element>
    );
  }
}

export default FlexItem;
