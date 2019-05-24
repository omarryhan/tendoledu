import React from 'react';
import Modal from '@material-ui/core/Modal';
import SignUpForm from './SignUpForm';

export default ({
    isModalVisible,
    setIsModalVisible,
    currentPage,
}) => (
  <Modal
    open={isModalVisible}
    onClose={() => setIsModalVisible(false)}
    onBackdropClick={() => setIsModalVisible(false)}
  >
    <SignUpForm currentPage={currentPage} onSubmit={() => setIsModalVisible(false)} />
  </Modal>
);
