import React, { Component } from 'react';
import { Button } from 'antd';
import BeforeComp from './before';
import AfterComp from './after';
import GSBUComp from './getSnapshotBeforeUpdate';

import s from '../index.module.css';

class NewLifeCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beforeFlag: false,
      afterFlag: false,
      disabled: true,
    };
  }

  render() {
    return (
      <div className={s.container}>
        <div className={s.newLifeContainer}>
          <h3>componentWillReceiveProps</h3>
          <Button onClick={() => this.setState({ beforeFlag: !this.state.beforeFlag })} type="primary" ghost>改变flag</Button>
          <BeforeComp flag={this.state.beforeFlag} />
        </div>
        <div className={s.newLifeContainer}>
          <h4>getDrivedStateFromProps + componentDidUpdate</h4>
          <Button onClick={() => this.setState({ afterFlag: !this.state.afterFlag })} type="primary" ghost>改变flag</Button>
          <AfterComp flag={this.state.afterFlag} />
        </div>
        <div className={s.newLifeContainer}>
          <Button onClick={() => this.setState({ disabled: !this.state.disabled })} type="primary" ghost>改变Disabled</Button>
          <GSBUComp disabled={this.state.disabled} />
        </div>
      </div>
    );
  }
}

export default NewLifeCircle;