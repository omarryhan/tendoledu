import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle_ from '@material-ui/core/DialogTitle';
import DialogContent_ from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import SignUpForm from './SignUpForm';

import { FONT_SIZES } from '../constants';


const DialogTitle = styled(DialogTitle_)`
  text-align: center;
`;

const DialogTitleText = styled.p`  
  ${FONT_SIZES.lg}
  margin: 0 0;
`;

const DialogContent = styled(DialogContent_)`
  margin: 20px;

  ${FONT_SIZES.sm}
`;

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
    fullWidth
    maxWidth="sm"
  >
    <DialogTitle id="max-width-dialog-title">
      <DialogTitleText>
        Join the Beta Waiting-list
      </DialogTitleText>
    </DialogTitle>

    <DialogContent>
      <DialogContentText style={{ textAlign: 'center' }}>
        Tendoledu is going to launch really really soon.
        {' '}
        <br />
        Sign up now to get notified on any and all developments
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
