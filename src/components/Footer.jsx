import React from 'react';
import styled from 'styled-components';
import { useTheme } from '@material-ui/styles';
import { FOOTER_HEIGHT } from '../constants';


const FooterContainer = styled.footer`
    height: ${FOOTER_HEIGHT}px;
    background-color: ${props => props.backgroundColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const FooterText = styled.p`
  text-align: center;
  color: ${props => props.color};
  margin: 0 0;
`;

const ContactUsAnchor = styled.a`
  color: ${props => props.color};
  text-decoration: none;

  &:hover {
    color: ${props => props.hoverColor};
  };

  font-weight: bold;

  text-align: center;
  margin: 0 0;
`;

export default () => {
  const theme = useTheme();
  return (
    <FooterContainer backgroundColor={theme.palette.black.lighter}>
      <ContactUsAnchor
        href="mailto:info@tendoledu.com"
        title="Contact Us Via Email"
        color={theme.palette.white.main}
        hoverColor={theme.palette.white.dark}
      >
        Contact Us
      </ContactUsAnchor>
      <br />
      <FooterText color={theme.palette.white.main}>
        <span role="img" aria-label="Copyright mark">
          ©
        </span>
        {' '}
        2019 Tendoledu
      </FooterText>
    </FooterContainer>
  );
};
