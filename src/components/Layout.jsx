/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import GlobalStyle from './Global';
import Navbar from './Navbar';
import Footer from './Footer';
import { FOOTER_HEIGHT, alertSettings } from '../constants';

const BodyLayout = styled.div`
  min-height: ${(100 - FOOTER_HEIGHT).toString()}vh;
`;

const Main = styled.main`

`;

const Layout = ({ children, theme }) => (
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
      <AlertProvider template={AlertTemplate} {...alertSettings}>
        <GlobalStyle theme={theme} />
        <BodyLayout theme={theme}>
          <Navbar siteTitle={data.site.siteMetadata.title} theme={theme} />
          <Main>{children}</Main>
        </BodyLayout>
        <Footer theme={theme} />
      </AlertProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.shape({
    color: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    scrollbarHandleColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default Layout;
