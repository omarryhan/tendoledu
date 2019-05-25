import React from 'react';
import styled from 'styled-components';
import { FOOTER_HEIGHT, COLOR_PALETTE } from '../constants';


const FooterContainer = styled.footer`
    height: ${FOOTER_HEIGHT}vh;
    background-color: ${COLOR_PALETTE.black.primary};
    display: flex;
    align-items: center;
`;

const FooterText = styled.p`
  margin: 0 auto;
  text-align: center;
  color: ${COLOR_PALETTE.white.primary};
`;

export default () => (
  <FooterContainer>
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
