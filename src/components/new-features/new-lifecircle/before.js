import { Component } from 'react';
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
  
  componentWillReceiveProps(nextProps) {
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
      `flag:${this.state.flag}`
    );
  }
}

export default BeforeComp;