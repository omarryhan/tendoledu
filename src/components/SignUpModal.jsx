import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import SignUpForm from './SignUpForm';

const SignUpModal = ({
    isModalVisible,
    setIsModalVisible,
    currentPage,
}) => (
  <Dialog
    open={isModalVisible}
    onClose={() => setIsModalVisible(false)}
    tabIndex={-1}
    aria-labelledby="Sign Up Dialogue"
  >
    <DialogTitle id="max-width-dialog-title">Sign Up</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Sign up for updates
      </DialogContentText>
      <SignUpForm currentPage={currentPage} onSubmit={() => setIsModalVisible(false)} />
    </DialogContent>
  </Dialog>
);

SignUpModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};

export default SignUpModal;
