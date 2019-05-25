import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const Container = styled.div`

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
