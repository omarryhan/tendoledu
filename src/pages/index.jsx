import { useEffect } from 'react';
import { navigate } from 'gatsby';

// Redirects are mainly being handled by
// Netlify through by 302 responses.
// In case that failed, we do an app-level redirect
export default () => {
  useEffect(() => {
    navigate('/schools/');
  }, []);
  return null;
};
