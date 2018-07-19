import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const portalModal = document.getElementById('portal_modal');

class PortalModal extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    portalModal.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    portalModal.removeChild(this.el);
  }
  
  render() {
    // Use a portal to render the children into the element
    return createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el,
    );
  }
}

export default PortalModal;