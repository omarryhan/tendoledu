import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { NOT_FOUND_THEME } from '../constants';

const NotFoundPage = () => (
  <Layout theme={NOT_FOUND_THEME} currentPage="404">
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
