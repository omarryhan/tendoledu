import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
    HEADER_HEIGHT,
  } from '../constants';


const HeaderContainer = styled.header`
  height: ${HEADER_HEIGHT};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2em;
`;

export default () => (
  <HeaderContainer>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Title> Tendoledu </Title>
      </Toolbar>
    </AppBar>
  </HeaderContainer>
);
