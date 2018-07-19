import React, { Component } from 'react';
import { Button } from 'antd';

import s from '../index.module.css';

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  
  handleClick = () => {
    this.setState(({counter}) => ({
      counter: counter + 1
    }));
  }
  
  render() {
    if (this.state.counter === 5) {
      // Simulate a JS error
      throw String('I crashed!');
    }
    return (
      <div className={s.errorRow}>
        {this.state.counter}
        <Button onClick={this.handleClick} type='primary' ghost> + </Button>
      </div>
    );
  }
}

export default ErrorPage;