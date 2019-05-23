import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';


const Container = styled.div`

`;

const OutsideText = styled.p`

`;

const Text = styled.p`
`;

export default ({
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
