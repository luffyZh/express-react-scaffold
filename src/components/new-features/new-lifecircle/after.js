import React, { Component } from 'react';
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
    if (prevState.flag !== this.props.flag && this.props.flag) {
      /**
       * 从这里可以看出来，其实组件更新完也就是dom已经渲染好是发生在componentDidUpdate
       * 这个生命周期之后的，因为在这个里面进行alert发现dom内容并没有发生变化
       */
      console.log(document.getElementById('flag').innerText);
      this.doSomeThing();
      // setTimeout(() => {
      //   this.doSomeThing();
      // }, 0);
    }
  }

  doSomeThing = () => {
    alert('afterFlag值变成了true');
  }

  render() {
    return (
      <div id='flag' style={{ padding: '5px 10px', border: '1px solid orange', margin: '4px 0' }}>
        flag:{this.state.flag.toString()}
      </div>
    );
  }
}

export default AfterComp;