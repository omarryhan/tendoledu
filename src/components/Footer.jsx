import React from 'react';
import styled from 'styled-components';
import { FOOTER_HEIGHT, COLOR_PALETTE } from '../constants';


const FooterContainer = styled.footer`
    height: ${FOOTER_HEIGHT}vh;
    background-color: ${COLOR_PALETTE.black.primary()};

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FooterText = styled.p`
  text-align: center;
  color: ${COLOR_PALETTE.white.primary()};
  margin: 0 0;
`;

const ContactUsAnchor = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    color: ${COLOR_PALETTE.white.dark()};;
  };

  font-weight: bold;

  text-align: center;
  margin: 0 0;
`;

export default () => (
  <FooterContainer>
    <ContactUsAnchor
      href="mailto:info@tendoledu.com"
    >
      Contact Us
    </ContactUsAnchor>
    <br />
    <FooterText>
      <span role="img" aria-label="Copyright mark">
        ©
      </span>
      {' '}
      2019 Tendoledu
    </FooterText>
  </FooterContainer>
);
