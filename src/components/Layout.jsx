import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import CssBaseline from '@material-ui/core/CssBaseline';

import GlobalStyle from './Global';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  media,
  LaptopLayoutWidth,
  TabletLayoutWidth,
  MobileLargeLayoutWidth,
  MobileLayoutWidth,
  HEADER_HEIGHT,
  FOOTER_HEIGHT,
  alertSettings,
} from '../constants';


const BodyLayout = styled.div`
  min-height: ${(100 - FOOTER_HEIGHT - HEADER_HEIGHT).toString()}vh;

  ${media.lessThan('laptop')`
    width: ${TabletLayoutWidth};
  `};

  ${media.lessThan('tablet')`
    width: ${MobileLargeLayoutWidth};
  `};

  ${media.lessThan('mobileMedium')`
    width: ${MobileLayoutWidth};
  `};

  width: ${LaptopLayoutWidth};

  margin: 0 auto;
`;

const Main = styled.main`

`;

const Layout = ({ children }) => (
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
          <Navbar siteTitle={data.site.siteMetadata.title} />
          <BodyLayout>
            <Main>{children}</Main>
          </BodyLayout>
          <Footer />
        </AlertProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
