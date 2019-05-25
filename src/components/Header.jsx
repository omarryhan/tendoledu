import React from 'react';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  HEADER_HEIGHT,
  media,
} from '../constants';


const HeaderContainer = styled.header`
  height: ${HEADER_HEIGHT};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5em;

  ${media.lessThan('laptop')`
    font-size: 1.35em;
  `};

  ${media.lessThan('tablet')`
    font-size: 1.25em;
  `};

  ${media.lessThan('mobileMedium')`
    font-size: 1.15em;
  `};
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
