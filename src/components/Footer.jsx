import React from 'react';
import styled from 'styled-components';
import { /*FOOTER_HEIGHT,*/ COLOR_PALETTE } from '../constants';

import PhoneImage from '../images/phone-solid.svg';
import EmailImage from '../images/envelope-solid.svg';


const FooterContainer = styled.footer`
    height: auto;
    background-color: ${COLOR_PALETTE.black.primary};
    display: flex;
    align-items: center;
    padding:30px;
`;

const FooterContact = styled.div`
  width:100%;
  text-align:center;
`;

const ContactInfoContainer = styled.div`
`;

const ContactInfo = styled.p`
  display:inline-block;
  color:white;
  font-size:1.5em;
  margin:0px 0px 0px 20px;
  vertical-align: text-bottom;
`;

const FooterTextDiv = styled.div`
  margin-top:30px;
`;

const FooterText = styled.p`
  margin: 0 auto;
  text-align: center;
  color: ${COLOR_PALETTE.white.primary};
`;

export default () => (
  <FooterContainer>
    <FooterContact>
      <ContactInfoContainer>
        <img style={{ maxWidth: '40px', marginLeft: '0px' }} src={PhoneImage} alt="Has a yellow tube where students enter to learn and when exiting, they start applying for jobs" />
        <ContactInfo>221548782</ContactInfo>
        <img style={{ maxWidth: '40px', marginLeft: '50px' }} src={EmailImage} alt="Has a yellow tube where students enter to learn and when exiting, they start applying for jobs" />
        <ContactInfo>tendoledu@tendoledu.com</ContactInfo>
      </ContactInfoContainer>
      <FooterTextDiv>
        <FooterText>
          Made with
          {' '}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>
          {' '}
          by Tendoledu
        </FooterText>
      </FooterTextDiv>
    </FooterContact>


  </FooterContainer>
);
