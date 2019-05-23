import React from 'react';
import Modal from '@material-ui/core/Modal';
import SignUpForm from './SignUpForm';

export default ({
    isModalVisible,
    setIsModalVisible,
}) => (
  <Modal
    open={isModalVisible}
    onClose={() => setIsModalVisible(false)}
    onBackdropClick={() => setIsModalVisible(false)}
  >
    <SignUpForm />
  </Modal>
);
