import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button_ from '@material-ui/core/Button';

import { FONT_SIZES } from '../constants';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-bottom: 7vh;
  margin-top: 7vh;
`;

const FlexItem = styled.div`
  margin: 1vh 0;
`;

const Button = styled(Button_)`
  margin-bottom: 1vh;
`;

const OutsideText = styled.strong`
  margin-left: 10px;
  color: ${props => props.color};
  ${FONT_SIZES.md}
`;

export const Text = styled.strong`
  font-weight: bold;
  ${FONT_SIZES.md}
  color: ${props => props.color};
`;

const BtnStyling = {
  padding: '1vh 15px',
};

const SignUpButton = ({
    text,
    outsideText,
    isModalVisible,
    setIsModalVisible,
    outsideTextColor,
}) => (
  <Container>
    <FlexItem>
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
    </FlexItem>

    <FlexItem>
      <OutsideText color={outsideTextColor}>
        {outsideText}
      </OutsideText>
    </FlexItem>
  </Container>
);

SignUpButton.defaultProps = {
  outsideTextColor: 'inherit',
};

SignUpButton.propTypes = {
  text: PropTypes.string.isRequired,
  outsideText: PropTypes.string.isRequired,
  isModalVisible: PropTypes.bool.isRequired,
  setIsModalVisible: PropTypes.func.isRequired,
  outsideTextColor: PropTypes.string,
};

export default SignUpButton;
