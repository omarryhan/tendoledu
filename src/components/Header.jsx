import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/styles';
import {
  HEADER_HEIGHT,
  FONT_SIZES,
  media,
} from '../constants';
import { Text } from './SignUpButtonDiv';


const HeaderContainer = styled.header`
  height: ${HEADER_HEIGHT}px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavMenuContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 5px;

  ${media.lessThan('tablet')`
    display: none;
  `};
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
  color: ${props => props.color};
`;

const NavMenuAnchor = styled.a`
  text-decoration: none;
  color: ${props => props.color};
  ${FONT_SIZES.md}

  &:hover {
    color: ${props => props.hoverColor};
  }
`;

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = ({ navLinks, setIsModalVisible }) => {
  const theme = useTheme();
  return (
    <HeaderContainer>
      <AppBar
        // color="secondary"
        style={{
          height: `${HEADER_HEIGHT}px`,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: theme.palette.black.lighter,
        }}
      >
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <a href="#" value="Home Page" style={{ textDecoration: 'none' }}>
            <Title color={theme.palette.white.main}> Tendoledu </Title>
          </a>
          <NavMenuContainer>
            {navLinks.map(item => (
              <NavMenuItem key={item.value}>
                <NavMenuAnchor
                  href={item.href}
                  title={item.title}
                  color={theme.palette.white.main}
                  hoverColor={theme.palette.white.dark}
                >
                  {item.value}
                </NavMenuAnchor>
              </NavMenuItem>
            ))}

            {
              setIsModalVisible
                ? (
                  <NavMenuItem key="Sign Up button">
                    <Button
                      style={{ color: theme.palette.black.main }}
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
};

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
