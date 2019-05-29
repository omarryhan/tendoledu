import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  HEADER_HEIGHT,
  FONT_SIZES,
  COLOR_PALETTE,
} from '../constants';
import { Text } from './SignUpButtonDiv';


const HeaderContainer = styled.header`
  height: ${HEADER_HEIGHT}px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleContainer = styled.div`
`;

const NavMenuContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1vh;
`;

const NavMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 1vw;

  ${FONT_SIZES.lg}

`;

const Title = styled.h2`
  ${FONT_SIZES.xxxl}
  margin: 15px 0;
  color: white;
`;

const NavMenuAnchor = styled.a`
  text-decoration: none;
  color: white;
  // font-weight: bold;
  ${FONT_SIZES.md}

  &:hover {
    color: ${COLOR_PALETTE.white.dark()};;
  }
`;

const Header = ({ navLinks, setIsModalVisible }) => (
  <HeaderContainer>
    <AppBar
      // color="secondary"
      style={{
        height: `${HEADER_HEIGHT}px`,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: COLOR_PALETTE.black.primary(),
      }}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <TitleContainer>
          <Title> Tendoledu </Title>
        </TitleContainer>
        <NavMenuContainer>
          {navLinks.map(item => (
            <NavMenuItem key={item.value}>
              <NavMenuAnchor href={item.href}>
                {item.value}
              </NavMenuAnchor>
            </NavMenuItem>
          ))}

          {
            setIsModalVisible
              ? (
                <NavMenuItem key="Sign Up button">
                  <Button
                    style={{ color: 'black' }}
                    variant="contained"
                    color="primary"
                    onClick={() => setIsModalVisible(true)}
                    size="medium"
                  >
                    <Text>
                      Sign Up
                    </Text>
                  </Button>
                </NavMenuItem>
              )
            : null
          }
        </NavMenuContainer>
      </Toolbar>
    </AppBar>
  </HeaderContainer>
);

Header.defaultProps = {
  navLinks: [],
  setIsModalVisible: null,
};

Header.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  setIsModalVisible: PropTypes.func,
};

export default Header;
