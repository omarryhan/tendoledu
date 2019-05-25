import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;

const OutsideText = styled.p`

`;

const Text = styled.p`
`;

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
