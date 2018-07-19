import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  }
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You can also log error messages to an error reporting service here
  }
  
 ErrorHandle = () => (
    <div>
      <h2 style={{ color: 'red' }}>Something went wrong.</h2>
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {this.state.error && this.state.error.toString()}
        <br />
        {this.state.errorInfo.componentStack}
      </details>
    </div>
  )

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        this.ErrorHandle()
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}

export default ErrorBoundary;