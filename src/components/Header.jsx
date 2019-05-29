import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  HEADER_HEIGHT,
  FONT_SIZES,
  media,
} from '../constants';


const HeaderContainer = styled.header`
  height: ${HEADER_HEIGHT};
  text-align: center;
`;

const TitleContainer = styled.div`
`;

const NavMenuContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 30%;

  ${media.lessThan('laptop')`
    width: 70%;
  `};

  ${media.lessThan('tablet')`
    width: 80%;
  `};

  ${media.lessThan('mobileMedium')`
    width: 90%;
  `};
`;

const NavMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 1vw;
`;

const Title = styled.h2`
  ${FONT_SIZES.xl}
`;

const Header = ({ navLinks }) => (
  <HeaderContainer>
    <AppBar position="static" color="secondary">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TitleContainer>
          <Title> Tendoledu </Title>
        </TitleContainer>
        <NavMenuContainer>
          {navLinks.map(item => (
            <NavMenuItem key={item.value}>
              <a href={item.href} style={{ textDecoration: 'none', color: 'white' }}>
                {item.value}
              </a>
            </NavMenuItem>
          ))}
        </NavMenuContainer>
      </Toolbar>
    </AppBar>
  </HeaderContainer>
);

Header.defaultProps = {
  navLinks: [],
};

Header.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
};

export default Header;
