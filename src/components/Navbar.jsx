import React from 'react';
import styled from 'styled-components';
import {
    media,
    LaptopLayoutWidth,
    TabletLayoutWidth,
    MobileLargeLayoutWidth,
    MobileLayoutWidth,
    HEADER_HEIGHT,
  } from '../constants';


const NavbarContainer = styled.header`
    height: ${HEADER_HEIGHT};
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-evenly;

    width: ${LaptopLayoutWidth};

    ${media.lessThan('laptop')`
      width: ${TabletLayoutWidth};
    `};
  
    ${media.lessThan('tablet')`
      width: ${MobileLargeLayoutWidth};
    `};
  
    ${media.lessThan('mobileMedium')`
      width: ${MobileLayoutWidth};
    `};
  
    margin: 0 auto;
`;

const NavbarSubContainer = styled.div`
    display: flex;
    text-align: center;
`;

const Title = styled.p`
  font-size: 3em;
`;

export default () => (
  <NavbarContainer>
    <NavbarSubContainer>
      <Title> Tendoledu </Title>
    </NavbarSubContainer>
  </NavbarContainer>
);
