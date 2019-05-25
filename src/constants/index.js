import { generateMedia } from 'styled-media-query';
import { transitions, positions } from 'react-alert';


const TYPOGRAPY_THEME = Object.freeze({
    fontFamily: [
        'Raleway',
        'Montserrat',
        'medium-content-sans-serif-font',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Open Sans',
        'Helvetica Neue',
    ].join(','),
});

export const SCHOOLS_THEME = Object.freeze({
    palette: {
        primary: { main: '#1DE9B6', contrastText: '#000000' },
        secondary: { main: '#FF5252', contrastText: '#000000' },
    },
    status: {
        danger: 'orange',
    },
    typography: TYPOGRAPY_THEME,
});

export const STUDENTS_THEME = Object.freeze({
    palette: {
        primary: { main: '#1DE9B6', contrastText: '#000000' },
        secondary: { main: '#FF5252', contrastText: '#000000' },
    },
    status: {
        danger: 'orange',
    },
    typography: TYPOGRAPY_THEME,
});

export const STARTUPS_THEME = Object.freeze({
    palette: {
        primary: { main: '#1DE9B6', contrastText: '#000000' },
        secondary: { main: '#FF5252', contrastText: '#000000' },
    },
    status: {
        danger: 'orange',
    },
    typography: TYPOGRAPY_THEME,
});

export const NOT_FOUND_THEME = Object.freeze({
    palette: {
        primary: { main: '#1DE9B6', contrastText: '#000000' },
        secondary: { main: '#FF5252', contrastText: '#000000' },
    },
});

export const FOOTER_HEIGHT = 10; // vh
export const HEADER_HEIGHT = 7; // vh

export const LaptopLayoutWidth = '65vw';
export const TabletLayoutWidth = '75vw';
export const MobileLargeLayoutWidth = '95vw';
export const MobileLayoutWidth = '95vw';

export const BREAKPOINTS = Object.freeze({
    mobileSmall: '20em',
    mobileMedium: '23.438em',
    mobileLarge: '25.875em',
    tablet: '48em',
    laptop: '68.75em',
    laptopLarge: '90em',
    desktop: '160em',
});

export const media = generateMedia(BREAKPOINTS);

export const alertSettings = {
    position: positions.TOP_RIGHT,
    timeout: 5000,
    transition: transitions.SCALE,
};

export const RECAPTCHA_PUBLIC_KEY = '6LcOB6UUAAAAAGFpmRUeUHX66ybYyoPn-au8xyMi';
export const SIGNUP_ROUTE = 'https://api.tendoledu.com/signup/';
