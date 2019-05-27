import React from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';
import { media } from '../constants';

const DialogContentTitleStyling = {
  textAlign: 'center',
};

const DialogTitleSpanStyling = styled.span`
  font-size:1.7em;
  ${media.lessThan('tablet')`
    font-size:1.2em;
  `};
`;

const DialogContentTextStyling = {
  fontSize: '1.5em',
  color: 'black',
  textAlign: 'center',
};

const DialogTextSpanStyling = styled.span`
  font-size:1em;
  ${media.lessThan('tablet')`
    font-size:0.8em;
  `};
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
  >
    <DialogTitle id="max-width-dialog-title" style={DialogContentTitleStyling}>
      <DialogTitleSpanStyling>Join the Beta Waiting-list</DialogTitleSpanStyling>
    </DialogTitle>
    <DialogContent>
      <DialogContentText style={DialogContentTextStyling}>
        <DialogTextSpanStyling>
          Tendoledu is going to launch really really soon.
          {' '}
          <br />
          Sign up now to get notified on any and all developments
        </DialogTextSpanStyling>
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
