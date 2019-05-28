import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-bottom: 25px;
  margin-top: 25px;
`;

const OutsideText = styled.strong`
  margin-left: 10px;
  color:black;
`;

const Text = styled.strong`
  font-weight: bold;
  font-size:1.1em;
`;

const BtnStyling = {
  borderTopLeftRadius: '15px',
  borderBottomRightRadius: '15px',
  boxShadow: '0px -4px 55px -2px rgba(255,1,94,0.38)',
  paddingLeft: '35px',
  paddingRight: '35px',
  paddingTop: '10px',
  paddingBottom: '10px',
};

const SignUpButton = ({
    text,
    outsideText,
    isModalVisible,
    setIsModalVisible,
}) => (
  <Container>
    <Button
      onClick={() => setIsModalVisible(true)}
      disabled={isModalVisible}
      color="primary"
      size="large"
      variant="contained"
      style={BtnStyling}
    >
      <Text>{text}</Text>
    </Button>
    <OutsideText>
      {outsideText}
    </OutsideText>
  </Container>
);

SignUpButton.propTypes = {
  text: PropTypes.string.isRequired,
  outsideText: PropTypes.string.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
};

export default SignUpButton;
