import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalStyle from './Global';
import Header from './Header';
import Footer from './Footer';
import {
  HEADER_HEIGHT,
  FOOTER_HEIGHT,
  alertSettings,
} from '../constants';


const BodyLayout = styled.div`
  min-height: ${100 - HEADER_HEIGHT - FOOTER_HEIGHT}vh;
`;

const Main = styled.main`

`;

const Layout = ({ children, navLinks, setIsModalVisible }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <CssBaseline />
        <AlertProvider template={AlertTemplate} {...alertSettings}>
          <GlobalStyle />
          <Header
            navLinks={navLinks}
            siteTitle={data.site.siteMetadata.title}
            setIsModalVisible={setIsModalVisible}
          />
          <BodyLayout>
            <Main>{children}</Main>
          </BodyLayout>
          <Footer />
        </AlertProvider>
      </>
    )}
  />
);

Layout.defaultProps = {
  navLinks: [],
  setIsModalVisible: null,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })),
  setIsModalVisible: PropTypes.func,
};

export default Layout;
