import React from 'react';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Layout from '../components/Layout';
import { STUDENTS_THEME } from '../constants';
import SEO from '../components/SEO';


const muiTheme = createMuiTheme(STUDENTS_THEME, 'studentsTheme');

export default () => (
  <ThemeProvider theme={muiTheme}>
    <Layout currentPage="students">
      <SEO
        title="Studetns"
        description="Learn"
      />
      <h1> Under Construction! </h1>
    </Layout>
  </ThemeProvider>
);
