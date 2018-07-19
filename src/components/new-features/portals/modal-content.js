import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import s from '../index.module.css';

const ModalContent = (props) => (
  <div className={s.modalContainer}>
    <div className={s.modalContent}>
      我是一个portal的Modal!
      <Button type='primary' onClick={props.hideModal} ghost>点我关闭</Button>
    </div>
  </div>
);

ModalContent.propTypes = {
  hideModal: PropTypes.func.isRequired
};

export default ModalContent;
