import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { NOT_FOUND_THEME } from '../constants';


const muiTheme = createMuiTheme(NOT_FOUND_THEME, 'notFoundTheme');

const NotFoundPage = () => (
  <ThemeProvider theme={muiTheme}>
    <Layout currentPage="404">
      <SEO title="404: Not found" description="A page that was not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  </ThemeProvider>
);

export default NotFoundPage;
