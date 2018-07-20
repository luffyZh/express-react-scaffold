import React, { Component } from 'react';
import { Button } from 'antd';
import PortalModal from './modal';
import ModalContent from './modal-content';
import s from '../index.module.css';

class PortalsComp extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false, clickTime: 0 };
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }
  
  handleHide = () => {
    this.setState({ showModal: false });
  }

  handleClick = () => {
    let { clickTime } = this.state;
    clickTime += 1;
    this.setState({ clickTime });
  }

  render() {
    const protalModal = this.state.showModal ? (
      <PortalModal>
        <ModalContent hideModal={this.handleHide} />
      </PortalModal>
    ) : null;
    return (
      <div className={s.portalContainer} onClick={this.handleClick}>
        <div>该组件被点击了: {this.state.clickTime}次</div>
        <Button onClick={this.handleShow} type='primary'>点我弹出Modal</Button>
        {protalModal}
      </div>
    );
  }
}

export default PortalsComp;