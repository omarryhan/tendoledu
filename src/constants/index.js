import { generateMedia } from 'styled-media-query';
import { transitions, positions } from 'react-alert';


export const TYPOGRAPHY = Object.freeze({
    useNextVariants: true,
    suppressDeprecationWarnings: true,
});

export const COLOR_PALETTE = Object.freeze({
    red: {
        primary: '#FF5252',
    },
    cyan: {
        primary: '#1DE9B6',
    },
    black: {
        primary: '#000000',
    },
    white: {
        primary: '#fff',
    },
});

export const SCHOOLS_THEME = Object.freeze({
    palette: {
        primary: { main: COLOR_PALETTE.cyan.primary, contrastText: COLOR_PALETTE.black.primary },
        secondary: { main: COLOR_PALETTE.red.primary, contrastText: COLOR_PALETTE.white.primary },
    },
    status: {
        danger: 'orange',
    },
    typography: TYPOGRAPHY,
});

export const STUDENTS_THEME = Object.freeze({
    palette: {
        primary: { main: COLOR_PALETTE.cyan.primary, contrastText: COLOR_PALETTE.black.primary },
        secondary: { main: COLOR_PALETTE.red.primary, contrastText: COLOR_PALETTE.white.primary },
    },
    status: {
        danger: 'orange',
    },
    typography: TYPOGRAPHY,
});

export const STARTUPS_THEME = Object.freeze({
    palette: {
        primary: { main: COLOR_PALETTE.cyan.primary, contrastText: COLOR_PALETTE.black.primary },
        secondary: { main: COLOR_PALETTE.red.primary, contrastText: COLOR_PALETTE.white.primary },
    },
    status: {
        danger: 'orange',
    },
    typography: TYPOGRAPHY,
});

export const NOT_FOUND_THEME = Object.freeze({
    palette: {
        primary: { main: COLOR_PALETTE.cyan.primary, contrastText: COLOR_PALETTE.black.primary },
        secondary: { main: COLOR_PALETTE.red.primary, contrastText: COLOR_PALETTE.white.primary },
    },
    typography: TYPOGRAPHY,
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
