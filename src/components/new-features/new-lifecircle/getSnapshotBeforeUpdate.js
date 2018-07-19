import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GSBUComp extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired
  }
  constructor(props) {
    super(props);
    const { disabled } = props;
    this.state = { disabled };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.disabled !== prevState.disabled) {
      return {
        disabled: nextProps.disabled
      };
    }
    return null;
  }
  

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return this.props.disabled;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!snapshot) {
      // 如果可用，获取焦点
      this.domRef.focus();
    }
  }

  render() {
    return (
      <div>
        <input ref={(ref) => this.domRef = ref} disabled={this.state.disabled} />
      </div>
    );
  }
}

export default GSBUComp;