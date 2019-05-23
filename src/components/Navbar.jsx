import React from 'react';
import styled from 'styled-components';
import {
    media,
    LaptopLayoutWidth,
    TabletLayoutWidth,
    MobileLargeLayoutWidth,
    MobileLayoutWidth,
  } from '../constants';


const NavbarContainer = styled.header`
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
    width: 25%;
    text-align: center;
`;

const IndexOl = styled.ol`

`;

const IndexLi = styled.li`

`;

const IndexP = styled.p`

`;

const Title = styled.h2`

`;

export default () => (
  <NavbarContainer>
    <NavbarSubContainer>
      <Title> Tendoledu </Title>
    </NavbarSubContainer>

    <NavbarSubContainer>
      <IndexOl>
        <IndexLi>
          <IndexP> How It Works </IndexP>
        </IndexLi>
        <IndexLi>
          <IndexP> Value </IndexP>
        </IndexLi>
      </IndexOl>
    </NavbarSubContainer>
  </NavbarContainer>
);
