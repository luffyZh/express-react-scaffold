import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BeforeComp extends Component {
  static propTypes = {
    flag: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    const { flag } = props;
    this.state = { flag };
  }
  
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.flag !== this.props.flag) {
      this.setState({ flag: nextProps.flag }, () => {
        if (nextProps.flag) {
          this.doSomeThing();
        }
      });
    }
  }

  doSomeThing = () => {
    alert('beforeFlag值变成了true');
  }

  render() {
    return (
      <div style={{ padding: '5px 10px', border: '1px solid orange', margin: '4px 0' }}>
        flag:{this.state.flag.toString()}
      </div>
    );
  }
}

export default BeforeComp;