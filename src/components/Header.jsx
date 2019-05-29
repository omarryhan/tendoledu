import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {
  HEADER_HEIGHT,
  FONT_SIZES,
} from '../constants';
import { Text } from './SignUpButtonDiv';


const HeaderContainer = styled.header`
  height: ${HEADER_HEIGHT}vh;
  text-align: center;
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

  font-style: bold;
  ${FONT_SIZES.lg}

`;

const Title = styled.h2`
  ${FONT_SIZES.xxxl}
  margin: 15px 0;
`;

const Header = ({ navLinks, setIsModalVisible }) => (
  <HeaderContainer>
    <AppBar color="secondary">
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
