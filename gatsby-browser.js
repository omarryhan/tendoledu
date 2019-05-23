// https://github.com/timhagn/gatsby-background-image/tree/master/packages/gatsby-background-image#important
export const onClientEntry = () => {
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === 'undefined') {
      import('intersection-observer');
    }
  };
