import React from 'react';
import styled from 'styled-components';
import {
    HEADER_HEIGHT,
  } from '../constants';


const NavbarContainer = styled.header`
  height: ${HEADER_HEIGHT};
  padding: 20px;
  text-align: center;
`;

const Title = styled.p`
  font-size: 2em;
`;

export default () => (
  <NavbarContainer>
    <Title> Tendoledu </Title>
  </NavbarContainer>
);
