import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

import SEO from '../components/SEO';


// Redirects are mainly being handled by
// Netlify through by 302 responses.
// In case that failed, we do an app-level redirect
export default () => {
  useEffect(() => {
    navigate('/students/');
  }, []);
  return (
    <SEO
      title="Home"
      description="Get Recognition For Learning Online"
    />
  );
};
