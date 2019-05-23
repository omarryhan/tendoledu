import { generateMedia } from 'styled-media-query';
import { transitions, positions } from 'react-alert';


export const COLOR_PALETTE = Object.freeze({
    blue: {
        lightAlt: 'rgb(97, 184, 196)',
        lightAlt2: 'rgb(2, 137, 140)',
        light: '#005E7C',
        primary: '#001242',
        dark: '#000022',
    },
    green: {
        primary: '#00FEB6',
    },
    black: {
        primary: 'rgb(28, 27, 32)',
    },
    white: {
        primary: '#fff',
    },
    fuschia: {
        primary: 'rgb(235, 71, 126)',
    },
    orange: {
        primary: '#FB9800',
    },
});

export const SCHOOLS_THEME = Object.freeze({
    color: COLOR_PALETTE.black.primary,
    backgroundColor: COLOR_PALETTE.white.primary,
    scrollbarHandleColor: COLOR_PALETTE.blue.primary,
    primaryColor: COLOR_PALETTE.blue.primary,
    secondaryColor: COLOR_PALETTE.green.primary,
});

export const STUDENTS_THEME = Object.freeze({
    color: COLOR_PALETTE.black.primary,
    backgroundColor: COLOR_PALETTE.white.primary,
    scrollbarHandleColor: COLOR_PALETTE.blue.primary,
});

export const EMPLOYERS_THEME = Object.freeze({
    color: COLOR_PALETTE.black.primary,
    backgroundColor: COLOR_PALETTE.white.primary,
    scrollbarHandleColor: COLOR_PALETTE.blue.primary,
});

export const NOT_FOUND_THEME = Object.freeze({
    color: COLOR_PALETTE.black.primary,
    backgroundColor: COLOR_PALETTE.white.primary,
    scrollbarHandleColor: COLOR_PALETTE.blue.primary,
});

export const FONT_SIZES = Object.freeze({

});

export const FOOTER_HEIGHT = 10; // vh

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
    offset: '30px',
    transition: transitions.SCALE,
};

export const RECAPTCHA_PUBLIC_KEY = '6LcOB6UUAAAAAGFpmRUeUHX66ybYyoPn-au8xyMi';
