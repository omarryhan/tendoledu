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
  font-size: 2em;
  color:black;
  font-weight:bold;

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

const NavMenus = styled.ul`
  text-align:center;
  width:100%;
  position:relative;
  ${media.lessThan('687px')`
    display:none;
  `};
`;

const NavContainer = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  ${media.lessThan('1152px')`
    width:100%;
    margin-left:60px;
`};
`;

const NavMenuItem = styled.li`
  list-style-type:none;
  float:left;
  font-size:1.3em;
  margin-right:30px;
`;

const NavItemLink = styled.a`

text-decoration:none;
color:black;
 &:hover {
   color:#56EEC8;
   text-decoration:none;
 }
`;

export default () => (
  <HeaderContainer>
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Title> Tendoledu </Title>
        <NavMenus>
          <NavContainer>
            <NavMenuItem>
              <NavItemLink href="#">Intro</NavItemLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavItemLink href="#HowItWorks">How It Works</NavItemLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavItemLink href="#YourGain">Student Benefits</NavItemLink>
            </NavMenuItem>

            <NavMenuItem>
              <NavItemLink href="#TheTeam">The Team</NavItemLink>
            </NavMenuItem>
          </NavContainer>

        </NavMenus>
      </Toolbar>
    </AppBar>
  </HeaderContainer>
);
