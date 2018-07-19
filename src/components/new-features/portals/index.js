import React, { Component } from 'react';
import { Button } from 'antd';
import PortalModal from './modal';
import ModalContent from './modal-content';
import s from '../index.module.css';

class PortalsComp extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }
  
  handleHide = () => {
    this.setState({ showModal: false });
  }

  render() {
    const protalModal = this.state.showModal ? (
      <PortalModal>
        <ModalContent hideModal={this.handleHide} />
      </PortalModal>
    ) : null;
    return (
      <div className={s.portalContainer}>
        portalsfljsklfjsdlkfjlsdkjfkldjfldjfdklsjfklsdjfdklsjfklsdjfl
        <Button onClick={this.handleShow} type='primary'>点我弹出Modal</Button>
        {protalModal}
      </div>
    );
  }
}

export default PortalsComp;