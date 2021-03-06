import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle_ from '@material-ui/core/DialogTitle';
import DialogContent_ from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
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
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span width="10%">
        {' '}
      </span>

      <div width="80%">
        <DialogTitle>
          <DialogTitleText>
            Join the Beta Waiting-list
          </DialogTitleText>
        </DialogTitle>
      </div>

      <div width="10%">
        <IconButton
          onClick={() => setIsModalVisible(false)}
          aria-label="Close Dialog"
        >
          <CloseIcon />
        </IconButton>
      </div>
    </div>

    <DialogContent>
      <DialogContentText>
        We are launching Tendoledu very soon! Sign Up Now to get
        Tendoledu for FREE and don't miss out on any updates...
        {' '}
        <br />
        See you on the other side
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
