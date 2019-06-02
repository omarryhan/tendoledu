module.exports = {
  siteMetadata: {
    title: 'Tendoledu',
    description: 'Get Recognition For Learning Online',
    author: 'Tendoledu',
    twitter: 'tendoledu',
    siteUrl: 'https://tendoledu.com',
    logoFullUrl: 'https://tendoledu.com/imgs/logo.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        // 404 page is automatically excluded
        exclude: ['/students*', '/page-2*', '/copy-of-sign-in*'],
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://tendoledu.com',
        sitemap: 'https://tendoledu.com/tendoledu.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-140729419-1',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Tendoledu',
        short_name: 'Tendoledu',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#4B73E5',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: [
            'Ubuntu',
            'Raleway',
            'Montserrat',
          ],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-offline/#remove
    'gatsby-plugin-offline',
  ],
};
