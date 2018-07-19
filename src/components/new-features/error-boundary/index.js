import React, { Component } from 'react';
import ErrorBoundary from './error-boundary';
import ErrorPage from './error-page';
import s from '../index.module.css';

class ErrorBoundaryComp extends Component {
  state = {
    count: 0
  }

  changeCount = () => {
    let { count } = this.state;
    count += 1;
    this.setState({ count });
  }

  resetCount = () => this.setState({ count: 0 });

  render() {
    return (
      <div className={s.errorContainer}>
        <ErrorBoundary>
          <p>下面两个会发生错误的组件被同一个ErrorBoundary包裹，发生错误同时被替换~</p>
          <ErrorPage />
          <ErrorPage />
        </ErrorBoundary>
        <hr />
        <p>下面两个会发生错误的组件分别被ErrorBoundary包裹着，发生错误会分别被替换~</p>
        <ErrorBoundary><ErrorPage /></ErrorBoundary>
        <ErrorBoundary><ErrorPage /></ErrorBoundary>
      </div>
    );
  }
}

export default ErrorBoundaryComp;