import React from 'react';
import styled from 'styled-components';
import { FOOTER_HEIGHT } from '../constants';


const FooterContainer = styled.footer`
    height: ${FOOTER_HEIGHT}vh;
    background-color: ${props => props.theme.primaryColor};
    display: flex;
    align-items: center;
`;

const FooterText = styled.p`
  margin: 0 auto;
  text-align: center;
  color: white;
`;

export default ({ theme }) => (
  <FooterContainer theme={theme}>
    <FooterText>
      Made with
      {' '}
      <span role="img" aria-label="heart emoji">
        ❤️
      </span>
      {' '}
      by Tendoledu
    </FooterText>
  </FooterContainer>
);
