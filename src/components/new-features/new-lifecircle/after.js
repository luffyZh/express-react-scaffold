import { Component } from 'react';
import PropTypes from 'prop-types';

class AfterComp extends Component {
  static propTypes = {
    flag: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props);
    const { flag } = props;
    this.state = { flag, test: 111 };
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(this); 因为是静态方法，获取不到this
    if (nextProps.flag !== prevState.flag) {
      return {
        flag: nextProps.flag
      };
    }
    return null;
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.flag !== this.props.flag) {
      this.doSomeThing();
    }
  }

  doSomeThing = () => {
    alert('afterFlag值变成了true');
  }

  render() {
    return (
      `flag:${this.state.flag}`
    );
  }
}

export default AfterComp;